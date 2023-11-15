import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function BusinessFooter({ business }: any) {
    const currentYear = new Date().getFullYear();
    console.log(business)
    return (
        <footer >
            <div className='space-y-8 '>
                <div className='w-fit'>
                    <Link href={`${business.business_url}/properties`} className='text-gray-600 dark:text-slate-300 text-underlined w-fit'>
                        <p>Featured Properties from {business.business_name}</p>
                    </Link>
                </div>
                <div className='space-y-4'>
                    <h5 className='text-gray-600 dark:text-slate-300'>Contact Us</h5>
                    <div className='space-y-4'>
                        <div className='flex space-x-2 font-thin text-sm items-center text-gray-400 dark:text-slate-400'>
                            <FaEnvelope /> <p>{business.business_email}</p>
                        </div>
                        <div className='flex space-x-2 font-thin text-sm items-center text-gray-400 dark:text-slate-400'>
                            <FaPhone /><p>{business.business_phone}</p>
                        </div>
                        <div className='flex space-x-2 font-thin text-sm items-center text-gray-400 dark:text-slate-400'>
                            <FaMapMarkerAlt /> <p>{business.business_address}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center text-gray-400 dark:text-slate-400 text-sm text-center'>&copy; {currentYear} {business.business_name}</div>
            </div>
        </footer>
    );
}
