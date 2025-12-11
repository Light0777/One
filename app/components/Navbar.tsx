"use client";

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showNavbar, setShowNavbar] = useState(true);
    const menuRef = useRef<HTMLDivElement>(null);
    const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const menuBgRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const navRef = useRef<HTMLElement>(null);

    const workItems = [
        { name: 'Custom Dashboard', href: '#' },
        { name: 'Custom SaaS Solution', href: '#' },
        { name: 'Custom Website', href: '#' },
    ];

    const studioItems = [
        { name: 'About', href: '#' },
        { name: 'Services', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'Clients', href: '#' },
    ];

    const blogPosts = [
        {
            id: 1,
            title: 'The Future of Data Visualization',
            excerpt: 'How modern dashboards are transforming business decision-making',
            image: '/placeholder-blog1.jpg',
            date: 'Dec 15, 2024'
        },
        {
            id: 2,
            title: 'Building Scalable SaaS Solutions',
            excerpt: 'Best practices for creating enterprise-ready software',
            image: '/placeholder-blog2.jpg',
            date: 'Nov 28, 2024'
        },
        {
            id: 3,
            title: 'UI/UX Trends for 2025',
            excerpt: 'What\'s next in dashboard design and user experience',
            image: '/placeholder-blog3.jpg',
            date: 'Oct 12, 2024'
        }
    ];

    // Initialize menuItemsRef array
    useEffect(() => {
        menuItemsRef.current = menuItemsRef.current.slice(0, workItems.length + studioItems.length);
    }, []);

    // Disable body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none';
        } else {
            // Enable scrolling
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = '';
            document.body.style.touchAction = '';
        };
    }, [isMenuOpen]);

    // Scroll hide/show effect - disable when menu is open
    useEffect(() => {
        const handleScroll = () => {
            if (isMenuOpen) return; // Don't hide/show navbar when menu is open

            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                // At top of page, always show navbar
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY) {
                // Scrolling down - hide navbar
                setShowNavbar(false);
            } else {
                // Scrolling up - show navbar
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, isMenuOpen]);

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
                    y: -1,
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
                stagger: 0.1,
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

    const handleLinkClick = () => {
        toggleMenu();
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
            {/* Main Navbar */}
            <nav
                ref={navRef}
                className={`fixed top-0 left-0 right-0 z-100 px-4 py-2 no-scrollbar bg-transparent transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
                    }`}
            >
                {/* Fading outward shadow - placed below navbar */}
                <div
                    className={`absolute left-0 top-0 right-0 h-16 pointer-events-none transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%)'
                    }}
                />

                <div className="max-w-full mx-auto flex items-center justify-between relative">
                    {/* Logo */}
                    <div className="z-60">
                        <a href="#" className="text-xl font-bold font-anton md:text-2xl md:font-bold tracking-wide text-black">
                            <span className="text-white">10B/10</span>
                        </a>
                    </div>

                    {/* Menu Button - This stays on top of everything */}
                    <button
                        ref={buttonRef}
                        onClick={toggleMenu}
                        className="relative z-80 w-12 h-12 flex flex-col items-center justify-center gap-2 group"
                        aria-label="Toggle menu">
                        <span className="block h-0.5 w-8 bg-white transition-all duration-300" />
                        <span className="block h-0.5 w-8 bg-white transition-all duration-300" />
                    </button>
                </div>
            </nav>

            {/* Menu Background Layer */}
            <div
                ref={menuBgRef}
                className="fixed inset-0 z-40 bg-black scale-y-0 transform origin-top"
                style={{ willChange: 'transform' }}
            />

            {/* Full Screen Menu Content */}
            <div
                ref={menuRef}
                className={`fixed inset-0 z-50 no-scrollbar ${isMenuOpen ? 'pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                style={isMenuOpen ? {} : { display: 'none' }}>
                <div className="max-w-6xl mx-auto px-6 py-10 h-full flex flex-col overflow-y-auto">
                    {/* Top Section with Logo */}
                    <div className="mb-12"></div>

                    {/* Main Content Grid */}
                    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
                        {/* Left Column - Navigation */}
                        <div className="space-y-8 md:space-y-15">
                            {/* WORK Section */}
                            <div>
                                <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2 md:mb-8">WORK</h3>
                                <ul className="space-y-1 md:space-y-2 2xl:space-y-6">
                                    {workItems.map((item, index) => (
                                        <li key={index} className="overflow-hidden">
                                            <a
                                                ref={(el) => {
                                                    menuItemsRef.current[index] = el;
                                                }}
                                                href={item.href}
                                                className="block text-lg md:text-3xl 2xl:text-4xl font-normal md:font-bold text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                                                onClick={handleLinkClick}
                                                style={{ willChange: 'transform, opacity' }}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* STUDIO Section */}
                            <div>
                                <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-3 md:mb-10">STUDIO</h3>
                                <ul className="space-y-1 md:space-y-2 2xl:space-y-6">
                                    {studioItems.map((item, index) => (
                                        <li key={index} className="overflow-hidden">
                                            <a
                                                ref={(el) => {
                                                    menuItemsRef.current[workItems.length + index] = el;
                                                }}
                                                href={item.href}
                                                className="block text-lg md:text-3xl 2xl:text-4xl font-normal md:font-bold text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer"
                                                onClick={handleLinkClick}
                                                style={{ willChange: 'transform, opacity' }}
                                            >
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Column - Blog & About */}
                        <div className="space-y-6">
                            {/* Blog Posts */}
                            <div className='hidden sm:block'>
                                <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-6">BLOGS</h3>
                                <div className="space-y-3 2xl:space-y-6 ">
                                    {blogPosts.map((post) => (
                                        <div key={post.id} className="group">
                                            <div className="flex items-start space-x-4">
                                                {/* Placeholder Image */}
                                                <div className="relative w-15 h-15 2xl:w-24 2xl:h-24 shrink-0 rounded-lg overflow-hidden bg-gray-800">
                                                    <div className="absolute inset-0 bg-linear-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                                        <span className="text-white text-xs font-medium">BLOG</span>
                                                    </div>
                                                </div>

                                                <div className="flex-1">
                                                    <div className="text-xs text-gray-500 mb-1">{post.date}</div>
                                                    <h4 className="text-sm 2xl:text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">
                                                        {post.title}
                                                    </h4>
                                                    <p className="text-xs 2xl:text-sm text-gray-400 mt-1">
                                                        {post.excerpt}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* About Section */}
                            <div className="pt-8 border-t border-gray-800">
                                <div className="mb-6">
                                    <p className="text-white text-lg leading-relaxed">
                                        Hi, I'm the founder & CEO of 10Billion.Studio — we build custom dashboards that help businesses work faster, smarter, and with complete clarity.
                                    </p>
                                </div>

                                <a
                                    href="https://cal.com/onegrow.studio-dxh2l7/30min?overlayCalendar=true&layout=month_view"
                                    className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300 hover:scale-105 cursor-pointer"
                                    onClick={handleLinkClick}
                                >
                                    Book a call
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;