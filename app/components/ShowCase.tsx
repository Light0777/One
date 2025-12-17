import Image from 'next/image'
import { useEffect, useRef } from 'react'

// Reusable View Button Component
const ViewButton = () => {
    return (
        <button className="px-3 py-1 bg-black/20 backdrop-blur-md border border-white/30 rounded-xl text-white font-medium transition-all duration-300 shadow-lg z-10">
            View
        </button>
    )
}

const CaseStudy = () => {

    return (
        <div
            className="relative min-h-screen flex items-center justify-center p-5 overflow-hidden"
        >
            {/* Subtle animated gradient overlay */}
            <div className="absolute inset-0" />

            <div
                className="relative w-full mx-auto z-10"
            >
                <div className="grid md:grid-cols-2 gap-8 justify-center items-start">

                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* First Image */}
                        <div
                            className="relative group"
                        >
                            <div className="absolute top-4 left-4 z-10">
                                <ViewButton />
                            </div>
                            <Image
                                src="/hero.png"
                                alt="case1 preview"
                                width={1080}
                                height={1920}
                                className="rounded-4xl object-contain w-full bg-linear-to-br from-gray-900/50 to-gray-800/30 p-2 backdrop-blur-sm border border-white/10"
                                quality={100}
                                priority
                            />
                            <div className="p-2 text-black">
                                <p className=' font-geistMonoLocal font-normal'>UX Strategy, UI Design</p>
                                <h1 className='text-xl capitalize font-bold'>case study 1</h1>
                            </div>
                        </div>

                        {/* Second Image */}
                        <div
                            className="relative group"
                        >
                            <div className="absolute top-4 left-4 z-10">
                                <ViewButton />
                            </div>
                            <Image
                                src="/Dashboards/dashboard1.jpg"
                                alt="dashboard1 preview"
                                width={1080}
                                height={1920}
                                className="rounded-3xl object-contain w-full bg-linear-to-br from-gray-900/50 to-gray-800/30 p-2 backdrop-blur-sm border border-white/10"
                                quality={100}
                                priority
                            />
                            <div className="p-2 text-black">
                                <p className=' font-geistMonoLocal font-normal'>UX Strategy, UI Design</p>
                                <h1 className='text-xl capitalize font-bold'> case study 3</h1>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Third Image */}
                        <div
                            className="relative group"
                        >
                            <div className="absolute top-4 left-4 z-10">
                                <ViewButton />
                            </div>
                            <Image
                                src="/Dashboards/dashboard2.jpg"
                                alt="dashboard2 preview"
                                width={1080}
                                height={1920}
                                className="rounded-3xl object-contain w-full bg-linear-to-br from-gray-900/50 to-gray-800/30 p-2 backdrop-blur-sm border border-white/10"
                                quality={100}
                                priority
                            />
                            <div className="p-2 text-black">
                                <p className=' font-geistMonoLocal font-normal'>UX Strategy, UI Design</p>
                                <h1 className='text-xl capitalize font-bold'> case study 2</h1>
                            </div>
                        </div>

                        {/* Fourth Image */}
                        <div
                            className="relative group"
                        >
                            <div className="absolute top-4 left-4 z-10">
                                <ViewButton />
                            </div>
                            <Image
                                src="/Dashboards/dashboard3.jpg"
                                alt="dashboard3 preview"
                                width={1080}
                                height={1920}
                                className="rounded-3xl object-contain w-full bg-linear-to-br from-gray-900/50 to-gray-800/30 p-2 backdrop-blur-sm border border-white/10"
                                quality={100}
                                priority
                            />
                            <div className="p-2 text-black">
                                <p className=' font-geistMonoLocal font-normal'>UX Strategy, UI Design</p>
                                <h1 className='text-xl capitalize font-bold'> case study 4</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudy