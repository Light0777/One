"use client";

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const menuBgRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const navRef = useRef<HTMLElement>(null);

    const menuItems = [
        { name: 'HOME', href: '#' },
        { name: 'ABOUT US', href: '#' },
        { name: 'OUR SERVICES', href: '#' },
        { name: 'WHY US', href: '#' },
        { name: 'CONTACT US', href: '#' },
        { name: 'FAQ', href: '#' },
    ];

    // Initialize menuItemsRef array
    useEffect(() => {
        menuItemsRef.current = menuItemsRef.current.slice(0, menuItems.length);
    }, []);

    useEffect(() => {
        const validItems = menuItemsRef.current.filter(Boolean) as HTMLAnchorElement[];
        if (validItems.length > 0) {
            gsap.set(validItems, { y: 80, opacity: 0 });
        }
    }, []);

    const openMenu = () => {
        const tl = gsap.timeline();

        // Animate button to X
        if (buttonRef.current) {
            const spans = buttonRef.current.querySelectorAll('span');
            tl.to(spans, {
                duration: 0.3,
                backgroundColor: '#fff',
                stagger: 0.1,
            })
                .to(spans[0], {
                    duration: 0.3,
                    y: 10,
                    rotate: 45,
                }, 0)
                .to(spans[1], {
                    duration: 0.3,
                    opacity: 0,
                }, 0)
                .to(spans[2], {
                    duration: 0.3,
                    y: -10,
                    rotate: -45,
                }, 0);
        }

        // Reveal menu with background color
        if (menuBgRef.current) {
            tl.to(menuBgRef.current, {
                duration: 0.8,
                scaleY: 1,
                transformOrigin: 'top center',
                ease: 'power3.inOut',
            }, 0);
        }

        if (menuRef.current) {
            tl.to(menuRef.current, {
                duration: 0.6,
                opacity: 1,
                ease: 'power2.out',
            }, '-=0.4');
        }

        // Filter out null values from menuItemsRef
        const validMenuItems = menuItemsRef.current.filter(Boolean) as HTMLAnchorElement[];
        if (validMenuItems.length > 0) {
            tl.to(validMenuItems, {
                duration: 0.8,
                y: 0,
                opacity: 1,
                stagger: 0.15,
                ease: 'power3.out',
            }, '-=0.2');
        }
    };

    const closeMenu = () => {
        const tl = gsap.timeline();

        // Filter out null values from menuItemsRef
        const validMenuItems = menuItemsRef.current.filter(Boolean) as HTMLAnchorElement[];

        // Hide menu items
        if (validMenuItems.length > 0) {
            tl.to(validMenuItems, {
                duration: 0.4,
                y: 80,
                opacity: 0,
                stagger: 0.05,
                ease: 'power3.in',
            });
        }

        if (menuRef.current) {
            tl.to(menuRef.current, {
                duration: 0.4,
                opacity: 0,
                ease: 'power2.in',
            }, '-=0.2');
        }

        if (menuBgRef.current) {
            tl.to(menuBgRef.current, {
                duration: 0.6,
                scaleY: 0,
                transformOrigin: 'bottom center',
                ease: 'power3.inOut',
            }, '-=0.2');
        }

        // Reset button to hamburger
        if (buttonRef.current) {
            const spans = buttonRef.current.querySelectorAll('span');
            tl.to(spans, {
                duration: 0.3,
                backgroundColor: '#fff',
                stagger: 0.1,
            }, 0)
                .to(spans[0], {
                    duration: 0.3,
                    y: 0,
                    rotate: 0,
                }, 0)
                .to(spans[1], {
                    duration: 0.3,
                    opacity: 1,
                }, 0)
                .to(spans[2], {
                    duration: 0.3,
                    y: 0,
                    rotate: 0,
                }, 0);
        }
    };

    const toggleMenu = () => {
        if (isMenuOpen) {
            closeMenu();
            setTimeout(() => setIsMenuOpen(false), 600);
        } else {
            setIsMenuOpen(true);
            setTimeout(() => openMenu(), 10);
        }
    };

    // Close menu on ESC key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isMenuOpen]);

    return (
        <>
            {/* Main Navbar - FIXED: Proper centering and z-index hierarchy */}
            <nav
                ref={navRef}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-transparent">
                <div className="max-w-full mx-auto flex items-center justify-between relative">
                    {/* Logo */}
                    <div className="z-60">
                        <a href="#" className="text-2xl font-bold tracking-wider text-black">
                            <span className="text-white">oneGrow.Studio</span>
                        </a>
                    </div>

                    {/* Menu Button */}
                    <button
                        ref={buttonRef}
                        onClick={toggleMenu}
                        className="relative z-60 w-12 h-12 flex flex-col items-center justify-center gap-2 group"
                        aria-label="Toggle menu"
                    >
                        <span className="block h-0.5 w-8 bg-white transition-all duration-300" />
                        <span className="block h-0.5 w-8 bg-white transition-all duration-300" />
                        <span className="block h-0.5 w-8 bg-white transition-all duration-300" />
                    </button>
                </div>
            </nav>

            {/* Menu Background Layer - FIXED: Proper z-index for stacking */}
            <div
                ref={menuBgRef}
                className="fixed inset-0 z-40 bg-black scale-y-0 transform origin-top"
                style={{ willChange: 'transform' }}
            />

            {/* Full Screen Menu Content - FIXED: Higher z-index for menu items */}
            <div
                ref={menuRef}
                className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none">
                <div className="max-w-6xl w-full px-6 pointer-events-auto">
                    {/* Menu Items - FIXED: Increased z-index */}
                    <ul className="space-y-4 md:space-y-6 grid items-center justify-center z-60 relative">
                        {menuItems.map((item, index) => (
                            <li key={index} className="overflow-hidden">
                                <a
                                    ref={(el) => {
                                        menuItemsRef.current[index] = el;
                                    }}
                                    href={item.href}
                                    className="block text-5xl md:text-8xl lg:text-9xl font-bold text-white hover:text-gray-300 transition-colors duration-300 relative z-60"
                                    onClick={toggleMenu}
                                    style={{ willChange: 'transform, opacity' }}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Info - FIXED: Proper z-index */}
                    <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 z-50">
                        <div className="pt-6">
                            <p className="text-white/80 text-lg mb-2">Ready to start your project?</p>
                            <a href="mailto:contact@brand.com" className="text-2xl text-white hover:text-gray-300">
                                oneGrowStudio@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;