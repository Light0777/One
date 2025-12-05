// context/BackgroundContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface BackgroundContextType {
  isWhiteBg: boolean;
  setIsWhiteBg: (value: boolean) => void;
  bgProgress: number; // Add progress value
  setBgProgress: (value: number) => void; // Add setter for progress
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export function BackgroundProvider({ children }: { children: ReactNode }) {
  const [isWhiteBg, setIsWhiteBg] = useState(false);
  const [bgProgress, setBgProgress] = useState(0); // Initialize progress

  return (
    <BackgroundContext.Provider value={{ 
      isWhiteBg, 
      setIsWhiteBg, 
      bgProgress, // Provide progress
      setBgProgress // Provide setter
    }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
}