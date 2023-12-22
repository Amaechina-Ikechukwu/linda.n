import type { Metadata } from 'next'
import './globals.css'


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
        images: ['https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Linda.png?alt=media&token=17ccadba-ffc7-44f9-a3d4-957e8d726a73']
    },
    metadataBase: new URL('https://priceplan.online'),
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
        },
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
