using HalconDotNet;

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
 
        [STAThread]
        static void Main()
        {
            // Start a new form to visualize results
            ApplicationConfiguration.Initialize();

            Form1 form1 = new Form1();

            form1.Load += Form1_Load;

            Application.Run(form1);
            
        }

        private static void Form1_Load(object sender, EventArgs e)
        {
            // Access the window variable from Form1
            Form1 form1 = (Form1)sender;
            HWindow window = form1.window;

            // Continue your program logic here after the form has loaded

            // Read the calibration data.
            HTuple camPar = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\camera_parameters.cal";
            HTuple posePar = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\pose.dat";

            HOperatorSet.ReadCamPar(camPar, out CameraParam);
            HOperatorSet.ReadPose(posePar, out Pose);

            // Read all images and prepare the alignment.
            HTuple imageDir = Path.GetDirectoryName(Environment.ProcessPath) + @"\Assets\Images";

            HOperatorSet.ListFiles(imageDir, new HTuple("files"), out ImageFiles);
            HObject Image;
            HOperatorSet.ReadImage(out Image, ImageFiles[0]);

            Image.DispObj(window);


            // Matching 01: Build the ROI from basic regions
            HObject ModelRegion;
            HOperatorSet.GenCircle(out ModelRegion, 745.976, 874.343, 75.4925);

            // Matching 01: Reduce the model template
            HObject TemplateImage;
            HOperatorSet.ReduceDomain(Image, ModelRegion, out TemplateImage);

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
            // HWindow WindowHandle = new HWindow();
            // WindowHandle.OpenWindow(0, 0, 1000, 1000, 0, "visible", "", "");
            // WindowHandle.DispObj(Image);
            // WindowHandle.SetColor("green");
            // WindowHandle.SetDraw("margin");
            // WindowHandle.DispObj(ModelRegion);
            // WindowHandle.DispObj(TransContours);
            // WindowHandle.DispText("Press any key to continue", "image", 10, 10, "black", new HTuple(), new HTuple());
            // WindowHandle.HalconWindow.FlushBuffer();
            // Console.ReadKey();
            // WindowHandle.CloseWindow();
            //
            // // Matching 01: END of generated code for model initialization
            // // Matching 01: BEGIN of generated code for model application
            //
            // // Set the search parameters
            // HOperatorSet.SetGenericShapeModelParam(ModelID, "min_score", 0.99);
            // HOperatorSet.SetGenericShapeModelParam(ModelID, "max_overlap", 0);
            // HOperatorSet.SetGenericShapeModelParam(ModelID, "border_shape_models", "false");
            // HOperatorSet.SetGenericShapeModelParam(ModelID, "pyramid_level_robust_tracking", "true");
            //
            // // Loop through all images
            // for (int Index = 0; Index < ImageFiles.Length; Index++)
            // {
            //     HOperatorSet.ReadImage(out Image, ImageFiles[Index]);
            //     WindowHandle.OpenWindow(0, 0, 1000, 1000, 0, "visible", "", "");
            //     WindowHandle.DispObj(Image);
            //
            //     // Matching 01: Find the model
            //     HObject MatchResultID;
            //     HTuple NumMatchResult;
            //     HOperatorSet.FindGenericShapeModel(Image, ModelID, 0, Math.PI, 0.5, 0.5, 0.6, "least_squares", 4,
            //         0.75, out MatchResultID, out NumMatchResult);
            //
            //     // Retrieve results
            //     for (int I = 0; I < NumMatchResult.Length; I++)
            //     {
            //         // Matching 01: Retrieve parameters of the detected match
            //         HTuple Row, Column, Angle, ScaleRow, ScaleColumn, Score;
            //         HHomMat2D HomMat2DResult;
            //         HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "row", out Row);
            //         HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "column", out Column);
            //         HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "angle", out Angle);
            //         HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "scale_row", out ScaleRow);
            //         HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "scale_column", out ScaleColumn);
            //         HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "hom_mat_2d", out HomMat2DResult);
            //         HOperatorSet.GetGenericShapeModelResult(MatchResultID, I, "score", out Score);
            //
            //         // Display the contours of the detected circles
            //         HXLDCont MatchContour;
            //         HOperatorSet.GetGenericShapeModelResultObject(out MatchContour, MatchResultID, I, "contours");
            //         WindowHandle.SetColor("green");
            //         WindowHandle.DispObj(MatchContour);
            //     }
            //
            //     WindowHandle.DispText("Press any key to continue", "image", 10, 10, "black", new HTuple(), new HTuple());
            //     WindowHandle.HalconWindow.FlushBuffer();
            //     Console.ReadKey();
            //     WindowHandle.CloseWindow();
            // }
        }
    }
}