import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Book,
  Users,
  Clock,
  Search,
  FileText,
  Headphones,
  Zap,
} from "lucide-react"

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7",
    responseTime: "< 2 minutes",
    action: "Start Chat",
    href: "#",
    popular: true,
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a support specialist",
    availability: "Mon-Fri 9AM-6PM EST",
    responseTime: "Immediate",
    action: "Call Now",
    href: "tel:+15551234567",
    popular: false,
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message about your issue",
    availability: "24/7",
    responseTime: "< 24 hours",
    action: "Send Email",
    href: "/contact",
    popular: false,
  },
  {
    icon: Book,
    title: "Help Center",
    description: "Browse our comprehensive knowledge base",
    availability: "24/7",
    responseTime: "Self-service",
    action: "Browse Articles",
    href: "#help-center",
    popular: false,
  },
]

const helpCategories = [
  {
    icon: Users,
    title: "Getting Started",
    description: "New to Artistly? Learn the basics",
    articles: 12,
    topics: ["Account setup", "Profile creation", "First booking", "Platform tour"],
  },
  {
    icon: Search,
    title: "Finding Artists",
    description: "Tips for discovering the perfect performer",
    articles: 8,
    topics: ["Search filters", "Artist profiles", "Availability", "Pricing"],
  },
  {
    icon: Calendar,
    title: "Booking & Payments",
    description: "Everything about bookings and transactions",
    articles: 15,
    topics: ["Booking process", "Payment methods", "Cancellations", "Refunds"],
  },
  {
    icon: FileText,
    title: "Artist Resources",
    description: "Tools and tips for performing artists",
    articles: 20,
    topics: ["Profile optimization", "Pricing strategy", "Client communication", "Performance tips"],
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description: "Troubleshooting and technical issues",
    articles: 10,
    topics: ["Login issues", "Payment problems", "App troubleshooting", "Browser compatibility"],
  },
  {
    icon: Zap,
    title: "Advanced Features",
    description: "Make the most of Artistly's features",
    articles: 6,
    topics: ["Analytics", "API access", "Integrations", "Custom contracts"],
  },
]

const faqItems = [
  {
    question: "How do I create an artist profile?",
    answer:
      "Creating an artist profile is easy! Click 'Join as Artist' and follow our step-by-step onboarding process. You'll add your bio, skills, photos, and pricing information.",
  },
  {
    question: "When do I get paid for my performances?",
    answer:
      "Artists receive payment within 24-48 hours after their performance is completed. We hold funds in escrow until the event is successfully finished.",
  },
  {
    question: "How much does Artistly charge?",
    answer:
      "For artists, we charge a 5% service fee only when you get booked. Event planners can use our basic plan for free or upgrade to professional plans starting at ₹29/month.",
  },
  {
    question: "Can I cancel a booking?",
    answer:
      "Yes, but cancellation policies vary by artist and timing. Check the specific cancellation policy in your booking agreement. Early cancellations typically have more favorable terms.",
  },
  {
    question: "How do I verify my artist account?",
    answer:
      "Account verification involves submitting identification, proof of skills/experience, and sometimes a brief video audition. This helps build trust with potential clients.",
  },
  {
    question: "What if I have issues during an event?",
    answer:
      "Contact our 24/7 support team immediately. We have dedicated event support to help resolve any issues quickly and ensure your event goes smoothly.",
  },
]

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    description: "Mon-Fri 9AM-6PM EST",
  },
  {
    icon: Mail,
    title: "Email",
    value: "support@artistly.com",
    description: "24/7 response within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Available 24/7",
    description: "Instant support on our website",
  },
  {
    icon: Clock,
    title: "Emergency Line",
    value: "+1 (555) 911-HELP",
    description: "For urgent event-day issues",
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              🎧 Support Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              We're Here to
              <span className="text-primary block">Help You Succeed</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get the support you need, when you need it. Our team is dedicated to helping artists and event planners
              make the most of the Artistly platform.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Support Your Way</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the support method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => {
              const IconComponent = option.icon
              return (
                <Card key={index} className={`relative ${option.popular ? "border-primary shadow-lg" : ""}`}>
                  {option.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="text-center">
                    <div className="space-y-2 mb-6">
                      <div className="text-sm text-gray-600">
                        <strong>Available:</strong> {option.availability}
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Response:</strong> {option.responseTime}
                      </div>
                    </div>

                    <Button asChild className="w-full">
                      <Link href={option.href}>{option.action}</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 bg-gray-50" id="help-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Help Center</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions and learn how to make the most of Artistly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                    <Badge variant="secondary">{category.articles} articles</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-gray-600 hover:text-primary cursor-pointer">
                          • {topic}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to the most common questions.</p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <HelpCircle className="w-5 h-5 text-primary mr-3" />
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-lg text-gray-600">Multiple ways to reach our support team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 mb-2">{method.value}</p>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our support team is standing by to help you succeed on Artistly. Don't hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="#help-center">Browse Help Center</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
