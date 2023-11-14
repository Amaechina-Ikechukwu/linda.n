import PropertyInfo from '@/components/Business Components/PropertyInfo'
import { Offers } from '@/constants/Business/Offers'
import { Metadata } from 'next'
import React from 'react'
async function getData(subID: string): Promise<Offers> {
    try {
        const res = await fetch(`${process.env.DEV_LINK}/offer/${subID}`, { next: { revalidate: 3600 } })
        // The return value is *not* serialized
        // You can return Date, Map, Set, etc.

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
        }

        return res.json()
    }
    catch (error: any) {
        throw new Error(error)
    }
}
export async function generateMetadata(
    { params }: { params: { subID: string } }
): Promise<Metadata> {
    // read route params
    const offer = await getData(params.subID)
    console.log(offer.data.business)
    return {
        title: offer.data.title,
        description: offer.data.description,
        icons: {
            icon: offer.data.image_url
        },
        openGraph: {
            images: [offer.data.image_url],
            title: offer.data.title,
            description: offer.data.description,
        },
    }
}
export default async function Page({ params }: { params: { subID: string } }) {
    const offer = await getData(params.subID)
    const jsonLd = {
        '@context': 'https://linda-n.vercel.app',
        '@type': 'Product',
        name: offer.data.title,
        image: offer.data.image_url,
        description: offer.data.description,
    }
    return (
        <div>
            <PropertyInfo property={offer.data} />
        </div>
    )
}
