// components/ProgramacionDestacada.tsx
import { Clock } from 'lucide-react'

const programacion = [
  {
    horario: '10:00 – 12:00',
    titulo: 'Revolviendo la olla',
    descripcion: 'Junto a su amiga Loly. Conversación, recetas y vida cotidiana.'
  },
  {
    horario: '12:00 – 13:00',
    titulo: 'Música Nacional (Cuecas)',
    descripcion: 'Una hora dedicada al folclore chileno y cuecas tradicionales.'
  },
  {
    horario: '13:00 – 14:00',
    titulo: 'Cooperativa Enlace',
    descripcion: 'Conexión en vivo con las noticias nacionales más relevantes.'
  },
  {
    horario: '17:00 – 19:00',
    titulo: 'La Tarde Mexicana',
    descripcion: 'Junto a su amiga Loly. Rancheras, cumbia y cultura popular.'
  }
]

const ProgramacionDestacada = () => {
  return (
    <section className="bg-gradient-to-b from-[#F5F3FE] to-[#EFF6FF] py-20 px-6 text-center" aria-labelledby="programacion">
      <div className="max-w-5xl mx-auto">
        <h2 id="programacion" className="text-4xl md:text-5xl font-extrabold text-[#1A0047] mb-12 flex items-center justify-center gap-3">
          <span role="img" aria-label="radio">📡</span> Programación destacada – Lunes a Viernes
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {programacion.map((bloque, i) => (
            <article
              key={i}
              className="rounded-2xl bg-white shadow-lg border border-[#E0E7FF] p-6 text-left hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-[#5B1FA6] mb-2">
                <Clock className="w-4 h-4" /> <time>{bloque.horario}</time>
              </div>
              <h3 className="text-xl font-bold text-[#1A0047] mb-1">{bloque.titulo}</h3>
              <p className="text-sm text-[#444] leading-relaxed">{bloque.descripcion}</p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-sm text-[#5B1FA6]/70">
          ¡Sintoniza la 104.1 FM cada día y acompáñate con la mejor programación local desde Chanco!
        </p>
      </div>
    </section>
  )
}

export default ProgramacionDestacada