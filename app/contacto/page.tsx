// app/contacto/page.tsx
import { Metadata } from "next";
import Contacto from "@/components/contacto/Contacto";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contacto | Radio Chanquina FM 104.1",
  description:
    "Ponte en contacto con Radio Chanquina para sugerencias, colaboraciones, noticias o participación comunitaria. Te escuchamos desde Chanco para todo el Maule.",
  keywords: [
    "Contacto Radio Chanquina",
    "Radio en Chanco",
    "104.1 FM",
    "mensaje a la radio",
    "colaboración radial",
    "participación ciudadana",
    "noticias locales",
    "radio del Maule",
    "whatsapp radio",
    "hablar con locutores",
  ],
  authors: [{ name: "Radio Chanquina", url: "https://www.chanquinafm.cl" }],
  creator: "Radio Chanquina FM",
  publisher: "Radio Chanquina",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.chanquinafm.cl/contacto",
  },
  openGraph: {
    title: "Contacto | Radio Chanquina FM 104.1",
    description:
      "¿Tienes algo que contarnos? Escríbenos directamente desde nuestra web o vía WhatsApp. Somos tu emisora local desde Chanco.",
    url: "https://www.chanquinafm.cl/contacto",
    siteName: "Radio Chanquina FM",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://www.chanquinafm.cl/logo.png",
        width: 1200,
        height: 630,
        alt: "Contacto Radio Chanquina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Radio Chanquina FM 104.1",
    description:
      "Comunícate con nosotros para noticias, ideas o música local. Radio Chanquina te escucha.",
    images: ["https://www.chanquinafm.cl/logo.png"],
  },
};

export default function ContactoPage() {
  return (
    <main>
      <Navbar />
      <Contacto />
      <Footer />
    </main>
  );
}
