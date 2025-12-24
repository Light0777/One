// app/layout.tsx
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = localFont({
  src: "./fonts/Anton-Regular.ttf",
  variable: "--font-anton",
  weight: "400",
});

const geistMonoLocal = localFont({
  src: "./fonts/GeistMono-VariableFont_wght.ttf",
  variable: "--font-geistmono-local",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize GSAP
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>oneGrow.Studio</title>
        <meta name="description" content="We build custom dashboards that help businesses stop drowning in spreadsheets." />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${geistMonoLocal.variable} antialiased`}
      >
          {children}
      </body>
    </html>
  );
}