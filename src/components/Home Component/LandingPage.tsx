import React from "react";
import blackman from "@/assets/blackman.jpg";
import blackmanhappy from "@/assets/blackmanhappy.jpg";
import donedeal from "@/assets/donedeal.jpg";
import singleman from "@/assets/singleman.jpg";
import Image from "next/image";
import style from "./landing.module.css";
export default function LandingPage() {
  const image =
    "https://img.freepik.com/free-photo/medium-shot-woman-holding-phone_23-2149033787.jpg?w=740&t=st=1696574592~exp=1696575192~hmac=465b531475219b9325be2161d0295966486bf07e28c8e1f1119c06f558122f4a";

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between md:gap-7 animate-scroll animate-fadeIn mt-[40px] ${style.landing}`}
    >
      <div className=" relative h-[700px] md:h-[500px] w-full flex flex-col gap-4  justify-center bg-cover bg-none bg-center bg-no-repeat  transition duration-500 transform">
        <h1 className="text-gray-600 dark:text-slate-200 text-5xl md:text-7xl font-bold leading-[1.2]">
          Close Real Estate Sales Faster with LindaSalesPro CRM
        </h1>
        <h2 className=" text-gray-600 dark:text-slate-200 text-lg max-w-2xl font-medium leading-relaxed">
          {`Supercharge your real estate business with LindaSalesPro CRM, the powerful mobile app solution designed to empower realtors. Manage leads efficiently, generate high-quality leads, and close deals faster. Trusted by 100+ companies and realtors.`}
        </h2>
        <button
          style={{ boxShadow: "0px 40px 40px rgba(255,165,0,0.5)" }}
          className="bg-[#FF8C00] px-6 w-full sm:w-[300px] py-4 rounded-sm hover:scale-105 focus:105 transition duration-500 transform text-slate-100 font-semibold"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=online.priceplan"
          >
            Get started for free  🚀
          </a>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-1 h-fit rounded-t-md w-fit">
        <Image
          src={blackman}
          alt="LindaSalesPro hero messages"
          width={300}
          height={300}
        />
        <Image
          src={blackmanhappy}
          alt="LindaSalesPro hero messages"
          width={300}
          height={300}
        />
        <Image
          src={donedeal}
          alt="LindaSalesPro hero messages"
          width={300}
          height={300}
        />
        <Image
          src={singleman}
          alt="LindaSalesPro hero messages"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
