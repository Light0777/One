// components/HeroSection.tsx - UPDATED VERSION
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandsShowcase from "./BrandsShowcase";
import CaseStudy from "./CaseStudy";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const customHeadingRef = useRef<HTMLHeadingElement>(null);


    // AboutUs data
    const leftLines = [
        {
            text: "Hey, we're 10Billion.Studio and we help businesses stop drowning in spreadsheets.",
            isBold: true
        },
        {
            text: "If your data is scattered everywhere, we build dashboards that pull it all together",
            isBold: false
        }
    ];

    const rightLine = {
        text: "we keep things simple: one place to track everything that matters, Less chaos, more clarity — so you can focus on growing, not guessing.",
        isBold: false
    };

    const services = [
        "– UI Design",
        "– Web Design",
        "– Mobile Design",
        "– Quick prototype",
        "– Brand Identity",
        "– Custom features",
        "– Smooth Animations",
        "– User Experience"
    ];

    return (
        <div ref={containerRef} className="relative bg-black">
            {/* Hero Content */}
            <div className="h-5 sm:h-15 2xl:h-20"></div>
            <div className="h-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-0">

                {/* Available Badge */}
                <div className="available-badge flex items-center justify-center gap-2 mb-4 sm:mb-6 md:mb-8 p-3 rounded-full">
                    <div className="relative w-4 h-4">
                        <div className="absolute inset-0 rounded-full bg-gray-300 animate-ping opacity-60"></div>
                        <div className="relative w-4 h-4 rounded-full bg-white"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>

                    <h3 className="text-sm sm:text-base md:text-xl font-normal tracking-tight font-geistMonoLocal text-white">
                        AVAILABLE FOR FREELANCE_
                    </h3>
                </div>

                {/* Main Headings */}
                <div className="mt-4 sm:mt-6 md:mt-8 grid gap-3">
                    {/* Only add ref to the "CUSTOM" heading */}
                    <h1 ref={customHeadingRef} className="scroll-m-20 text-center text-3xl sm:text-7xl lg:text-8xl xl:text-[9rem] font-normal tracking-normal font-anton leading-tight sm:leading-none text-white">
                        CUSTOM DASHBOARDS.
                    </h1>
                </div>
            </div>

            {/* Dashboard Image */}
            <div className="grid md:flex justify-center items-center relative p-5 gap-2 lg:gap-5">
                <div className="relative">
                    <Image
                        src="/case1.png"
                        alt="Dashboard preview"
                        width={1240}
                        height={1920}
                        className="rounded-xl sm:rounded-3xl"
                        quality={100}
                    />
                </div>
                <div className="flex md:grid md:grid-cols-1 gap-1 lg:gap-5">
                    {["Group 9", "Group 11", "Group 22"].map((img) => (
                        <Image
                            key={img}
                            src={`/dashcomp/${img}.png`}
                            alt="Dashboard preview"
                            width={190}
                            height={180}
                            className="rounded-xl w-[32.5%] md:w-[227]"
                            quality={100}
                        />
                    ))}
                </div>

                <div>
                    <Image
                        src="/dashcomp/Group 17.png"
                        alt="Dashboard preview"
                        width={380}
                        height={180}
                        className="rounded-3xl hidden md:block"
                        quality={100}
                    />
                    <Image
                        src="/dashcomp/Group 172.png"
                        alt="Dashboard preview"
                        width={380}
                        height={180}
                        className="rounded-3xl block md:hidden w-full"
                        quality={100}
                    />
                </div>
            </div>

            <BrandsShowcase />

            {/* AboutUs Content */}
            <div className=" h-auto flex items-center justify-center">
                <div className="relative z-10 w-full px-4 sm:px-6 sm:py-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column */}
                        <div className="space-y-2 lg:space-y-5">
                            {leftLines.map((line, lineIndex) => (
                                <div
                                    key={lineIndex}
                                    className={`leading-relaxed md:leading-snug max-w-150 ${line.isBold
                                        ? 'text-lg md:text-xl lg:text-3xl font-bold tracking-tight'
                                        : 'text-md md:text-lg lg:text-xl font-light'
                                        }`}
                                >
                                    {line.text.split(' ').map((word, wordIndex) => (
                                        <span
                                            key={`left-${lineIndex}-${wordIndex}`}
                                            className="inline-block mr-[0.2em] transition-colors duration-300"
                                        >
                                            {word}
                                        </span>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4 lg:space-y-8">
                            {/* Right text line */}
                            <div className="leading-relaxed md:leading-snug text-sm sm:text-md md:text-lg font-light max-w-150">
                                {rightLine.text.split(' ').map((word, wordIndex) => (
                                    <span
                                        key={`right-${wordIndex}`}
                                        className="inline-block mr-[0.2em] transition-colors duration-300"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div
                                className="w-full h-px transition-colors duration-300 bg-gray-700"
                            />

                            {/* Services list */}
                            <div className="mt-4 md:mt-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-2">
                                    {services.map((service, index) => (
                                        <div key={index} className="relative">
                                            <div className="relative z-10 flex items-center">
                                                {/* Service text */}
                                                <span
                                                    className="text-sm sm:text-base md:text-lg font-light tracking-wide transition-colors duration-300"
                                                >
                                                    {service}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}