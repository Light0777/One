// app/page.tsx
"use client";

import LoadingScreen from './components/LoadingScreen';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandsShowcase from "./components/BrandsShowcase";
import FAQPage from "./components/Faq"
import Footer from "./components/Footer"
import { useEffect, useState } from 'react';
import gsap from 'gsap';

export default function Home() {

   const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    // This will be called after the exit animation completes
    setIsLoading(false);
    
    // Optional: Animate in your main content
    gsap.fromTo(".main-content", 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  };
  return (
    <div className="font-sans">
      <LoadingScreen isLoading={isLoading} onComplete={handleLoadingComplete} />
      <Navbar />
      <HeroSection />
      <BrandsShowcase />
      <FAQPage />
      <Footer />
    </div>
  );
}