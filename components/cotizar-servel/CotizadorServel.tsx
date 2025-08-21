"use client";
import React, { useState } from "react";
import Image from "next/image";

const precios = {
  15: 2200,
  30: 4400,
  45: 6600,
  60: 8800,
  entrevista15: 99000,
  entrevista30: 198000,
};

export default function CotizadorServel() {
  const [segundos, setSegundos] = useState(15);
  const [cantidad, setCantidad] = useState(1);
  const [dias, setDias] = useState(1);
  const [tipo, setTipo] = useState("aviso");

  let total = 0;
  if (tipo === "aviso") {
    const key = String(segundos) as keyof typeof precios;
    total = precios[key] * cantidad * dias;
  } else if (tipo === "entrevista15") {
    total = precios.entrevista15 * cantidad * dias;
  } else if (tipo === "entrevista30") {
    total = precios.entrevista30 * cantidad * dias;
  }

  return (
    <section className="max-w-3xl mx-auto mt-12 mb-20 px-6">
      <div className="bg-gradient-to-b from-[#6A1B9A] to-[#8E24AA] rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex flex-col items-center py-10 px-6 text-center text-white">
          <div className="w-24 h-24 relative mb-4">
            <Image
              src="/logo.png"
              alt="Logo Chanquina FM"
              width={96}
              height={96}
              className="rounded-full border-4 border-white shadow-lg object-contain"
              priority
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
            Chanquina FM 104.1
          </h1>
          <span className="text-lg md:text-xl font-semibold text-[#00D1FF]">
            Cotizador Servel
          </span>
        </div>

        {/* Formulario */}
        <div className="bg-white rounded-b-3xl px-6 md:px-10 py-10 space-y-8">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-[#6A1B9A]">
                  Tipo de servicio
                </label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full border-2 border-[#B39DDB] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]"
                >
                  <option value="aviso">Aviso</option>
                  <option value="entrevista15">Entrevista 15 min</option>
                  <option value="entrevista30">Entrevista 30 min</option>
                </select>
              </div>

              {tipo === "aviso" && (
                <div>
                  <label className="block mb-2 font-semibold text-[#6A1B9A]">
                    Duración del aviso
                  </label>
                  <select
                    value={segundos}
                    onChange={(e) => setSegundos(Number(e.target.value))}
                    className="w-full border-2 border-[#B39DDB] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]"
                  >
                    <option value={15}>15 segundos</option>
                    <option value={30}>30 segundos</option>
                    <option value={45}>45 segundos</option>
                    <option value={60}>1 minuto</option>
                  </select>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-semibold text-[#6A1B9A]">
                  Cantidad por día
                </label>
                <input
                  type="number"
                  min={1}
                  value={cantidad}
                  onChange={(e) => setCantidad(Number(e.target.value))}
                  className="w-full border-2 border-[#B39DDB] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-[#6A1B9A]">
                  Cantidad de días
                </label>
                <input
                  type="number"
                  min={1}
                  value={dias}
                  onChange={(e) => setDias(Number(e.target.value))}
                  className="w-full border-2 border-[#B39DDB] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]"
                />
              </div>
            </div>
          </form>

          {/* Resultado */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#6A1B9A] to-[#8E24AA] text-white shadow-lg text-center">
            <h2 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
              <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                <path
                  fill="#00D1FF"
                  d="M12 2C6.477 2 2 6.477 2 12c0 
                     5.523 4.477 10 10 10s10-4.477 10-10
                     c0-5.523-4.477-10-10-10Zm0 18a8 8 0 
                     1 1 0-16 8 8 0 0 1 0 16Zm-1-13h2v6h-2V7Zm0 
                     8h2v2h-2v-2Z"
                />
              </svg>
              Resultado
            </h2>
            <p className="text-3xl font-extrabold">
              Total:{" "}
              <span className="text-[#00D1FF]">
                ${total.toLocaleString("es-CL")}
              </span>
            </p>
          </div>

          {/* Info tarifas */}
          <div className="mt-8 text-center text-sm text-[#6A1B9A]">
            <p>
              Tarifas válidas para la franja electoral Servel <br />
              <span className="font-semibold">
                Presidentes, Senadores y Diputados - Año 2025
              </span>
              <br />
              <span className="font-semibold">Avisos:</span> 15s $2.200 | 30s
              $4.400 | 45s $6.600 | 1min $8.800
              <br />
              <span className="font-semibold">Entrevistas:</span> 15min $99.000 |
              30min $198.000
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
