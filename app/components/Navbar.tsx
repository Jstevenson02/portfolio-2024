import React, { useState, useEffect } from "react";

interface NavItemProps {
  text: string;
  href: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ text, href, isActive }) => {
  const baseClasses = "group flex items-center py-3";
  const indicatorClasses = `nav-indicator mr-4 h-px w-8 transition-all ${
    isActive ? "w-[64px] bg-slate-200" : "bg-[#828282] group-hover:w-16 group-hover:bg-slate-200"
  } group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`;
  const textClasses = `nav-text text-xs font-bold uppercase tracking-widest ${
    isActive ? "text-slate-200" : "text-[#828282] group-hover:text-slate-200"
  } group-focus-visible:text-slate-200`;

  return (
    <li>
      <a className={`${baseClasses} ${isActive ? "active" : ""}`} href={href}>
        <span className={indicatorClasses}></span>
        <span className={textClasses}>{text}</span>
      </a>
    </li>
  );
};

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState(""); // default active link

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash);
    };

    // Listen to hash changes
    window.addEventListener("hashchange", handleHashChange, false);

    return () => {
      window.removeEventListener("hashchange", handleHashChange, false);
    };
  }, []);

  return (
    <nav className='nav hidden lg:block ' aria-label='In-page jump links'>
      <ul className='w-max'>
        <NavItem text='About' href='#about' isActive={activeLink === "#about"} />
        <NavItem text='Experience' href='#experience' isActive={activeLink === "#experience"} />
        <NavItem text='Projects' href='#projects' isActive={activeLink === "#projects"} />
      </ul>
    </nav>
  );
};

export default Navbar;
