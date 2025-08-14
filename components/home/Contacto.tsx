"use client";
// components/Contacto.tsx
import { Mail, MapPin, PhoneCall } from "lucide-react";

const Contacto = () => {
  return (
    <section
      className="bg-[#F9F8FF] text-[#1A0047] py-20 px-6"
      aria-labelledby="contacto"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 id="contacto" className="text-4xl md:text-5xl font-extrabold mb-10">
          ✉️ Contáctanos
        </h2>

        <p className="text-lg mb-8 text-[#444]">
          ¿Tienes dudas, sugerencias o quieres colaborar con nosotros?
          Escríbenos o contáctanos a través de nuestras plataformas.
        </p>

        <div className="space-y-6 text-left">
          <div className="flex items-center gap-4">
            <PhoneCall className="text-[#5B1FA6] w-6 h-6" />
            <span className="text-md">+56 9 6341 7382</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-[#5B1FA6] w-6 h-6" />
            <span className="text-md">administrador@chanquinafm.cl</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-[#5B1FA6] w-6 h-6" />
            <span className="text-md">Chanco, Región del Maule, Chile</span>
          </div>
        </div>

        <div className="mt-12">
          <form
            className="grid gap-4 text-left"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const nombre = form.nombre.value;
              const correo = form.correo.value;
              const mensaje = form.mensaje.value;

              const texto = `Hola! Mi nombre es *${nombre}* (%0AEmail: ${correo}) y quiero decir: %0A${encodeURIComponent(
                mensaje
              )}`;
              window.open(`https://wa.me/56963417382?text=${texto}`, "_blank");
            }}
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre completo"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B1FA6]"
            />
            <input
              type="email"
              name="correo"
              placeholder="Correo electrónico"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5B1FA6]"
            />
            <textarea
              name="mensaje"
              placeholder="Escribe tu mensaje"
              required
              rows={4}
              className="w-full px-4 py-3 border rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#5B1FA6]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#5B1FA6] hover:bg-[#00D1FF] text-white font-medium py-3 px-6 rounded-lg transition-all"
            >
              Enviar mensaje por WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
