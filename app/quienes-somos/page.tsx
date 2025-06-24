// app/quienes-somos/page.tsx
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import QuienesSomos from "@/components/quienes-somos/QuienesSomos";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "¿Quiénes Somos? | Radio Chanquina FM 104.1",
  description:
    "Conoce la historia, misión y equipo humano detrás de Radio Chanquina FM. Transmitimos desde Chanco para toda la Región del Maule con identidad y compromiso local.",
  keywords: [
    "Radio Chanquina",
    "Chanco",
    "Maule",
    "radio local",
    "equipo radial",
    "radio cultural",
    "quienes somos",
    "emisora de Chanco",
    "identidad radial",
    "radio chilena",
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
    canonical: "https://www.chanquinafm.cl/quienes-somos",
  },
  openGraph: {
    title: "¿Quiénes Somos? | Radio Chanquina FM 104.1",
    description:
      "Conoce a Radio Chanquina, una emisora comprometida con la comunidad de Chanco y el Maule.",
    url: "https://www.chanquinafm.cl/quienes-somos",
    siteName: "Radio Chanquina FM",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://www.chanquinafm.cl/logo.png", // Puedes cambiar la imagen por una real más adelante
        width: 1200,
        height: 630,
        alt: "Radio Chanquina FM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Quiénes Somos? | Radio Chanquina FM 104.1",
    description:
      "Conoce al equipo humano y la misión de Radio Chanquina desde Chanco para la Región del Maule.",
    images: ["https://www.chanquinafm.cl/logo.png"],
  },
};

export default function QuienesSomosPage() {
  return (
    <main>
      <Navbar />
      <QuienesSomos />
      <Footer />
    </main>
  );
}
