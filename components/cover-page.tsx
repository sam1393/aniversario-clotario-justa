"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CoverPage({ onEnter }: { onEnter: () => void }) {
  const router = useRouter()
  const [isHovering, setIsHovering] = useState(false)

  const handleEnter = () => {
    onEnter()
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-rose-200 via-rose-100 to-rose-50 flex items-center justify-center p-4">
      {/* Flores decorativas */}
      <div className="absolute top-10 left-10 opacity-20">
        <div className="text-6xl">🌹</div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="text-6xl">🌹</div>
      </div>

      {/* Contenido principal */}
      <div className="text-center z-10 max-w-md">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-rose-900 mb-4">Clotario & Justa</h1>

        <p className="text-2xl md:text-3xl text-rose-800 font-serif mb-2">35 Años de Amor</p>

        <div className="h-1 w-24 bg-rose-400 mx-auto mb-8"></div>

        <p className="text-lg text-rose-700 mb-12 font-light">
          Celebrando tres décadas y media de amor, dedicación y felicidad juntos
        </p>

        {/* Botón Entrar */}
        <button
          onClick={handleEnter}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className={`px-12 py-4 text-xl font-serif font-semibold rounded-full transition-all duration-300 transform ${
            isHovering ? "bg-rose-700 text-white scale-105 shadow-2xl" : "bg-rose-500 text-white shadow-lg"
          }`}
        >
          Entrar
        </button>

        <p className="text-sm text-rose-600 mt-8 font-light">Acompáñanos en esta celebración especial</p>
      </div>
    </div>
  )
}
