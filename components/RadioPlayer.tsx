"use client";

import React, { useState } from "react";
import ReactHowler from "react-howler";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const RadioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const togglePlay = () => setPlaying(!playing);
  const toggleMute = () => setMuted(!muted);

  return (
    <section
      className="relative w-full max-w-md mx-auto p-6 bg-gradient-to-tr from-white via-[#F3EFFF] to-[#E9F6FF] rounded-3xl shadow-2xl border border-[#00D1FF]"
      aria-label="Reproductor de radio en línea de Chanquina FM"
    >
      {/* Motor de audio sin UI */}
      <ReactHowler
        src="https://stream.cloudmusic.cl/listen/radio_chanquina/radio.mp3"
        playing={playing}
        mute={muted}
        html5
      />

      {/* Encabezado SEO para screen readers e IA */}
      <h2 className="sr-only">
        Escucha en vivo la señal de Chanquina FM 104.1 desde Chanco
      </h2>

      {/* Onda animada decorativa */}
      <div
        className="flex justify-center items-end gap-[4px] h-6 mt-4 mb-4"
        aria-hidden="true"
      >
        <div className="w-[4px] h-3 bg-[#5B1FA6] animate-wave delay-[0ms]" />
        <div className="w-[4px] h-5 bg-[#00D1FF] animate-wave delay-[100ms]" />
        <div className="w-[4px] h-4 bg-[#5B1FA6] animate-wave delay-[200ms]" />
        <div className="w-[4px] h-6 bg-[#00D1FF] animate-wave delay-[300ms]" />
        <div className="w-[4px] h-4 bg-[#5B1FA6] animate-wave delay-[400ms]" />
        <div className="w-[4px] h-3 bg-[#5B1FA6] animate-wave delay-[0ms]" />
        <div className="w-[4px] h-5 bg-[#00D1FF] animate-wave delay-[100ms]" />
        <div className="w-[4px] h-4 bg-[#5B1FA6] animate-wave delay-[200ms]" />
        <div className="w-[4px] h-6 bg-[#00D1FF] animate-wave delay-[300ms]" />
        <div className="w-[4px] h-4 bg-[#5B1FA6] animate-wave delay-[400ms]" />
      </div>

      {/* Botones de control */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <button
          onClick={togglePlay}
          className="bg-[#5B1FA6] hover:bg-[#00D1FF] text-white p-4 rounded-full shadow-md transition-all"
          aria-label={
            playing ? "Pausar transmisión" : "Reproducir transmisión en vivo"
          }
        >
          {playing ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </button>

        <button
          onClick={toggleMute}
          className="border border-[#5B1FA6] text-[#5B1FA6] hover:border-[#00D1FF] hover:text-[#00D1FF] p-4 rounded-full shadow-sm transition-all"
          aria-label={muted ? "Activar sonido" : "Silenciar audio"}
        >
          {muted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Indicador de estado en vivo */}
      <div
        className="flex justify-center items-center gap-2 text-sm text-[#5B1FA6] font-medium"
        role="status"
        aria-live="polite"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        En Vivo – 104.1 FM desde Chanco
      </div>
    </section>
  );
};

export default RadioPlayer;
