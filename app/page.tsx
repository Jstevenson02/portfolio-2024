import ExperienceCard from "./components/ExperienceCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { experiences } from "./constants";

export default function Home() {
  return (
    <div className='flex w-screen h-screen overflow-scroll'>
      <div className='w-screen bg-blue-600'>
        <Hero />
        <Navbar />
      </div>
      <div className='flex flex-col w-screen'>
        <div id='about' className=''>
          <ExperienceCard experiences={experiences} />
        </div>
        <div id='experience' className=''>
          <ExperienceCard experiences={experiences} />
        </div>
      </div>
    </div>
  );
}
