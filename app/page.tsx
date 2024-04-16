"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Add type annotation for state

  const items: { label: string; to: string }[] = [
    { label: "About", to: "/#about" },
    { label: "Experience", to: "/#experience" },
    { label: "Projects", to: "/#projects" },
  ];
  const handleClick = (index: number): void => {
    setActiveIndex(index); // Function with type annotation for parameter and return type
  };

  return (
    <>
      <div className='flex w-screen h-screen'>
        <div className='w-1/2 p-4 flex flex-col'>
          <div className='hover-line-text'>
            {items.map((item, index) => (
              <div
                key={index}
                className={`text-container ${activeIndex === index ? "active" : ""}`}
                onClick={() => handleClick(index)}
              >
                <Link href={item.to} className='hover-effect'>
                  {item.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='w-1/2 p-4'>
          <div id='container' className='container'>
            <h1 id='about' className='h-full'>
              About
            </h1>
            <h2 id='experience' className='h-full'>
              Experience
            </h2>
            <h3 id='projects'>Projects</h3>
          </div>
        </div>
      </div>
    </>
  );
}
