"use client";

import { WheelEvent, useRef } from "react";
import Hero from "./components/Hero";
import ExperienceCard from "./components/ExperienceCard";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Links from "./components/Links";

export default function Home() {
  const rightPanelRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: WheelEvent<HTMLDivElement>): void => {
    if (rightPanelRef.current) {
      event.preventDefault();
      rightPanelRef.current.scrollTop += event.deltaY * 2;
    }
  };

  return (
    <div className='lg:flex items-center justify-center min-h-screen'>
      {/* Left Container */}
      <div>
        <div
          className='flex flex-col top-0 bottom-0 px-6 py-10 space-y-10 lg:px-20 lg:py-20 lg:w-1/3 lg:fixed'
          onWheel={handleWheel}
        >
          <Hero />
          <Navbar />
          <Links />
        </div>
      </div>

      {/* Right panel */}
      <div>
        <div
          className='flex flex-col justify-center pr-10 ml-auto max-w-screen-xl lg:w-1/2 lg:overflow-hidden '
          ref={rightPanelRef}
        >
          <div className='mobileNavLink'>
            <h2 className='mobileNavText'>About</h2>
          </div>
          <div className='p-6'>
            <About />
          </div>
          <div className='mobileNavLink'>
            <h2 className='mobileNavText'>
              <Link href='/#experience'>Experience</Link>
            </h2>
          </div>
          <div id='experience' className='p-6'>
            <ExperienceCard />
          </div>
          <div className='mobileNavLink'>
            <h2 className='mobileNavText'>
              <Link href='/#projects'>Projects</Link>
            </h2>
          </div>
          <div id='projects' className='p-6'>
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}
