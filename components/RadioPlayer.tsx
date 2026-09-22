"use client";

import React, { useEffect, useRef, useState } from "react";
import ReactHowler from "react-howler";
import { Play, Pause, Volume1, Volume2, VolumeX } from "lucide-react";

const STREAM_URL =
  process.env.NEXT_PUBLIC_STREAM_URL ||
  "https://sonic.nnw.cl/8034/stream";

const VOLUME_STORAGE_KEY = "chanquina.player.volume";
const DEFAULT_VOLUME = 0.85;

function readStoredVolume(): number {
  if (typeof window === "undefined") return DEFAULT_VOLUME;
  try {
    const raw = window.localStorage.getItem(VOLUME_STORAGE_KEY);
    if (raw == null) return DEFAULT_VOLUME;
    const value = Number.parseFloat(raw);
    if (!Number.isFinite(value)) return DEFAULT_VOLUME;
    return Math.min(1, Math.max(0, value));
  } catch {
    return DEFAULT_VOLUME;
  }
}

const RadioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [muted, setMuted] = useState(false);
  const [ready, setReady] = useState(false);
  const volumeBeforeMuteRef = useRef(DEFAULT_VOLUME);

  useEffect(() => {
    const stored = readStoredVolume();
    setVolume(stored);
    volumeBeforeMuteRef.current = stored > 0 ? stored : DEFAULT_VOLUME;
    setMuted(stored === 0);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(VOLUME_STORAGE_KEY, String(volume));
    } catch {
      /* ignore */
    }
  }, [ready, volume]);

  const effectiveVolume = muted ? 0 : volume;
  const VolumeIcon =
    effectiveVolume === 0 ? VolumeX : effectiveVolume < 0.45 ? Volume1 : Volume2;

  const togglePlay = () => setPlaying((current) => !current);

  const onVolumeInput = (next: number) => {
    const clamped = Math.min(1, Math.max(0, next));
    setVolume(clamped);
    if (clamped > 0) {
      volumeBeforeMuteRef.current = clamped;
      setMuted(false);
    } else {
      setMuted(true);
    }
  };

  const toggleMute = () => {
    if (muted || volume === 0) {
      const restore = volumeBeforeMuteRef.current > 0 ? volumeBeforeMuteRef.current : DEFAULT_VOLUME;
      setVolume(restore);
      setMuted(false);
      return;
    }
    volumeBeforeMuteRef.current = volume;
    setMuted(true);
  };

  return (
    <section
      className="relative w-full max-w-md mx-auto p-6 bg-gradient-to-tr from-white via-[#F3EFFF] to-[#E9F6FF] rounded-3xl shadow-2xl border border-[#00D1FF]"
      aria-label="Reproductor de radio en línea de Chanquina FM"
    >
      <ReactHowler
        src={STREAM_URL}
        playing={playing}
        mute={muted}
        volume={effectiveVolume}
        html5
      />

      <h2 className="sr-only">
        Escucha en vivo la señal de Chanquina FM 104.1 desde Chanco
      </h2>

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

      <div className="flex items-center justify-center gap-6 mb-5">
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
      </div>

      <div
        className="mb-5 flex items-center gap-3 rounded-full border border-[#5B1FA6]/25 bg-white/70 px-3 py-2.5 shadow-sm backdrop-blur-sm"
        role="group"
        aria-label="Control de volumen"
      >
        <button
          type="button"
          onClick={toggleMute}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#5B1FA6]/35 bg-white text-[#5B1FA6] shadow-sm transition hover:border-[#00D1FF] hover:text-[#00D1FF]"
          aria-label={effectiveVolume === 0 ? "Activar sonido" : "Silenciar audio"}
        >
          <VolumeIcon className="w-5 h-5" />
        </button>

        <div className="relative flex min-w-0 flex-1 items-center">
          <div className="pointer-events-none absolute inset-x-0 h-1.5 rounded-full bg-[#5B1FA6]/15" />
          <div
            className="pointer-events-none absolute left-0 h-1.5 rounded-full bg-gradient-to-r from-[#5B1FA6] to-[#00D1FF]"
            style={{ width: `${Math.round(effectiveVolume * 100)}%` }}
          />
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={Math.round(effectiveVolume * 100)}
            onChange={(e) => onVolumeInput(Number(e.target.value) / 100)}
            className="chanquina-volume relative z-10 w-full cursor-pointer appearance-none bg-transparent"
            aria-label="Nivel de volumen"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(effectiveVolume * 100)}
          />
        </div>

        <span className="w-10 shrink-0 text-right text-xs font-semibold tabular-nums text-[#5B1FA6]">
          {Math.round(effectiveVolume * 100)}%
        </span>
      </div>

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
