import React from 'react';
import Layout from '../components/Layout';

const Testimonios = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-950 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-black text-white text-center mb-10 drop-shadow-2xl">
            ¡TU VOZ ES NUESTRA FUERZA!
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 text-center mb-16 leading-relaxed">
            Contanos tu historia, tu lucha, tu victoria. Cada testimonio inspira a cientos de guerreros.
          </p>

          {/* Formulario que envía al mail */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-purple-300">
            <form 
              action="https://formsubmit.co/matii.toorres.06@gmail.com" 
              method="POST"
              className="space-y-8"
            >
              <div>
                <label className="block text-2xl font-bold text-white mb-3">
                  Tu nombre o apodo
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-6 py-5 rounded-2xl text-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500"
                  placeholder="Ej: Ana la Guerrera"
                />
              </div>

              <div>
                <label className="block text-2xl font-bold text-white mb-3">
                  Tu testimonio (contanos todo lo que quieras ❤️)
                </label>
                <textarea
                  name="message"
                  rows="12"
                  required
                  className="w-full px-6 py-5 rounded-2xl text-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500 resize-none"
                  placeholder="Acá podés escribir tu historia completa... cuánto tiempo con EM, qué te ayudó, qué le dirías a alguien que recién empieza..."
                ></textarea>
              </div>

              {/* Campos ocultos */}
              <input type="hidden" name="_subject" value="¡NUEVO TESTIMONIO - Grupo Lázaro!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://grupo-lazaro-em.vercel.app/testimonios/gracias" />

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 font-black text-3xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  COMPARTIR MI TESTIMONIO
                </button>
              </div>
            </form>

            <p className="text-purple-200 text-center mt-8 text-lg">
              Todos los testimonios serán revisados y publicados con amor en la web ❤️
            </p>
          </div>

          {/* Pantalla de gracias */}
          {window.location.pathname.includes('/testimonios/gracias') && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
              <div className="bg-white rounded-3xl p-16 text-center max-w-2xl">
                <h2 className="text-6xl font-black text-purple-800 mb-6">¡GRACIAS POR COMPARTIR!</h2>
                <p className="text-3xl text-gray-800 mb-8">
                  Tu testimonio ya llegó y será publicado muy pronto.<br />
                  Sos un/a guerrero/a increíble ❤️
                </p>
                <button 
                  onClick={() => window.location.href = '/testimonios'}
                  className="bg-purple-600 text-white font-bold text-2xl px-12 py-6 rounded-full hover:bg-purple-700"
                >
                  Volver
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Testimonios;