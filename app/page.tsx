"use client";

import { WheelEvent, useRef } from "react";
import { experiences } from "./constants";
import Hero from "./components/Hero";
import ExperienceCard from "./components/ExperienceCard";
import Links from "./components/Links";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Navbar from "./components/Navbar";

export default function Home() {
  const rightPanelRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: WheelEvent<HTMLDivElement>): void => {
    if (rightPanelRef.current) {
      event.preventDefault();
      rightPanelRef.current.scrollTop += event.deltaY * 2;
    }
  };

  return (
    <div className='lg:flex min-h-screen'>
      {/* Left Container */}
      <div className='lg:fixed top-0 bottom-0 lg:w-1/2 p-10 space-y-6' onWheel={handleWheel}>
        <Hero />
        <nav>
          <Navbar />
        </nav>
      </div>

      {/* Right panel */}
      <div
        className='ml-auto max-w-screen-md lg:w-1/2 lg:overflow-auto flex flex-col justify-center pr-10'
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
      <div className='lg:bottom-0 lg:fixed p-6 flex justify-center items-center'>
        <Links />
      </div>
    </div>
    // <div className='lg:flex lg:justify-between min-h-screen'>
    //   <div
    //     className='lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-2'
    //     onWheel={handleWheel}
    //   >
    //     <div className='flex flex-col'>
    //       <div className='w-full p-4 mt-4'>
    //         <Hero />
    //       </div>
    //       <div className='w-full p-4 mt-4'>
    //         <Navbar />
    //       </div>
    //     </div>
    //     <div className='lg:bottom-0 lg:fixed'>
    //       <Links />
    //     </div>
    //   </div>
    //   <div className='lg:w-1/2 lg:py-24' ref={rightPanelRef}>
    //     <div className='mobileNavLink'>
    //       <h2 className='mobileNavText'>About</h2>
    //     </div>
    //     <About />
    //     <div className='mobileNavLink'>
    //       <h2 className='mobileNavText'>
    //         <Link href='/#experience'>Experience</Link>
    //       </h2>
    //     </div>
    //     <div id='experience'>
    //       <ExperienceCard experiences={experiences} />
    //     </div>
    //     <div className='mobileNavLink'>
    //       <h2 className='mobileNavText'>
    //         <Link href='/#projects'>Projects</Link>
    //       </h2>
    //     </div>
    //     <div className='mt-32' id='projects'>
    //       <ProjectCard />
    //     </div>
    //   </div>
    // </div>
  );
}
