import React, { useState } from 'react';
import { FaCheckCircle, FaCross, FaTimes } from 'react-icons/fa';
import ContactBusiness from './ContactBusiness';
import { OfferData } from '@/constants/Business/Offers';

interface RequestModalProps {
    isOpen: boolean;
    onClose: () => void;
    offer: OfferData,
    business?: any
}

const RequestModal: React.FC<RequestModalProps> = ({ isOpen, onClose, offer, business }) => {
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
                                <div className=' w-full flex justify-end'>
                                    <button
                                        onClick={() => {
                                            onClose();
                                            handleOpenModal();
                                        }}
                                        className="mt-4 p-2 bg-slate-100 dark:bg-neutral-950 text-gray-600 dark:text-slate-100 rounded-full hover:bg-neutral-950 focus:outline-none focus:ring focus:bg-neutral-950 "
                                    >
                                        <FaTimes className=" text-2xl font-thin " />
                                    </button>
                                </div>


                                <div className=" w-full  p-8 rounded-lg shadow-md flex flex-col items-center justify-center space-y-2 ">
                                    <ContactBusiness from={true} offers={offer} business={business} />

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            )}
        </>
    );
};

export default RequestModal;
