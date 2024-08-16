"use client";

import React, { ReactNode, useState, useEffect } from "react";

interface GradientPosition {
  x: number;
  y: number;
}

interface GradientFollowerProps {
  children?: ReactNode;
}

const GradientFollower: React.FC<GradientFollowerProps> = ({ children }) => {
  const [gradient, setGradient] = useState<GradientPosition>({ x: 50, y: 50 });
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Effect to check the screen size
  useEffect(() => {
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint for Tailwind by default
    };

    updateScreenSize(); // Check on mount
    window.addEventListener("resize", updateScreenSize); // And on resize

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isLargeScreen) return; // Ignore mouse move on small screens

    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    setGradient({ x, y });
  };

  const alpha = .6; // Define your alpha value here

  const backgroundStyle = isLargeScreen
    ? {
        background: `radial-gradient(circle 350px at ${gradient.x}% ${gradient.y}%,  rgba(43, 43, 43, ${alpha}), rgba(26, 28, 29, ${alpha}))`,
      }
    : {};

  return (
    <div onMouseMove={handleMouseMove} style={backgroundStyle}>
      {children}
    </div>
  );
};

export default GradientFollower;
