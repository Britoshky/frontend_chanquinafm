// components/PoliticasSeguridad.tsx
const PoliticasSeguridad = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 text-[#1A0047]">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
        🔐 Políticas de Seguridad y Privacidad
      </h1>

      <p className="mb-6 text-lg">
        En <strong>Radio Chanquina FM 104.1</strong>, nos tomamos muy en serio la protección de tus datos personales y el uso responsable de tu información. A continuación, detallamos nuestras políticas:
      </p>

      <ul className="list-disc list-inside space-y-4 text-md">
        <li>
          <strong>Recopilación de datos:</strong> Solo recopilamos información necesaria para el contacto o interacción con nuestra radio, como tu nombre, correo y número de teléfono.
        </li>
        <li>
          <strong>Uso de la información:</strong> Tu información será utilizada únicamente para fines de contacto, retroalimentación, colaboración o envío de noticias si así lo solicitaste.
        </li>
        <li>
          <strong>No compartimos datos:</strong> Nunca compartiremos tus datos personales con terceros sin tu consentimiento expreso.
        </li>
        <li>
          <strong>Medidas de seguridad:</strong> Implementamos medidas técnicas y organizativas para proteger tu información contra accesos no autorizados.
        </li>
        <li>
          <strong>Derechos del usuario:</strong> Puedes solicitar la rectificación o eliminación de tus datos en cualquier momento escribiéndonos a administrador@chanquinafm.cl.
        </li>
      </ul>

      <p className="mt-8 text-sm text-gray-500">
        Última actualización: Junio 2025
      </p>
    </section>
  )
}

export default PoliticasSeguridad;
