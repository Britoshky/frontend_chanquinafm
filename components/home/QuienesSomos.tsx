// components/QuienesSomos.tsx

const QuienesSomos = () => {
  return (
    <section
      className="bg-white text-[#1A0047] py-20 px-6 text-center"
      aria-labelledby="quienes-somos"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          id="quienes-somos"
          className="text-4xl md:text-5xl font-extrabold mb-10"
        >
          🎙️ ¿Quiénes somos?
        </h2>

        <p className="text-lg leading-relaxed text-[#444] mb-6">
          Somos <strong>Radio Chanquina FM 104.1</strong>, una emisora local
          ubicada en <strong>Chanco, Región del Maule</strong>, que nace con el
          propósito de conectar, informar y acompañar a la comunidad costera y
          del interior. Nuestra programación combina cultura, identidad local,
          música en vivo y espacios participativos donde la voz de los vecinos
          y vecinas cobra protagonismo.
        </p>

        <p className="text-lg leading-relaxed text-[#444] mb-6">
          Creemos en el poder de la radio como medio de comunicación
          independiente, cercano y comprometido con el desarrollo territorial.
          A través de nuestras ondas, compartimos noticias relevantes, expresiones
          artísticas, costumbres y música que representa el alma de nuestra zona.
        </p>

        <p className="text-lg leading-relaxed text-[#444]">
          La radio está dirigida por <strong>Héctor Brito Puga</strong>, con el
          apoyo de un equipo humano apasionado por la comunicación y el servicio
          público. Nuestra misión es acompañarte cada día con contenidos que
          informen, entretengan y fortalezcan nuestra identidad maulina.
        </p>
      </div>
    </section>
  )
}

export default QuienesSomos