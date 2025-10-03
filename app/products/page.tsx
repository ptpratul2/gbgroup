"use client"
import type React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function ProductsPage() {
  const railwayRef = useRef<HTMLDivElement>(null)
  const medicalRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-12">
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-4"
        >
          <h1 className="font-mono text-4xl font-extrabold leading-tight tracking-tighter text-primary md:text-5xl lg:text-6xl">
            Our Products
          </h1>
          <p className="max-w-[700px] text-lg text-foreground md:text-xl">
            Explore our innovative and reliable solutions across Railway, Automotive & Medical Equipment sectors.
          </p>
          <div className="flex gap-4">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(medicalRef)}
              className="rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
            >
              Medical Equipment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(railwayRef)}
              className="rounded-md bg-secondary px-6 py-3 font-semibold text-secondary-foreground shadow-md transition-colors hover:bg-secondary/90"
            >
              Railway Equipment
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]"
        >
          <Image
            src="/allProducts/main.jpg"
            alt="Medical Equipment"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </section>



      <section ref={medicalRef} className="container py-12 scroll-m-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-center font-mono text-3xl font-bold text-primary md:text-4xl"
        >
          Medical Equipment
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-[300px] w-full md:h-[400px]"
          >
            <Image
              src="/allProducts/medical.png"
              alt="Medical Equipment"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="rounded-lg bg-card p-6 shadow-md"
          >
           <br /> <h3 className="mb-4 font-mono text-2xl font-semibold text-primary">High Quality Medical Devices</h3>
            <p className="text-foreground">
              G.B. Equipment Systems Ltd. is a leading manufacturer of high quality medical devices adhering to global
              standards, following the best practices.
            </p>
            <p className="mt-4 text-foreground">
              Our medical equipment is designed with precision and manufactured with the highest quality materials to
              ensure safety and effectiveness.
            </p><br />
            <p>
              Manufactured using premium quality cold-rolled stainless steel strips
              with the latest Japanese technology, Hypodermic needles are ground
              on high-precision machines: assembled and packed in totally
              automated machines. Vision cameras ensure 100% automated quality
              control, enabling superior sharpness to minimize pain.
            </p>
          </motion.div>
        </div>

        <div className="mt-12">
          <h3 className="mb-3 font-mono text-2xl font-semibold text-primary">Products List</h3>
          <ul className="grid gap-2 rounded-lg bg-muted/50 p-4 md:grid-cols-2">
            <li className="text-foreground">
              <span className="font-semibold text-primary">Sterile Hypodermic Syringe</span> — GB Maxim
            </li>
            <li className="text-foreground">
              <span className="font-semibold text-primary">Sterile Hypodermic Needle</span> — GB Maxim
            </li>
            <li className="text-foreground">
              <span className="font-semibold text-primary">Sterile Surgical Gloves</span> — SG‑21, GB Care, GB Care Pro
            </li>
            <li className="text-foreground">
              <span className="font-semibold text-primary">Medical Examination Gloves</span> — GB Safe, GB Examine
            </li>
            <li className="text-foreground">
              <span className="font-semibold text-primary">GB Alcohol Swabs</span>
            </li>
            <li className="text-foreground">
              <span className="font-semibold text-primary">Cleaning</span> — GB Dine, GB Lon
            </li>
          </ul>


          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/60">
              <Image
                src="/allProducts/GB MAXIM_magenta.png"
                alt="Sterile Hypodermic Syringe - GB Maxim"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/60">
              <Image
                src="/allProducts/GB MAXIM.png"
                alt="Sterile Hypodermic Needle - GB Maxim"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/60">
              <Image
                src="/allProducts/38.png"
                alt="Sterile Surgical Gloves - SG-21 / GB Care"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/60">
              <Image
                src="/allProducts/40.png"
                alt="Sterile Surgical Gloves - GB Care Pro"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/60">
              <Image
                src="/allProducts/54.png"
                alt="Medical Examination Gloves - GB Safe"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/60">
              <Image
                src="/allProducts/30.png"
                alt="Medical Examination Gloves - GB Examine"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/60">
              <Image src="/allProducts/57.png" alt="GB Alcohol Swabs" fill className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted/60">
              <Image src="/allProducts/63.png" alt="Cleaning - GB Dine, GB Lon" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Railway Equipment Section */}
      <section className="container py-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center font-mono text-3xl font-bold text-primary md:text-4xl"
        >
          Railway Equipment
        </motion.h2>

        <div className="flex flex-col gap-16">
          {/* Product 1: Hydraulic Dampers - Image first on mobile, text left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] lg:order-2"
            >
              <Image
                src="/allProducts/hydraulic.png"
                alt="Hydraulic Dampers Specifications"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg bg-card p-6 shadow-md lg:order-1"
            >
              <h3 className="mb-4 font-mono text-2xl font-semibold text-primary">HYDRAULIC DAMPERS</h3>
              <p className="text-foreground">
                The shock absorbers Designed & Manufactured at GBESL are in strict compliance to our Customer defined
                parameters:
              </p>
              <ul className="mt-4 list-disc pl-5 text-foreground">
                <li>
                  <strong>Type of Application:</strong> Vertical, Lateral, Horizontal & Yaw
                </li>
                <li>
                  <strong>Type of Fitment / Mounting Attachments:</strong> Studs, Bushings, Articulation Bearings &
                  Silent Blocks
                </li>
                <li>
                  <strong>Internal Design Type:</strong> Sizes of Pistons, Cylinders, Piston Rods, Reservoir Tubes &
                  Dustcovers
                </li>
                <li>
                  <strong>Damping Variants:</strong> Tested Damping Forces from 500 N to 20000 N, Tested Velocities
                  from 0.01m/sec to 0.3m/sec
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Product 2: Air Springs - Image first on mobile, image left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] lg:order-1"
            >
              <Image
                src="/allProducts/airSpring.png"
                alt="Air Springs for Indian Railways"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              whileHover={{ x: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg bg-card p-6 shadow-md lg:order-2"
            >
              <h3 className="mb-4 font-mono text-2xl font-semibold text-primary">AIR SPRINGS FOR INDIAN RAILWAYS</h3>
              <p className="text-foreground mb-2">
                <strong>In Collaboration with CARS/ZEMT, China</strong>
              </p>
              <p className="text-foreground">
                Our air springs are designed and manufactured in collaboration with CARS/ZEMT, China, specifically for
                Indian Railways applications. These advanced suspension systems provide superior ride quality and
                passenger comfort.
              </p>
              <ul className="mt-4 list-disc pl-5 text-foreground">
                <li>
                  <strong>Application:</strong> Railway coach suspension systems
                </li>
                <li>
                  <strong>Features:</strong> High durability, excellent vibration isolation, and load-bearing capacity
                </li>
                <li>
                  <strong>Compliance:</strong> Meets Indian Railways specifications and international standards
                </li>
                <li>
                  <strong>Benefits:</strong> Enhanced passenger comfort, reduced maintenance, and extended service
                  life
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Product 3: Snubber - Image first on mobile, text left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative h-[300px] w-full overflow-hidden rounded-lg shadow-xl md:h-[400px] lg:order-2"
            >
              <Image
                src="/allProducts/snubber.png"
                alt="Snubber for Railway Applications"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg bg-card p-6 shadow-md lg:order-1"
            >
              <h3 className="mb-4 font-mono text-2xl font-semibold text-primary">SNUBBER</h3>
              <p className="text-foreground">
                High-performance snubbers designed for railway applications, providing critical damping and shock
                absorption for rolling stock.
              </p>
              <ul className="mt-4 list-disc pl-5 text-foreground">
                <li>
                  <strong>Type:</strong> Spring-loaded mechanical snubbers
                </li>
                <li>
                  <strong>Application:</strong> Bogie suspension systems, primary and secondary suspension
                </li>
                <li>
                  <strong>Design Features:</strong> Robust construction, high load capacity, and reliable performance
                </li>
                <li>
                  <strong>Performance:</strong> Effective vibration control, noise reduction, and improved ride
                  stability
                </li>
                <li>
                  <strong>Quality:</strong> Manufactured to stringent quality standards with rigorous testing
                  protocols
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
