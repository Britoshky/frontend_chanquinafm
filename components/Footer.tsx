// components/Footer.tsx
import Link from 'next/link'
import { Facebook, Instagram, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#5B1FA6] to-[#7E3FF2] text-white pt-12 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Información de la radio */}
        <div>
          <h3 className="text-xl font-bold mb-3">Radio Chanquina FM</h3>
          <p className="text-sm text-white/80 leading-relaxed">
            Transmitiendo desde Chanco para toda la Región del Maule en la 104.1 FM. Somos voz local, cultura viva y compañía diaria.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Enlaces</h4>
          <ul className="space-y-2 text-sm">
            <li><Link title='Inicio' href="/" className="hover:underline">Inicio</Link></li>
            <li><Link title='Quienes Somos' href="/quienes-somos" className="hover:underline">¿Quiénes somos?</Link></li>
            <li><Link title='Contacto' href="/contacto" className="hover:underline">Contacto</Link></li>
            <li><Link title='Politicas de Seguridad' href="/politicas" className="hover:underline">Política de privacidad</Link></li>
            <li><Link title='Condiciones de Servicio' href="/condiciones" className="hover:underline">Términos y condiciones</Link></li>
          </ul>
        </div>

        {/* Contacto y redes */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contáctanos</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> <span>+56 9 6341 7382</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> <span>administrador@chanquinafm.cl</span>
            </li>
            <li className="flex items-center gap-3 mt-3">
              <Link title='Página de Facebook' href="https://www.facebook.com/profile.php?id=100090362018458" target="_blank" aria-label="Facebook" className="hover:text-[#00D1FF]">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link title='Cuenta de instagram' href="https://www.instagram.com/radiochanquina" target="_blank" aria-label="Instagram" className="hover:text-[#feda75]">
                <Instagram className="w-5 h-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Radio Chanquina FM. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer