"use client";
import { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import "./Header.css";
import { motion } from "framer-motion";
export default function Header({ params }: any) {
  const activeClassName =
    "w-fit md:w-full py-2 ring-2 ring-gray-500/50 dark:text-slate-100 dark:ring-slate-500/50 rounded-md text-gray-700 px-4";
  const inActiveClassName =
    "py-2 relative fixed rounded-md text-gray-500 dark:text-slate-300";
  const router = useRouter();

  const [currentSectionId, setCurrentSectionId] = useState("");
  const [mobileNavVisible, setMobileNavVisible] = useState(false); // State to manage mobile navigation visibility

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      setCurrentSectionId(hash ? hash.substring(1) : "");
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
      setMobileNavVisible(false); // Hide mobile navigation after clicking on a section link
    }
  };

  const toggleMobileNav = () => {
    setMobileNavVisible(!mobileNavVisible); // Toggle mobile navigation visibility
  };

  const generateNavItem = (label: string, sectionId: string) => (
    <motion.div
      animate={{
        // Define your desired animation here
        opacity: 1,
        scale: 1,
        x: 0,
        // Adjust duration, easing, and other options as needed
      }}
      transition={{
        // Adjust transition parameters (type, duration, ease)
        type: "spring",
        stiffness: 100,
        // ...
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }} // Adjust visibility trigger options
    >
      <li
        className={
          sectionId === currentSectionId ? activeClassName : inActiveClassName
        }
        key={sectionId}
      >
        <button onClick={() => scrollToSection(sectionId)}>{label}</button>
      </li>
    </motion.div>
  );

  const navigationItems = [
    { label: "Home", sectionId: "home" },
    { label: "About", sectionId: "about" },
    { label: "Features", sectionId: "features" },
    { label: "Testimonial", sectionId: "testimonials" },
    { label: "FAQs", sectionId: "faqs" },
  ];

  return (
    <nav className="py-5 mt-3 flex flex-row items-center bg-transparent dark:bg-transparent rounded-lg justify-between">
      <div className="flex items-center justify-between w-full space-x-8">
        <div>
          <img
            className="h-8 w-auto"
            src="https://chooyagroup.com/res/images/LindaSalesPro-Colored.png"
            alt="LindaSalesPro, Receive high-quality leads directly in your inbox and effortlessly convert them into successful sales using LindaSalesPro's built-in sales follow-up tools."
            loading="lazy"
          />
        </div>
        <ul className={`flex flex-row space-x-8 hidden sm:flex `}>
          {navigationItems.map(({ label, sectionId }) =>
            generateNavItem(label, sectionId)
          )}
        </ul>
      </div>
      <button
        className="block md:hidden py-2 px-4 ring-2 ring-gray-500/50 w-auto rounded-sm hover:scale-105 focus:105 transition duration-500 dark:rounded-md transform font-semibold"
        onClick={toggleMobileNav}
      >
        {mobileNavVisible ? (
          <XMarkIcon className="dark:text-slate-100 w-5 h-5 dark:ring-slate-500/50 rounded-md text-gray-700" />
        ) : (
          <Bars3BottomRightIcon className="dark:text-slate-100 w-5 h-5 dark:ring-slate-500/50 rounded-md text-gray-700" />
        )}
      </button>
      <div
        id="mobileNav"
        className={`fixed h-screen w-[350px] p-4 space-y-[20px]  top-0 end-0 bg-white dark:bg-neutral-900 z-10 sm:hidden ${
          mobileNavVisible ? "" : "hidden" // Toggle visibility based on state
        }`}
      >
        <div>
          <button
            className="block md:hidden py-2 px-4 w-auto rounded-sm hover:scale-105 focus:105 transition duration-500 dark:rounded-md transform font-semibold"
            onClick={toggleMobileNav}
          >
            <XMarkIcon className="dark:text-slate-100 w-5 h-5 dark:ring-slate-500/50 rounded-md text-gray-700" />
          </button>
        </div>
        <ul className={`space-y-[20px]`}>
          {navigationItems.map(({ label, sectionId }) =>
            generateNavItem(label, sectionId)
          )}
        </ul>
      </div>
    </nav>
  );
}
