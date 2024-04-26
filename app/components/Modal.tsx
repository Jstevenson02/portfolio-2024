import Image from "next/image";
import portal from "@/app/assets/portal_02.gif";
import React, { useEffect } from "react";

// Define interface for the component props
interface ModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  // Effect to disable and enable scrolling
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    }
    return () => {
      document.body.style.overflow = "unset"; // Enable scrolling
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className='fixed inset-0 z-50 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        {/* Background overlay, also acts as a click outside to close */}
        <div className='fixed inset-0 transition-opacity' aria-hidden='true'>
          <div
            className='absolute inset-0 bg-black opacity-75'
            onClick={() => setShowModal(false)}
          ></div>
        </div>

        {/* Modal content */}
        <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
          &#8203;
        </span>
        <div className='inline-block align-bottomrounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
          <Image
            src={portal}
            className='w-[1500px] h-[600px] -scale-y-150 scale-x-150'
            alt='portal'
          />
          <div className=' px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
            <button
              type='button'
              className='z-50 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-purple-500 text-base font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm'
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
