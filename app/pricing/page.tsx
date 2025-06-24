import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Check, X, Star, Zap, Crown } from "lucide-react"

const eventPlannerPlans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for occasional event planners",
    icon: Star,
    features: [
      { name: "Browse artist profiles", included: true },
      { name: "Contact up to 3 artists per month", included: true },
      { name: "Basic search filters", included: true },
      { name: "Standard customer support", included: true },
      { name: "Advanced search filters", included: false },
      { name: "Unlimited artist contacts", included: false },
      { name: "Priority support", included: false },
      { name: "Booking analytics", included: false },
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹29",
    period: "/month",
    description: "For regular event planners and small businesses",
    icon: Zap,
    features: [
      { name: "Everything in Basic", included: true },
      { name: "Unlimited artist contacts", included: true },
      { name: "Advanced search filters", included: true },
      { name: "Priority customer support", included: true },
      { name: "Booking management tools", included: true },
      { name: "Event planning resources", included: true },
      { name: "Booking analytics", included: false },
      { name: "Dedicated account manager", included: false },
    ],
    cta: "Start Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "₹99",
    period: "/month",
    description: "For large organizations and frequent event planners",
    icon: Crown,
    features: [
      { name: "Everything in Professional", included: true },
      { name: "Advanced booking analytics", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Custom contract templates", included: true },
      { name: "Bulk booking discounts", included: true },
      { name: "API access", included: true },
      { name: "White-label options", included: true },
      { name: "24/7 phone support", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

const artistFees = [
  {
    category: "Service Fee",
    description: "We charge a small service fee on successful bookings",
    fee: "5%",
    details: "Only charged when you get booked - no upfront costs",
  },
  {
    category: "Payment Processing",
    description: "Secure payment processing for all transactions",
    fee: "2.9% + ₹0.30",
    details: "Industry-standard payment processing fees",
  },
  {
    category: "Profile Creation",
    description: "Create and maintain your artist profile",
    fee: "Free",
    details: "No cost to join and create your professional profile",
  },
  {
    category: "Marketing Tools",
    description: "Access to promotional and marketing features",
    fee: "Free",
    details: "Included with all artist accounts",
  },
]

const additionalServices = [
  {
    name: "Professional Photography",
    price: "₹199",
    description: "Professional headshots and performance photos for your profile",
  },
  {
    name: "Video Production",
    price: "₹499",
    description: "Professional demo video creation and editing services",
  },
  {
    name: "Profile Optimization",
    price: "₹99",
    description: "Expert review and optimization of your artist profile",
  },
  {
    name: "Marketing Consultation",
    price: "₹149",
    description: "One-on-one consultation to grow your booking business",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              💰 Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="text-primary block">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the plan that works best for you. No hidden fees, no surprises. Start free and upgrade as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Event Planner Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Event Planners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect plan for your event planning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventPlannerPlans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <Card key={index} className={`relative ${plan.popular ? "border-primary shadow-lg scale-105" : ""}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                      Most Popular
                    </Badge>
                  )}

                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <div className="text-3xl font-bold text-gray-900">
                      {plan.price}
                      {plan.period && <span className="text-lg text-gray-600">{plan.period}</span>}
                    </div>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      <Link href={plan.name === "Enterprise" ? "/contact" : "/artists"}>{plan.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Artist Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">For Artists</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join for free and only pay when you get booked. No upfront costs or monthly fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {artistFees.map((fee, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{fee.category}</CardTitle>
                      <CardDescription>{fee.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg font-bold">
                      {fee.fee}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{fee.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="/onboarding">Join as Artist - Free</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optional professional services to help you succeed on our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our pricing and services.</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">When do artists get paid?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Artists receive payment within 24-48 hours after their performance is completed. We hold funds in
                  escrow until the event is successfully completed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel my subscription anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, you can cancel your event planner subscription at any time. There are no long-term contracts or
                  cancellation fees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Are there any hidden fees?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No hidden fees! All costs are clearly displayed upfront. Artists only pay our service fee when they
                  get booked, and event planners pay their subscription fee.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Refund policies vary by situation. Event planners can get refunds for cancellations made according to
                  the artist's cancellation policy. Contact support for specific cases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of event planners and artists who trust Artistly. Start free today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="/artists">Browse Artists</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/onboarding">Join as Artist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
