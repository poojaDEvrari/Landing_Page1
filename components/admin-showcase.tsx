"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminShowcase() {
  return (
    <section id="admin" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Images */}
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            <Card className="overflow-hidden border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-26%20161457-8lUZ59HjxZIWy8Q5JXXm3TZ3uO9Iu5.png"
                alt="Admin Dashboard"
                className="w-full h-auto object-cover"
              />
            </Card>
            <Card className="overflow-hidden border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-26%20161609-HQwGtt289bG3aWSEZopqGi2tK5KNGa.png"
                alt="Product Management"
                className="w-full h-auto object-cover"
              />
            </Card>
           <Card className="overflow-hidden border-border col-span-2">
              <img
                src="a.png"
                alt="Cart Management"
                className="w-full h-auto object-cover"
              />
            </Card>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Powerful Admin Dashboard</h2>
              <p className="text-lg text-muted-foreground">
                Centralized control over your entire sweet shop business with real-time insights and management tools.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Real-Time Analytics</h3>
                  <p className="text-sm text-muted-foreground">Monitor sales, users, and inventory at a glance</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">📦</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Product Management</h3>
                  <p className="text-sm text-muted-foreground">Add, edit, and manage products with discounts</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">📋</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Order Management</h3>
                  <p className="text-sm text-muted-foreground">Track and manage all customer orders</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">👥</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">User Management</h3>
                  <p className="text-sm text-muted-foreground">Control user roles and permissions</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">📄</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Auto-Generated Documents</h3>
                  <p className="text-sm text-muted-foreground">PDF invoices and order receipts</p>
                </div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="https://vikash-admin.vercel.app">Access Admin Panel</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
