import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Inicio from "./pages/Inicio"
import Testimonios from "./pages/Testimonios"
import Apoyo from "./pages/Apoyo"
import Noticias from "./pages/Noticias"
import Contacto from "./pages/Contacto"
import Admin from "./pages/Admin"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="testimonios" element={<Testimonios />} />
        <Route path="apoyo" element={<Apoyo />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="admin-lazaro-2025" element={<Admin />} />
      </Route>
    </Routes>
  )
}

export default App