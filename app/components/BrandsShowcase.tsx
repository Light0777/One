// components/SimplePlatformsScroll.tsx
"use client";

import { useRef, useEffect } from "react";

const platforms = [
  { name: "Stripe", color: "#635BFF" },
  { name: "Notion", color: "#000000" },
  { name: "Airtable", color: "#FFBF00" },
  { name: "Supabase", color: "#3ECF8E" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "AWS", color: "#FF9900" },
  { name: "Vercel", color: "#000000" },
  { name: "Next.js", color: "#000000" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Google Cloud", color: "#4285F4" },
  { name: "Shopify", color: "#7AB55C" },
  { name: "HubSpot", color: "#FF7A59" },
];

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
        transition: transform 0.3s ease;
      }
      
      .logo-item:hover {
        transform: scale(1.1);
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
            <span className="text-zinc-800 dark:text-zinc-200 font-anton font-normal">Trusted Platforms My Dashboards Integrate With</span>
          </h2>
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
                  <div
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300"
                    style={{ backgroundColor: platform.color }}
                  >
                    <span className="text-white text-xl md:text-2xl font-bold">
                      {platform.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-center mt-3 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    {platform.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}