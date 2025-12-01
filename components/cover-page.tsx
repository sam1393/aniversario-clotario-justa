"use client"

import { useState } from "react"

export default function CoverPage({ onEnter }: { onEnter: () => void }) {
  const [openHearts, setOpenHearts] = useState(false)

  const handleEnter = () => {
    setOpenHearts(true)

    // Reproducir música
    const audio = new Audio("cancion.mp3")
    audio.play()

    // Espera a que termine la animación y entra
    setTimeout(() => {
      onEnter()
    }, 1800)
  }

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-rose-200 via-rose-100 to-rose-50 flex items-center justify-center overflow-hidden">

      {/* CORAZONES ANIMADOS */}
      <div
        className="absolute flex items-center justify-center transition-all duration-1000"
        style={{
          transform: openHearts ? "scale(1.4)" : "scale(0)",
          opacity: openHearts ? 1 : 0,
        }}
      >
        <div className="relative w-[260px] h-[200px] flex items-center justify-center">

          {/* Corazón izquierdo */}
          <div className={`heart left ${openHearts ? "open-left" : ""}`}></div>

          {/* Corazón derecho */}
          <div className={`heart right ${openHearts ? "open-right" : ""}`}></div>

          {/* Texto Bodas de Coral */}
          {!openHearts && (
            <span className="absolute text-3xl font-serif text-amber-600 drop-shadow-md">
              Bodas de Coral
            </span>
          )}
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      {!openHearts && (
        <div className="text-center z-10 max-w-md transition-opacity duration-500">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-rose-900 mb-4">
            Clotario & Justa
          </h1>

          <p className="text-2xl md:text-3xl text-rose-800 font-serif mb-2">
            35 Años de Amor
          </p>

          <div className="h-1 w-24 bg-rose-400 mx-auto mb-8"></div>

          <p className="text-lg text-rose-700 mb-12 font-light">
            Celebrando tres décadas y media de amor, dedicación y felicidad juntos
          </p>

          <button
            onClick={handleEnter}
            className="px-12 py-4 text-xl font-serif font-semibold rounded-full bg-rose-600 text-white shadow-lg hover:bg-rose-700 transition-all"
          >
            Entrar
          </button>

          <p className="text-sm text-rose-600 mt-8 font-light">
            Acompáñanos en esta celebración especial
          </p>
        </div>
      )}
    </div>
  )
}
