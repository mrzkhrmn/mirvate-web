import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Özel Yazılım & Elektronik`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0e11",
    theme_color: "#00f0ff",
    lang: "tr",
    categories: ["business", "productivity"],
  };
}
