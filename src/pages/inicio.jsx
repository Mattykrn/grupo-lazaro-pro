import { Link } from "react-router-dom"

export default function Inicio() {
  return (
    <section className="py-32 text-center px-6">
      <h2 className="text-6xl md:text-8xl font-bold text-purple-800 mb-16">
        Quiénes somos y por qué existimos
      </h2>
      <p className="text-3xl md:text-5xl text-gray-700 max-w-6xl mx-auto leading-relaxed mb-24">
        Somos un grupo de personas con EM y familiares que nos juntamos todos los domingos en Santa Fe.<br />
        No somos una ONG, somos gente real que se abraza, se ríe, llora y se ayuda mutuamente.<br /><br />
        Queremos cambiar la mirada de la sociedad: no somos "enfermos", somos guerreros con ganas de vivir a pleno.
      </p>

      {/* 4 BOTONES GIGANTES */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto px-6">
        <Link to="/testimonios" className="bg-purple-700 hover:bg-purple-900 text-white p-20 rounded-3xl shadow-2xl text-center transform hover:scale-110 transition duration-300">
          <h3 className="text-6xl font-bold">Testimonios</h3>
          <p className="text-3xl mt-6">Contá tu historia ♥</p>
        </Link>

        <Link to="/apoyo" className="bg-pink-700 hover:bg-pink-900 text-white p-20 rounded-3xl shadow-2xl text-center transform hover:scale-110 transition duration-300">
          <h3 className="text-6xl font-bold">Apoyo</h3>
          <p className="text-3xl mt-6">Palabras de fuerza</p>
        </Link>

        <Link to="/noticias" className="bg-blue-700 hover:bg-blue-900 text-white p-20 rounded-3xl shadow-2xl text-center transform hover:scale-110 transition duration-300">
          <h3 className="text-6xl font-bold">Noticias</h3>
          <p className="text-3xl mt-6">Eventos y novedades</p>
        </Link>

        <Link to="/contacto" className="bg-green-700 hover:bg-green-900 text-white p-20 rounded-3xl shadow-2xl text-center transform hover:scale-110 transition duration-300">
          <h3 className="text-6xl font-bold">Contacto / Donar</h3>
          <p className="text-3xl mt-6">Alias: matii.n.t.6</p>
        </Link>
      </div>
    </section>
  )
}