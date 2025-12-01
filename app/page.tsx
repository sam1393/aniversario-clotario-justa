"use client"

import { useState } from "react"
import CoverPage from "@/components/cover-page"
import AnniversaryPage from "@/components/anniversary-page"

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false)
  const [musicUrl, setMusicUrl] = useState("")

  const handleEnter = () => {
    setShowInvitation(true)
  }

  return (
    <>
      {!showInvitation ? <CoverPage onEnter={handleEnter} /> : <AnniversaryPage musicUrl={musicUrl} autoPlay={true} />}
    </>
  )
}
