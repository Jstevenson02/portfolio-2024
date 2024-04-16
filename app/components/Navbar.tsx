"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Add type annotation for state

  const items: { label: string; to: string }[] = [
    { label: "ABOUT", to: "/#about" },
    { label: "EXPERIENCE", to: "/#experience" },
    { label: "PROJECTS", to: "/#projects" },
  ];
  const handleClick = (index: number): void => {
    setActiveIndex(index); // Function with type annotation for parameter and return type
  };

  return (
    <>
      <div className='hover-line-text'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`text-container ${activeIndex === index ? "active" : ""}`}
            onClick={() => handleClick(index)}
          >
            <Link href={item.to} className='hover-effect w-full h-full'>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
