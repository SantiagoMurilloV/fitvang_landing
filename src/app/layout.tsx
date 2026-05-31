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

export const metadata: Metadata = {
  title: "Fitvang | Entrenamiento de Fútbol y Fitness con Juan José Gil",
  description:
    "Fitvang es la marca de entrenamiento de fútbol y fitness funcional de Juan José Gil. Programas de entrenamiento individual, grupal y online. Lleva tu juego al siguiente nivel.",
  keywords: [
    "entrenamiento fútbol",
    "fitness funcional",
    "Juan José Gil",
    "Fitvang",
    "entrenador personal",
    "fútbol España",
  ],
  authors: [{ name: "Juan José Gil - Fitvang" }],
  openGraph: {
    title: "Fitvang | Entrena Como un #10",
    description:
      "Entrenamiento de élite en fútbol, fitness funcional y acondicionamiento físico con Juan José Gil.",
    type: "website",
    locale: "es_ES",
  },
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
      <body
        className="min-h-full flex flex-col"
        style={{ background: "#0a0a0a", color: "#ffffff" }}
      >
        {children}
      </body>
    </html>
  );
}
