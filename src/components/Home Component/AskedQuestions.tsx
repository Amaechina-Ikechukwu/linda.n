'use client'
import React, { useState } from "react";

export default function AskedQuestions() {
    const [expanded, setExpanded] = useState(null);

    const handleAccordionClick = (index: any) => {
        if (expanded === index) {
            setExpanded(null);
        } else {
            setExpanded(index);
        }
    };

    const questions = [
        {
            question: "What is LindaSalesPro?",
            answer:
                "LindaSalesPro is a real estate sales and marketing tool that helps agents generate high-quality leads and effortlessly convert them into sales using its built-in sales follow-up tools.",
        },
        {
            question: "How much does it cost to use LindaSalesPro?",
            answer:
                "LindaSalesPro offers free built-in sales follow-up tools for real estate agents. You only pay to obtain a verified agent badge, enabling you to start receiving leads and get matched with property seekers.",
        },
        {
            question: "How does LindaSalesPro help me with online marketing?",
            answer:
                "LindaSalesPro empowers you to generate custom links for running Facebook and Instagram Lead Ads. It allows you to schedule and broadcast new property updates to all your prospects via SMS and email. Additionally, it creates an online profile for you to showcase your properties, skills, and experience, enabling interested individuals to view available properties for sale, contact you, and book property inspections.",
        },
        {
            question: "Does LindaSalesPro help me generate free leads?",
            answer: "Yes. Through our agent-matching platform, we receive daily requests from individuals seeking experienced agents to assist them in selling or buying genuine properties. We then forward their contacts and requests to the top 3 agents who best match their criteria.",
        },
        {
            question: "Do I have to pay for each lead I get from LindaSalesPro?",
            answer:
                "No. Once you pass through our verification process to obtain our premium agent badge, you become eligible to start receiving leads. The number of leads you receive depends on factors such as your experience, the number of active sales captured on LindaSalesPro, and the volume of buyer requests in your location.",
        },
        {
            question: "Can an agent use LindaSalesPro without being verified?",
            answer:
                "Yes. Any agent can sign up to use the built-in sales follow-up and marketing tools on LindaSalesPro to grow their real estate business. However, they won’t be able to receive leads from us until they become verified.",
        },
    ];

    return (
        <div>
            <div className="text-2xl font-bold text-center text-gray-600 dark:text-slate-200 py-5">
                Frequently Asked Questions
            </div>
            <div className="flex flex-col items-center space-y-[20px]">
                {questions.map((question, index) => (
                    <div key={index} className="w-full mb-2 ">
                        <button
                            onClick={() => handleAccordionClick(index)}
                            className="w-full py-2 border-b border-gray-300 text-left cursor-pointer text-gray-800   dark:text-slate-300 font-medium"
                        >
                            {question.question}
                        </button>
                        {expanded === index && (
                            <div className="py-5 border-b border-gray-300 ring-2 ring-gray-500 rounded-md px-5 bg-slate-100 dark:bg-neutral-950">
                                <p className="line-loose text-gray-600 font-regular dark:text-slate-200">
                                    {question.answer}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
