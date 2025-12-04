// components/SimplePlatformsScroll.tsx
"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

// Predefined set of attractive colors for the boxes
const boxColors = [
  "#FF6B6B", "#4ECDC4", "#FFD166", "#06D6A0", "#118AB2", 
  "#EF476F", "#7209B7", "#3A86FF", "#FB5607", "#8338EC",
  "#FF006E", "#FFBE0B", "#3A86FF", "#FF5C8A", "#0DCAF0"
];

const platforms = [
  { 
    name: "Stripe", 
    color: "#635BFF",
    icon: "/EcoLogo/stripe.svg",
    boxColor: boxColors[0]
  },
  { 
    name: "Notion", 
    color: "#000000",
    icon: "/EcoLogo/notion.svg",
    boxColor: boxColors[1]
  },
  { 
    name: "Airtable", 
    color: "#FFBF00",
    icon: "/EcoLogo/airtable.svg",
    boxColor: boxColors[2]
  },
  { 
    name: "Supabase", 
    color: "#3ECF8E",
    icon: "/EcoLogo/supabase.svg",
    boxColor: boxColors[3]
  },
  { 
    name: "Firebase", 
    color: "#FFCA28",
    icon: "/EcoLogo/firebase.svg",
    boxColor: boxColors[4]
  },
  { 
    name: "AWS", 
    color: "#FF9900",
    icon: "/EcoLogo/aws.svg",
    boxColor: boxColors[5]
  },
  { 
    name: "Vercel", 
    color: "#000000",
    icon: "/EcoLogo/vercel.svg",
    boxColor: boxColors[6]
  },
  { 
    name: "Next.js", 
    color: "#000000",
    icon: "/EcoLogo/nextjs-svgrepo-com.svg",
    boxColor: boxColors[7]
  },
  { 
    name: "Tailwind", 
    color: "#06B6D4",
    icon: "/EcoLogo/tailwind-css.svg",
    boxColor: boxColors[8]
  },
  { 
    name: "Google Cloud", 
    color: "#4285F4",
    icon: "/EcoLogo/google-cloud.svg",
    boxColor: boxColors[9]
  },
  { 
    name: "Shopify", 
    color: "#7AB55C",
    icon: "/EcoLogo/shopify.svg",
    boxColor: boxColors[10]
  },
  { 
    name: "HubSpot", 
    color: "#FF7A59",
    icon: "/EcoLogo/hubspot.svg",
    boxColor: boxColors[11]
  },
];

// Fallback component in case SVG doesn't exist
const PlatformIcon = ({ platform }: { platform: typeof platforms[0] }) => {
  if (platform.icon) {
    return (
      <div 
        className="relative w-16 h-16 md:w-30 md:h-30 rounded-2xl flex items-center justify-center"
        style={{ backgroundColor: platform.boxColor }}
      >
        <div className="relative w-12 h-12 md:w-24 md:h-24">
          <Image
            src={platform.icon}
            alt={`${platform.name} logo`}
            fill
            className="object-contain"
            onError={(e) => {
              // Fallback to colored circle if image fails to load
              const target = e.target as HTMLElement;
              target.style.display = 'none';
              const parent = target.parentElement?.parentElement;
              if (parent) {
                parent.innerHTML = `<span class="text-white text-xl md:text-2xl font-bold">${platform.name.charAt(0)}</span>`;
              }
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
      style={{ backgroundColor: platform.boxColor }}
    >
      <span className="text-white text-xl md:text-2xl font-bold">
        {platform.name.charAt(0)}
      </span>
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
      
      .logo-item:hover {
        transform: scale(1.1);
      }

      .logo-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .logo-card:hover {
        box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.25);
      }
      
      @media (max-width: 768px) {
        .logo-item {
          margin: 0 1rem;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return (
    <section className="py-20 md:py-32 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-zinc-800 dark:text-zinc-200 font-anton font-normal">
              Trusted Platforms My Dashboards Integrate With
            </span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-4">
            Seamless integration with the tools you already use and love
          </p>
        </div>

        {/* Logo Scroll */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-r from-white dark:from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-linear-to-l from-white dark:from-black to-transparent z-10" />

          {/* Logos container */}
          <div className="overflow-hidden">
            <div ref={scrollRef} className="logos-container">
              {platforms.map((platform, index) => (
                <div key={index} className="logo-item">
                  <div className="logo-card p-6 rounded-2xl">
                    {/* Platform icon in colored box */}
                    <div className="flex items-center justify-center mb-3">
                      <PlatformIcon platform={platform} />
                    </div>
                    
                    {/* Platform name */}
                    <p className="text-center text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {platform.name}
                    </p>
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