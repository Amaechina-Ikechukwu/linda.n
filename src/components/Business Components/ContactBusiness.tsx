"use client"
import { Offers } from "@/constants/Business/Offers";
import LindaButton from "@/constants/LindaButton";
import React, { useEffect, useState } from "react";
const Option = () => {
    return <div className="w-8 h-8 bg-purple-200" />
}

function ContactBusiness(props: { offers: Offers, from?: any }) {
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


    const handleSubmit = (event: any) => {
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

        if (inputValues["phone-number"].length !== 11) {
            errors["phone-number"] = "Phone number should be 11 digits";
            hasError = true;
        }
        if (!selectedService) {
            errors["service"] = "Please pick a service";
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
        // Your fetch and API call here
        // ...

        // Assuming a successful API call for this example
        setOpenModal(true);
        setClaimProgress(false);
    };

    useEffect(() => {
        // Your useEffect logic here
        // ...
    }, [selectedService]);

    return (
        <div className="md:w-full">
            <div className="w-full md:px-5 py-1 bg-first space-y-3">
                {/* <div className={`flex ${props.from ? "justify-center" : "justify-start"}`}>
                    <h2
                        className={`${props.from ? "text-center" : "text-left"
                            } text-2xl md:text-3xl `}
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
                </div> */}
                <div className="space-y-6">
                    {convertToApiInputs().map((input, index) => (
                        input !== "service" && (
                            <div key={input}>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded-md ring-2 focus:outline-none ring-orange-200 ring-offset-2 drop-shadow-sm text-sm text-gray-700 dark:text-slate-100"
                                    name={input}
                                    placeholder={inputs[index]}
                                    value={inputValues[input.toLowerCase().replace(" ", "")] || ""}
                                    onChange={handleInputChange}
                                />
                                {errorMessage[input.toLowerCase().replace(" ", "")] && (
                                    <p className="text-red-500">
                                        {errorMessage[input.toLowerCase().replace(" ", "")]}
                                    </p>
                                )}
                            </div>
                        )
                    ))}
                </div>

                {!props.from && (
                    <div className="flex flex-col space-y-2 mr-3">
                        <label htmlFor="selectProperty" className="font-bold">
                            Select Property
                        </label>
                        <div className="relative">
                            <button
                                id="selectProperty"
                                className={`w-full p-2 rounded-md ring-2 focus:outline-none ring-orange-200 ring-offset-2 drop-shadow-sm text-sm text-gray-700 dark:text-slate-100 text-left`}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Select a property
                                <svg
                                    className="w-6 h-6 absolute right-2 top-2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute z-10 mt-2 py-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                    {props.offers !== undefined &&
                                        props.offers?.data?.map((service) => (
                                            <li
                                                key={service.unique_id}
                                                className="cursor-pointer p-2 hover:bg-gray-100 flex items-center space-x-4"
                                                onClick={() => handleSelectService(service.unique_id)}
                                            >
                                                <img src={service.image_url} className="w-10 h-8 mr-4 rounded-lg" />
                                                {service.title}
                                            </li>
                                        ))}
                                </ul>
                            )}
                        </div>
                    </div>
                )}


                {selectedService?.description?.length > 0 ? (
                    <div className="flex items-end">
                        <p className="font-Poppins font-light text-12 text-text">
                            {selectedService?.description?.length > 150
                                ? selectedService?.description.slice(0, 150) + "..."
                                : selectedService?.description}
                            <button
                                className="font-Poppins text-black text-12 underline ml-5"
                            >
                                View Property Details
                            </button>
                        </p>
                    </div>
                ) : null}
                <LindaButton text="Submit Request" onClick={() => { }} classname="w-full bg-orange-500 " />
                {props.from && (
                    <p className="text-center text-12 font-light">
                        By clicking on activate, I agree to the Terms & Conditions for this Offer
                    </p>
                )}
                <div className="w-full">
                    {openModal && (
                        <div>
                            {/* Modal content for success */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ContactBusiness;
