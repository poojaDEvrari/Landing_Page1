"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Kanwarji?</h2>
        <p className="text-xl mb-8 opacity-90">
          Start shopping for authentic sweets or manage your business with our powerful admin panel
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild className="gap-2">
            <Link href="https://kanwarji.in">
              Shop Now <ArrowRight size={20} />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
          >
            <Link href="https://vikash-admin.vercel.app">Admin Dashboard</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
