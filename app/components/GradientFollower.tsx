"use client";

import React, { useState } from "react";

interface GradientPosition {
  x: number;
  y: number;
}

const GradientFollower: React.FC = () => {
  const [gradient, setGradient] = useState<GradientPosition>({ x: 50, y: 50 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - left) / width) * 100;
    const y = ((event.clientY - top) / height) * 100;
    setGradient({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className='w-full h-screen flex justify-center items-center'
      style={{
        background: `radial-gradient(circle 450px at ${gradient.x}% ${gradient.y}%, #2b2b2b, #1A1C1D)`,
      }}
    >
      <p className='text-white text-lg font-semibold'>Move your cursor over here!</p>
    </div>
  );
};

export default GradientFollower;
