import { OfferData, Offers } from "@/constants/Business/Offers";
import LindaButton from "@/constants/LindaButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Properties({ properties }: { properties: Offers }) {
  return (
    <div className="space-y-8 mt-[100px]">
      <div className="flex items-center justify-center">
        <h1 className="text-gray-700 dark:text-slate-100 text-4xl font-medium">
          Featured Properties by {properties.data[0].business.business_name}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:justify-center ">
        {properties.data.map((property: OfferData) => (
          <Link
            key={property.unique_id}
            href={`/${property.business.business_url}/${property.unique_id}`}
          >
            <div className="bg-slate-50 dark:bg-neutral-950 p-4 rounded-sm space-y-2 hover:scale-105 focus:105 transition duration-500 transform max-w-md  ">
              <div>
                <Image
                  src={property.image_url}
                  alt={property.description}
                  loading="lazy"
                  width={500}
                  height={300}
                  className="h-90"
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-gray-700 dark:text-slate-100 text-md font-bold">
                  {property.title}
                </h2>
                <h3 className="text-gray-700 dark:text-slate-100 text-sm font-regular">
                  {property.description.slice(0, 150) + "..."}
                </h3>
              </div>
              <LindaButton text="View Property" classname="w-full border p-2" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
