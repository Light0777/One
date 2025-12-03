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
        <div className="grid justify-center items-center relative p-5">
          <Image
            src="/hero.jpg"
            alt="Dashboard preview"
            width={1080}
            height={1920}
            className="rounded-xl object-contain"
            quality={100}
          />
        </div>
      </main>
    </div>
  );
}