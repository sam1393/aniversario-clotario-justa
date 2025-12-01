"use client"

import { useState, useEffect } from "react"
import { MapPin, Calendar, Clock, X, User } from "lucide-react"

export default function AnniversaryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // -------------------------------
  // 🔥 Invitado dinámico por URL
  // -------------------------------
  const [guestName, setGuestName] = useState("Invitado Especial")
  const [guestPases, setGuestPases] = useState(2)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search)

      const nameParam = params.get("name")
      const pasesParam = params.get("pases")

      if (nameParam) setGuestName(nameParam)
      if (pasesParam && !isNaN(Number(pasesParam))) {
        setGuestPases(Number(pasesParam))
      }
    }
  }, [])

  const photos = [
    "/images/image01.jpeg",
    "/images/image02.jpeg",
    "/images/image03.jpeg",
    "/images/image04.jpeg",
  ]

  const eventDetails = {
    date: "20/12/2025",
    time: "7:00 PM",
    location: "Jirón Talara Mz T10 Lote 27",
  }

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ backgroundColor: "#f8eee4" }}
    >
      {/* Flores decorativas de fondo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Flores izquierda */}
        <div className="absolute top-10 left-10 text-6xl opacity-20">🌸</div>
        <div className="absolute top-32 left-5 text-5xl opacity-15">🌹</div>
        <div className="absolute top-20 left-32 text-4xl opacity-20">🌼</div>

        {/* Flores derecha */}
        <div className="absolute top-16 right-10 text-6xl opacity-20">🌹</div>
        <div className="absolute top-40 right-20 text-5xl opacity-15">🌸</div>
        <div className="absolute top-12 right-40 text-4xl opacity-20">🌼</div>

        {/* Flores abajo */}
        <div className="absolute bottom-10 left-10 text-6xl opacity-20">🌹</div>
        <div className="absolute bottom-32 left-5 text-5xl opacity-15">🌸</div>
        <div className="absolute bottom-20 left-32 text-4xl opacity-20">🌼</div>

        <div className="absolute bottom-16 right-10 text-6xl opacity-20">🌸</div>
        <div className="absolute bottom-40 right-20 text-5xl opacity-15">🌹</div>
        <div className="absolute bottom-12 right-40 text-4xl opacity-20">🌼</div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 md:py-16">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h1
            className="text-4xl md:text-6xl font-serif font-bold mb-2"
            style={{ color: "#c85a54" }}
          >
            Clotario & Justa
          </h1>

          <p
            className="text-xl md:text-2xl font-serif"
            style={{ color: "#d97960" }}
          >
            35 Años de Amor
          </p>

          <div className="flex justify-center mt-4 mb-4">
            <img
              src="/images/image01.jpeg"
              alt="Clotario y Justa"
              className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full shadow-lg border-4 border-white"
            />
          </div>

          <div
            className="h-1 w-24 mx-auto mt-4"
            style={{ backgroundColor: "#e8a39b" }}
          ></div>
        </div>

        {/* 🔥 Sección dinámica de Invitado */}
        <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 md:p-8 mb-10 shadow-lg border border-white/40">
          <div className="flex items-center gap-3 mb-4">
            <User className="w-7 h-7 text-red-600" />
            <h2 className="text-2xl font-serif text-red-800">
              Información del Invitado
            </h2>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-red-800 text-lg font-serif">Nombre:</p>
              <p className="text-red-600 text-xl font-bold">{guestName}</p>
            </div>

            <div>
              <p className="text-red-800 text-lg font-serif">
                Número de Pases:
              </p>
              <p className="text-red-600 text-xl font-bold">{guestPases}</p>
            </div>
          </div>
        </div>

        {/* Detalles del evento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-white/40">
            <Calendar className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-lg font-serif text-red-800 mb-2">Fecha</h3>
            <p className="text-red-600 text-lg font-semibold">
              {eventDetails.date}
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-white/40">
            <Clock className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-lg font-serif text-red-800 mb-2">Hora</h3>
            <p className="text-red-600 text-lg font-semibold">
              {eventDetails.time}
            </p>
          </div>

          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-white/40">
            <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <h3 className="text-lg font-serif text-red-800 mb-2">Lugar</h3>
            <p className="text-red-600 text-sm font-semibold">
              {eventDetails.location}
            </p>
          </div>
        </div>

        {/* Galería de fotos */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-serif text-red-800 mb-6 text-center">
            Momentos Especiales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 bg-white/30 backdrop-blur-md border border-white/40"
                onClick={() => setSelectedImage(photo)}
              >
                <img
                  src={photo}
                  alt={`Momento ${index + 1}`}
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Ampliada"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}
