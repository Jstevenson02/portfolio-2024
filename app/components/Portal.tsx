import Image from "next/image";
import React, { useState } from "react";
import portal from "@/app/assets/portalGate.gif";
import Modal from "./Modal";

const Portal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <button
      onClick={() => setShowModal(true)}
      className='hover:-text-teal-300 absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300'
    >
      <Image className='w-20' alt='portal to older sites' src={portal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </button>
  );
};

export default Portal;
