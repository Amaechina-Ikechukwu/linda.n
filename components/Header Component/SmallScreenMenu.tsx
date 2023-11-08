'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function SmallScreenMenu() {
    const activeClassName = 'py-2 px-4 ring-2 ring-gray-500/50 dark:text-slate-100 dark:ring-slate-500/50 rounded-md text-gray-700 '
    const inActiveClassName = 'py-2 px-4 relative fixed  rounded-md text-gray-500 dark:text-slate-300'
    const mobileNavActiveClass = 'block';
    const mobileNavInactiveClass = 'hidden';
    const pathname = usePathname()
    return (
        <div className='h-screen w-[350px] p-4'>
            <ul className={`flex flex-column space-x-4 `}>
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
    )
}
