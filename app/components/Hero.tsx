import React from "react";

const Hero = () => {
  return (
    <div>
      <a className='text-4xl font-bold tracking-tight text-slate-200 lg:text-5xl' href='/'>
        Jacob Stevenson
      </a>
      <h2 className='mt-3 text-base font-medium tracking-tight text-slate-200  lg:text-lg '>
        Software Engineer
      </h2>
      <p className='mt-4 max-w-sm text-[#9b9b9b] leading-normal'>
        I develop web applications, user interfaces, and backend databases.
      </p>
    </div>
  );
};

export default Hero;
