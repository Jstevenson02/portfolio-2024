import Image from "next/image";
import React, { useState } from "react";
import portal from "@/app/assets/portal.gif";
import Modal from "./Modal";

const Portal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <button onClick={() => setShowModal(true)}>
      <Image className='w-20' alt='portal to older sites' src={portal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </button>
  );
};

export default Portal;
