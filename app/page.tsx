"use client";

import { WheelEvent, useRef } from "react";
import Hero from "./components/Hero";
import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Links from "./components/Links";
import Footer from "./components/Footer";
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
    <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
      <div className='lg:flex lg:justify-between lg:gap-4'>
        {/* Left Container */}
        <header
          className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'
          onWheel={handleWheel}
        >
          <div>
            <Hero />
            <nav className='nav hidden lg:block' aria-label='In-page jump links'>
              <Navbar />
            </nav>
            <Links />
          </div>
        </header>

        {/* Right panel */}

        <main className='pt-24 lg:w-1/2 lg:py-24' ref={rightPanelRef}>
          <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <div className='mobileNavBg'>
              <h2 className='mobileNavLink'>About</h2>
            </div>
            <div>
              <About />
            </div>
          </section>

          <section id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <div className='mobileNavBg'>
              <h2 className='mobileNavLink'>Experience</h2>
            </div>
            <div>
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

          <section id='projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
            <div className='mobileNavBg'>
              <h2 className='mobileNavLink'>Projects</h2>
            </div>
            <div>
              <ProjectCard />
              <div className='mt-12'>
                <a
                  className='inline-flex items-center leading-tight text-slate-200 font-semibold group'
                  aria-label='View Full Project Archive'
                  href='/projects'
                >
                  <span>
                    <span className='span-underline'></span>
                    <span className='whitespace-nowrap'>
                      <span className='span-underline'>View Full Project Archive</span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        className='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none'
                        aria-hidden='true'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </section>

          <Footer />
        </main>
      </div>
      <Portal />
    </div>
  );
}
