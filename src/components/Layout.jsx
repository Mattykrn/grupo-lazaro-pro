import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white">
      {/* HEADER + MENÚ */}
      <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-20 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-8xl md:text-9xl font-bold mb-4">Grupo Lázaro ♥</h1>
          <p className="text-5xl md:text-7xl mb-10">Esclerosis Múltiple Santa Fe</p>
          <nav className="flex flex-wrap justify-center gap-8 md:gap-16 text-3xl md:text-5xl font-bold">
            <Link to="/" className="hover:text-pink-200 transition">Inicio</Link>
            <Link to="/testimonios" className="hover:text-pink-200 transition">Testimonios</Link>
            <Link to="/apoyo" className="hover:text-pink-200 transition">Apoyo</Link>
            <Link to="/noticias" className="hover:text-pink-200 transition">Noticias</Link>
            <Link to="/contacto" className="hover:text-pink-200 transition">Contacto</Link>
          </nav>
        </div>
      </header>

      {/* CONTENIDO DE CADA PÁGINA */}
      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-purple-900 text-white py-20 text-center">
        <p className="text-4xl">© 2025 Grupo Lázaro - Todos los derechos reservados</p>
        <p className="text-6xl mt-8">Porque juntos somos más fuertes ♥</p>
      </footer>
    </div>
  )
}