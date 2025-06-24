import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/footer"
import { ArtistProvider } from "@/lib/artist-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Artistly - Performing Artist Booking Platform",
  description:
    "Connect event planners with talented performing artists. Browse, book, and manage artist bookings seamlessly.",
  keywords: "artist booking, event planning, performers, entertainment, booking platform",
  authors: [{ name: "Artistly Team" }],
  openGraph: {
    title: "Artistly - Performing Artist Booking Platform",
    description: "Connect event planners with talented performing artists",
    type: "website",
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ArtistProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </ArtistProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
