import React from 'react';

export default function LandingPage() {
    const image = "https://img.freepik.com/free-photo/medium-shot-woman-holding-phone_23-2149033787.jpg?w=740&t=st=1696574592~exp=1696575192~hmac=465b531475219b9325be2161d0295966486bf07e28c8e1f1119c06f558122f4a";

    return (
        <div>
            <div className=" relative h-[700px] md:h-[500px] w-full flex  justify-center bg-cover bg-none bg-center bg-no-repeat  transition duration-500 transform" style={{ backgroundImage: `url(${image})` }}>
                <div className="bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.6)] absolute inset-x-0 bottom-0 p-6  md:p-12 space-y-8 h-full flex flex-col justify-end">
                    <h1 className='text-white text-4xl font-bold '>Get top-notch leads, boost your Real Estate sales
                    </h1>
                    <h2 className='text-white text-lg max-w-2xl font-medium'>
                        {`Receive high-quality leads directly in your inbox and effortlessly convert them into successful sales using LindaSalesPro's built-in sales follow-up tools.`}
                    </h2>
                    <button style={{ boxShadow: '0px 40px 40px rgba(255,165,0,0.5)' }} className='bg-[#FF8C00] px-6 w-full sm:w-[300px] py-4 rounded-sm hover:scale-105 focus:105 transition duration-500 transform text-slate-100 font-semibold'>
                        <a target='_blank' rel="noreferrer" href='https://play.google.com/store/apps/details?id=online.priceplan'>Start for free 🚀</a>
                    </button>

                </div>
            </div>
        </div>


    );
}
