"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const backgroundImages = [
  "/images/medical-equipment-bg-1.jpg",
  "/images/railway-equipment-bg-2.jpg",
  "/images/medical-equipment-bg-3.jpg",
  "/images/railway-equipment-bg-2.jpg",
  "/images/medical-equipment-bg-5.jpg",
  "/images/railway-equipment-bg-2.jpg",
]

export function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true" style={{ pointerEvents: "none" }}>
      {backgroundImages.map((src, index) => (
        <motion.div
          key={src + index}
          className="absolute inset-0"
          animate={{
            opacity: index === currentIndex ? 0.12 : 0, // Solo la imagen activa es visible
          }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
      ))}
    </div>
  )
}