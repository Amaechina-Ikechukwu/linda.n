"use client";
import { OfferData } from "@/constants/Business/Offers";
import LindaButton from "@/constants/LindaButton";
import React, { useState } from "react";
import RequestModal from "./RequestModal";
import BusinessFooter from "./BusinessFooter";
import Link from "next/link";

export default function PropertyInfo({ property }: { property: OfferData }) {
  const [openModal, setOpenModal] = useState(false);
  let formatter = new Intl.NumberFormat();
  return (
    <div>
      <div className="sm:flex  sm:justify-between space-y-[20px] sm:space-x-[80px] sm:mt-[100px] items-start ">
        <div className=" sm:w-full h-full sm:p-2">
          <img
            src={property.image_url}
            className="w-screen sm:w-full h-full "
            alt={property.description}
            loading="lazy"
          />
        </div>

        <div className="sm:w-5/6  h-full space-y-[20px] sm:space-y-[40px] ">
          <h1 className="text-gray-700  dark:text-slate-100 text-3xl font-bold">
            {property.title}
          </h1>
          <div className="space-y-4">
            {property.description.split("\n").map((script) => (
              <h2
                key={script}
                className="text-gray-700 dark:text-slate-100 text-md leading-loose"
              >
                {script}
              </h2>
            ))}
          </div>

          <div className="p-4 rounded-md bg-slate-100 dark:bg-neutral-950 space-y-[10px]">
            <h4 className="text-gray-700 dark:text-slate-100">Terms</h4>
            <div className="space-y-4">
              {property.terms.split("\n").map((term) => (
                <h5
                  key={term}
                  className="text-xs text-gray-700 dark:text-slate-100"
                >
                  {term}
                </h5>
              ))}
            </div>
          </div>
          <div className="space-y-[20px] sm:space-y-[20px]">
            <h5 className=" text-gray-700 dark:text-slate-100 text-2xl font-bold">
              {property.discounted_amount == 0
                ? "Free"
                : property.currency +
                  formatter.format(property.discounted_amount)}
            </h5>
            <h5 className="text-xs text-gray-700 dark:text-slate-100">{`(Instead of ${
              property.currency + formatter.format(parseInt(property.amount))
            }, offer ends soon)`}</h5>
            <div className="space-y-[10px] sm:space-y-[10px] mt-[20px] items-center">
              <h5 className="text-sm text-gray-700 dark:text-slate-100">
                Interested in this offer?
              </h5>
              <LindaButton
                classname="bg-gray-700 dark:bg-slate-100 dark:text-gray-700 text-slate-100 w-full p-4"
                onClick={() => setOpenModal(true)}
                text="Submit Request"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <RequestModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        offer={property}
        business={property.business.business_url}
      />
    </div>
  );
}
