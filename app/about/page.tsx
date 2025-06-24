import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Music, Users, Award, Globe, Heart, Zap } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "abhay chaudhary",
    role: "CEO & Founder",
    bio: "Former entertainment industry executive with 15+ years connecting artists with opportunities.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    bio: "Tech entrepreneur passionate about building platforms that empower creative professionals.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Emily Chen",
    role: "Head of Artist Relations",
    bio: "Professional performer turned advocate, ensuring artists get the support they deserve.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Michael Thompson",
    role: "Head of Business Development",
    bio: "Strategic partnerships expert focused on expanding opportunities for our artist community.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

const values = [
  {
    icon: Heart,
    title: "Artist-First",
    description:
      "Every decision we make prioritizes the success and well-being of our artist community.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in building lasting relationships between artists and event planners.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards for both our platform and the artists we represent.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Making professional entertainment accessible to events of all sizes and budgets.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Continuously improving our platform with cutting-edge technology and features.",
  },
];

const stats = [
  { number: "10,000+", label: "Artists on Platform" },
  { number: "50,000+", label: "Successful Bookings" },
  { number: "500+", label: "Cities Covered" },
  { number: "98%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    quote:
      "Artistly transformed my career. I'm now booking gigs I only dreamed of.",
    name: "Jessica Lee",
    role: "Singer-Songwriter",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=300&h=300&fit=crop&crop=face",
  },
  {
    quote:
      "The best platform for finding unique talent. The process was seamless and professional.",
    name: "David Chen",
    role: "Event Planner",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&h=300&fit=crop&crop=face",
  },
  {
    quote:
      "As a venue owner, Artistly is my go-to for sourcing high-quality performers. Highly recommended!",
    name: "Maria Garcia",
    role: "Venue Owner",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-purple-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              🎭 About Artistly
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting Artists
              <span className="text-primary block">With Their Dreams</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Founded in 2020, Artistly has become the leading platform for
              booking performing artists, connecting talented performers with
              event planners worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every event deserves exceptional entertainment,
                and every talented artist deserves the opportunity to share
                their craft with the world.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Artistly bridges the gap between event planners seeking quality
                entertainment and professional artists looking for meaningful
                performance opportunities. Our platform streamlines the booking
                process while ensuring fair compensation and professional
                standards.
              </p>
              <Button asChild size="lg">
                <Link href="/artists">Explore Our Artists</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-200 rounded-2xl flex items-center justify-center">
                <Music className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Artistly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind Artistly's mission to connect
              artists with opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from artists and event planners who have found success with
              Artistly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="pt-6 flex-grow">
                  <p className="text-gray-600 italic">
                    \"{testimonial.quote}\"
                  </p>
                </CardContent>
                <CardHeader className="flex-row items-center gap-4 pt-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-base">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're an artist looking for opportunities or an event
            planner seeking talent, we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8"
            >
              <Link href="/onboarding">Join as Artist</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/artists">Find Artists</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
