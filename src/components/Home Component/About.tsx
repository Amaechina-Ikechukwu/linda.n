import React from "react";
import style from "./about.module.css";
export default function About() {
  const advantages = [
    "Schedule bulk SMS and email broadcasts to keep your prospects and clients informed about new estates and properties.",
    "Automatically send personalized birthday messages to your prospects and clients, showing them you care.",
    "Seamlessly record follow-up conversations and appointments with prospects and clients, ensuring no leads slip through the cracks.",
    "Get matched with potential property seekers, with their contacts delivered straight to your inbox, and convert them into sales.",
    "Collaborate with other agents using our co-agent feature to close deals faster and grow your real estate network.",
    "Generate a property listing website and create links to run Facebook lead ads for each of your properties",
  ];
  return (
    <div className="py-5">
      <div className="space-y-[50px]">
        <div className="bg-[#FF8C00] w-20 h-5"></div>
        <div className="w-full flex flex-col gap-5 items-start justify-between">
          <h3 className="font-bold text-3xl text-gray-600  dark:text-slate-200 ">
            Discover the Advantages of LindaSalesPro
          </h3>
          <div className="space-y-2">
            <p className="font-medium leading-8 text-base text-gray-600  dark:text-slate-200 md:max-w-5xl">
              Unlock the power of efficient property management, seamless client
              communication, and sales follow-up optimization with
              LindaSalesPro. Join hundreds of satisfied realtors who have
              transformed their real estate journey with our user-friendly CRM.
            </p>
          </div>

          <div className="w-full grid md:grid-cols-3 items-center gap-[40px]">
            {advantages.map((advantage: string) => (
              <div
                key={advantage}
                className="h-78 md:h-50 shadow-md shadow-orange-500/50 p-4 rounded-lg flex items-center"
              >
                <p className="font-regular leading-8 text-base text-gray-600 dark:text-slate-200 md:max-w-sm text-center">
                  {advantage}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#FF8C00] w-20 h-5"></div>
      </div>
    </div>
  );
}
