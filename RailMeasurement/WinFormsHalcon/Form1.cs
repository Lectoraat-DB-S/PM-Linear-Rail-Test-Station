using HalconDotNet;

namespace WinFormsHalcon
{
    public partial class Form1 : Form
    {
        public HWindow window;


        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void hSmartWindowControl1_Load(object sender, EventArgs e)
        {
            this.MouseWheel += my_MouseWheel;

            window = hSmartWindowControl1.HalconWindow;
        }

        private void my_MouseWheel(object sender, MouseEventArgs e)
        {
            Point pt = hSmartWindowControl1.Location;
            MouseEventArgs newe = new MouseEventArgs(e.Button, e.Clicks,
            e.X - pt.X, e.Y - pt.Y, e.Delta);
            hSmartWindowControl1.HSmartWindowControl_MouseWheel(sender, newe);
        }

        public void fitToWindow(object sender, EventArgs e)
        {
            // Simulate a double click event
            MouseEventArgs args = new MouseEventArgs(MouseButtons.Left, 2, 0, 0, 0);
            window.ClearWindow();
        }

        private void Form1_Load_1(object sender, EventArgs e)
        {

        }
    }
}