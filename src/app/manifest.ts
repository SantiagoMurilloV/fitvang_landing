import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fitvang - Centro de Entrenamiento",
    short_name: "Fitvang",
    description:
      "Centro de entrenamiento de fútbol, fitness funcional y acondicionamiento físico con Juan José Gil. Colombia.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#38BDF8",
    lang: "es",
    icons: [
      {
        src: "/logo-nobg.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-nobg.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["sports", "health", "fitness"],
    screenshots: [],
  };
}
