import React from 'react';
import Layout from '../components/Layout';

const Apoyo = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-950 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <h1 className="text-5xl md:text-7xl font-black text-white text-center mb-10 drop-shadow-2xl">
            ¡TU APOYO NOS DA FUERZA!
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 text-center mb-16 leading-relaxed">
            Cada mensaje, palabra o gesto de solidaridad llega directo al corazón de los guerreros y sus familias.
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
                  Tu nombre (o cómo querés que te llamemos ❤️)
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-6 py-5 rounded-2xl text-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500"
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div>
                <label className="block text-2xl font-bold text-white mb-3">
                  Tu mensaje de apoyo
                </label>
                <textarea
                  name="message"
                  rows="8"
                  required
                  className="w-full px-6 py-5 rounded-2xl text-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500 resize-none"
                  placeholder="Escribí acá todo lo que quieras decirles a los guerreros del Grupo Lázaro..."
                ></textarea>
              </div>

              {/* Ocultamos el campo email para que no aparezca en el formulario */}
              <input type="hidden" name="_subject" value="¡Nuevo mensaje de apoyo - Grupo Lázaro!" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://grupo-lazaro-em.vercel.app/apoyo/gracias" />

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-purple-900 font-black text-3xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  ENVIAR MI APOYO CON AMOR
                </button>
              </div>
            </form>

            <p className="text-purple-200 text-center mt-8 text-lg">
              💜 Tu mensaje llegará directo al mail del grupo. ¡Gracias por ser parte!
            </p>
          </div>
        </div>

        {/* Página de gracias (opcional) */}
        {window.location.pathname.includes('/apoyo/gracias') && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-16 text-center max-w-2xl">
              <h2 className="text-6xl font-black text-purple-800 mb-6">¡GRACIAS DE CORAZÓN!</h2>
              <p className="text-3xl text-gray-800">Tu mensaje ya está volando hacia el grupo ❤️</p>
              <button 
                onClick={() => window.location.href = '/apoyo'}
                className="mt-10 bg-purple-600 text-white font-bold text-2xl px-12 py-6 rounded-full hover:bg-purple-700"
              >
                Volver
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Apoyo;