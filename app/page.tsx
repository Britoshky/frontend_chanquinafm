import Footer from "@/components/Footer";
import Contacto from "@/components/home/Contacto";
import Hero from "@/components/home/Hero";
import ProgramacionDestacada from "@/components/home/ProgramacionDestacada";
import QuienesSomos from "@/components/home/QuienesSomos";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";


// SEO metadata
export const metadata: Metadata = {
  title: "Radio Chanquina FM 104.1 | Una radio para la gente de Chanco",
  description:
    "Chanquina FM 104.1: una radio para la gente de Chanco. Decibeles de energía con música, noticias y cultura local. Escúchanos en vivo.",
  keywords: [
    "Radio Chanquina",
    "Chanquina FM",
    "104.1 FM",
    "Radio en vivo",
    "Chanco",
    "Región del Maule",
    "radio local",
    "programación radial",
    "noticias Chanco",
    "radio chilena",
  ],
  authors: [{ name: "Radio Chanquina", url: "https://www.chanquinafm.cl" }],
  creator: "Radio Chanquina",
  publisher: "Radio Chanquina FM",
  openGraph: {
    title: "Radio Chanquina FM 104.1 | Decibeles de energía",
    description:
      "Una radio para la gente de Chanco. Escucha en vivo Chanquina FM 104.1: noticias, música y cultura desde la Región del Maule.",
    url: "https://www.chanquinafm.cl",
    siteName: "Radio Chanquina FM",
    images: [
      {
        url: "https://www.chanquinafm.cl/logo.png", // reemplazar si tienes imagen
        width: 1200,
        height: 630,
        alt: "Radio Chanquina FM 104.1",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radio Chanquina FM 104.1 | Decibeles de energía",
    description:
      "Una radio para la gente de Chanco. Sintoniza la 104.1 FM en vivo.",
    images: ["https://www.chanquinafm.cl/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.chanquinafm.cl",
  },
};

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <ProgramacionDestacada />
    <QuienesSomos />
    <Contacto />
    <Footer />
   </div>
  );
}
