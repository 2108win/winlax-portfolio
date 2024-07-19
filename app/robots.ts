import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        allow: "/about",
      },
      {
        userAgent: "*",
        allow: "/projects",
      },
      {
        userAgent: "*",
        allow: "/cv",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
