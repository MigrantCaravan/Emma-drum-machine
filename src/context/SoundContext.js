"use client";
import React, { createContext, useState } from "react";

export const SoundContext = createContext();

export function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <SoundContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export default SoundProvider;
