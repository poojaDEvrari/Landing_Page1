"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, BarChart3, Lock, Zap, Users, FileText } from "lucide-react"

const features = [
  {
    icon: ShoppingCart,
    title: "E-Commerce Platform",
    description: "Browse and purchase authentic sweets with category-based browsing and secure checkout",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track sales, revenue, and customer insights with comprehensive dashboard analytics",
  },
  {
    icon: Lock,
    title: "Secure Payments",
    description: "Multiple payment options including Razorpay integration for safe transactions",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Real-time order updates and notifications for customers and administrators",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Complete control over user profiles, roles, and customer data management",
  },
  {
    icon: FileText,
    title: "Auto-Generated Documents",
    description: "Automated PDF generation for orders, invoices, and receipts",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Powerful Features for Your Business</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run a successful online sweet shop with complete management control
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
