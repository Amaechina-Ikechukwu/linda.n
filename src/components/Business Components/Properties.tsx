import { BusinessData } from "@/constants/Business/BusinessData";
import { OfferData, Offers } from "@/constants/Business/Offers";
import LindaButton from "@/constants/LindaButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Properties({
  properties,
  business,
}: {
  properties: Offers;
  business: BusinessData;
}) {
  return (
    <div className="space-y-8 mt-[100px]">
      <div className="flex flex-col space-y-4 items-center text-center justify-center">
        <Link href={`/${business.data.business_url}`} className=" w-fit">
          <img
            src={business.data.business_logo}
            alt={business.data.business_name}
            loading="lazy"
            style={{ height: 50, width: "100%", objectFit: "contain" }}
            className="h-fit"
          />
        </Link>
        <h1 className="text-gray-700 dark:text-slate-100 text-4xl font-medium">
          Featured Offers by {properties.data[0].business.business_name}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:justify-center ">
        {properties.data.map((property: OfferData) => (
          <Link
            key={property.unique_id}
            href={`/${property.business.business_url}/${property.unique_id}`}
          >
            <div className="bg-slate-50 dark:bg-neutral-950 p-4 rounded-sm space-y-2 hover:scale-105 focus:105 transition duration-500 transform max-w-md min-h-lg ">
              <div>
                <img
                  src={property.image_url}
                  alt={property.description}
                  loading="lazy"
                  style={{ height: 200, width: "100%", objectFit: "contain" }}
                  className="h-fit"
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-gray-700 dark:text-slate-100 text-md font-bold">
                  {property.title}
                </h2>
                <h3 className="text-gray-700 dark:text-slate-100 text-sm font-regular">
                  {property.description.length > 70
                    ? property.description.slice(0, 70) + "..."
                    : property.description}
                </h3>
              </div>
              <LindaButton text="View Offer" classname="w-full border p-2" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
