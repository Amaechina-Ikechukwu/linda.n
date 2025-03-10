import BusinessHome from "@/components/Business Components/BusinessHome";
import { BusinessData } from "@/constants/Business/BusinessData";
import LoadingSkeleton from "@/constants/oadingSkeleton";
import { Metadata } from "next";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

async function getData(business: string): Promise<BusinessData> {
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

  const business = await getData(params.business);
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
  const business = await getData(params.business);
  const jsonLd = {
    "@context": "https://lindasalespro.com",
    "@type": "Business",
    name: business.data.business_name,
    image: business.data.business_logo,
    description: business.data.business_description,
  };
  return (
    <div className="mt-[130px]">
      <Suspense fallback={<LoadingSkeleton />}>
        <BusinessHome business={business} />{" "}
      </Suspense>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
