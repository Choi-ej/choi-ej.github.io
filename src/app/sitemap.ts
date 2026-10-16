import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/content";

// Required by output: "export".
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl }];
}
