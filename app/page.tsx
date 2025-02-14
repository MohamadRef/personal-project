"use client"; // If you're using Next.js App Router, ensure we can use client-side hooks

import { useState } from "react"
import { BioCards } from "@/components/use-card"
import { CustomMenubar } from "@/components/use-menubar"

export default function Main() {
  // Tracks which dialog is open: "bio", "experience", "about", or null
  const [openDialog, setOpenDialog] = useState<"bio" | "experience" | "about" | null>(null)

  // Handler for menubar clicks
  function handleMenuClick(type: "bio" | "experience" | "about") {
    setOpenDialog(type)
  }

  return (
    <>
      {/* No more borders—just a black header */}
      <header className="w-full bg-black">
        <CustomMenubar onMenuClick={handleMenuClick} />
      </header>

      {/* No white edges—just black */}
      <main className="bg-black">
        {/* Pass the openDialog state & setter down to BioCards */}
        <BioCards openDialog={openDialog} setOpenDialog={setOpenDialog} />
      </main>
    </>
  )
}
