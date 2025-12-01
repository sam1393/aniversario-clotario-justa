"use client"

import { useState } from "react"
import { Music, MapPin, Calendar, Clock, X } from "lucide-react"

export default function AnniversaryPage({
  musicUrl = "",
  autoPlay = false,
}: { musicUrl?: string; autoPlay?: boolean }) {
  const [music, setMusic] = useState(musicUrl)
  const [isPlaying, setIsPlaying] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const photos = ["/images/image01.jpeg", "/images/image02.jpeg", "/images/image03.jpeg", "/images/image04.jpeg"]

  const eventDetails = {
    date: "20/12/2025",
    time: "7:00 PM",
    location: "Jirón Talara Mz T10 Lote 27",
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: "#f5e6d3" }}>
      {/* Flores decorativas de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Flores en la esquina superior izquierda */}
        <div className="absolute top-10 left-10 text-6xl opacity-20">🌸</div>
        <div className="absolute top-32 left-5 text-5xl opacity-15">🌹</div>
        <div className="absolute top-20 left-32 text-4xl opacity-20">🌼</div>

        {/* Flores en la esquina superior derecha */}
        <div className="absolute top-16 right-10 text-6xl opacity-20">🌹</div>
        <div className="absolute top-40 right-20 text-5xl opacity-15">🌸</div>
        <div className="absolute top-12 right-40 text-4xl opacity-20">🌼</div>

        {/* Flores en la esquina inferior izquierda */}
        <div className="absolute bottom-10 left-10 text-6xl opacity-20">🌹</div>
        <div className="absolute bottom-32 left-5 text-5xl opacity-15">🌸</div>
        <div className="absolute bottom-20 left-32 text-4xl opacity-20">🌼</div>

        {/* Flores en la esquina inferior derecha */}
        <div className="absolute bottom-16 right-10 text-6xl opacity-20">🌸</div>
        <div className="absolute bottom-40 right-20 text-5xl opacity-15">🌹</div>
        <div className="absolute bottom-12 right-40 text-4xl opacity-20">🌼</div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-red-800 mb-2" style={{ color: "#c85a54" }}>
            Clotario & Justa
          </h1>
          <p className="text-xl md:text-2xl text-red-600" style={{ color: "#d97960" }}>
            35 Años de Amor
          </p>
          <div className="flex justify-center mt-4 mb-4">
            <img
              src="/images/image01.jpeg"
              alt="Clotario y Justa"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full shadow-lg"
            />
          </div>
          <div className="h-1 w-24 bg-red-400 mx-auto mt-4" style={{ backgroundColor: "#e8a39b" }}></div>
        </div>

        {/* Reproductor de música */}
        <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-8 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Music className="w-6 h-6 text-red-600" />
            <h2 className="text-xl md:text-2xl font-serif text-red-800">Nuestra Canción</h2>
          </div>
          <input
            type="text"
            placeholder="Pega aquí el enlace de tu canción favorita (URL de Spotify, YouTube, etc.)"
            value={music}
            onChange={(e) => setMusic(e.target.value)}
            className="w-full px-4 py-2 rounded border border-red-300 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          {music && (
            <audio
              controls
              autoPlay={autoPlay}
              className="w-full"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={music} type="audio/mpeg" />
              Tu navegador no soporta el elemento de audio.
            </audio>
          )}
        </div>

        {/* Detalles del evento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Fecha */}
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <Calendar className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-lg font-serif text-red-800 mb-2">Fecha</h3>
            <p className="text-red-600 text-lg font-semibold">{eventDetails.date}</p>
          </div>

          {/* Hora */}
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <Clock className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-lg font-serif text-red-800 mb-2">Hora</h3>
            <p className="text-red-600 text-lg font-semibold">{eventDetails.time}</p>
          </div>

          {/* Lugar */}
          <div className="bg-white/40 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-lg font-serif text-red-800 mb-2">Lugar</h3>
            <p className="text-red-600 text-sm font-semibold">{eventDetails.location}</p>
          </div>
        </div>

        {/* Galería de fotos */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-red-800 mb-6 text-center">Momentos Especiales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 bg-white/20 flex items-center justify-center"
                onClick={() => setSelectedImage(photo)}
              >
                <img
                  src={photo || "/placeholder.svg"}
                  alt={`Momento ${index + 1}`}
                  className="w-full h-80 md:h-96 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal para ver imagen completa */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedImage || "/placeholder.svg"} alt="Ampliada" className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  )
}
