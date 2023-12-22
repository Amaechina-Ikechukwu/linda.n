import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import logo from '../../../public/Linda.png'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'LindaSalesPro | Account Deletion',
    description: 'Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.',
    openGraph: {
        title: 'LindaSalesPro',
        description: 'Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.',
        images: ['https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Linda.png?alt=media&token=17ccadba-ffc7-44f9-a3d4-957e8d726a73']
    }, icons: {
        icon: ['https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Linda.png?alt=media&token=17ccadba-ffc7-44f9-a3d4-957e8d726a73'
        ]
    }
}

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <body className={`container mx-auto px-6 md:px-[60px]  w-full space-y-8 ${inter.className} scroll-smooth `}>
            {children}
        </body>
    )
}
