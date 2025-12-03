// components/ScrollExactText.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollExactText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const lines = [
    { 
      text: "Hey, we're oneGrow.Studioand we help businesses stop drowning in spreadsheets.", 
      isBold: true 
    },
    { 
      text: "If your data is scattered everywhere, we build dashboards that pull it all together clean, fast, and actually easy to use. E-commerce, service businesses, creators… if it runs online, we can make it run smoother,", 
      isBold: false 
    },
    { 
      text: "we keep things simple: one place to track everything that matters, Less chaos, more clarity — so you can focus on growing, not guessing.", 
      isBold: false 
    }
  ];

  // Flatten all words for counting
  const allWords = lines.flatMap(line => line.text.split(' '));
  const totalWords = allWords.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate progress based on element position
      const visibleHeight = windowHeight - elementTop;
      const progress = Math.max(0, Math.min(1, visibleHeight / (elementHeight * 0.6)));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const revealedWords = Math.floor(scrollProgress * totalWords);

  let wordCounter = 0;

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-22">
        <div className="space-y-6 md:space-y-8">
          {lines.map((line, lineIndex) => {
            const words = line.text.split(' ');
            
            return (
              <div 
                key={lineIndex}
                className={`leading-tight md:leading-normal ${
                  line.isBold 
                    ? 'text-3xl sm:text-4xl md:text-5xl font-semibold'
                    : 'text-3xl sm:text-4xl md:text-5xl font-semibold'
                }`}
              >
                {words.map((word, wordIndex) => {
                  const globalWordIndex = wordCounter++;
                  const isRevealed = globalWordIndex < revealedWords;
                  const revealProgress = Math.max(0, Math.min(1, (revealedWords - globalWordIndex) / 15));
                  
                  return (
                    <span
                      key={`${lineIndex}-${wordIndex}`}
                      className={`inline-block mr-[0.3em] transition-all duration-300 ease-out ${
                        isRevealed 
                          ? 'text-white opacity-100' 
                          : 'text-gray-500 opacity-20'
                      }`}
                      style={{
                        transform: isRevealed 
                          ? `translateY(0) scale(${0.98 + (revealProgress * 0.02)})`
                          : 'translateY(6px) scale(0.98)',
                        transitionDelay: `${globalWordIndex * 15}ms`
                      }}
                    >
                      {word}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}