import { cache } from "react";

export const getUrls = cache(async () => {
  const res = await fetch(`${process.env.DEV_LINK}/business-urls`, {
    next: { revalidate: 3600 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
});
