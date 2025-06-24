"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { Calendar, Users } from "lucide-react"
import type { Artist } from "@/lib/mock-data"

const bookingSchema = z.object({
  clientName: z.string().min(2, "Name must be at least 2 characters"),
  clientEmail: z.string().email("Please enter a valid email address"),
  clientPhone: z.string().min(10, "Please enter a valid phone number"),
  eventType: z.string().min(1, "Please select an event type"),
  eventDate: z.string().min(1, "Please select an event date"),
  eventTime: z.string().min(1, "Please select an event time"),
  duration: z.string().min(1, "Please specify event duration"),
  guestCount: z.string().min(1, "Please specify number of guests"),
  venue: z.string().min(5, "Please provide venue details"),
  budget: z.string().min(1, "Please specify your budget"),
  additionalRequirements: z.string().optional(),
})

type BookingFormData = z.infer<typeof bookingSchema>

interface BookingModalProps {
  artist: Artist
  isOpen: boolean
  onClose: () => void
}

const eventTypes = [
  "Wedding",
  "Sangeet",
  "Mehendi",
  "Corporate Event",
  "Birthday Party",
  "Anniversary",
  "Concert",
  "Festival",
  "Private Party",
  "Religious Ceremony",
  "Fundraiser",
  "Conference",
  "Other",
]

const eventTimes = [
  "Morning (9:00 AM - 12:00 PM)",
  "Afternoon (12:00 PM - 5:00 PM)",
  "Evening (5:00 PM - 9:00 PM)",
  "Night (9:00 PM - 12:00 AM)",
  "All Day",
]

const durations = ["1 hour", "2 hours", "3 hours", "4 hours", "5+ hours", "Full day"]

export function BookingModal({ artist, isOpen, onClose }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      eventType: "",
      eventDate: "",
      eventTime: "",
      duration: "",
      guestCount: "",
      venue: "",
      budget: "",
      additionalRequirements: "",
    },
  })

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Booking request submitted:", {
        artist: artist.name,
        artistId: artist.id,
        ...data,
      })

      toast({
        title: "Quote Request Sent!",
        description: `Your booking request has been sent to ${artist.name}. They will respond within 24 hours.`,
      })

      form.reset()
      onClose()
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[95vh] overflow-y-auto mx-4 sm:mx-auto">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-xl">Book {artist.name}</DialogTitle>
          <DialogDescription className="text-sm sm:text-base">
            Fill out the details below to request a quote for your event. {artist.name} will respond with availability
            and pricing.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            {/* Client Information */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold flex items-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Your Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="clientName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} className="text-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="clientEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Email Address *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} className="text-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="clientPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 98765 43210" {...field} className="text-sm" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Event Information */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold flex items-center">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Event Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Event Type *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="text-sm">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {eventTypes.map((type) => (
                            <SelectItem key={type} value={type} className="text-sm">
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="eventDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Event Date *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="text-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="eventTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Event Time *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="text-sm">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {eventTimes.map((time) => (
                            <SelectItem key={time} value={time} className="text-sm">
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Duration *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="text-sm">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {durations.map((duration) => (
                            <SelectItem key={duration} value={duration} className="text-sm">
                              {duration}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="guestCount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Number of Guests *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 150" {...field} className="text-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">Budget Range *</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ₹25,000-50,000" {...field} className="text-sm" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="venue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Venue Details *</FormLabel>
                    <FormControl>
                      <Input placeholder="Venue name and address" {...field} className="text-sm" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Additional Requirements */}
            <div className="space-y-4">
              <h3 className="text-base sm:text-lg font-semibold">Additional Information</h3>

              <FormField
                control={form.control}
                name="additionalRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Special Requirements (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any special requests, equipment needs, or additional information..."
                        className="min-h-20 text-sm"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Artist Info Summary */}
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Booking Summary</h4>
              <div className="space-y-1 text-xs sm:text-sm text-gray-600">
                <p>
                  <strong>Artist:</strong> {artist.name}
                </p>
                <p>
                  <strong>Category:</strong> {artist.category.join(", ")}
                </p>
                <p>
                  <strong>Location:</strong> {artist.location}
                </p>
                <p>
                  <strong>Price Range:</strong> {artist.priceRange}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Sending Request..." : "Send Quote Request"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
