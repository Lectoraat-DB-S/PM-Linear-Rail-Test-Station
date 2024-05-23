using HalconDotNet;
using MQTTnet.Client;

namespace WinFormsHalcon
{
    internal static class Program
    {
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>

        private static HTuple CameraParam;
        private static HTuple Pose;
        private static HTuple ImageFiles;
        private static MQTT _mqttClient;
        
        private static string measurementTopic = "Csharp/mqtt";
        private static List<string> measurementResults = new List<string>();

        [STAThread]
        static void Main()
        {
            // Start a new form to visualize results
            ApplicationConfiguration.Initialize();

            Form1 form1 = new Form1();

            form1.Load += Form1_Load;

            Application.Run(form1);
            
        }

        private static async void Form1_Load(object sender, EventArgs e)
        {
            // Access the window variable from Form1
            Form1 form1 = (Form1)sender;
            HWindow window = form1.window;

            _mqttClient = new MQTT();

            //START OF HALCON CODE

            // Read the calibration data.
            HTuple camPar = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\camera_parameters.cal";
            HTuple posePar = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\pose.dat";

            HOperatorSet.ReadCamPar(camPar, out CameraParam);
            HOperatorSet.ReadPose(posePar, out Pose);

            // Read all images and prepare the alignment.
            HTuple imageDir = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\Images";

            HOperatorSet.ListFiles(imageDir, new HTuple("files"), out ImageFiles);
            HOperatorSet.ReadImage(out HObject Image, ImageFiles[0]);


            // Matching 01: Build the ROI from basic regions
            HOperatorSet.GenCircle(out HObject ModelRegion, 825.221, 755.797, 28.6);

            // Matching 01: Reduce the model template
            HOperatorSet.ReduceDomain(Image, ModelRegion, out HObject TemplateImage);

            // Matching 01: Create and train the shape model
            HTuple ModelID;
            HOperatorSet.CreateGenericShapeModel(out ModelID);
            HOperatorSet.SetGenericShapeModelParam(ModelID, "iso_scale_max", 1.71);
            HOperatorSet.SetGenericShapeModelParam(ModelID, "iso_scale_min", 0.69);
            HOperatorSet.SetGenericShapeModelParam(ModelID, "metric", "use_polarity");
            HOperatorSet.TrainGenericShapeModel(TemplateImage, ModelID);

            // Matching 01: Get the model contour for transforming it later into the image
            HObject ModelContours;
            HOperatorSet.GetShapeModelContours(out ModelContours, ModelID, 1);

            // Matching 01: Support for displaying the model
            // Matching 01: Get the reference position
            HTuple ModelRegionArea;
            HTuple RefRow, RefColumn;
            HOperatorSet.AreaCenter(ModelRegion, out ModelRegionArea, out RefRow, out RefColumn);
            HTuple HomMat2D;
            HOperatorSet.VectorAngleToRigid(0, 0, 0, RefRow, RefColumn, 0, out HomMat2D);
            HObject TransContours;
            HOperatorSet.AffineTransContourXld(ModelContours, out TransContours, HomMat2D);

            // // Matching 01: Display the model contours
            
            Image.DispObj(window);              // WindowHandle.DispObj(Image);
            window.SetColor("green");           // WindowHandle.SetColor("green");
            window.SetDraw("margin");           // WindowHandle.SetDraw("margin");
            ModelRegion.DispObj(window);        // WindowHandle.DispObj(ModelRegion);
            TransContours.DispObj(window);      // WindowHandle.DispObj(TransContours


            // Matching 01: END of generated code for model initialization
            // Matching 01: BEGIN of generated code for model application

            // Set the search parameters
            HOperatorSet.SetGenericShapeModelParam(ModelID, "min_score", 0.99);
            HOperatorSet.SetGenericShapeModelParam(ModelID, "max_overlap", 0);
            HOperatorSet.SetGenericShapeModelParam(ModelID, "border_shape_models", "false");
            HOperatorSet.SetGenericShapeModelParam(ModelID, "pyramid_level_robust_tracking", "true");


            // Loop through all images
            for (int Index = 0; Index < ImageFiles.Length; Index++)
            {
                window.ClearWindow();
                window.FlushBuffer();

                HOperatorSet.ReadImage(out Image, ImageFiles[Index]);
                Image.DispObj(window);

                // Matching 01: Find the model
                HTuple MatchResultID;
                HTuple NumMatchResult;
                
                HOperatorSet.FindGenericShapeModel(Image, ModelID, out MatchResultID, out NumMatchResult);

                // Retrieve results
                for (int I = 0; I < NumMatchResult; I++)
                {
                    // Matching 01: Retrieve parameters of the detected match
                    HTuple Row, Column, Angle, ScaleRow, ScaleColumn, Score;
                    HTuple HomMat2DResult;
                    HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "row", out Row);
                    HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "column", out Column);
                    HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "angle", out Angle);
                    HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "scale_row", out ScaleRow);
                    HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "scale_column", out ScaleColumn);
                    HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "hom_mat_2d", out HomMat2DResult);
                    HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "score", out Score);

                    // Display the contours of the detected circles
                    HObject MatchContour;
                    HOperatorSet.GetGenericShapeModelResultObject(out MatchContour, MatchResultID, I, "contours");
                    window.SetColor("green");
                    window.DispObj(MatchContour);
                }

                window.DispText("Press any key to continue", "image", 10, 10, "black", new HTuple(), new HTuple());
                window.FlushBuffer();
                //Console.ReadKey();

                //PART TWO

                HTuple Rows = NumMatchResult;
                HTuple Cols = NumMatchResult;
                HTuple CircleConnectionsMatrixID;

                HOperatorSet.CreateMatrix(Rows, Cols, 0, out CircleConnectionsMatrixID);
                double DistanceThreshold = 30;          //MAKE THIS DYNAMIC FOR RAIL LENGTH

                for (int I = 0; I < NumMatchResult.D; I++)
                {
                    for (int J = 0; J < NumMatchResult.D; J++)
                    {
                        if (I != J)
                        {
                            // Calculate real center of the circles
                            HObject MatchContour1, MatchContour2;
                            HTuple Area;
                            HTuple Row1, Column1, Row2, Column2;
                            HTuple X1, Y1, X2, Y2;
                            // Assuming you have CameraParam and Pose initialized properly
                            HOperatorSet.GetGenericShapeModelResultObject(out MatchContour1, MatchResultID, I, "contours");
                            HOperatorSet.GetGenericShapeModelResultObject(out MatchContour2, MatchResultID, J, "contours");
                            HOperatorSet.AreaCenterPointsXld(MatchContour1, out Area, out Row1, out Column1);
                            HOperatorSet.AreaCenterPointsXld(MatchContour2, out Area, out Row2, out Column2);

                            // Convert the results to world coordinates
                            HOperatorSet.ImagePointsToWorldPlane(CameraParam, Pose, Row1, Column1, "mm", out X1, out Y1);
                            HOperatorSet.ImagePointsToWorldPlane(CameraParam, Pose, Row2, Column2, "mm", out X2, out Y2);

                            // Calculate the distance between the current and other circles
                            HTuple Distance;
                            HOperatorSet.DistancePp(X1, Y1, X2, Y2, out Distance);

                            // Check if the distance is below the threshold
                            if (Distance < DistanceThreshold)
                            {
                                // Insert the distance into the matrix at the appropriate indices
                                HOperatorSet.SetValueMatrix(CircleConnectionsMatrixID, I, J, Distance);
                            }
                        }
                    }
                }
                
                int testCounter = 0;
                // Draw lines between circles based on the matrix
                for (int I = 0; I < Rows.D; I++)
                {
                    for (int J = 0; J < Cols.D; J++)
                    {
                        HTuple Distance;
                        
                        HOperatorSet.GetValueMatrix(CircleConnectionsMatrixID, I, J, out Distance);

                        if (Distance > 0) // If there's a connection
                        {
                            testCounter++;
                            // Calculate real center of the circles
                            HObject MatchContour1, MatchContour2;
                            HTuple Area;
                            HTuple Row1, Col1, Row2, Col2;

                            HOperatorSet.GetGenericShapeModelResultObject(out MatchContour1, MatchResultID, I, "contours");
                            HOperatorSet.GetGenericShapeModelResultObject(out MatchContour2, MatchResultID, J, "contours");

                            HOperatorSet.AreaCenterPointsXld(MatchContour1, out Area, out Row1, out Col1);
                            HOperatorSet.AreaCenterPointsXld(MatchContour2, out Area, out Row2, out Col2);

                            // Draw a line between the connected circles
                            window.SetColor("pink");
                            window.DispLine(Row1, Col1, Row2, Col2);

                            // Draw a dot at the start and end of the line
                            HTuple Radius = 5;
                            window.SetColor("green");
                            window.DispCross(Row1, Col1, 6.0, 0.0);
                            window.DispCross(Row2, Col2, 6.0, 0.0);
                            window.DispText("Point " + testCounter, "image", Row1.D, Col1.D, "red", new HTuple(), new HTuple());

                            // Calculate the midpoint of the line
                            double MidRow = (Row1.D + Row2.D) / 2;
                            double MidColumn = (Col1.D + Col2.D) / 2;

                            // Display the distance text
                            window.DispText(Distance.ToString(), "image", MidRow, MidColumn, "red", new HTuple(), new HTuple());
                            
                            // Add measured distance to list
                            measurementResults.Add($"{measurementResults.Count + 1}-{measurementResults.Count + 2}: {Distance.D}");
                        }
                    }
                }
                // Send measurement results with mqtt
                string payload = string.Join(", ", measurementResults);
                await _mqttClient.PublishAsync("Csharp/mqtt/measurements", payload);
                window.FlushBuffer();
            }
        }
    }
}