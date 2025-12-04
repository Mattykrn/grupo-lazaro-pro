import Inicio from "./pages/inicio"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Testimonios from "./pages/testimonios"
import Apoyo from "./pages/Apoyo"
import Noticias from "./pages/noticias"
import Contacto from "./pages/contacto"
import Admin from "./pages/admin"

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