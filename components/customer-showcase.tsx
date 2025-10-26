"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CustomerShowcase() {
  return (
    <section id="customer" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Shop Experience</h2>
              <p className="text-lg text-muted-foreground">
                Browse our collection of authentic Indian sweets with an intuitive interface designed for seamless
                shopping.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Browse Categories</h3>
                  <p className="text-sm text-muted-foreground">Explore sweets organized by type and specialty</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Add to Cart</h3>
                  <p className="text-sm text-muted-foreground">Customize quantities and special requests</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Secure Checkout</h3>
                  <p className="text-sm text-muted-foreground">Multiple payment options and delivery tracking</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="https://kanwarji.in">Visit Shop Now</Link>
            </Button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="overflow-hidden border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-26%20161810-rdh8ZWgzTiqJINsQskWzkGXQLl61B9.png"
                alt="Special Discounts"
                className="w-full h-auto object-cover"
              />
            </Card>
            <Card className="overflow-hidden border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-26%20161724-IyuBNee4lt70KdSwktcSLdD82k32g8.png"
                alt="Best Sellers"
                className="w-full h-auto object-cover"
              />
            </Card>
            <Card className="overflow-hidden border-border col-span-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-26%20161843-g2oa47dv5wmpT62xMoblsLijYRpuGt.png"
                alt="Cart Management"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
