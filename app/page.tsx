"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <div className='flex w-screen h-screen'>
        <div className='w-1/2 p-4 flex flex-col'>
          <Link className='navLink' href={"/#about"}>
            ABOUT
          </Link>
          <Link className='navLink' href={"/#about"}>
            EXPERIENCE
          </Link>
          <Link className='navLink' href={"/#about"}>
            PROJECTS
          </Link>
          <div className='hover-line-text'>
            <div className={`text-container ${isActive ? "active" : ""}`} onClick={handleClick}>
              <span>Hover over me!</span>
            </div>
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
