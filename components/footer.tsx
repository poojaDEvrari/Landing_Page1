"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">K</span>
              </div>
              <span className="font-bold text-lg">Kanwarji</span>
            </div>
            <p className="text-background/70">Authentic Indian sweets with intelligent management system</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="https://kanwarji.in" className="hover:text-background transition">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="https://vikash-admin.vercel.app" className="hover:text-background transition">
                  Admin Panel
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-background transition">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <Link href="#" className="hover:text-background transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-background/70">
             
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@kanwarji.in</span>
              </li>
             
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/70">
          <p>&copy; 2025 Kanwarji. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
