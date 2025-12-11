// components/HeroSection.tsx - UPDATED VERSION
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandsShowcase from "./BrandsShowcase";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const customHeadingRef = useRef<HTMLHeadingElement>(null);
    const [bgProgress, setBgProgress] = useState(0);

    useEffect(() => {
        if (!containerRef.current || !aboutRef.current || !customHeadingRef.current) return;

        const container = containerRef.current;
        const aboutHeight = aboutRef.current.clientHeight;
        const customHeading = customHeadingRef.current;

        // Determine if mobile based on viewport width
        const isMobile = window.innerWidth < 768;

        // Shorter transition on mobile, longer on desktop
        const endDistance = isMobile ? aboutHeight * 0.3 : aboutHeight * 0.5;

        // Create timeline for smooth transition
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: `+=${endDistance}`,
                scrub: true,
                pin: false,
                onUpdate: (self) => {
                    const progress = self.progress;
                    setBgProgress(progress);

                    // Faster transition on mobile
                    const adjustedProgress = isMobile ?
                        Math.min(progress * 1.5, 1) :
                        progress;

                    // Interpolate background color from black to white
                    const bgColor = gsap.utils.interpolate(
                        { r: 0, g: 0, b: 0 },
                        { r: 255, g: 255, b: 255 },
                        adjustedProgress
                    );

                    // Apply background color
                    gsap.to(container, {
                        backgroundColor: `rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b})`,
                        duration: 0.1,
                    });

                    // Update ONLY the "CUSTOM" heading color
                    // Exclude the gradient "DASHBOARDS." heading
                    const heroTextColor = adjustedProgress > 0.5 ? "#000000" : "#ffffff";

                    // Target only the customHeadingRef
                    gsap.to(customHeading, {
                        color: heroTextColor,
                        duration: 0.3,
                    });
                }
            }
        });

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []); // Empty dependency array since we check mobile inside

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

    // Calculate colors based on progress
    const textColor = (brightness: number = 1) =>
        `rgb(${Math.floor(bgProgress * 255 * brightness)}, ${Math.floor(bgProgress * 255 * brightness)}, ${Math.floor(bgProgress * 255 * brightness)})`;

    const dividerColor = `rgb(${Math.floor(bgProgress * 255 * 0.8)}, ${Math.floor(bgProgress * 255 * 0.8)}, ${Math.floor(bgProgress * 255 * 0.8)})`;

    return (
        <div ref={containerRef} className="relative bg-black">
            {/* Hero Content */}
            <div className="h-20 sm:h-30 2xl:h-50"></div>
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
                    <h1 ref={customHeadingRef} className="scroll-m-20 text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-normal tracking-normal font-anton leading-tight sm:leading-none text-white">
                        CUSTOM
                    </h1>
                    {/* Gradient heading - no color changes */}
                    <h1 className="scroll-m-20 text-center bg-yellow-300 rounded-xl text-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-normal tracking-normal font-anton -mt-5 sm:-mt-2 leading-tight sm:leading-none px-4 py-1 selection:bg-transparent w-fit mx-auto">
                        DASHBOARDS.
                    </h1>
                </div>
            </div>

            {/* Dashboard Image */}
            <div className="grid justify-center items-center relative p-5">
                <div className="relative w-full">
                    <Image
                        src="/hero.png"
                        alt="Dashboard preview"
                        width={1080}
                        height={1920}
                        className="rounded-xl object-contain shadow-2xl"
                        quality={100}
                        priority
                    />
                    <div className="absolute inset-0 rounded-xl bg-linear-to-t from-black/20 to-transparent"></div>
                </div>
            </div>

            {/* AboutUs Content */}
            <div ref={aboutRef} className="min-h-screen flex items-center justify-center">
                <div className="relative z-10 w-full max-w-6xl 2xl:max-w-7xl px-4 sm:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column */}
                        <div className="space-y-2 lg:space-y-5">
                            {leftLines.map((line, lineIndex) => (
                                <div
                                    key={lineIndex}
                                    className={`leading-relaxed md:leading-snug ${line.isBold
                                        ? 'text-lg md:text-xl lg:text-4xl font-bold tracking-tight'
                                        : 'text-md md:text-lg lg:text-3xl font-light'
                                        }`}
                                >
                                    {line.text.split(' ').map((word, wordIndex) => (
                                        <span
                                            key={`left-${lineIndex}-${wordIndex}`}
                                            style={{ color: textColor(0.1) }}
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
                            <div className="leading-relaxed md:leading-snug text-sm sm:text-md md:text-lg lg:text-xl font-light">
                                {rightLine.text.split(' ').map((word, wordIndex) => (
                                    <span
                                        key={`right-${wordIndex}`}
                                        style={{ color: textColor(0.1) }}
                                        className="inline-block mr-[0.2em] transition-colors duration-300"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </div>

                            {/* Divider */}
                            <div
                                style={{ backgroundColor: dividerColor }}
                                className="w-full h-px transition-colors duration-300"
                            />

                            {/* Services list */}
                            <div className="mt-4 md:mt-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-2">
                                    {services.map((service, index) => (
                                        <div key={index} className="relative">
                                            <div className="relative z-10 flex items-center">
                                                {/* Service text */}
                                                <span
                                                    style={{ color: textColor(0.3) }}
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