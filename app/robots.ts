import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin",
        "/delhi-matka",
        "/dwarka",
        "/gali",
        "/delhi-savera",
        "/lakshmi-bajar",
        "/karol-bagh",
        "/anmol-bazar",
        "/delhi-darbar",
        "/new-ganga",
        "/jaipur-matka",
        "/shri-lakshmi",
        "/agra-city",
        "/raj-shree",
        "/ajmer",
        "/udaipur-city",
        "/mandi-bazar",
        "/sialkot",
        "/dwarka-city",
        "/dehradun-city",
      ],
    },
    sitemap: "https://www.a7sattaking.co/sitemap.xml",
  };
}