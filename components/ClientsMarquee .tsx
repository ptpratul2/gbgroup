"use client"

import Image from "next/image"

type Logo = { src: string; alt: string }

const logos: Logo[] = [
  { src: "/clientslogo/alstom.png", alt: "BARQ" },
  { src: "/clientslogo/beml.png", alt: "ConnectM" },
  { src: "/clientslogo/bhel.png", alt: "Destino" },
  { src: "/clientslogo/images.png", alt: "Turus Life Sciences LLP" },
  { src: "/clientslogo/indianrailway.png", alt: "EVDS" },
  { src: "/clientslogo/mcf.png", alt: "Farm Market" },
  { src: "/clientslogo/medha.png", alt: "BARQ" },
  { src: "/clientslogo/ntpc.png", alt: "ConnectM" },
  { src: "/clientslogo/ongc.png", alt: "Destino" },
  { src: "/clientslogo/railcoach.png", alt: "Turus Life Sciences LLP" },
  { src: "/clientslogo/road.png", alt: "EVDS" },
  { src: "/clientslogo/tatalogo.png", alt: "Farm Market" },
]
export function ClientsMarquee() {
  const loop = [...logos,...logos]

  return (
    <section className="container py-20 ">
      <h2 className="mb-18 text-center font-mono text-2xl font-bold text-primary md:text-3xl">Our Top Clients</h2>

      <div className="relative overflow-hidden">
        {/* The animated rail. Using custom .marquee class from globals.css */}
        <div className="marquee flex min-w-max items-center gap-8 md:gap-12">
          {loop.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="relative size-18 opacity-80 transition-opacity hover:opacity-100 
              md:size-32"
              aria-label={`${logo.alt} logo`}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={`${logo.alt} logo`}
                fill
                className="object-contain "
                priority={i < 6}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
