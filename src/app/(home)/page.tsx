
import About from '@/components/Home Component/About'
import AskedQuestions from '@/components/Home Component/AskedQuestions'
import Features from '@/components/Home Component/Features'
import LandingPage from '@/components/Home Component/LandingPage'
import Services from '@/components/Home Component/Services'
import Testimonials from '@/components/Home Component/Testimonials'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'LindaSalesPro',
  description: 'Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.',
  openGraph: {
    title: 'LindaSalesPro',
    description: 'Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.',
    images: ['https://priceplan.online/assets/Linda.be1e6a15.png']
  },
  icons: {
    icon: 'https://priceplan.online/assets/Linda.be1e6a15.png'
  }
}
export default function Home() {
  return (
    <main className="space-y-[100px] w-full ">
      <div id='#home'>
        <LandingPage />
      </div>
      <div id='#about'>
        <About />
      </div>
      <div id="#features">
        <Features />
      </div>
      <div id='#services'>
        <Services />
      </div>
      <div id='#testimonials'>
        <Testimonials />
      </div>
      <div id='#askedquestions'>
        <AskedQuestions />
      </div>

    </main>
  )
}
