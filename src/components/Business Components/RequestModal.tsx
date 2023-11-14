import React, { useState } from 'react';
import { FaCheckCircle, FaCross } from 'react-icons/fa';
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
                            <div className=' w-11/12 md:w-3/6 bg-zinc-200 dark:bg-neutral-900 p-4 px-6'><button
                                onClick={() => {
                                    onClose();
                                    handleOpenModal();
                                }}
                                className="mt-4 px-4 py-2 bg-green-500 text-gray-600 dark:text-slate-100 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                            >
                                <FaCross className="bg-emerald-500 text-4xl mr-2" />
                            </button>

                                <div className=" w-full  p-8 rounded-lg shadow-md flex flex-col items-center justify-center space-y-2 max-w-md">
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
