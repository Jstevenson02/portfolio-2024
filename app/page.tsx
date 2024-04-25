"use client";

import { WheelEvent, useRef } from "react";
import Hero from "./components/Hero";
import ExperienceCard from "./components/ExperienceCard";
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
        <div
          className='bottom-0 px-10 py-10 space-y-10 min-h-96 lg:flex lg:flex-col lg:top-0 lg:px-20 lg:py-20 lg:w-1/3 lg:fixed'
          onWheel={handleWheel}
        >
          <Hero />
          <Navbar />
          <Links />
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
            <div className='px-10 py-10 lg:py-4'>
              <About />
            </div>

            <section id='experience'>
              <div className='mobileNavLink'>
                <h2 className='mobileNavText'>
                  <a className='px-4'>Experience</a>
                </h2>
              </div>
              <div className='px-10 py-10'>
                <ExperienceCard />
                <div className='mb-10'>
                  <a
                    className='inline-flex items-baseline text-[15px] leading-tight text-slate-200 hover:text-purple-500 focus-visible:text-purple-500 font-semibold  group/link text-base'
                    href='/resume.pdf'
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label='View Full Résumé (opens in a new tab)'
                  >
                    <span>
                      View Full{" "}
                      <span className='inline-block'>
                        Résumé
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                            clipRule='evenodd'
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </section>

            <section id='projects'>
              <div className='mobileNavLink'>
                <h2 className='mobileNavText'>
                  <a className='px-4'>Projects</a>
                </h2>
              </div>
              <div className='px-10'>
                <ProjectCard />
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className='sm:block hidden'>
        <Portal />
      </div>
    </>
  );
}
