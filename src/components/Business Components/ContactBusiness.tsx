"use client";
import { OfferData, Offers } from "@/constants/Business/Offers";
import LindaButton from "@/constants/LindaButton";
import SuccessModal from "@/constants/SuccessModal";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Option = ({ selectedService, business }: any) => {
  return (
    <div className=" ">
      <div className="flex items-end  ">
        <p className="font-Poppins font-regular text-xs text-12 text-text text-gray-700 dark:text-slate-100 ">
          {selectedService?.description?.length > 150
            ? selectedService?.description.slice(0, 150) + "..."
            : selectedService?.description}
          <Link
            href={`${business}/${selectedService.unique_id}`}
            className="font-Poppins text-gray-700 dark:text-slate-100 hover:text-orange-400 text-xs underline ml-5 "
          >
            View Property Details
          </Link>
        </p>
      </div>
    </div>
  );
};

function ContactBusiness(props: { offers: any; from?: any; business: string }) {
  const inputs = [
    "First Name",
    "Last Name",
    "Phone Number",
    "Email Address",
    "Service",
  ];

  const convertToApiInputs = () => {
    return inputs.map((input) => input.toLowerCase().split(" ").join("-"));
  };

  const [inputValues, setInputValues] = useState<any>({});
  const [errorMessage, setErrorMessage] = useState<any>({});
  const [claimProgress, setClaimProgress] = useState<any>(false);
  // const [selectedService, setSelectedService] = useState<any>("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState<any | any[]>();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleSelectService = (service: any) => {
    setSelectedService(service);
    setDropdownOpen(false); // Close the dropdown
  };
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputValues((prevInputValues: any) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let hasError = false;
    let errors: any = {};
    setClaimProgress(true);

    for (const input of inputs) {
      const inputName = input.toLowerCase().split(" ").join("-");
      if (inputValues[inputName] === "" && inputName !== "service") {
        errors[inputName] = `${input} is required`;
        hasError = true;
      }
    }

    if (
      inputValues["email-address"] !== "" &&
      !/^[\w-.]+@([\w-]+.)+[\w-]{2,}$/g.test(
        inputValues["email-address"].trim()
      )
    ) {
      errors["email-address"] = "Email address is invalid";
      hasError = true;
    }

    if (hasError) {
      setErrorMessage(errors);
      setClaimProgress(false);
    } else {
      claimOffer();
    }
  };

  const claimOffer = () => {
    fetch(`${process.env.NEXT_PUBLIC_DEV_LINK}/claim-offer`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: inputValues["first-name"],
        lastname: inputValues["last-name"],
        phone: inputValues["phone-number"],
        email: inputValues["email-address"],
        business: props.business,
        offer: props.from && props.offers.unique_id,
      }),
      redirect: "follow",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setOpenModal(true);
        setClaimProgress(false);
      })
      .catch((error: any) => {
        console.log(error);
        setClaimProgress(false);

        alert("An error occurred while claiming the offer. Please try again.");
      });
  };

  useEffect(() => {}, [selectedService]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full  py-1  space-y-3">
        <div
          className={`flex ${props.from ? "justify-center" : "justify-start"}`}
        >
          <h2
            className={`${
              props.from ? "text-center" : "text-left"
            } text-2xl md:text-3xl text-gray-600 dark:text-slate-100 `}
          >
            {props.from
              ? !props.from
                ? selectedService?.description?.length > 0
                  ? selectedService.discount > 0
                    ? `Unlock up to ${selectedService.discount}% Discount`
                    : "This is an awesome offer"
                  : "Request For Property Enquiry"
                : "Confirm your interest"
              : ""}
          </h2>
        </div>
        <div className="space-y-6">
          {convertToApiInputs().map(
            (input, index) =>
              input !== "service" && (
                <div key={input}>
                  <input
                    type="text"
                    className="w-full p-2 rounded-md ring-2 focus:outline-none ring-orange-50 ring-offset-2 drop-shadow-sm text-sm text-gray-700  dark:ring-offset-0 dark:bg-neutral-900 dark:text-slate-100"
                    name={input}
                    placeholder={inputs[index]}
                    value={
                      inputValues[input.toLowerCase().replace(" ", "")] || ""
                    }
                    onChange={handleInputChange}
                  />
                  {errorMessage[input.toLowerCase().replace(" ", "")] && (
                    <p className="text-red-500">
                      {errorMessage[input.toLowerCase().replace(" ", "")]}
                    </p>
                  )}
                </div>
              )
          )}
        </div>
        <div className="w-full mt-[40px]">
          <LindaButton
            text="Submit Request"
            onClick={handleSubmit}
            classname="w-full bg-orange-500 text-slate-200 mt-[40px] p-4"
          />
        </div>

        {props.from && (
          <p className="text-center text-12 font-light">
            By clicking on Submit Request, I agree to the Terms & Conditions for
            this Offer
          </p>
        )}

        <div className="w-full flex  items-center justify-center">
          <SuccessModal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactBusiness;
