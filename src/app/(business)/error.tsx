"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log(error);
  return (
    <div className="w-full h-screen bg-orange-500 flex flex-col  items-center justify-center">
      <h2>Something went wrong!</h2>
    </div>
  );
}
