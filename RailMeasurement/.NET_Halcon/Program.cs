using HalconDotNet;

namespace _NET_Halcon
{
    class Program
    {
        static void Main(string[] args)
        {
            HImage img = new HImage("pcb");
            HRegion region = img.Threshold(0d, 122d);
            int numRegions = region.Connection().CountObj();
            Console.WriteLine("Number of Regions: " + numRegions);
        }
    }
}