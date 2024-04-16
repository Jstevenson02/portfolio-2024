import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={"/#about"}>About</Link>
          </li>
          <li>
            <Link href={"/#experience"}>Experience</Link>
          </li>
          <li>
            <Link href={"/#projects"}>Projects</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
