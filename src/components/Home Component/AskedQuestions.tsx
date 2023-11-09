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
                "LindaSalesPro is a mobile CRM app designed to empower sales and marketing professionals to generate more leads online and effortlessly follow up with them via WhatsApp, calls, SMS, or email. Organize leads on your mobile phone and activate automated, personalized email follow-up.",
        },
        {
            question: "How does LindaSalesPro work?",
            answer:
                "LindaSalesPro works by allowing you to create Lead-Gen campaign links that capture user data and automatically follow up with potential leads. This streamlines your sales process and increases conversion rates.",
        },
        {
            question: "Is LindaSalesPro User-Friendly?",
            answer:
                "Yes, LindaSalesPro is designed to be user-friendly and easy to set up and manage. You don't need any technical expertise to use it.",
        },
        {
            question: "Can I try LindaSalesPro for free?",
            answer: "Yes, you can sign up for LindaSalesPro for free and start generating and converting leads right away.",
        },
        {
            question: "What makes LindaSalesPro a unique lead generation and conversion tool?",
            answer:
                "LindaSalesPro is unique in that it combines lead generation and conversion into one app, making it easier and more effective for businesses. Plus, with its built-in automation, it saves businesses time and money in the long run.",
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
