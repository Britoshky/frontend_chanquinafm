// app/condiciones/page.tsx
import { Metadata } from "next";
import CondicionesUso from "@/components/condiciones/CondicionesUso";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso | Radio Chanquina FM 104.1",
  description:
    "Consulta los términos y condiciones legales para el uso del sitio web de Radio Chanquina FM, emisora comunitaria desde Chanco para la Región del Maule.",
  keywords: [
    "términos y condiciones",
    "uso del sitio",
    "Radio Chanquina",
    "104.1 FM",
    "Chanco",
    "Maule",
    "avisos legales",
    "políticas legales radio",
    "uso de contenido",
    "responsabilidad legal",
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
    canonical: "https://www.chanquinafm.cl/condiciones",
  },
  openGraph: {
    title: "Términos y Condiciones de Uso | Radio Chanquina FM",
    description:
      "Conoce las normas de uso del sitio web de Radio Chanquina FM. Transparencia y responsabilidad desde la Región del Maule.",
    url: "https://www.chanquinafm.cl/condiciones",
    siteName: "Radio Chanquina FM",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "https://www.chanquinafm.cl/logo.png",
        width: 1200,
        height: 630,
        alt: "Términos y Condiciones | Radio Chanquina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones | Radio Chanquina FM 104.1",
    description:
      "Lee nuestros términos y condiciones de uso. Comprometidos con la transparencia digital.",
    images: ["https://www.chanquinafm.cl/logo.png"],
  },
};

export default function CondicionesPage() {
  return (
    <main>
      <Navbar />
      <CondicionesUso />
      <Footer />
    </main>
  );
}
