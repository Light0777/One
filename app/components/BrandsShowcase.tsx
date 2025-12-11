// components/SimplePlatformsScroll.tsx
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

// Predefined set of attractive colors for the boxes

const platforms = [
  { 
    color: "#635BFF",
    icon: "/EcoLogo/stripe.svg",
  },
  { 
    color: "#000000",
    icon: "/EcoLogo/notion.svg",
  },
  { 
    color: "#FFBF00",
    icon: "/EcoLogo/airtable.svg",
  },
  { 
    color: "#3ECF8E",
    icon: "/EcoLogo/supabase.svg",
  },
  { 
    color: "#FFCA28",
    icon: "/EcoLogo/firebase.svg",
  },
  { 
    color: "#FF9900",
    icon: "/EcoLogo/aws.svg",
  },
  { 
    color: "#000000",
    icon: "/EcoLogo/vercel.svg",
  },
  { 
    color: "#000000",
    icon: "/EcoLogo/nextjs-svgrepo-com.svg",
  },
  { 
    color: "#06B6D4",
    icon: "/EcoLogo/tailwind-css.svg",
  },
  { 
    color: "#4285F4",
    icon: "/EcoLogo/google-cloud.svg",
  },
  { 
    color: "#7AB55C",
    icon: "/EcoLogo/shopify.svg",
  },
  { 
    color: "#FF7A59",
    icon: "/EcoLogo/hubspot.svg",
  },
];

// Fallback component in case SVG doesn't exist
const PlatformIcon = ({ platform }: { platform: typeof platforms[0] }) => {
  if (platform.icon) {
    return (
      <div 
        className="relative w-16 h-16 md:w-30 md:h-30 rounded-2xl flex items-center justify-center"
      >
        <div className="relative w-15 h-15 md:w-24 md:h-24">
          <Image
            src={platform.icon}
            alt="logo"
            fill
            className="object-contain"
            onError={(e) => {
              // Fallback to colored circle if image fails to load
              const target = e.target as HTMLElement;
              target.style.display = 'none';
              const parent = target.parentElement?.parentElement;
            }}
          />
        </div>
      </div>
    );
  }

  // Fallback colored circle with initial
  return (
    <div 
      className="w-16 h-16 md:w-24 md:h-24 rounded-2xl flex items-center justify-center"
    >
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
        margin: 0 2rem;
        transition: all 0.3s ease;
      }

      .logo-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      @media (max-width: 768px) {
        .logo-item {
          margin: 0 0.5rem;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <section className="py-0 bg-white overflow-hidden">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-24">
          <p className="text-xs sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-1">
             Trusted Platforms My Dashboards Integrate With
          </p>
        </div>

        {/* Logo Scroll */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-white to-transparent z-10" />

          {/* Logos container */}
          <div className="overflow-hidden">
            <div ref={scrollRef} className="logos-container">
              {platforms.map((platform, index) => (
                <div key={index} className="logo-item">
                  <div className="logo-card p-1">
                    {/* Platform icon in colored box */}
                    <div className="flex items-center justify-center mb-1">
                      <PlatformIcon platform={platform} />
                    </div>
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