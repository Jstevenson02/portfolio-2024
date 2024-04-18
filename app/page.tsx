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
    <div className='flex justify-center h-screen scroll-smooth' onWheel={handleWheel}>
      <div className='flex flex-col'>
        <Hero />
        <Navbar />
      </div>

      <div
        className='flex flex-col overflow-y-auto scroll-smooth pt-24 lg:w-1/2 lg:py-24'
        ref={rightPanelRef}
      >
        <div className='container mx-auto`'>
          <p id='about' className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Pretium nibh ipsum consequat nisl vel
            pretium lectus quam.
          </p>
        </div>
        <div id='experience'>
          <Card experiences={experiences} />
        </div>
        <div id='projects'>test</div>
      </div>
    </div>
  );
}
