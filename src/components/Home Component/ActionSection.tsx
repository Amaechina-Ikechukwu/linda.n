import LindaButton from '@/constants/LindaButton';
import Link from 'next/link';
import React from 'react'

export default function ActionSection() {
    return (
        <div className="py-5">
            <div className="space-y-[50px]">
                <div className="bg-[#FFA500] w-20 h-5"></div>
                <div className="w-full flex flex-col gap-5 items-start justify-between">
                    <h3 className="font-bold text-3xl text-gray-600  dark:text-slate-200 ">
                        Ready to start closing more deals?
                    </h3>
                    <div className="space-y-2">
                        <p className="font-light leading-8 text-base text-gray-600  dark:text-slate-200 md:max-w-5xl">
                            Receive high-quality leads from LindaSalesPro and watch your real estate business grow.
                        </p>
                    </div>

                    <Link target='_blank' href={'https://play.google.com/store/apps/details?id=online.priceplan'}>
                        <LindaButton text=' Sign up for free 🚀' classname='bg-[#FFA500]' />
                    </Link>
                </div>
                <div className="bg-[#FFA500] w-20 h-5"></div>
            </div>
        </div>
    );
};


