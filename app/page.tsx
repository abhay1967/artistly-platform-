import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Music, Users, Calendar, Star, ArrowRight, Mic, Headphones, PartyPopper } from "lucide-react"

const categories = [
  {
    id: "singers",
    name: "Singers",
    description: "Professional vocalists for all occasions",
    icon: Mic,
    count: "150+ Artists",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: "dancers",
    name: "Dancers",
    description: "Choreographers and dance performers",
    icon: PartyPopper,
    count: "200+ Artists",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: "speakers",
    name: "Speakers",
    description: "Motivational and keynote speakers",
    icon: Users,
    count: "80+ Artists",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "djs",
    name: "DJs",
    description: "Professional DJs and music producers",
    icon: Headphones,
    count: "120+ Artists",
    color: "bg-green-100 text-green-700",
  },
]

const features = [
  {
    icon: Music,
    title: "Diverse Talent Pool",
    description: "Access thousands of verified performing artists across all categories and genres.",
  },
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Streamlined booking process with instant availability checks and quick responses.",
  },
  {
    icon: Star,
    title: "Quality Assured",
    description: "All artists are vetted and rated by previous clients for guaranteed quality.",
  },
]

/**
 * HomePage Component
 *
 * Main landing page for Artistly platform featuring:
 * - Hero section with background image and call-to-action buttons
 * - Artist categories grid with navigation
 * - Features showcase section
 * - Final CTA section
 *
 * @returns {JSX.Element} The complete homepage layout
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-purple-600/70 to-pink-600/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 text-xs sm:text-sm bg-white/90 text-gray-800">
              🎭 Connecting Artists & Event Planners
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Book Amazing
              <span className="text-yellow-300 block">Performing Artists</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 drop-shadow-md">
              Artistly connects event planners with talented performing artists. Browse profiles, compare rates, and
              book the perfect entertainment for your event.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                asChild
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto bg-white text-primary hover:bg-gray-100 shadow-lg"
              >
                <Link href="/artists">
                  Explore Artists <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary bg-transparent shadow-lg"
              >
                <Link href="/onboarding">Join as Artist</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400/20 rounded-full blur-lg" />
      </section>

      {/* Artist Categories */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Browse by Category
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Find the perfect artist for your event from our diverse categories of talented performers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link key={category.id} href={`/artists?category=${category.id}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                    <CardHeader className="text-center p-4 sm:p-6">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                      >
                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl">{category.name}</CardTitle>
                      <CardDescription className="text-sm">{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center p-4 sm:p-6 pt-0">
                      <Badge variant="secondary" className="text-xs sm:text-sm">
                        {category.count}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Artistly?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              We make it easy to find and book the perfect entertainment for any event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center px-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Ready to Book Your Next Event?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Join thousands of event planners who trust Artistly for their entertainment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
            >
              <Link href="/artists">Browse Artists</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent w-full sm:w-auto"
            >
              <Link href="/onboarding">Become an Artist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
