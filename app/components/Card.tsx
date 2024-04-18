import React from "react";

interface Experience {
  title: string;
  company_name: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface ExperienceCardProps {
  experiences: Experience[];
}

const Card: React.FC<ExperienceCardProps> = ({ experiences }) => {
  return (
    <>
      {experiences.map((experience, index) => (
        <li key={index} className='mb-12 max-w-lg list-none'>
          <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover:list:opacity-50'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#191B1C]/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
            <header
              className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
              aria-label={experience.date}
            >
              {experience.date}
            </header>
            <div className='z-10 sm:col-span-6'>
              <h3 className='font-medium leading-snug text-slate-200'>
                <div>
                  <a
                    className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#A800FF] focus-visible:text-[#A800FF] group/link text-base'
                    href={""}
                    target='_blank'
                    rel='noreferrer noopener'
                    aria-label={`${experience.title} (opens in a new tab)`}
                  >
                    <span>{experience.title}</span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </a>
                </div>
                <div>
                  <div className='text-slate-500'>{experience.company_name}</div>
                </div>
              </h3>
              <div className='mt-2 text-sm leading-normal text-[#828282]'>
                {experience.points.map((point, idx) => (
                  <div key={idx}>{point}</div>
                ))}
              </div>
              {/* <ul className='mt-2 flex flex-wrap' aria-label='Technologies used'>
                {technologies.map((tech) => (
                  <li key={tech} className='mr-1.5 mt-2'>
                    <div className='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-[#A800FF]'>
                      {tech}
                    </div>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default Card;
