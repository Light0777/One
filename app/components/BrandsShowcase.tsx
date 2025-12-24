// components/SimplePlatformsScroll.tsx
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

// Predefined set of attractive colors for the boxes
const platforms = [
  { 
    color: "#635BFF",
    icon: "/EcoLogo/stripe.svg",
    customStyle: "filter brightness-0 invert", // Stripe logo is white on blue
  },
  { 
    color: "#000000",
    icon: "/EcoLogo/notion.svg",
    customStyle: "filter brightness-0 invert", // Notion logo is white on black
  },
  { 
    color: "#FFBF00",
    icon: "/EcoLogo/airtable.svg",
    customStyle: "filter brightness-0 invert", // Airtable logo can be default
  },
  { 
    color: "#3ECF8E",
    icon: "/EcoLogo/supabase.svg",
    customStyle: "filter brightness-0 invert", // Supabase logo
  },
  { 
    color: "#FFCA28",
    icon: "/EcoLogo/firebase.svg",
    customStyle: "filter brightness-0 invert", // Firebase logo
  },
  { 
    color: "red",
    icon: "/EcoLogo/aws.svg",
    customStyle: "filter brightness-0 invert", // AWS logo
  },
  { 
    color: "#000000",
    icon: "/EcoLogo/vercel.svg",
    customStyle: "filter brightness-0 invert border", // Vercel logo is white on black
  },
  { 
    color: "#000000",
    icon: "/EcoLogo/nextjs-svgrepo-com.svg",
    customStyle: "filter brightness-0 invert", // Next.js logo is white on black
  },
  { 
    color: "#06B6D4",
    icon: "/EcoLogo/tailwind-css.svg",
    customStyle: "filter brightness-0 invert", // Tailwind logo
  },
  { 
    color: "#4285F4",
    icon: "/EcoLogo/google-cloud.svg",
    customStyle: "filter brightness-0 invert", // Google Cloud logo
  },
  { 
    color: "#7AB55C",
    icon: "/EcoLogo/shopify.svg",
    customStyle: "filter brightness-0 invert", // Shopify logo
  },
  { 
    color: "#FF7A59",
    icon: "/EcoLogo/hubspot.svg",
    customStyle: "filter brightness-0 invert", // Hubspot logo
  },
];

// Fallback component in case SVG doesn't exist
const PlatformIcon = ({ platform }: { platform: typeof platforms[0] }) => {
  if (platform.icon) {
    return (
      <div 
        className="w-full h-full flex items-center justify-center p-6">
        <div className="relative w-full h-full">
          <Image
            src={platform.icon}
            alt="logo"
            fill
            className={`object-contain ${platform.customStyle || ''}`}
            onError={(e) => {
              const target = e.target as HTMLElement;
              target.style.display = 'none';
            }}
          />
        </div>
      </div>
    );
  }

  // Fallback colored circle with initial
  return (
    <div 
      className="w-full h-full rounded-3xl flex items-center justify-center"
      style={{ backgroundColor: platform.color }}
    >
      <span className="text-white font-semibold">Logo</span>
    </div>
  );
};

export default function SimplePlatformsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the logos for seamless scrolling
    const logos = scrollContainer.innerHTML;
    scrollContainer.innerHTML += logos;

    // Add scroll animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scrollLogos {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .logos-container {
        animation: scrollLogos 40s linear infinite;
        display: flex;
        width: max-content;
      }
      
      .logos-container:hover {
        animation-play-state: paused;
      }
      
      .logo-item {
        flex-shrink: 0;
        margin: 0 1rem;
      }

      .logo-card {
        width: 180px;  /* Wider for rectangle shape */
        height: 100px; /* Same height as before */
        border-radius: 24px; /* More rectangular corners */
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        background: transparent;
      }
      
      
      @media (max-width: 768px) {
        .logo-card {
          width: 160px; /* Wider for tablet */
          height: 90px;
          border-radius: 20px;
        }
      }
      
      @media (max-width: 640px) {
        .logo-card {
          width: 140px; /* Wider for mobile */
          height: 80px;
          border-radius: 18px;
        }
      }
      
      /* For even more rectangular shape */
      @media (min-width: 1024px) {
        .logo-card {
          width: 200px; /* Even wider on desktop */
          height: 100px;
          border-radius: 28px; /* Slightly more rounded */
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <section className="py-12 bg-black overflow-hidden">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-sm sm:text-lg text-gray-300 mx-auto">
             Trusted Platforms My Dashboards Integrate With
          </p>
        </div>

        {/* Logo Scroll */}
        <div className="relative">
          {/* Gradient overlays - FIXED the class names */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Logos container */}
          <div className="overflow-hidden">
            <div ref={scrollRef} className="logos-container">
              {platforms.map((platform, index) => (
                <div key={index} className="logo-item">
                  <div className="logo-card">
                    <PlatformIcon platform={platform} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}