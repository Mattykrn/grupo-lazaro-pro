export default function Noticias() {
  return (
    <section className="py-40 text-center px-6 bg-blue-50">
      <h2 className="text-7xl md:text-9xl font-bold text-blue-800 mb-20">Noticias</h2>
      <p className="text-4xl md:text-6xl text-gray-700 max-w-4xl mx-auto mb-20">
        Próximos encuentros, eventos, actividades y todo lo que pasa en el grupo.
      </p>
      <a href="mailto:matii.toorres.06@gmail.com?subject=Noticia%20o%20Evento&body=Hola%20Mati,%20te%20cuento%20sobre..."
         className="inline-block bg-blue-700 hover:bg-blue-900 text-white text-5xl md:text-7xl font-bold px-32 py-16 rounded-full shadow-2xl transform hover:scale-110 transition">
        ¡Mandar noticia o evento!
      </a>
    </section>
  )
}