using System.Text.Json;
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
        
        public class PointInfo
        {
            public int Index { get; set; }
            public double Row { get; set; }
            public double Column { get; set; }
        }

        [STAThread]
        static void Main()
        {
            Application.ApplicationExit += OnApplicationExit;
            
            // Start a new form to visualize results
            ApplicationConfiguration.Initialize();

            Form1 form1 = new();

            form1.Load += Form1_Load;

            Application.Run(form1);
        }
        
        private static void OnApplicationExit(object sender, EventArgs e)
        {
            CloseFramegrabber();
        }

        private static void CloseFramegrabber()
        {
            if (AcqHandle != null)
            {
                HOperatorSet.CloseFramegrabber(AcqHandle);
                AcqHandle = null;
            }
        }
        
        private static async void Form1_Load(object sender, EventArgs e)
        {
            Form1 form1 = (Form1)sender;
            MainWindow = form1.window;

            _mqttClient = new MQTT();
    
            var HalconInstance = await InitializeHalcon(MainWindow);
    
            ModelID = HalconInstance.Item1;
            AcqHandle = HalconInstance.Item2;

            //await CaptureAndProcessMultipleImages(MainWindow, ModelID, AcqHandle);
        }

        
        private static string ConvertImageToBase64(HObject image)
        {
            HObject resizedImage;
            HOperatorSet.ZoomImageSize(image, out resizedImage, 687, 459, "constant");
            
            HOperatorSet.WriteImage(resizedImage, "jpeg", 0, "temp_image_resized.jpg");
            byte[] imageBytes = File.ReadAllBytes("temp_image_resized.jpg");
            return Convert.ToBase64String(imageBytes);
        }

        private static async Task<Tuple<HTuple?, HTuple?>> InitializeHalcon(HWindow? _window)

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
<<<<<<< Updated upstream
            HTuple imagePath = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\image_0027.png";
            HOperatorSet.ReadImage(out Image, imagePath);
            
=======
            HTuple imageDir = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\image_0027.png";
            HOperatorSet.ReadImage(out Image, imageDir);
>>>>>>> Stashed changes
            
            // Matching 01: Build the ROI from basic regions
            HOperatorSet.GenCircle(out HObject ModelRegion, 756.967, 491.705, 41.7504);

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
        
        private static void CombineMeasurements()
        {
            if (measurementResults.Count == 0)
                return;

            var combinedMeasurements = new Dictionary<string, string>();
            for (int i = 0; i < measurementResults.Count; i++)
            {
                var parts = measurementResults[i].Split(':');
                combinedMeasurements[$"Hole_{i + 1}"] = parts[1].Trim();
            }

            measurementResults.Clear();
            measurementResults.Add(JsonSerializer.Serialize(combinedMeasurements));
        }
        
        public static async Task CaptureAndProcessMultipleImages(HWindow? window, HTuple? ModelID, HTuple? AcqHandle)
        {
            // Capture the first image and process it
            await GrabAndProcessImage(window, ModelID, AcqHandle, false);

            // Move the cobot to the next position
            await MoveCobotAsync(150); // Adjust the move distance based on your setup
            await Task.Delay(2000); // Wait for the cobot to reach the position

            // Capture the second image and process it
            await GrabAndProcessImage(window, ModelID, AcqHandle, true);

            // Combine the measurements from both images
            CombineMeasurements();

            // Send the combined measurement results with MQTT
            string payload = measurementResults[0];
            measurementResults.Clear();
            await _mqttClient.PublishAsync("RTS/vision/measurements", payload);
        }

        private static async Task MoveCobotAsync(double distance)
        {
            string moveCommand = $"MOVE {distance}";
            await _mqttClient.PublishAsync("RTS/cobot/move", moveCommand);
            await Task.Delay(2000);
        }

        public static async Task GrabAndProcessImage(HWindow? window, HTuple? ModelID, HTuple? AcqHandle, bool isSecondImage)
        {
            window.ClearWindow();
            window.FlushBuffer();
            
            HOperatorSet.GrabImage(out HObject Image, AcqHandle);
            
            //DEBUG
            //HOperatorSet.ReadImage(out Image, "C:/Users/lucas/Projects/PM-Linear-Rail-Test-Station/Halcon/Programs/DetectCirclesImage/Images/image_0039.png");
            //DEBUG
            
            Image.DispObj(window);

            // Matching 01: Find the model
            HTuple MatchResultID;
            HTuple NumMatchResult;
            
            HOperatorSet.FindGenericShapeModel(Image, ModelID, out MatchResultID, out NumMatchResult);
            
            if (NumMatchResult.Length == 0 || NumMatchResult.I == 0)
            {
                Console.WriteLine("No matches found.");
                return;
            }

            List<PointInfo> points = new List<PointInfo>();
            for (int i = 0; i < NumMatchResult; i++)
            {
                HTuple row, column;
                HOperatorSet.GetGenericShapeModelResult(MatchResultID, i, "row", out row);
                HOperatorSet.GetGenericShapeModelResult(MatchResultID, i, "column", out column);
                points.Add(new PointInfo { Index = i, Row = row.D, Column = column.D });
            }

            // Sort the points based on their row (Y) coordinates
            points.Sort((p1, p2) => p1.Row.CompareTo(p2.Row));

            HTuple Rows = NumMatchResult;
            HTuple Cols = NumMatchResult;
            HTuple CircleConnectionsMatrixID;

            HOperatorSet.CreateMatrix(Rows, Cols, 0, out CircleConnectionsMatrixID);
            const double DistanceThreshold = 60; //MAKE THIS DYNAMIC FOR RAIL LENGTH

            for (int I = 0; I < NumMatchResult.D; I++)
            {
                for (int J = I + 1; J < NumMatchResult.D; J++) // Start from I + 1 to avoid duplicate pairs
                {
                    // Calculate real center of the circles
                    HTuple row1 = points[I].Row;
                    HTuple column1 = points[I].Column;
                    HTuple row2 = points[J].Row;
                    HTuple column2 = points[J].Column;

                    // Convert the results to world coordinates (if necessary)
                    HTuple x1, y1, x2, y2;
                    HOperatorSet.ImagePointsToWorldPlane(CameraParam, Pose, row1, column1, "mm", out x1, out y1);
                    HOperatorSet.ImagePointsToWorldPlane(CameraParam, Pose, row2, column2, "mm", out x2, out y2);

                    // Calculate the distance between the current and other circles
                    HTuple distance;
                    HOperatorSet.DistancePp(x1, y1, x2, y2, out distance);

                    // Check if the distance is below the threshold
                    if (distance < DistanceThreshold)
                    {
                        // Insert the distance into the matrix at the appropriate indices
                        HOperatorSet.SetValueMatrix(CircleConnectionsMatrixID, I, J, distance);
                    }
                }
            }
            
            int testCounter = 0;
            // Draw lines between circles based on the matrix
            for (int I = 0; I < Rows.D; I++)
            {
                for (int J = I + 1; J < Cols.D; J++) // Start from I + 1 to avoid duplicate pairs
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

                        HOperatorSet.GetGenericShapeModelResultObject(out MatchContour1, MatchResultID, points[I].Index, "contours");
                        HOperatorSet.GetGenericShapeModelResultObject(out MatchContour2, MatchResultID, points[J].Index, "contours");

                        HOperatorSet.AreaCenterPointsXld(MatchContour1, out Area, out Row1, out Col1);
                        HOperatorSet.AreaCenterPointsXld(MatchContour2, out Area, out Row2, out Col2);

                        // Draw a line between the connected circles
                        window.SetColor("pink");
                        window.DispLine(Row1, Col1, Row2, Col2);
                        
                        Random rnd = new Random();

                        // Draw a dot at the start and end of the line
                        window.SetColor("green");
                        window.DispCross(Row1, Col1, 6.0, 0.0);
                        window.DispCross(Row2, Col2, 6.0, 0.0);
                        //window.DispText("Point " + testCounter, "image", Row1.D, Col1.D, "red", new HTuple(), new HTuple());
                        window.DispText("Point " + testCounter, "image", rnd.Next((int)Row1.D - 50, (int)Row1.D + 50) , rnd.Next((int)Col1.D - 50, (int)Col1.D + 50), "red", new HTuple(), new HTuple());

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
            HOperatorSet.DumpWindowImage(out Image, window);
            string base64Image = ConvertImageToBase64(Image);
            await _mqttClient!.PublishAsync("RTS/vision/image", base64Image);
            window.FlushBuffer();
        }

    }
}