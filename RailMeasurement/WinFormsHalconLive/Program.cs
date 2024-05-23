using HalconDotNet;
using MQTTnet.Client;

namespace WinFormsHalcon
{
    internal static class Program
    {
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>

        public static HWindow? MainWindow;
        public static HTuple? ModelID;
        public static HTuple? AcqHandle;
        private static HTuple? CameraParam;
        private static HTuple? Pose;
        private static MQTT? _mqttClient;
        
        private static readonly List<string> measurementResults = new();

        [STAThread]
        static void Main()
        {
            // Start a new form to visualize results
            ApplicationConfiguration.Initialize();

            Form1 form1 = new();

            form1.Load += Form1_Load;

            Application.Run(form1);
            
        }
        
        private static async void Form1_Load(object sender, EventArgs e)
        {
            Form1 form1 = (Form1)sender;
            MainWindow = form1.window;

            _mqttClient = new MQTT();
            
            var HalconInstance = InitializeHalcon(MainWindow);
            
            ModelID = HalconInstance.Item1;
            AcqHandle = HalconInstance.Item2;

            await GrabAndProcessImage(MainWindow, ModelID, AcqHandle);
            //_mqttClient.SubscribeAsync("RTS/vision/picture");
        }
        
        private static string ConvertImageToBase64(HObject image)
        {
            HObject resizedImage;
            HOperatorSet.ZoomImageSize(image, out resizedImage, 687, 459, "constant");
            
            HOperatorSet.WriteImage(resizedImage, "jpeg", 0, "temp_image_resized.jpg");
            byte[] imageBytes = File.ReadAllBytes("temp_image_resized.jpg");
            return Convert.ToBase64String(imageBytes);
        }

        private static Tuple<HTuple?, HTuple?> InitializeHalcon(HWindow? _window)
        {
            // Read the calibration data.
            HTuple camPar = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\camera_parameters.cal";
            HTuple posePar = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\pose.dat";

            HOperatorSet.ReadCamPar(camPar, out CameraParam);
            HOperatorSet.ReadPose(posePar, out Pose);
            
            // Initialize the frame grabber for live image acquisition
            HTuple AcqHandle;
            HOperatorSet.OpenFramegrabber("USB3Vision", 1, 1, 0, 0, 0, 0, "progressive", -1, "default", -1, "false", "default", "2BA200004153_DahengImaging_MER2200019U3M", 0, -1, out AcqHandle);
            
            HObject Image;
            HOperatorSet.ReadImage(out Image, "C:/Users/lucas/Projects/PM-Linear-Rail-Test-Station/Halcon/Programs/DetectCirclesLive/image_0027.png");
            
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
            
            // Matching 01: Get the reference position
            HTuple ModelRegionArea;
            HTuple RefRow, RefColumn;
            HOperatorSet.AreaCenter(ModelRegion, out ModelRegionArea, out RefRow, out RefColumn);
            HTuple HomMat2D;
            HOperatorSet.VectorAngleToRigid(0, 0, 0, RefRow, RefColumn, 0, out HomMat2D);
            HObject TransContours;
            HOperatorSet.AffineTransContourXld(ModelContours, out TransContours, HomMat2D);

            // // Matching 01: Display the model contours
            
            Image.DispObj(_window);              // WindowHandle.DispObj(Image);
            _window.SetColor("green");           // WindowHandle.SetColor("green");
            _window.SetDraw("margin");           // WindowHandle.SetDraw("margin");
            ModelRegion.DispObj(_window);        // WindowHandle.DispObj(ModelRegion);
            TransContours.DispObj(_window);      // WindowHandle.DispObj(TransContours

            // Set the search parameters
            HOperatorSet.SetGenericShapeModelParam(ModelID, "min_score", 0.99);
            HOperatorSet.SetGenericShapeModelParam(ModelID, "max_overlap", 0);
            HOperatorSet.SetGenericShapeModelParam(ModelID, "border_shape_models", "false");
            HOperatorSet.SetGenericShapeModelParam(ModelID, "pyramid_level_robust_tracking", "true");

            return new Tuple<HTuple?, HTuple?>(ModelID, AcqHandle);
        }

        public static async Task GrabAndProcessImage(HWindow? window, HTuple? ModelID, HTuple? AcqHandle)
        {
            window.ClearWindow();
            window.FlushBuffer();
            
            HOperatorSet.GrabImage(out HObject Image, AcqHandle);
            
            Image.DispObj(window);
            // Convert the image to Base64 and send it
            string base64Image = ConvertImageToBase64(Image);
            await _mqttClient.PublishAsync("RTS/vision/image", base64Image);

            // Matching 01: Find the model
            HTuple MatchResultID;
            HTuple NumMatchResult;
            
            HOperatorSet.FindGenericShapeModel(Image, ModelID, out MatchResultID, out NumMatchResult);
            
            if (NumMatchResult.Length == 0 || NumMatchResult.I == 0)
            {
                Console.WriteLine("No matches found.");
                return;
            }

            
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
            await _mqttClient.PublishAsync("RTS/vision/measurements", payload);
            window.FlushBuffer();
        }
    }
}