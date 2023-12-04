import LindaButton from '@/constants/LindaButton'
import Link from 'next/link'
import React from 'react'

export default async function page() {
    return (
        <div className='sm:w-3/5 flex flex-col items-center justify-center h-full '>
            <div className='space-y-6 flex flex-col items-center'>
                <p className='text-xl font-medium'>Account Deletion</p>
                <p className='text-center'>You have requested to delete your account and any other information related to you from LindaSalesPro. Click the button to proceed</p>
                <Link href={'/accountdeletion/proceed'}>
                    <LindaButton text='Proceed with account deletion' classname='bg-orange-500 h-14' />
                </Link>
            </div>
        </div>
    )
}
