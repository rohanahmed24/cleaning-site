"use client"

import type React from "react"
import { Outfit } from "next/font/google"
import { PageTransition } from "@/components/page-transition"
import { Preloader } from "@/components/preloader"
import "./globals.css"

// Configure Outfit font from Google Fonts
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Load Parkinsans font with a more reliable method */}
        <style jsx global>{`
          @font-face {
            font-family: 'Parkinsans';
            src: url('/fonts/Parkinsans-Regular.woff2') format('woff2'),
                 url('/fonts/Parkinsans-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          
          @font-face {
            font-family: 'Parkinsans';
            src: url('/fonts/Parkinsans-Bold.woff2') format('woff2'),
                 url('/fonts/Parkinsans-Bold.woff') format('woff');
            font-weight: bold;
            font-style: normal;
            font-display: swap;
          }
          
          /* Fallback to ensure headings have a distinctive font even if Parkinsans fails to load */
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Parkinsans', 'Georgia', serif;
          }
        `}</style>
      </head>
      <body className={`${outfit.variable} font-outfit`}>
        <Preloader />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
