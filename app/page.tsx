// app/page.tsx
"use client";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BrandsShowcase from "./components/BrandsShowcase";
import FAQPage from "./components/Faq"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <BrandsShowcase />
      <FAQPage />
      <Footer />
    </div>
  );
}