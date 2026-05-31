import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Todos los crawlers — acceso completo
      {
        userAgent: "*",
        allow: "/",
      },
      // Google
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      // OpenAI / ChatGPT
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // Claude / Anthropic
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // Microsoft / Bing / Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: "https://fitvang.com/sitemap.xml",
  };
}
