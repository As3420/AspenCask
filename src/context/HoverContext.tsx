import React, { createContext, useState, useEffect, ReactNode } from "react";
import { LocalStorageKeys } from "./context.model";

// Define the type for the hover context
interface HoverContextType {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
  clearHoverState: () => void;
}

// Create a hover context
export const HoverContext = createContext<HoverContextType | undefined>(
  undefined
);

// Provider component to wrap around the app
export const HoverProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(() => {
    const savedState = localStorage.getItem(LocalStorageKeys.HOVER_STATE);
    return savedState === "true";
  });

  // Persist the state in localStorage on change
  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.HOVER_STATE, isHovered.toString());
  }, [isHovered]);

  // Clear hover state function
  const clearHoverState = () => {
    localStorage.removeItem(LocalStorageKeys.HOVER_STATE);
    setIsHovered(false);
  };

  return (
    <HoverContext.Provider value={{ isHovered, setIsHovered, clearHoverState }}>
      {children}
    </HoverContext.Provider>
  );
};
