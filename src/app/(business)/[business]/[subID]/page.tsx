import BusinessFooter from "@/components/Business Components/BusinessFooter";
import PropertyInfo from "@/components/Business Components/PropertyInfo";
import { BusinessData } from "@/constants/Business/BusinessData";
import { Offer } from "@/constants/Business/Offer";
import { Offers } from "@/constants/Business/Offers";
import LoadingSkeleton from "@/constants/oadingSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";
async function getData(subID: string): Promise<Offer> {
  try {
    const res = await fetch(`${process.env.DEV_LINK}/offer/${subID}`, {
      next: { revalidate: 3600 },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error: any) {
    throw new Error(error);
  }
}

async function getBusiness(business: string): Promise<BusinessData> {
  const res = await fetch(`${process.env.DEV_LINK}/${business}/profile`, {
    next: { revalidate: 3600 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export async function generateMetadata({
  params,
}: {
  params: { subID: string };
}): Promise<Metadata> {
  // read route params
  const offer = await getData(params.subID);
  return {
    title: offer.data.title,
    description: offer.data.description,
    icons: {
      icon: offer.data.image_url,
    },
    openGraph: {
      images: [offer.data.image_url],
      title: offer.data.title,
      description: offer.data.description,
    },
    keywords: [
      offer.data.title,
      "Real estate",
      "Properties",
      "Realtors",
      ...offer.data.description.split(" "),
    ],
  };
}
export default async function Page({
  params,
}: {
  params: { business: string; subID: string };
}) {
  const offer = await getData(params.subID);
  const business = await getBusiness(params.business);
  const jsonLd = {
    "@context": "https://lindasalespro.com",
    "@type": "Property",
    name: offer.data.title,
    image: offer.data.image_url,
    description: offer.data.description,
  };
  return (
    <div>
      <Suspense fallback={<LoadingSkeleton />}>
        <PropertyInfo property={offer.data} />
        <div className="mt-[200px] bg-gray-100 dark:bg-neutral-900 absolute  w-screen right-0 md:right-100  p-20 px-10 md:px-20">
          <BusinessFooter business={business.data} />
        </div>
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
