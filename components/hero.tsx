"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Authentic Sweets, <span className="text-primary">Intelligent Management</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Experience the perfect blend of traditional Indian sweets with modern e-commerce technology. Manage your
                entire sweet shop business from one powerful dashboard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="gap-2">
                <Link href="https://kanwarji.in">
                  Start Shopping <ArrowRight size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://vikash-admin.vercel.app">Explore Admin Panel</Link>
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">175+</p>
                <p className="text-sm text-muted-foreground">Years of Tradition</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Sweet Varieties</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kanwarji-Sweet%20Shop%20%281%29-CNG4aiCaZcke2uJyA5fokiS2lcPc6n.png"
              alt="Kanwarji App Showcase"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
