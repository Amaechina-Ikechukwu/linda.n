import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiEmotionSadFill } from "react-icons/ri";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  const [confettiActive, setConfettiActive] = useState(false);

  const handleAnimationEnd = () => {
    setConfettiActive(false);
  };

  const handleOpenModal = () => {
    setConfettiActive(true);
  };

  return (
    <>
      {isOpen && (
        <div>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.4)",
              zIndex: 30,
            }}
            className="flex items-center justify-center  "
          >
            <div className="w-full flex items-center justify-center">
              <div className=" w-11/12 md:w-3/6 bg-zinc-200 dark:bg-neutral-900 p-4 px-6">
                <div className=" w-full bg-white dark:bg-neutral-900 p-8 rounded-lg shadow-md flex flex-col items-center justify-center space-y-2 ">
                  <div className="flex flex-col space-y-2 items-center justify-center mb-4">
                    <div className="bg-green-300 p-6">
                      <RiEmotionSadFill className=" text-4xl mr-2 text-red-400" />
                    </div>

                    <h2 className="text-xl font-semibold">We apologize!</h2>
                  </div>
                  <p className="text-gray-600 dark:text-slate-100">
                    {message || " There seems to be an error!"}
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      handleOpenModal();
                    }}
                    className="mt-4 px-4 py-2 bg-gray-500 text-gray-600 dark:text-slate-100 rounded-md hover:bg-red-100 focus:outline-none focus:ring focus:border-green-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorModal;
