import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header Component/Header'
import Bottom from '@/components/Home Component/Bottom'

import { Poppins } from 'next/font/google';


const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700"], // Choose desired weights or specify a single weight
    style: 'normal', // Specify the style (optional)
    subsets: ['latin'], // Define subsets if needed
    display: 'swap',
    variable: '--font-poppins',
});


export const metadata: Metadata = {
    title: 'LindaSalesPro',
    description: 'Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.',
    openGraph: {
        title: 'LindaSalesPro',
        description: 'Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.',
        images: ['https://priceplan.online/assets/Linda.be1e6a15.png']
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`container mx-auto px-6 md:px-[60px]  w-full space-y-8 ${poppins.variable} scroll-smooth `}>

                {children}


            </body>
        </html>
    )
}
