import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Choose desired weights or specify a single weight
  style: "normal", // Specify the style (optional)
  subsets: ["latin"], // Define subsets if needed
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "LindaSalesPro",
  description:
    "Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.",
  generator: "Chooya",
  applicationName: "LindaSalesPro",
  referrer: "origin-when-cross-origin",

  keywords: ["LindaSalesPro", "Real Estate", "Properties", "Realtors"],
  openGraph: {
    title: "LindaSalesPro",
    description:
      "Step up, stay organized, and stay motivated in your real estate sales follow-up. Close deals faster with the LindaSalesPro CRM app for Realtors.",
    url: "https://lindasalespro.com",
    siteName: "priceplan",
    locale: "en_US",
    type: "website",
    images: [
      "https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Linda.png?alt=media&token=17ccadba-ffc7-44f9-a3d4-957e8d726a73",
    ],
  },
  metadataBase: new URL("https://lindasalespro.com"),
  alternates: {
    canonical: "lindasalespro.com",
    languages: {
      "en-US": "/en-US",
    },
  },
  icons: {
    icon: [
      "https://firebasestorage.googleapis.com/v0/b/lio-6af30.appspot.com/o/Linda.png?alt=media&token=17ccadba-ffc7-44f9-a3d4-957e8d726a73",
    ],
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appLinks: {
    android: {
      package: "com.lindasalespro.android/package",
      app_name: "LindaSalesPro",
    },
    web: {
      url: "https://lindasalespro.com",
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`container mx-auto px-6 md:px-[60px]  w-full space-y-8 ${poppins.variable} scroll-smooth `}
      >
        {children}
      </body>
    </html>
  );
}
