import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  HTML,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  computer,
  cap,
  wrench,
  stuller,
  walter,
  youtoon,
  fitclub,
  ecommerce,
} from "../assets";

import quotegenerator from "../assets/quotegenerator.svg";

import blippy from "../assets/blippy.gif";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Django Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: HTML,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Remote Service Engineer",
    company_name: "Novatech",
    icon: computer,
    iconBg: "#FFFFFF",
    date: " 2023 - Present",
    points: [
      "Created readable reusable documentation using Nextra.js.",
      "Maintaining and tracking all of thousands of customers through database systems.",
      "Developed end user tools in batch script to facilitate a smoother UX experience.",
      "Troubleshooting, repairing and installing of large format MFP and industrial Copy machines",
    ],
    tech: ["TS", "React", "Nextra", "Batch", "Hardware", "Networking"],
  },
  {
    title: "South Louisiana Community College",
    company_name: "Student",
    icon: cap,
    iconBg: "#FFFFFF",
    date: "2021 -  2023",
    points: [
      "Studied legacy technologies in pursuit of an Associates of Applied Sciences",
      "Classes consisted of Java programming using JavaEE and Java Server Faces",
      "Learning networking fundamentals through Cisco Netacad coursework",
      "Programming classes were limited to the study of Java, HTML and C#",
    ],
    tech: ["Java", "HTML", "C#", "JavaEE", "JSF"],
  },
  {
    title: "SysOps Technician",
    company_name: "Stuller",
    icon: stuller,
    iconBg: "#FFFFFF",
    date: "2021 - 2022",
    points: [
      "Answered internal phone calls, troubleshoot user issues using remote software.",
      "Repaired, deployed and designed hardware and software solutions for internal users and departments.",
      "Optimized legacy procedures through usage of batch scripts for installing software.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    tech: ["Batch", "HTML", "CSS", "Azure AD"],
  },
  {
    title: "University of Louisiana at Lafayette",
    company_name: "Student",
    icon: cap,
    iconBg: "#FFFFFF",
    date: "2020 - 2021",
    points: [
      "Studied Computer Science in pursuit of a Bachelors degree",
      "Classes consisted of learning low level circuitry using logisim.",
      "Developing math skills in Trigonometry and statistics.",
      "Programming classes were limited to the study of Python and C++",
    ],
    tech: ["Java", "C++", "Python"],
  },
  {
    title: "IT Technician",
    company_name: "Dog House Computers",
    icon: wrench,
    iconBg: "#FFFFFF",
    date: "  2019 - May 2020",
    points: [
      "Worked on end-user computers and servers.",
      "Fixed hardware, software and firmware issues.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Throughout, I gained experience on Mac OS, Windows and Linux systems.",
    ],
    tech: ["Hardware", "Mac", "Windows", "Linux"],
  },
  {
    title: "IT Lead Technician",
    company_name: "Southside Highschool",
    icon: cap,
    iconBg: "#FFFFFF",
    date: "  2016 -  2020",
    points: [
      "Work consisted of repairing staff and student computers and tablets.",
      "Configuring networking settings and remedy wifi connectivity issues.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Managing the registration and distribution of technology around campus.",
    ],
    tech: ["Java", "HTML", "C++", "JavaEE", "JSF"],
  },
  {
    title: "Self Taught Developer",
    company_name: "Home",
    icon: computer,
    iconBg: "#FFFFFF",
    date: " 2010 - Present",
    points: [
      "Programming my first games using Scratch drag and drop low-code editor.",
      "Maintaining and tracking all of my class projects while in college using Git.",
      "Collaborating with my friends using Gitlab to maintain structure on our projects.",
      "Developing and maintaining web applications using React.js and other related technologies.",
    ],
    tech: ["JS", "React", "React Native", "TS", "MERN", "CRUD"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Blippy Image Engine",
    description: "Custom Vector Indexing AI desktop application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap-css",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "violet-text-gradient",
      },
      {
        name: "docker",
        color: "orange-text-gradient",
      },
      {
        name: "sqlite3",
        color: "pink-text-gradient",
      },
      {
        name: "electron",
        color: "blue-text-gradient",
      },
    ],
    image: blippy,
    live_code_link: "https://github.com/Jstevenson02",
    source_code_link: "https://github.com/Jstevenson02",
  },
  {
    name: "Walter AI",
    description: "API Wrapper for Open AI's generative Davinci model.",
    tags: [
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap-css",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite3",
        color: "pink-text-gradient",
      },
    ],
    image: walter,
    live_code_link: "https://github.com/Jstevenson02",
    source_code_link: "https://github.com/Jstevenson02",
  },
  {
    name: "YouToon",
    description: "RapidAPI YouTube clone web application.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: youtoon,
    live_code_link: "https://youtube-clone-six-henna.vercel.app/",
    source_code_link: "https://github.com/Jstevenson02/youtube-clone",
  },
  {
    name: "Fitness Club",
    description: "RapidAPI Fitness Database web application",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: fitclub,
    live_code_link: "https://fitness-club-six.vercel.app/",
    source_code_link: "https://github.com/Jstevenson02/fitness-react",
  },
  {
    name: "E-Commerce Store",
    description: "Full-Stack CRUD E-commerce Store with sign-up and admin panel.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "stripeapi",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    live_code_link: "https://handmade-bydesign.com/",
    source_code_link: "https://github.com/Jstevenson02/",
  },
  {
    name: "Quote Generator",
    description: "HTML, CSS and JavaScript random quote generator.",
    tags: [
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: quotegenerator,
    live_code_link: "https://random-quote-generator-ten-kappa.vercel.app/",
    source_code_link:
      "https://github.com/Jstevenson02/FCC-Projects/tree/master/random-quote-generator",
  },
];

export { services, technologies, experiences, testimonials, projects };
