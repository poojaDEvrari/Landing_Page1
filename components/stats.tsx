"use client"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    label: "Years of Tradition",
    value: "175+",
    description: "Serving authentic sweets",
  },
  {
    label: "Happy Customers",
    value: "1000+",
    description: "Trusted by families",
  },
  {
    label: "Sweet Varieties",
    value: "50+",
    description: "Handcrafted recipes",
  },
  {
    label: "Daily Orders",
    value: "100+",
    description: "Fresh deliveries",
  },
]

export default function Stats() {
  return (
    <section id="stats" className="py-20 md:py-32 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
          <p className="text-xl text-muted-foreground">
            Join our growing community of sweet lovers and business partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border text-center">
              <CardContent className="pt-6">
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
