import { getUrls } from "@/lib/getUrls";
import { MetadataRoute } from "next";

export default async function sitemap() {
  const urls = await getUrls();

  const navlinks = ["home", "faqs", "testimonials", "features", "about"];
  const links = navlinks.map((link: string) => {
    return {
      url: `https://lindasalespro.com#${link}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    };
  });
  const businesses = urls.data.map((url: string) => {
    return {
      url: `https://lindasalespro.com/${url}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    };
  });
  return [
    {
      url: "https://lindasalespro.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...businesses,
    ...links,
  ];
}
