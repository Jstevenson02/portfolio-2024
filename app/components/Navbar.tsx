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

          <li>Experience</li>

          <li>Projects</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
