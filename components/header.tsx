"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import UseCasesMegaMenu from "./use-cases-mega-menu"
import WhyVoiceAIMegaMenu from "./why-voiceai-mega-menu"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)

    if (!isHomePage) {
      window.location.href = `/#${sectionId}`
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-softGray bg-white backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-deepBlue to-vibrantCyan"></div>
            <span className="text-xl font-poppins font-bold text-deepBlue">VoiceAI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="text-sm font-medium hover:text-vibrantCyan transition-colors flex items-center gap-1">
              Why VoiceAI
            </button>
            <WhyVoiceAIMegaMenu />
          </div>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-vibrantCyan transition-colors flex items-center gap-1">
              Use Cases
            </button>
            <UseCasesMegaMenu />
          </div>
          <button
            onClick={() => scrollToSection("pricing")}
            className="text-sm font-medium hover:text-vibrantCyan transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-sm font-medium hover:text-vibrantCyan transition-colors"
          >
            FAQ
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              size="sm"
              className="border-vibrantCyan text-vibrantCyan hover:bg-vibrantCyan hover:text-white"
            >
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="bg-vibrantCyan hover:bg-secondary-hover text-white">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} className="text-deepBlue" /> : <Menu size={24} className="text-deepBlue" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-softGray shadow-lg">
          <div className="container py-4 flex flex-col gap-4">
            <Link
              href="/product-overview"
              className="px-4 py-2 text-sm font-medium hover:bg-offWhite rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Why VoiceAI
            </Link>
            <Link
              href="/use-cases"
              className="px-4 py-2 text-sm font-medium hover:bg-offWhite rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <button
              onClick={() => scrollToSection("pricing")}
              className="px-4 py-2 text-sm font-medium hover:bg-offWhite rounded-md text-left"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="px-4 py-2 text-sm font-medium hover:bg-offWhite rounded-md text-left"
            >
              FAQ
            </button>
            <div className="flex flex-col gap-2 pt-2 border-t border-softGray">
              <Link href="/login" className="w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-center w-full border-deepBlue text-deepBlue hover:bg-deepBlue/5"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/signup" className="w-full">
                <Button size="sm" className="justify-center w-full bg-vibrantCyan hover:bg-secondary-hover text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
