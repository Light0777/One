import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full">
        <Navbar />
        {/* Hero Section */}
        <div className="h-0 sm:h-40"></div>
        <div className="h-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-24">

          {/* Available Badge */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 md:mb-8">
            <div className="relative w-4 h-4">
              <div className="absolute inset-0 rounded-full bg-gray-300 animate-ping opacity-60"></div>
              <div className="relative w-4 h-4 rounded-full bg-white"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"></div>
            </div>

            <h3 className="text-sm sm:text-base md:text-xl font-normal tracking-tight font-geistMonoLocal">
              AVAILABLE FOR FREELANCE_
            </h3>
          </div>

          {/* Main Headings */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <h1 className="scroll-m-20 text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-normal tracking-normal font-anton leading-tight sm:leading-none">
              CUSTOM
            </h1>
            <h1 className="scroll-m-20 text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-normal tracking-normal font-anton -mt-5 sm:-mt-2 leading-tight sm:leading-none">
              DASHBOARDS.
            </h1>
          </div>
        </div>


        {/* Bento Grid Section - Simple Mockup */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-4">
          <div className="max-w-[80%] mx-auto">
            <div className="grid grid-cols-3 grid-rows-2 border border-gray-700 rounded-xl overflow-hidden">

              {/* Top Left - Large */}
              <div className="col-span-2 row-span-1 border-r border-b border-gray-700 bg-linear-to-br from-gray-900 to-black p-4 sm:p-6">
                <div className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-r from-blue-600 to-cyan-500 rounded-lg"></div>
                    <div className="h-2 sm:h-3 w-20 bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gray-800 rounded-lg"></div>
                    <div className="bg-gray-800 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Top Right - Small */}
              <div className="col-span-1 row-span-1 border-b border-gray-700 bg-linear-to-br from-gray-900 to-black p-4 sm:p-6">
                <div className="h-full flex flex-col justify-center items-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-linear-to-r from-purple-600 to-pink-500 rounded-full mb-3"></div>
                  <div className="h-2 sm:h-3 w-16 bg-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Bottom Left - Medium */}
              <div className="col-span-1 row-span-1 border-r border-gray-700 bg-linear-to-br from-gray-900 to-black p-4 sm:p-6">
                <div className="h-full flex items-center">
                  <div className="w-full">
                    <div className="h-2 sm:h-3 w-24 bg-gray-700 rounded-full mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full w-full"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full w-3/4"></div>
                      <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Middle - Medium */}
              <div className="col-span-1 row-span-1 border-r border-gray-700 bg-linear-to-br from-gray-900 to-black p-4 sm:p-6">
                <div className="h-full flex flex-col justify-center">
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="h-4 sm:h-5 bg-linear-to-r from-green-600 to-emerald-500 rounded"></div>
                    <div className="h-4 sm:h-5 bg-linear-to-r from-yellow-600 to-amber-500 rounded"></div>
                    <div className="h-4 sm:h-5 bg-linear-to-r from-red-600 to-orange-500 rounded"></div>
                  </div>
                  <div className="h-2 sm:h-3 w-20 bg-gray-700 rounded-full mx-auto"></div>
                </div>
              </div>

              {/* Bottom Right - Small */}
              <div className="col-span-1 row-span-1 bg-linear-to-br from-gray-900 to-black p-4 sm:p-6">
                <div className="h-full flex items-center justify-center">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
                    <div className="absolute inset-8 border-2 border-cyan-500 rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-3 w-3 sm:h-4 sm:w-4 bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}