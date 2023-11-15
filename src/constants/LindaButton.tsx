"use client"
import React from 'react';

export default function LindaButton({ classname, onClick, text }: { classname?: string; onClick?: (() => void) | any; text: string }) {
    return (
        <button
            onClick={onClick}
            className={`px-6 w-[200px] py-3 rounded-sm hover:scale-105 focus:105 transition duration-500 transform font-semibold ${classname}`}
            style={{ WebkitFontSmoothing: 'auto', MozOsxFontSmoothing: 'auto' }}
        >
            {text}
        </button>

    );
}
