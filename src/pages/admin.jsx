import { useState } from "react"

export default function Admin() {
  const [password, setPassword] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)

  const correctPassword = "lazaro2025" // ← Cambiala cuando quieras

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password === correctPassword) {
      setLoggedIn(true)
    } else {
      alert("Contraseña incorrecta, guerrero.")
    }
  }

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-purple-900 flex items-center justify-center px-6">
        <form onSubmit={handleSubmit} className="bg-white p-16 rounded-3xl shadow-2xl text-center">
          <h2 className="text-6xl font-bold text-purple-800 mb-10">Área Admin</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="text-4xl p-6 border-4 border-purple-600 rounded-2xl text-center mb-10 w-96"
            required
          />
          <br />
          <button type="submit" className="bg-purple-700 hover:bg-purple-900 text-white text-5xl font-bold px-20 py-10 rounded-full">
            Entrar
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900 text-white py-20 px-6">
      <h1 className="text-7xl md:text-9xl font-bold text-center mb-20">Panel Admin - Grupo Lázaro</h1>
      <div className="max-w-6xl mx-auto space-y-16 text-3xl">
        <div className="bg-white/10 p-10 rounded-3xl">
          <h2 className="text-5xl mb-6">Próximos pasos:</h2>
          <ul className="space-y-6 text-left">
            <li>→ Acá vas a ver todos los testimonios recibidos</li>
            <li>→ Todos los mensajes de apoyo</li>
            <li>→ Noticias enviadas</li>
            <li>→ Donaciones recibidas (próximamente con integración)</li>
          </ul>
        </div>
        <p className="text-center text-6xl">¡Bienvenido, capitán Mati!</p>
      </div>
    </div>
  )
}