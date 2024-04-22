import React from "react";

const Hero = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
        <a href='/'>Jacob Stevenson</a>
      </h1>
      <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
        Junior Frontend Engineer
      </h2>
      <p className='mt-4 max-w-sm text-[#9b9b9b] leading-normal'>
        I develop web applications, user interfaces, and backend databases.
      </p>
    </div>
  );
};

export default Hero;
