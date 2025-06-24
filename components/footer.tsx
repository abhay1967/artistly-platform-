import Link from "next/link"
import { Music } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
              <Music className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-lg sm:text-xl font-bold">Artistly</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Connecting event planners with talented performing artists worldwide.
            </p>
          </div>

          {/* For Event Planners */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">For Event Planners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artists" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                  Browse Artists
                </Link>
              </li>
              <li>
                <Link
                  href="/how-it-works"
                  className="text-gray-300 hover:text-white text-sm transition-colors block py-1"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* For Artists */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">For Artists</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/onboarding"
                  className="text-gray-300 hover:text-white text-sm transition-colors block py-1"
                >
                  Join Artistly
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="text-gray-300 hover:text-white text-sm transition-colors block py-1"
                >
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors block py-1">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <p className="text-center text-gray-400 text-xs sm:text-sm">© 2025 Artistly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
