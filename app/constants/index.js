import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
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
import photoweb from "../assets/photowebsite.png";
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
    icon: html,
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
    title: "Remote Support Specialist",
    company_name: "Novatech",
    icon: computer,
    iconBg: "#FFFFFF",
    date: " 2023 - Present",
    points:
      "Created readable reusable documentation using Nextra.js. Maintaining and tracking all of thousands of customers through database systems. Developed end user tools in batch script to facilitate a smoother UX experience. Troubleshooting, repairing and installing of large format MFP and industrial Copy machines.",
    tech: ["TS", "React", "Nextra", "Batch", "Hardware", "Networking"],
  },
  {
    title: "SLCC",
    company_name: "Student",
    icon: cap,
    iconBg: "#FFFFFF",
    date: "2021 -  2023",
    points:
      "Studied legacy technologies in pursuit of an Associates of Applied Sciences. Classes consisted of Java programming using JavaEE and Java Server Faces. Learning networking fundamentals through Cisco Netacad coursework.",
    tech: ["Java", "HTML", "C#", "JavaEE", "JSF"],
  },
  {
    title: "SysOps Technician",
    company_name: "Stuller",
    icon: stuller,
    iconBg: "#FFFFFF",
    date: "2021 - 2022",
    points:
      "Answered internal phone calls, troubleshoot user issues using remote software. Repaired, deployed and designed hardware and software solutions for internal users and departments. Optimized legacy procedures through usage of batch scripts for installing software. Participating in code reviews and providing constructive feedback to other developers.",
    tech: ["Batch", "HTML", "CSS", "Azure AD"],
  },
  {
    title: "ULL",
    company_name: "Student",
    icon: cap,
    iconBg: "#FFFFFF",
    date: "2020 - 2021",
    points:
      "Studied Computer Science in pursuit of a Bachelors degree. Classes consisted of learning low level circuitry using logisim. Developing math skills in Trigonometry and statistics. Programming in C++, C and Python",
    tech: ["Java", "C++", "Python", "C"],
  },
  {
    title: "IT Technician",
    company_name: "Dog House Computers",
    icon: wrench,
    iconBg: "#FFFFFF",
    date: "  2019 - May 2020",
    points:
      "Worked on end-user computers and servers. Fixed hardware, software and firmware issues. Implementing responsive design and ensuring cross-browser compatibility. Throughout, I gained experience on Mac OS, Windows and Linux systems.",
    tech: ["Hardware", "Mac", "Windows", "Linux"],
  },
  {
    title: "IT Lead Technician",
    company_name: "Southside Highschool",
    icon: cap,
    iconBg: "#FFFFFF",
    date: "  2016 -  2020",
    points:
      "Work consisted of repairing staff and student computers and tablets. Configuring networking settings and remedy wifi connectivity issues. Implementing responsive design and ensuring cross-browser compatibility. Managing the registration and distribution of technology around campus.",

    tech: ["Java", "HTML", "C++", "JavaEE", "JSF"],
  },
  {
    title: "Self Taught Developer",
    company_name: "Home",
    icon: computer,
    iconBg: "#FFFFFF",
    date: " 2010 - Present",
    points:
      "Programming my first games using Scratch drag and drop low-code editor. Maintaining and tracking all of my class projects while in college using Git. Collaborating with my friends using Gitlab to maintain structure on our projects. Developing and maintaining web applications using React.js and other related technologies.",
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

const project_archive = [
  {
    pro: "Nextra",
    ject: "Docs",
    project_fullname: "Novadocs",
    made_at: "Novatech",
    date: 2024,
    project_link: "https://novadocsinstall.vercel.app/",
    project_link_string: "novadocsinstall.vercel.app",
    tech: ["Next.js", "JSX", "Nextra", "MDX"],
  },
  {
    pro: "Quote",
    ject: "Generator",
    project_fullname: "Quote Generator",
    made_at: "Home",
    date: 2023,
    project_link: "https://random-quote-generator-ten-kappa.vercel.app/",
    project_link_string: "random-quote-generator.vercel.app",
    tech: ["javascript", "HTML", "CSS"],
  },
  {
    pro: "YouTube",
    ject: "Clone",
    project_fullname: "YouToon",
    made_at: "Home",
    date: 2023,
    project_link: "https://youtube-clone-six-henna.vercel.app/",
    project_link_string: "youtube-clone.vercel.app",
    tech: ["react", "rapidapi", "material-ui"],
  },
  {
    pro: "Walter",
    ject: "AI",
    project_fullname: "Walter AI",
    made_at: "Home",
    date: 2023,
    project_link: "https://github.com/Jstevenson02",
    project_link_string: "Private Source",
    tech: ["django", "bootstrap-css", "sqlite3"],
  },
  {
    pro: "Blippy",
    ject: "AI",
    project_fullname: "Blippy Image Engine",
    made_at: "Home",
    date: 2023,
    project_link: "https://github.com/Jstevenson02",
    project_link_string: "Private Source",
    tech: ["react", "django", "bootstrap-css", "python", "docker", "sqlite3", "electron"],
  },

  {
    pro: "Fitness",
    ject: "App",
    project_fullname: "Fitness Club",
    made_at: "Home",
    date: 2023,
    project_link: "https://fitness-club-six.vercel.app/",
    project_link_string: "fitness-club.vercel.app",
    tech: ["react", "rapidapi", "material-ui"],
  },
  {
    pro: "E-Commerce",
    ject: "Store",
    project_fullname: "E-Commerce Store",
    made_at: "Home",
    date: 2023,
    project_link: "https://handmade-bydesign.com/",
    project_link_string: "handmade-bydesign.com",
    tech: ["javascript", "mongodb", "stripeapi"],
  },
];

const projects = [
  {
    name: "Imagen Photowebsite",
    description: "SASS AI image generation web application",
    tags: ["react", "tailwind-css", "clerk", "mongoDB"],
    image: photoweb,
    live_code_link: "https://photoweb.site/",
    source_code_link: "https://github.com/Jstevenson02/presentit",
  },
  {
    name: "Blippy Image Engine",
    description: "Custom Vector Indexing AI desktop application",
    tags: ["react", "django", "bootstrap-css", "python", "docker", "sqlite3", "electron"],
    image: blippy,
    live_code_link: "https://github.com/Jstevenson02",
    source_code_link: "https://github.com/Jstevenson02",
  },
  {
    name: "Walter AI",
    description: "API Wrapper for Open AI's generative Davinci model",
    tags: ["django", "bootstrap-css", "sqlite3"],
    image: walter,
    live_code_link: "https://github.com/Jstevenson02",
    source_code_link: "https://github.com/Jstevenson02",
  },
  {
    name: "YouToon",
    description: "RapidAPI YouTube clone web application.",
    tags: ["react", "rapidapi", "material-ui"],
    image: youtoon,
    live_code_link: "https://youtube-clone-six-henna.vercel.app/",
    source_code_link: "https://github.com/Jstevenson02/youtube-clone",
  },
  {
    name: "Fitness Club",
    description: "RapidAPI Fitness Database web application",
    tags: ["react", "rapidapi", "material-ui"],
    image: fitclub,
    live_code_link: "https://fitness-club-six.vercel.app/",
    source_code_link: "https://github.com/Jstevenson02/fitness-react",
  },
  {
    name: "E-Commerce Store",
    description: "Full-Stack CRUD E-commerce Store with sign-up and admin panel",
    tags: ["javascript", "mongodb", "stripeapi"],
    image: ecommerce,
    live_code_link: "https://handmade-bydesign.com/",
    source_code_link: "https://github.com/Jstevenson02/",
  },
  {
    name: "Quote Generator",
    description: "HTML, CSS and JavaScript random quote generator",
    tags: ["javascript", "HTML", "CSS"],
    image: quotegenerator,
    live_code_link: "https://random-quote-generator-ten-kappa.vercel.app/",
    source_code_link:
      "https://github.com/Jstevenson02/FCC-Projects/tree/master/random-quote-generator",
  },
];

export { services, technologies, experiences, testimonials, projects, project_archive };
