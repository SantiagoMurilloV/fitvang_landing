import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const BASE_URL = "https://fitvang.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Fitvang | Centro de Entrenamiento — Fútbol, Funcional y Fitness",
    template: "%s | Fitvang",
  },
  description:
    "Fitvang es el centro de entrenamiento de Juan José Gil, especializado en fútbol de posición, entrenamiento funcional y fitness. Programas individuales, grupales y online para llevar tu rendimiento al siguiente nivel. Colombia.",

  keywords: [
    "entrenamiento fútbol Colombia",
    "entrenador personal fútbol",
    "fitness funcional Colombia",
    "fútbol de posición",
    "entrenamiento deportivo",
    "Juan José Gil entrenador",
    "Fitvang",
    "academia fútbol Colombia",
    "rendimiento deportivo",
    "entrenamiento online fútbol",
    "centro de entrenamiento",
    "entrenamiento funcional",
    "acondicionamiento físico",
    "coach de fútbol",
  ],

  authors: [{ name: "Juan José Gil", url: "https://www.instagram.com/gilcho.10/" }],
  creator: "Juan José Gil — Fitvang",
  publisher: "Fitvang",

  // Open Graph — para redes sociales
  openGraph: {
    title: "Fitvang | Centro de Entrenamiento — Fútbol, Funcional y Fitness",
    description:
      "Entrenamiento de élite en fútbol, fitness funcional y acondicionamiento físico con Juan José Gil. Programas individuales, grupales y online. Colombia.",
    url: BASE_URL,
    siteName: "Fitvang",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/logo-full.jpeg",
        width: 1200,
        height: 630,
        alt: "Fitvang — Centro de Entrenamiento",
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: "Fitvang | Centro de Entrenamiento",
    description:
      "Fútbol, fitness funcional y entrenamiento de alto rendimiento con Juan José Gil. Colombia.",
    images: ["/logo-full.jpeg"],
    creator: "@fitvang10",
  },

  // Iconos y favicon
  icons: {
    icon: [
      { url: "/logo-icon.jpeg", type: "image/jpeg" },
    ],
    apple: [
      { url: "/logo-icon.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
    shortcut: "/logo-icon.jpeg",
  },

  // Manifest PWA
  manifest: "/manifest.webmanifest",

  // Robots y crawlers
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verificacion Google Search Console
  verification: {
    google: "yCMmdgG3U17hp2I9lzqDOnpc_-inY46LcnsX1V1vYY0",
  },

  alternates: {
    canonical: BASE_URL,
  },
};

// JSON-LD: Datos estructurados para Google y IAs
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Fitvang — Centro de Entrenamiento",
      description:
        "Centro de entrenamiento especializado en fútbol de posición, entrenamiento funcional y fitness. Programas individuales, grupales y online.",
      url: BASE_URL,
      logo: `${BASE_URL}/logo-full.jpeg`,
      image: `${BASE_URL}/logo-full.jpeg`,
      founder: {
        "@type": "Person",
        name: "Juan José Gil",
        jobTitle: "Fundador y Head Coach",
        sameAs: [
          "https://www.instagram.com/gilcho.10/",
          "https://www.instagram.com/fitvang10/",
        ],
      },
      sameAs: [
        "https://www.instagram.com/fitvang10/",
        "https://www.instagram.com/gilcho.10/",
      ],
      areaServed: {
        "@type": "Country",
        name: "Colombia",
      },
      inLanguage: "es-CO",
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Programas de Entrenamiento Fitvang",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Entrenamiento Individual",
              description:
                "Sesiones uno a uno personalizadas con análisis técnico deportivo, corrección y seguimiento semanal.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Entrenamiento Grupal",
              description:
                "Sesiones en grupos reducidos (máx. 8 personas) con ambiente competitivo y trabajo en equipo.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Plan Online",
              description:
                "Coaching remoto con plan personalizado, análisis de video y comunicación directa con el entrenador.",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#founder`,
      name: "Juan José Gil",
      jobTitle: "Fundador y Head Coach",
      worksFor: {
        "@id": `${BASE_URL}/#business`,
      },
      knowsAbout: [
        "Fútbol de posición",
        "Entrenamiento funcional",
        "Fitness",
        "Acondicionamiento físico",
        "Rendimiento deportivo",
      ],
      sameAs: [
        "https://www.instagram.com/gilcho.10/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Fitvang",
      description: "Centro de Entrenamiento — Fútbol, Funcional y Fitness",
      inLanguage: "es-CO",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#0a0a0a", color: "#ffffff" }}
      >
        {children}
      </body>
    </html>
  );
}
