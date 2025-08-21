import Navbar from "@/components/Navbar";
import CotizadorServel from "../../components/cotizar-servel/CotizadorServel";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cotizador Servel | Radio Chanquina FM 104.1",
  description:
    "Calcula el costo de avisos y entrevistas para la franja electoral Servel 2025 en Radio Chanquina FM 104.1. Tarifas para presidentes, senadores y diputados.",
  keywords: [
    "Cotizador Servel",
    "Radio Chanquina FM",
    "Franja electoral",
    "Tarifas radio",
    "Elecciones 2025",
    "Presidentes",
    "Senadores",
    "Diputados",
    "Avisos",
    "Entrevistas",
    "Chanco",
    "104.1 FM"
  ],
  openGraph: {
    title: "Cotizador Servel | Radio Chanquina FM 104.1",
    description:
      "Calcula el costo de avisos y entrevistas para la franja electoral Servel 2025 en Radio Chanquina FM 104.1.",
    url: "https://www.chanquinafm.cl/cotizar-servel",
    siteName: "Radio Chanquina FM",
    images: [
      {
        url: "https://www.chanquinafm.cl/logo.png",
        width: 1200,
        height: 630,
        alt: "Radio Chanquina FM 104.1",
      },
    ],
    locale: "es_CL",
    type: "website",
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
    canonical: "https://www.chanquinafm.cl/cotizar-servel",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#6A1B9A] to-[#8E24AA]">
      <Navbar />
      <CotizadorServel />
      <Footer />
    </main>
  );
}
