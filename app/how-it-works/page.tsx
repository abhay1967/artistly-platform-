import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Search, MessageCircle, Calendar, Star, UserPlus, Upload, CheckCircle, DollarSign } from "lucide-react"

const eventPlannerSteps = [
  {
    step: 1,
    icon: Search,
    title: "Browse Artists",
    description:
      "Search through our curated database of professional performing artists. Filter by category, location, price range, and availability.",
    details: [
      "Advanced search filters",
      "Artist profiles with photos and videos",
      "Reviews and ratings",
      "Real-time availability",
    ],
  },
  {
    step: 2,
    icon: MessageCircle,
    title: "Request Quotes",
    description:
      "Contact artists directly through our platform. Share your event details and receive personalized quotes.",
    details: [
      "Secure messaging system",
      "Event details form",
      "Multiple quote comparisons",
      "Direct artist communication",
    ],
  },
  {
    step: 3,
    icon: Calendar,
    title: "Book & Pay",
    description: "Confirm your booking with secure payment processing. Get instant confirmation and contract details.",
    details: ["Secure payment processing", "Digital contracts", "Booking confirmation", "Calendar integration"],
  },
  {
    step: 4,
    icon: Star,
    title: "Enjoy & Review",
    description: "Enjoy your event and leave a review to help other event planners and support the artist community.",
    details: ["Event support", "Review system", "Repeat booking discounts", "Community building"],
  },
]

const artistSteps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Create Profile",
    description:
      "Sign up and create your professional artist profile. Showcase your talents, experience, and unique style.",
    details: [
      "Professional profile creation",
      "Photo and video uploads",
      "Skills and experience showcase",
      "Pricing setup",
    ],
  },
  {
    step: 2,
    icon: Upload,
    title: "Get Verified",
    description:
      "Complete our verification process to build trust with potential clients and stand out from the crowd.",
    details: ["Identity verification", "Skill assessment", "Background checks", "Professional certification"],
  },
  {
    step: 3,
    icon: MessageCircle,
    title: "Receive Requests",
    description: "Get booking requests from event planners. Respond to inquiries and negotiate terms directly.",
    details: ["Instant notifications", "Request management", "Quote generation", "Calendar management"],
  },
  {
    step: 4,
    icon: DollarSign,
    title: "Perform & Earn",
    description:
      "Deliver amazing performances and get paid securely through our platform. Build your reputation and grow your business.",
    details: ["Secure payments", "Performance tracking", "Review collection", "Business growth tools"],
  },
]

const benefits = [
  {
    title: "For Event Planners",
    items: [
      "Access to vetted professional artists",
      "Transparent pricing and reviews",
      "Secure booking and payment system",
      "24/7 customer support",
      "Event planning resources",
      "Satisfaction guarantee",
    ],
  },
  {
    title: "For Artists",
    items: [
      "Increased visibility and bookings",
      "Professional platform presence",
      "Secure payment processing",
      "Marketing and promotional tools",
      "Community support network",
      "Business growth resources",
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              🎭 How It Works
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple Steps to
              <span className="text-primary block">Amazing Events</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're planning an event or looking to perform, Artistly makes it easy to connect, book, and
              create memorable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Event Planners Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Event Planners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find and book the perfect entertainment for your event in just a few simple steps.
            </p>
          </div>

          <div className="space-y-12">
            {eventPlannerSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-200 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-32 h-32 text-primary" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/artists">Start Browsing Artists</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Artists Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Artists</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our platform and start getting booked for amazing events while building your professional reputation.
            </p>
          </div>

          <div className="space-y-12">
            {artistSteps.map((step, index) => {
              const IconComponent = step.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={step.step}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-200 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-32 h-32 text-primary" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/onboarding">Join as Artist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Artistly?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide value and benefits for both event planners and artists in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of event planners and artists who trust Artistly for their entertainment needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/artists">Find Artists</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/onboarding">Become an Artist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
