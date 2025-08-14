// components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Phone } from "lucide-react";
import Link from "next/link";
import RadioPlayer from "../RadioPlayer";

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-b from-[#6A1B9A] to-[#8E24AA] text-white py-20 px-6 text-center"
      aria-label="Bienvenida a Radio Chanquina"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Tu voz. Nuestra radio. <br className="hidden md:block" />
          Desde <span className="text-[#00D1FF]">Chanco</span> al mundo.
        </h1>

        <p className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
          Noticias, cultura y música en la 104.1 FM – <span className="italic">Radio Chanquina</span>. Conectamos a la comunidad de la Región del Maule con información confiable, identidad local y sonidos que acompañan tu día.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
          aria-label="Redes sociales de Radio Chanquina"
        >
          <Link title="WhatsApp" href="https://wa.me/56963417382" target="_blank">
            <Button className="bg-[#00D1FF] text-[#1A0047] hover:bg-white hover:text-[#5B1FA6] transition-all">
              <Phone className="w-4 h-4 mr-2" /> Escríbenos al WhatsApp
            </Button>
          </Link>

          <Link title="Facebook" href="https://www.facebook.com/profile.php?id=100090362018458" target="_blank">
            <Button className="bg-[#1877F2] text-white hover:bg-[#0d63d4] transition-all">
              <Facebook className="w-4 h-4 mr-2" /> Facebook
            </Button>
          </Link>

          <Link title="Instagram" href="https://www.instagram.com/radiochanquina" target="_blank">
            <Button className="bg-gradient-to-r from-[#feda75] via-[#d62976] to-[#962fbf] text-white hover:brightness-110 transition-all">
              <Instagram className="w-4 h-4 mr-2" /> Instagram
            </Button>
          </Link>
        </div>

        <div className="mt-6">
          <RadioPlayer />
        </div>

        <p className="text-sm text-white/70 mt-6">
          Sintonízanos en el 104.1 FM 📻 – Estamos contigo, donde estés.
        </p>
      </div>
    </section>
  );
};

export default Hero;
