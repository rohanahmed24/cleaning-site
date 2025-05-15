import type React from "react"
import type { Metadata } from "next"
import { Outfit, Playfair_Display } from "next/font/google"
import ClientLayout from "./ClientLayout"
import "./globals.css"

// Configure Outfit font from Google Fonts for paragraphs
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

// Use Playfair Display as a substitute for Parkinsans
// In a real project, you would use the actual Parkinsans font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-parkinsans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Clanyeco - Professional Cleaning Services",
  description: "Your #1 New York House Cleaning & Maid Service",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Using ClientLayout for page transitions
  return <ClientLayout>{children}</ClientLayout>
}
