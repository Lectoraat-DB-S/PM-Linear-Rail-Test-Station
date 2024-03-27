import halcon as ha
import numpy as np


ha.open

if __name__ == '__main__':
    ha.dev_update_off ()
    
# Read the calibration data.
CameraParam = ha.read_cam_par ('camera_parameters.cal')
Pose = ha.read_pose ('pose.dat')

# Read all images and prepare the alignment.
ImageFiles = ha.list_image_files ('Images', 'default', [])
Image = ha.read_image (ImageFiles[0])

# Matching 01: Build the ROI from basic regions
ModelRegion = ha.gen_circle (564.04600000, 691.18200000, 20.77970000)

# Matching 01: Reduce the model template
TemplateImage = ha.reduce_domain (Image, ModelRegion)

# Matching 01: Create and train the shape model
ModelID = ha.create_generic_shape_model ()
# Matching 01: set the model parameters
ha.set_generic_shape_model_param (ModelID, 'iso_scale_max', 1.71)
ha.set_generic_shape_model_param (ModelID, 'iso_scale_min', 0.69)
ha.set_generic_shape_model_param (ModelID, 'metric', 'use_polarity')
ha.train_generic_shape_model (TemplateImage, ModelID)

# Matching 01: Get the model contour for transforming it later into the image
ModelContours = ha.get_shape_model_contours (ModelID, 1)

# Matching 01: Support for displaying the model
# Matching 01: Get the reference position
ModelRegionArea, RefRow, RefColumn = ha.area_center (ModelRegion)
HomMat2D = ha.vector_angle_to_rigid (0, 0, 0, RefRow, RefColumn, 0)
TransContours = ha.affine_trans_contour_xld (ModelContours, HomMat2D)

# Matching 01: Display the model contours
ha.dev_display (Image)
ha.dev_set_color ('green')
ha.dev_set_draw ('margin')
ha.dev_display (ModelRegion)
ha.dev_display (TransContours)
ha.stop ()

# Matching 01: END of generated code for model initialization
# Matching 01:  # # # # # # # # # # # # # # # # # # # # # # #
# Matching 01: BEGIN of generated code for model application
# Matching 01: Set the search paramaters
ha.set_generic_shape_model_param (ModelID, 'min_score', 0.99)
ha.set_generic_shape_model_param (ModelID, 'max_overlap', 0)
ha.set_generic_shape_model_param (ModelID, 'border_shape_models', 'false')
ha.set_generic_shape_model_param (ModelID, 'pyramid_level_robust_tracking', 'true')


# Loop through all images
for Index in range(len(ImageFiles)):
    Image = ha.read_image(ImageFiles[Index])
    ha.dev_display(Image)
    # Matching 01: Find the model
    MatchResultID, NumMatchResult = ha.find_generic_shape_model(Image, ModelID)

    # Matching 01: Retrieve results
for I in range(NumMatchResult):
    # Matching 01: Retrieve parameters of the detected match
    Row = ha.get_generic_shape_model_result(MatchResultID, I, 'row')
    Column = ha.get_generic_shape_model_result(MatchResultID, I, 'column')
    Angle = ha.get_generic_shape_model_result(MatchResultID, I, 'angle')
    ScaleRow = ha.get_generic_shape_model_result(MatchResultID, I, 'scale_row')
    ScaleColumn = ha.get_generic_shape_model_result(MatchResultID, I, 'scale_column')
    HomMat2D = ha.get_generic_shape_model_result(MatchResultID, I, 'hom_mat_2d')
    Score = ha.get_generic_shape_model_result(MatchResultID, I, 'score')
    
    # Display the contours of the detected circles
    MatchContour = ha.get_generic_shape_model_result_object(MatchResultID, I, 'contours')
    ha.dev_set_color('green')
    ha.dev_display(MatchContour)


# Initialize variables to store circle connections
Rows = NumMatchResult
Columns = NumMatchResult
CircleConnectionsMatrixID = np.zeros((Rows, Columns))
DistanceThreshold = 30  # Threshold for considering circles as neighbors

# Calculate distances between all pairs of detected circles
for I in range(NumMatchResult):
    for J in range(NumMatchResult):
        if I != J:
            # Calculate real center of the circles
            MatchContour1 = ha.get_generic_shape_model_result_object(MatchResultID, I, 'contours')
            MatchContour2 = ha.get_generic_shape_model_result_object(MatchResultID, J, 'contours')
            
            _, Row1, Column1 = ha.area_center_points_xld(MatchContour1)
            _, Row2, Column2 = ha.area_center_points_xld(MatchContour2)
            
            # Convert the results to world coordinates
            X1, Y1 = ha.image_points_to_world_plane(CameraParam, Pose, Row1, Column1, 'mm')
            X2, Y2 = ha.image_points_to_world_plane(CameraParam, Pose, Row2, Column2, 'mm')
            
            # Calculate the distance between the current and other circles
            Distance = np.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2)
            
            # Check if the distance is below the threshold
            if Distance < DistanceThreshold:
                # Insert the distance into the matrix at the appropriate indices
                CircleConnectionsMatrixID[I, J] = Distance
    
# Draw lines between circles based on the matrix
for I in range(Rows):
    for J in range(Columns):
        Distance = ha.get_value_matrix(CircleConnectionsMatrixID, I, J)
        if Distance != 0:  # If there's a connection
            
            # Calculate real center of the circles
            MatchContour1 = ha.get_generic_shape_model_result_object(MatchResultID, I, 'contours')
            MatchContour2 = ha.get_generic_shape_model_result_object(MatchResultID, J, 'contours')
            
            _, Row1, Column1 = ha.area_center_points_xld(MatchContour1)
            _, Row2, Column2 = ha.area_center_points_xld(MatchContour2)
            
            # Get the handle of the active graphics window
            WindowHandle = ha.get_window()
            
            # Draw a line between the connected circles
            ha.dev_set_color('pink')
            ha.disp_line(WindowHandle, Row1, Column1, Row2, Column2)
            
            # Draw a dot at the start and end of the line
            Radius = 5
            ha.dev_set_color('blue')
            ha.disp_circle(WindowHandle, Row1, Column1, Radius)
            ha.disp_circle(WindowHandle, Row2, Column2, Radius)
            
            # Calculate the midpoint of the line
            MidRow = (Row1 + Row2) / 2
            MidColumn = (Column1 + Column2) / 2
            
            # Display the distance text
            ha.dev_set_color('red')
            ha.dev_disp_text(str(Distance), 'image', MidRow, MidColumn, 'red')


while True:
    ha.stop()

    # Matching 01: Code for alignment of e.g., measurements
    for I in range(NumMatchResult):
        # Matching 01: Retrieve a hom_mat2d for each of the matching results
        # Matching 01: Retrieve the matching results
        HomMat2D = ha.get_generic_shape_model_result(MatchResultID, I, 'hom_mat_2d')
        AlignmentHomMat2D = ha.hom_mat2d_identity()
        AlignmentHomMat2D = ha.hom_mat2d_translate(AlignmentHomMat2D, -RefRow, -RefColumn)
        AlignmentHomMat2D = ha.hom_mat2d_compose(HomMat2D, AlignmentHomMat2D)
        
        # Matching 01: Insert your code using the alignment here, e.g., code generated by
        # Matching 01: the measure assistant with the code generation option
        # Matching 01: 'Alignment Method' set to 'Affine Transformation'.
