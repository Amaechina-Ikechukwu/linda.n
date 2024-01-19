import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'LindaSalesPro',
    description: 'Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.',
    generator: 'Chooya',
    applicationName: 'LindaSalesPro',
    referrer: 'origin-when-cross-origin',

    keywords: ['LindaSalesPro', 'Real Estate', 'Properties', 'Realtors'],
    openGraph: {
        title: 'LindaSalesPro',
        description: 'Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.', url: 'https://priceplan.online',
        siteName: 'priceplan', locale: 'en_US',
        type: 'website',
        images: ['https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Linda.png?alt=media&token=17ccadba-ffc7-44f9-a3d4-957e8d726a73']
    },
    metadataBase: new URL('https://priceplan.online'),
    alternates: {
        canonical: 'https://linda.priceplan.online/',
        languages: {
            'en-US': '/en-US',
        },
    }, icons: {
        icon: ['https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Linda.png?alt=media&token=17ccadba-ffc7-44f9-a3d4-957e8d726a73'
        ]
    }, robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }, appLinks: {

        android: {
            package: 'com.lindasalespro.android/package',
            app_name: 'LindaSalesPro',
        },
        web: {
            url: 'https://priceplan.online',
            should_fallback: true,
        },
    },
}
export default function BusinessLayout({
    children, params
}: {
    children: React.ReactNode, params: { business: string }
}) {
    return (

        <div>{children}
        </div>
    )
}
