import React, { useState } from 'react';
import ConfettiParticle from './ConfettiParticle';
import { FaCheckCircle } from 'react-icons/fa';

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
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
                <div >
                    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 20 }} className="flex items-center justify-center  ">
                        <div className='w-full flex items-center justify-center'>
                            <div className=' w-11/12 md:w-3/6 bg-zinc-200 dark:bg-neutral-900 p-4 px-6'>

                                <div className=" w-full  p-8 rounded-lg shadow-md flex flex-col items-center justify-center space-y-2 max-w-md"><ConfettiParticle
                                    numberOfParticles={200}
                                    onAnimationEnd={handleAnimationEnd}
                                />
                                    <div className="flex flex-col space-y-2 items-center justify-center mb-4">
                                        <div className='bg-green-300 p-6'>
                                            <FaCheckCircle className="bg-emerald-500 text-4xl mr-2" />
                                        </div>

                                        <h2 className="text-xl font-semibold">Success!</h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-slate-100">
                                        Your action was successful. Thank you!
                                    </p>
                                    <button
                                        onClick={() => {
                                            onClose();
                                            handleOpenModal();
                                        }}
                                        className="mt-4 px-4 py-2 bg-green-500 text-gray-600 dark:text-slate-100 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
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

export default SuccessModal;
