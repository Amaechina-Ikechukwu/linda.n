"use client";
import React from "react";

export default function LindaButton({
  classname,
  onClick,
  text,
  loading,
}: {
  classname?: string;
  onClick?: (() => void) | any;
  text: string;
  loading?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`px-6 w-[200px] py-3 rounded-sm hover:scale-105 focus:scale-105 transition duration-500 transform font-semibold flex justify-center items-center gap-2  ${classname}`}
      style={{ WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }}
    >
      {loading ? <div>Subscribing...</div> : text}
    </button>
  );
}
