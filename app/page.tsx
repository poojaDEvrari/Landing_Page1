import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import AdminShowcase from "@/components/admin-showcase"
import CustomerShowcase from "@/components/customer-showcase"
import Stats from "@/components/stats"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <CustomerShowcase />
      <AdminShowcase />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
