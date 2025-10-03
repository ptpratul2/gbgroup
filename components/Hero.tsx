"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/hero/slide.jpg",
    title: "Innovating Today.",
    subtitle: "Leading Tomorrow.",
    description: "From precision engineering to energy exploration, we lead with innovation, integrity and excellence.",
  },
  {
    image: "/hero/slide3.jpg",
    title: "Engineering Excellence.",
    subtitle: "Building the Future.",
    description: "Delivering world-class railway equipment and solutions for modern transportation.",
  },
  {
    image: "/hero/slide2.jpg",
    title: "Quality Commitment.",
    subtitle: "Trust & Reliability.",
    description: "ISO certified manufacturing with uncompromising standards for safety and performance.",
  },
  {
    image: "/hero/slide4.jpg",
    title: "Quality Commitment.",
    subtitle: "Trust & Reliability.",
    description: "ISO certified manufacturing with uncompromising standards for safety and performance.",
  }
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])
  useEffect(() => {
    const nextSlideIndex = (currentSlide + 1) % slides.length
    const nextImage = slides[nextSlideIndex].image
    if (nextImage) {
      const link = document.createElement("link")
      link.rel = "preload"
      link.as = "image"
      link.href = nextImage
      document.head.appendChild(link)
      
      const cleanupTimer = setTimeout(() => {
        document.head.removeChild(link)
      }, 5000)

      return () => clearTimeout(cleanupTimer);
    }
  }, [currentSlide])

  return (
    <section className="relative h-[90vh] w-auto  overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }} 
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority={currentSlide === 0}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="container max-w-5xl px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
              <h1 className="mb-4 font-mono text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
                <span className="text-primary">{slides[currentSlide].title}</span>
                <br />
                {slides[currentSlide].subtitle}
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-white/90 md:text-xl lg:text-2xl">
                {slides[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-primary" : "w-3 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}