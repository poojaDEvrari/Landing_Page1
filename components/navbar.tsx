"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QWYUucGvdZI7QYfbi9NqT9kbNkPTzF.png"
              alt="Kanwarji Logo"
              className="h-10 w-auto"
            />
            <span className="font-bold text-xl text-foreground hidden sm:inline">Kanwarji</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-foreground hover:text-primary transition">
              Features
            </Link>
            <Link href="#customer" className="text-foreground hover:text-primary transition">
              Shop
            </Link>
            <Link href="#admin" className="text-foreground hover:text-primary transition">
              Admin
            </Link>
            <Link href="#stats" className="text-foreground hover:text-primary transition">
              About
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="https://kanwarji.in">Visit Shop</Link>
            </Button>
            <Button asChild>
              <Link href="https://vikash-admin.vercel.app">Admin Panel</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <Link href="#features" className="block text-foreground hover:text-primary">
              Features
            </Link>
            <Link href="#customer" className="block text-foreground hover:text-primary">
              Shop
            </Link>
            <Link href="#admin" className="block text-foreground hover:text-primary">
              Admin
            </Link>
            <Link href="#stats" className="block text-foreground hover:text-primary">
              About
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href="https://kanwarji.in">Visit Shop</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="https://vikash-admin.vercel.app">Admin Panel</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
