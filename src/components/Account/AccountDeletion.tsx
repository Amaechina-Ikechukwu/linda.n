"use client"
import LindaButton from '@/constants/LindaButton';
import React, { useState } from 'react'

export default function AccountDeletion() {
    const [deletionInformation, setDeletionInformation] = useState({
        email: '',
        password: '',
        consent: false,
        reasonForDeletion: ''
    })
    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setDeletionInformation((prevInputValues: any) => ({
            ...prevInputValues,
            [name]: value,
        }));
    };
    return (
        <div className='flex flex-col md:w-3/5 space-y-8 items-center justify-center h-full w-full'>
            <div>{/* Introduction */}
                <p>Please complete this form to verify your identity, confirm you understand the action you are about to take and tell us why you are deleting your account</p>
            </div>
            <div className='w-full space-y-4'>
                {/* Verfication */}
                <input
                    type="text"
                    className="w-full p-2 rounded-md ring-2 focus:outline-none ring-orange-50 ring-offset-2 drop-shadow-sm text-sm text-gray-700  dark:ring-offset-0 dark:bg-neutral-900 dark:text-slate-100"
                    name='email'
                    placeholder='Enter your email'
                    value={deletionInformation.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    className="w-full p-2 rounded-md ring-2 focus:outline-none ring-orange-50 ring-offset-2 drop-shadow-sm text-sm text-gray-700  dark:ring-offset-0 dark:bg-neutral-900 dark:text-slate-100"
                    name="password"
                    placeholder="Please add correct password"
                    value={deletionInformation.password}
                    onChange={handleInputChange}
                />
            </div>
            <div className='flex space-x-4 items-center'>
                {/* Consent */}
                <button className={`w-6 h-5 p-2 rounded-sm ring-2 focus:outline ring-orange-50 ring-offset-2 drop-shadow-sm text-sm text-gray-700  dark:ring-offset-0 ${deletionInformation.consent && 'bg-blue-400'}`} onClick={() => setDeletionInformation((prev) => ({ ...prev, consent: !deletionInformation.consent }))} />
                <p>Do you understand that by clicking this button,this account will be gone forever unless you create another account</p>
            </div>
            <div className='w-full'>
                <input
                    type="text"
                    className="w-full p-2 rounded-md ring-2 focus:outline-none ring-orange-50 ring-offset-2 drop-shadow-sm text-sm text-gray-700 h-12  dark:ring-offset-0 dark:bg-neutral-900 dark:text-slate-100"
                    name="reasonForDeletion"
                    placeholder="Why do want to delete this account?"
                    value={deletionInformation.reasonForDeletion}
                    onChange={handleInputChange}
                />
            </div>
            <div className='w-full'>
                {/* Button */}
                <LindaButton text='Delete Account' classname='bg-red-500 h-14 w-full' />
            </div>
        </div>
    )
}
