'use client'
import { Bars3BottomRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import SmallScreenMenu from './SmallScreenMenu'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Header({ params }: any) {
    const activeClassName = ' w-fit md:w-full py-2 ring-2 ring-gray-500/50 dark:text-slate-100 dark:ring-slate-500/50 rounded-md text-gray-700 px-4'
    const inActiveClassName = 'py-2  relative fixed  rounded-md text-gray-500 dark:text-slate-300'
    const mobileNavActiveClass = 'invisible';
    const mobileNavInactiveClass = 'visible';
    const pathname = usePathname()
    const router = useRouter()

    const toggleMobileNav = () => {
        const nav = document.getElementById('mobileNav');
        if (nav) {
            nav.classList.toggle('hidden');
        }
    };

    return (
        <nav className='py-5 mt-3 flex flex-row items-center bg-transparent dark:bg-transparent rounded-lg justify-between'>
            <div className="flex items-center space-x-8">
                <div>
                    <img
                        className="h-12 w-auto"
                        src="https://priceplan.online/assets/Linda.be1e6a15.png"
                        alt="LindaSalesPro"
                    />
                </div>
                <ul className={`flex flex-row space-x-4 hidden sm:flex `}>
                    <li className={pathname == '/' ? activeClassName : inActiveClassName}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={pathname == '/features' ? activeClassName : inActiveClassName}>
                        <Link href='/features'>Features</Link>
                    </li>
                    <li className={pathname == '/about' ? activeClassName : inActiveClassName}>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className={pathname == '/testimonials' ? activeClassName : inActiveClassName}>
                        <Link href='/testimonials'>Testimonial</Link>
                    </li>
                </ul>
            </div>
            <a className="hidden md:block bg-neutral-700 dark:bg-slate-100 dark:text-neutral-800 text-zinc-100 px-6 w-auto py-3 rounded-sm hover:scale-105 focus:105 transition duration-500 dark:rounded-md transform font-semibold" onClick={toggleMobileNav}> Get The App</a>
            <button className="block md:hidden py-2 px-4 ring-2 ring-gray-500/50   w-auto  rounded-sm hover:scale-105 focus:105 transition duration-500 dark:rounded-md transform font-semibold" onClick={toggleMobileNav}> <Bars3BottomRightIcon className='dark:text-slate-100 w-5 h-5 dark:ring-slate-500/50 rounded-md text-gray-700 ' /></button>
            <div id='mobileNav' className='h-screen w-[350px] p-4 space-y-[20px] absolute  top-0 end-0 bg-white dark:bg-neutral-900  z-10 sm:hidden'>
                <div>
                    <button className="block md:hidden py-2 px-4    w-auto  rounded-sm hover:scale-105 focus:105 transition duration-500 dark:rounded-md transform font-semibold" onClick={toggleMobileNav}> <XMarkIcon className='dark:text-slate-100 w-5 h-5 dark:ring-slate-500/50 rounded-md text-gray-700 ' /></button>
                </div>
                <ul className={`  space-y-[20px] `}>
                    <li className={pathname == '/' ? activeClassName : inActiveClassName}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={pathname == '/features' ? activeClassName : inActiveClassName}>
                        <Link href='/features'>Features</Link>
                    </li>
                    <li className={pathname == '/about' ? activeClassName : inActiveClassName}>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className={pathname == '/testimonials' ? activeClassName : inActiveClassName}>
                        <Link href='/testimonials'>Testimonial</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
