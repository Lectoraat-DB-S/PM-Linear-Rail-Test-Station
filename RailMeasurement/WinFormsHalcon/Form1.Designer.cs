namespace WinFormsHalcon
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            hSmartWindowControl1 = new HalconDotNet.HSmartWindowControl();
            SuspendLayout();
            // 
            // hSmartWindowControl1
            // 
            hSmartWindowControl1.AutoSizeMode = AutoSizeMode.GrowAndShrink;
            hSmartWindowControl1.AutoValidate = AutoValidate.EnableAllowFocusChange;
            hSmartWindowControl1.Dock = DockStyle.Fill;
            hSmartWindowControl1.HDoubleClickToFitContent = true;
            hSmartWindowControl1.HDrawingObjectsModifier = HalconDotNet.HSmartWindowControl.DrawingObjectsModifier.None;
            hSmartWindowControl1.HImagePart = new Rectangle(-541, -210, 1722, 898);
            hSmartWindowControl1.HKeepAspectRatio = true;
            hSmartWindowControl1.HMoveContent = true;
            hSmartWindowControl1.HZoomContent = HalconDotNet.HSmartWindowControl.ZoomContent.WheelForwardZoomsIn;
            hSmartWindowControl1.Location = new Point(0, 0);
            hSmartWindowControl1.Margin = new Padding(0);
            hSmartWindowControl1.Name = "hSmartWindowControl1";
            hSmartWindowControl1.Size = new Size(1384, 961);
            hSmartWindowControl1.TabIndex = 0;
            hSmartWindowControl1.WindowSize = new Size(1384, 961);
            hSmartWindowControl1.Load += hSmartWindowControl1_Load;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1384, 961);
            Controls.Add(hSmartWindowControl1);
            Name = "Form1";
            Text = "Form1";
            ResumeLayout(false);
        }

        #endregion

        private HalconDotNet.HSmartWindowControl hSmartWindowControl1;
    }
}