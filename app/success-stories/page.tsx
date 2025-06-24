"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Star, Quote, Calendar, Users, IndianRupee, TrendingUp } from "lucide-react"

const successStories = [
  {
    type: "artist",
    name: "Priya Kumar",
    title: "Sufi & Bollywood Singer",
    story:
      "Since joining Artistly 2 years ago, my bookings have tripled. I've performed at over 150 weddings and corporate events across North India. The platform connected me with high-profile clients I never would have reached on my own.",
    stats: {
      bookings: "150+",
      income: "300%",
      rating: "4.9",
    },
    quote:
      "Artistly transformed my passion for music into a thriving career. The quality of events, from intimate mehfils to grand sangeets, has been exceptional.",
  },
  {
    type: "client",
    name: "Rohan Mehra",
    title: "Wedding Planner",
    story:
      "As a wedding planner in Delhi, finding reliable and talented artists for destination weddings was a challenge. Artistly has become my go-to platform for booking performers that consistently exceed my clients' expectations.",
    stats: {
      events: "200+",
      satisfaction: "98%",
      savings: "25%",
    },
    quote:
      "The variety and professionalism of artists on Artistly is unmatched. My clients are always amazed by the unique performers we find, from folk bands to fire dancers.",
  },
  {
    type: "artist",
    name: "DJ Arjun",
    title: "Bollywood & EDM DJ",
    story:
      "Artistly helped me break into the luxury wedding circuit. The platform's verification system gave clients in cities like Udaipur and Jaipur the confidence to book me for their biggest events.",
    stats: {
      revenue: "500%",
      events: "75+",
      clients: "50+",
    },
    quote:
      "The platform opened doors to opportunities I never imagined. From beach parties in Goa to sangeet nights in Mumbai, Artistly elevated my career.",
  },
  {
    type: "client",
    name: "Ananya Sharma",
    title: "Corporate Event Manager",
    story:
      "Managing entertainment for our company's annual conferences across India used to be stressful. Artistly's platform made it simple to find, book, and manage performers for events in Bangalore, Mumbai, and Delhi.",
    stats: {
      events: "50+",
      cities: "12",
      efficiency: "80%",
    },
    quote: "Artistly streamlined our entire event entertainment process. What used to take weeks now takes just a few hours.",
  },
]

const metrics = [
  {
    icon: Users,
    number: "10,000+",
    label: "Artists Empowered",
    description: "Professional performers growing their careers in India",
  },
  {
    icon: Calendar,
    number: "50,000+",
    label: "Events Booked",
    description: "Successful performances and happy clients nationwide",
  },
  {
    icon: IndianRupee,
    number: "₹200 Cr+",
    label: "Artist Earnings",
    description: "Total income generated for our Indian artist community",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Client satisfaction with booked artists",
  },
]

const testimonials = [
  {
    quote: "Artistly didn't just help me book more gigs - it helped me build a sustainable music career right here in India.",
    author: "Aisha Khan",
    role: "Sufi Singer",
    rating: 5,
  },
  {
    quote: "The quality of artists on this platform is incredible. Every booking for our destination weddings has been flawless.",
    author: "Vikram Singh",
    role: "Event Coordinator",
    rating: 5,
  },
  {
    quote: "From classical dance performances to modern fusion, Artistly connected me with the perfect stages to showcase my art.",
    author: "Meera Desai",
    role: "Classical & Fusion Dancer",
    rating: 5,
  },
]

export default function SuccessStoriesPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-purple-50 to-white dark:from-purple-950 dark:to-gray-950">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Success Stories</Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Real Impact, Real Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how Artistly has transformed careers and events for thousands of artists and event planners
              across India.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <Card key={index} className="text-center p-6">
                <metric.icon className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <p className="text-3xl font-bold">{metric.number}</p>
                <p className="font-semibold">{metric.label}</p>
                <p className="text-sm text-gray-500">{metric.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Success Stories Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Success Stories</h2>
          <div className="space-y-16">
            {successStories.map((story, index) => {
              const isArtist = story.type === "artist"
              const cardClass = isArtist
                ? "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
                : "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
              const flexDirection = index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"

              return (
                <Card key={index} className={`overflow-hidden border-2 ${cardClass}`}>
                  <div className={`flex flex-col ${flexDirection}`}>
                    <div className="lg:w-1/3">
                      <div className="relative h-64 lg:h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                        <span className="text-lg font-semibold text-gray-500">{story.name}</span>
                        <div className="absolute top-4 left-4">
                          <Badge className={isArtist ? "bg-purple-500" : "bg-blue-500"}>
                            {isArtist ? "Artist" : "Client"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <CardHeader>
                        <h3 className="text-2xl font-bold">{story.name}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400">{story.title}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-6">{story.story}</p>
                        <div className="grid grid-cols-3 gap-4 text-center mb-6">
                          {Object.entries(story.stats).map(([key, value]) => (
                            <div key={key}>
                              <p className="text-2xl font-bold">{value}</p>
                              <p className="text-sm text-gray-500 uppercase">{key}</p>
                            </div>
                          ))}
                        </div>
                        <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic">
                          <Quote className="w-6 h-6 text-gray-400 mb-2" />
                          {story.quote}
                        </blockquote>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 flex flex-col">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="italic mb-4 flex-grow">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of talented artists and event planners who are building their careers and creating unforgettable experiences.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/artists"
              className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-purple-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Find an Artist
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Join as an Artist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

