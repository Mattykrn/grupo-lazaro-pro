import React from "react";
import Layout from "../components/Layout";

const Testimonios = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-950 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-12 drop-shadow-2xl">
            ¡TU VOZ ES NUESTRA FUERZA!
          </h1>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-purple-400 space-y-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=matii.toorres.06@gmail.com&su=Mi%20TESTIMONIO%20-%20Grupo%20L%C3%A1zaro"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 font-black text-4xl md:text-6xl px-20 py-12 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              ABRIR GMAIL Y COMPARTIR MI TESTIMONIO
            </a>

            <div className="bg-purple-900/80 rounded-3xl p-10">
              <p className="text-3xl md:text-5xl text-white mb-6">
                O copiá el mail y escribime desde tu casilla:
              </p>
              <div className="bg-black/50 rounded-2xl p-8 inline-block">
                <p className="text-4xl md:text-6xl font-bold text-yellow-300 select-all break-all">
                  matii.toorres.06@gmail.com
                </p>
              </div>
              <p className="text-2xl md:text-4xl text-purple-200 mt-8">
                Asunto sugerido: <strong>“TESTIMONIO Grupo Lázaro”</strong>
              </p>
            </div>

            <p className="text-3xl text-purple-200">
              Tu historia puede cambiar la vida de otro guerrero ❤️
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonios;