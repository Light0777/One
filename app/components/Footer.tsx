"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
    const footerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const brandRef = useRef<HTMLHeadingElement>(null);

    const workLinks = [
        { name: 'Custom Dashboard', href: '#' },
        { name: 'Custom SaaS Solution', href: '#' },
        { name: 'Custom Website', href: '#' },
    ];

    const studioLinks = [
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Clients', href: '#' },
    ];

    return (
        <footer 
            ref={footerRef}
            className="min-h-screen bg-black text-white transition-colors duration-300 flex flex-col justify-center"
        >
            {/* Top Section - Navigation Links & Email */}
            <div 
                ref={contentRef}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full"
            >
                <div className="flex flex-col lg:flex-row justify-between sm:items-center">
                    {/* Right - Navigation Links */}
                    <div className="grid sm:flex gap-12 sm:gap-24 lg:w-2/3 lg:justify-start mb-12 lg:mb-0 items-center">
                        {/* WORK Column */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6 footer-heading">WORK</h3>
                            <ul className="space-y-2">
                                {workLinks.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href} 
                                            className="text-white hover:text-black transition-colors duration-300 text-lg footer-link"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* STUDIO Column */}
                        <div>
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6 footer-heading">STUDIO</h3>
                            <ul className="space-y-2">
                                {studioLinks.map((link, index) => (
                                    <li key={index}>
                                        <a 
                                            href={link.href} 
                                            className="text-white transition-colors duration-300 text-lg footer-link"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Left - Email */}
                    <div className="lg:w-1/3 lg:text-right grid items-center">
                        <a 
                            href="mailto:oneGrow.Studio@gmail.com" 
                            className="text-white transition-colors font-anton duration-300 text-xl sm:text-4xl inline-block footer-link"
                        >
                            oneGrow.Studio@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section - Big Brand Name */}
            <div className="border-t border-gray-200 transition-colors duration-300 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center">
                        <h1 
                            ref={brandRef}
                            className="text-5xl sm:text-8xl lg:text-9xl text-white font-anton transition-colors duration-300 footer-link font-bold tracking-normal"
                        >
                            oneGrow.Studio
                        </h1>
                        <p className="mt-8 text-gray-500 text-sm">
                            © {new Date().getFullYear()} OneGrow.Studio. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;