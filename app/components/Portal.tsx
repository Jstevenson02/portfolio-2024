import Image from "next/image";
import React from "react";
import portal from "@/app/assets/portal.gif";
import Link from "next/link";

const Portal = () => {
  return (
    <>
      <button>
        <Image className='w-20' alt='portal to older sites' src={portal} />
      </button>
    </>
  );
};

export default Portal;
