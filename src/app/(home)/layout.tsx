import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/Header Component/Header'
import Bottom from '@/components/Home Component/Bottom'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LindaSalesPro',
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

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
      <div className="">
        <Bottom />
      </div>

    </div>
  )
}
