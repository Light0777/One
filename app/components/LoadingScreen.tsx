import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
  isLoading?: boolean;
  onComplete?: () => void;
}

const LoadingScreen = ({ isLoading = true, onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const loadingScreenRef = useRef(null);
  const mainTextRef = useRef(null);
  const percentageRef = useRef(null);
  const progressRef = useRef(null);

  // Simulate loading progress
  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isLoading]);

  // Handle completion and exit animation
  useEffect(() => {
    if (progress === 100 && isLoading) {
      // Small delay before starting exit animation
      const timer = setTimeout(() => {
        closeLoading();
      }, 500); // Wait 500ms at 100% before exiting

      return () => clearTimeout(timer);
    }
  }, [progress, isLoading]);

  const closeLoading = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Animate percentage counter (similar to menu items)
    if (percentageRef.current) {
      tl.to(percentageRef.current, {
        duration: 0.4,
        y: 80,
        opacity: 0,
        ease: 'power3.in',
      }, 0);
    }

    // Animate main text with slight delay
    if (mainTextRef.current) {
      tl.to(mainTextRef.current, {
        duration: 0.4,
        y: -100,
        opacity: 0,
        ease: 'power3.in',
      }, '-=0.2');
    }

    // Animate the background (similar to menuBgRef)
    if (loadingScreenRef.current) {
      tl.to(loadingScreenRef.current, {
        duration: 0.6,
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'power3.inOut',
      }, '-=0.2');
    }

    // Optional: Add opacity fade at the end
    tl.to(loadingScreenRef.current, {
      duration: 0.3,
      opacity: 0,
      ease: 'power2.in',
    }, '-=0.1');
  };

  if (!isLoading) return null;

  return (
    <div 
      ref={loadingScreenRef}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Main text in center */}
      <div className="text-center" ref={mainTextRef}>
        <h1 className="text-white text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] 2xl:text-[22rem] font-bold font-anton tracking-wide">10B/10</h1>
      </div>

      {/* Large percentage display bottom right */}
      <div className="absolute bottom-8 right-8" ref={percentageRef}>
        <div className="text-right">
          <div className="text-white font-mono text-8xl sm:text-9xl font-bold tracking-tighter">
            {progress}<span className="text-yellow-300">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;