import BusinessFooter from "@/components/Business Components/BusinessFooter";
import Properties from "@/components/Business Components/Properties";
import { BusinessData } from "@/constants/Business/BusinessData";
import { Offers } from "@/constants/Business/Offers";
import LoadingSkeleton from "@/constants/oadingSkeleton";
import { Metadata } from "next";
import React, { Suspense } from "react";
async function getData(business: string): Promise<Offers> {
  const res = await fetch(`${process.env.DEV_LINK}/${business}/offers`, {
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
  params: { business: string };
}): Promise<Metadata> {
  // read route params
  const business = await getBusiness(params.business);
  return {
    title: business.data.business_name,
    description: business.data.business_description,
    icons: {
      icon: business.data.business_logo,
    },
    openGraph: {
      images: [business.data.business_logo],
      title: business.data.business_name,
      description: business.data.business_description,
    },
    keywords: [
      business.data.business_name,
      "Real estate",
      "Properties",
      "Realtors",
      ...business.data.business_description.split(" "),
    ],
  };
}
export default async function Page({
  params,
}: {
  params: { business: string };
}) {
  const offers = await getData(params.business);
  const business = await getBusiness(params.business);
  const jsonLd = {
    "@context": "https://lindasalespro.com",
    "@type": "Properties",
    name: business.data.business_name,
    image: business.data.business_logo,
    description: business.data.business_description,
  };
  return (
    <div className="">
      {" "}
      <Suspense fallback={<LoadingSkeleton />}>
        <Properties properties={offers} business={business} />
        <div
          style={{
            position: "absolute",
            marginTop: "100px",
            right: 0,
            left: 0,
          }}
        >
          <div className="bg-gray-100 dark:bg-neutral-900 py-10  px-10 md:px-20">
            <BusinessFooter business={business.data} />
          </div>
        </div>
      </Suspense>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
