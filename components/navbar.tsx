"use client"
import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="sticky top-0 z-50 w-full border-b bg-header-background text-primary-foreground"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.img
            src="/gbLogo.png"
            alt="GB House Logo"
            className="h-15 w-15 mt-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.span
            className="font-mono text-lg font-bold text-primary
            md:text-xl lg:text-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            GB Group
          </motion.span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/products">Products</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#208d8e] p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t bg-header-background"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </MobileNavLink>
              <MobileNavLink href="/products" onClick={() => setMobileMenuOpen(false)}>
                Products
              </MobileNavLink>
              <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href}>
      <motion.span
        className="text-sm font-medium transition-colors hover:text-[#208d8e]/80 text-[#208d8e]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link href={href} onClick={onClick}>
      <motion.span
        className="block text-base font-medium text-[#208d8e] hover:text-[#208d8e]/80 py-2"
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  )
}
