"use client";

import { WheelEvent, useRef } from "react";
import Hero from "./components/Hero";
import ExperienceCard from "./components/ExperienceCard";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Links from "./components/Links";
import Portal from "./components/Portal";

export default function Home() {
  const rightPanelRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: WheelEvent<HTMLDivElement>): void => {
    if (rightPanelRef.current) {
      event.preventDefault();
      rightPanelRef.current.scrollTop += event.deltaY * 2;
    }
  };

  return (
    <>
      <div className='lg:flex items-center justify-center min-h-screen'>
        {/* Left Container */}
        <div>
          <div
            className='bottom-0 px-10 py-10 space-y-10 lg:flex lg:flex-col lg:top-0 lg:px-20 lg:py-20 lg:w-1/3 lg:fixed'
            onWheel={handleWheel}
          >
            <Hero />
            <Navbar />
            <Links />
          </div>
        </div>

        {/* Right panel */}
        <div className='min-h-screen'>
          <div
            className='flex flex-col justify-center  ml-auto max-w-screen-xl lg:w-1/2 lg:overflow-hidden '
            ref={rightPanelRef}
          >
            <div className='mobileNavLink'>
              <h2 className='mobileNavText px-4'>About</h2>
            </div>
            <div className='px-10 py-10 lg:py-0'>
              <About />
            </div>
            <div className='mobileNavLink'>
              <h2 className='mobileNavText'>
                <Link className='px-4' href='/#experience'>
                  Experience
                </Link>
              </h2>
            </div>
            <div className='px-10 py-10' id='experience'>
              <ExperienceCard />
            </div>
            <div className='mobileNavLink'>
              <h2 className='mobileNavText'>
                <Link className='px-4' href='/#projects'>
                  Projects
                </Link>
              </h2>
            </div>
            <div className='px-10' id='projects'>
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
      <div className='sm:block hidden'>
        <Portal />
      </div>
    </>
  );
}
