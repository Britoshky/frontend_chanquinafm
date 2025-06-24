// app/politicas-de-seguridad/page.tsx
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PoliticasSeguridad from "@/components/politicas/PoliticasSeguridad";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Políticas de Seguridad | Radio Chanquina FM 104.1",
  description:
    "Lee nuestras políticas de seguridad, privacidad y tratamiento de datos personales en Radio Chanquina FM. Tu confianza es nuestra prioridad.",
  keywords: [
    "Políticas de seguridad",
    "Privacidad de datos",
    "Radio Chanquina",
    "protección de datos",
    "RGPD",
    "Chanco",
    "Radio FM",
    "seguridad digital",
    "confidencialidad",
  ],
  authors: [{ name: "Radio Chanquina", url: "https://www.chanquinafm.cl" }],
  creator: "Radio Chanquina",
  publisher: "Radio Chanquina FM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.chanquinafm.cl/politicas-de-seguridad",
  },
  openGraph: {
    title: "Políticas de Seguridad | Radio Chanquina FM 104.1",
    description:
      "Conoce cómo protegemos tu información personal en Radio Chanquina FM. Nuestra política de seguridad está alineada con los estándares de protección de datos.",
    url: "https://www.chanquinafm.cl/politicas-de-seguridad",
    siteName: "Radio Chanquina FM",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://www.chanquinafm.cl/logo.png",
        width: 1200,
        height: 630,
        alt: "Políticas de Seguridad - Radio Chanquina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Políticas de Seguridad | Radio Chanquina FM 104.1",
    description:
      "Conoce nuestras políticas de privacidad y tratamiento de datos en Radio Chanquina FM.",
    images: ["https://www.chanquinafm.cl/logo.png"],
  },
};

export default function PoliticasPage() {
  return (
    <main>
      <Navbar />
      <PoliticasSeguridad />
      <Footer />
    </main>
  );
}
