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
    images: ['https://priceplan.online/assets/Linda.be1e6a15.png']
  },
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
