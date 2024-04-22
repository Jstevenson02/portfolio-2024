"use client";

import { WheelEvent, useRef } from "react";
import { experiences } from "./constants";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ExperienceCard from "./components/ExperienceCard";
import Links from "./components/Links";
import Link from "next/link";
import ProjectCard from "./components/ProjectCard";
import Portal from "./components/Portal";

export default function Home() {
  const rightPanelRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: WheelEvent<HTMLDivElement>): void => {
    if (rightPanelRef.current) {
      event.preventDefault(); // Prevent default scrolling behavior on the left panel
      rightPanelRef.current.scrollTop += event.deltaY * 2; // Apply scroll delta to the right panel
    }
  };

  return (
    <>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <div
            className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:py-2'
            onWheel={handleWheel}
          >
            <Hero />

            <Navbar />

            <div className='lg:bottom-0 lg:fixed'>
              <Links />
            </div>
          </div>
          <div className=' lg:w-1/2 lg:py-24' ref={rightPanelRef}>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1A1C1D]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
              <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                About
              </h2>
            </div>
            <div className='pb-32 pt-2 text-[#9B9B9B]'>
              Back in 2010, at eight years old, I was given my first computer and never looked back.
              In those early years I &quot;wrote&quot;{" "}
              <span className='text-slate-200'>Scratch</span> programs using the low-code drag and
              drop editor. Accelerate to today I use <span className='text-slate-200'>React</span>{" "}
              and <span className='text-slate-200'>TypeScript</span> to write{" "}
              <span className='text-slate-200'>Full-Stack</span> web apps.
            </div>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1A1C1D]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
              <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                <Link href='/#experience'>Experience</Link>
              </h2>
            </div>
            <div id='experience'>
              <ExperienceCard experiences={experiences} />
            </div>
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1A1C1D]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
              <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                <Link href='/#projects'>Projects</Link>
              </h2>
            </div>
            <div className='mt-32' id='projects'>
              <ProjectCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
