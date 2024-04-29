import Image from "next/image";
import React, { useState } from "react";
import portal from "@/app/assets/portalGate.gif";
import Modal from "./Modal";

const Portal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='relative hidden lg:block'>
      <button onClick={() => setShowModal(true)} className='z-50 right-0 bottom-0 absolute'>
        <Image className='w-20' alt='portal to older sites' src={portal} />
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </button>
    </div>
  );
};

export default Portal;
