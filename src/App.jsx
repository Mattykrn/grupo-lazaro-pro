import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Testimonios from "./pages/Testimonios";
import Apoyo from "./pages/Apoyo";
import Noticias from "./pages/Noticias";
import Contacto from "./pages/Contacto";
import Admin from "./pages/Admin";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Inicio /></Layout>} />
        <Route path="/testimonios" element={<Layout><Testimonios /></Layout>} />
        <Route path="/apoyo" element={<Layout><Apoyo /></Layout>} />
        <Route path="/noticias" element={<Layout><Noticias /></Layout>} />
        <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
        <Route path="/admin-lazaro-2025" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;