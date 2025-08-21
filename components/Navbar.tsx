"use client"
// components/Navbar.tsx
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-gradient-to-r from-[#6A1B9A] to-[#8E24AA] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" title='Inicio' className="flex items-center gap-3">
          <div className="relative w-14 h-14">
            <Image
              src="/logo.png"
              alt="Chanquina FM logo"
              fill
              title='Logo de Chanquina FM'
              className="rounded-full object-contain border border-white shadow-md"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-xl font-bold">Chanquina FM</p>
            <p className="text-sm text-[#00D1FF] font-light">104.1 FM - Chanco</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium list-none">
            <li><Link href="/" title='Inicio' className="hover:text-[#00D1FF] transition-colors">Inicio</Link></li>
            <li><Link href="/quienes-somos" title='Quiénes Somos' className="hover:text-[#00D1FF] transition-colors">Quiénes Somos</Link></li>
            <li><Link href="/contacto" title='Contacto' className="hover:text-[#00D1FF] transition-colors">Contacto</Link></li>
            <li><Link href="/politicas" title='Politicas' className="hover:text-[#00D1FF] transition-colors">Privacidad</Link></li>
            <li><Link href="/condiciones" title='Condiciones' className="hover:text-[#00D1FF] transition-colors">Condiciones</Link></li>
              <li><a href="https://tarifas.servel.cl/visualizar/cf957f730049f3ee5390ee38ec012576bb4f20d8" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D1FF] transition-colors">Precios Servel</a></li>
              <li><Link href="/cotizar-servel" title='Cotizar Servel' className="hover:text-[#00D1FF] transition-colors">Cotizar Servel</Link></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-[#7B1FA2] px-4 pb-4">
          <ul className="flex flex-col gap-2 text-sm font-medium">
            <li><Link href="/" title='Inicio' className="block py-2 px-3 hover:bg-[#6C2BD1] rounded">Inicio</Link></li>
            <li><Link href="/quienes-somos" title='Quiénes Somos' className="block py-2 px-3 hover:bg-[#6C2BD1] rounded">Quiénes Somos</Link></li>
            <li><Link href="/contacto" title='Contacto' className="block py-2 px-3 hover:bg-[#6C2BD1] rounded">Contacto</Link></li>
            <li><Link href="/politicas" title='Politicas' className="block py-2 px-3 hover:bg-[#6C2BD1] rounded">Privacidad</Link></li>
            <li><Link href="/condiciones" title='Condiciones' className="block py-2 px-3 hover:bg-[#6C2BD1] rounded">Condiciones</Link></li>
              <li><a href="https://tarifas.servel.cl/visualizar/cf957f730049f3ee5390ee38ec012576bb4f20d8" target="_blank" rel="noopener noreferrer" className="block py-2 px-3 hover:bg-[#6C2BD1] rounded">Precios</a></li>
              <li><Link href="/cotizar-servel" title='Cotizar Servel' className="block py-2 px-3 hover:bg-[#6C2BD1] rounded">Cotizar Servel</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar