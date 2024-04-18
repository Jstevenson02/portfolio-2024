"use client";

import { WheelEvent, useRef } from "react";
import { experiences } from "./constants";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function Home() {
  const rightPanelRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: WheelEvent<HTMLDivElement>): void => {
    if (rightPanelRef.current) {
      event.preventDefault(); // Prevent default scrolling behavior on the left panel
      rightPanelRef.current.scrollTop += event.deltaY * 2; // Apply scroll delta to the right panel
    }
  };

  return (
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        <div
          className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-2'
          onWheel={handleWheel}
        >
          <div>
            <Hero />
            <Navbar />
          </div>
        </div>
        <div className=' lg:w-1/2 lg:py-24' ref={rightPanelRef}>
          <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1A1C1D]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
              About
            </h2>
          </div>
          <div id='about' className='py-10 lg:py-2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel
            pretium lectus quam.
          </div>
          <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1A1C1D]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
              Experience
            </h2>
          </div>
          <div id='experience'>
            <Card experiences={experiences} />
          </div>
          <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#1A1C1D]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
            <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
              Projects
            </h2>
          </div>
          <div>Projects Here</div>
        </div>
      </div>
    </div>
  );
}

// <div className='flex h-screen scroll-smooth' onWheel={handleWheel}>
//   <div className='flex flex-col'>
//     <Hero />
//     <Navbar />
//   </div>

//   <div
//     className='flex flex-col overflow-y-auto scroll-smooth pt-24  lg:py-24'
//     ref={rightPanelRef}
//   >
//     <div className='container mx-auto`'>
//       <p id='about' className='max-w-md p-10'>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//         incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel
//         pretium lectus quam.
//       </p>
//     </div>
//     <div id='experience'>
//       <Card experiences={experiences} />
//     </div>
//     <div id='projects'>test</div>
//   </div>
// </div>;
