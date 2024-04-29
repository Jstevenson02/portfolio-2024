import React from "react";

const Footer = () => {
  return (
    <footer className='max-w-md pb-16 text-sm text-[#828282] sm:pb-0'>
      <div>
        Influenced design by{" "}
        <span className='text'>
          <a className='text-[#bfbfbf]' href='https://brittanychiang.com/' target='_blank'>
            Brittany
          </a>
        </span>{" "}
        developed in{" "}
        <a className='text-[#bfbfbf]' href='https://code.visualstudio.com/' target='_blank'>
          Visual Studio Code{" "}
        </a>
        and coded by me. Built using{" "}
        <a className='text-[#bfbfbf]' href='https://nextjs.org/' target='_blank'>
          Next.js{" "}
        </a>
        and{" "}
        <a className='text-[#bfbfbf]' href='https://tailwindcss.com/' target='_blank'>
          Tailwind CSS{" "}
        </a>
        and hosted on{" "}
        <a className='text-[#bfbfbf]' href='https://vercel.com/' target='_blank'>
          Vercel
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
