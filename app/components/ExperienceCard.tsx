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

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experiences }) => {
  return (
    <div className='grid grid-cols-1 gap-4 w-1/2 '>
      {experiences.map((experience, index) => (
        <div key={index} className='card  rounded-lg p-4'>
          <div className='flex items-center space-x-3 mb-4'>
            <div>
              <h5 className='text-lg font-bold'>{experience.title}</h5>
              <p className='text-sm text-gray-500'>{experience.company_name}</p>
            </div>
          </div>
          <div className='text-sm'>
            <p className='text-gray-600 mb-2'>{experience.date}</p>
            <ul className='list-none pl-5'>
              {experience.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
