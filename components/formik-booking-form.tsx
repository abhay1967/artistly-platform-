"use client"

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Calendar, Users } from "lucide-react"
import type { Artist } from "@/lib/mock-data"

// Yup validation schema
const bookingValidationSchema = Yup.object({
  clientName: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
  clientEmail: Yup.string().email("Please enter a valid email address").required("Email is required"),
  clientPhone: Yup.string().min(10, "Please enter a valid phone number").required("Phone number is required"),
  eventType: Yup.string().required("Please select an event type"),
  eventDate: Yup.date().min(new Date(), "Event date must be in the future").required("Please select an event date"),
  eventTime: Yup.string().required("Please select an event time"),
  duration: Yup.string().required("Please specify event duration"),
  guestCount: Yup.string().required("Please specify number of guests"),
  venue: Yup.string().min(5, "Please provide venue details").required("Venue is required"),
  budget: Yup.string().required("Please specify your budget"),
  additionalRequirements: Yup.string(),
})

interface FormikBookingFormProps {
  artist: Artist
  isOpen: boolean
  onClose: () => void
}

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Anniversary",
  "Concert",
  "Festival",
  "Private Party",
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

export function FormikBookingForm({ artist, isOpen, onClose }: FormikBookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const initialValues = {
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
  }

  const handleSubmit = async (values: typeof initialValues, { resetForm }: any) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Formik booking request submitted:", {
        artist: artist.name,
        artistId: artist.id,
        ...values,
      })

      toast({
        title: "Quote Request Sent! (Formik + Yup)",
        description: `Your booking request has been sent to ${artist.name}. They will respond within 24 hours.`,
      })

      resetForm()
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">Book {artist.name} (Formik + Yup)</DialogTitle>
          <DialogDescription>
            Fill out the details below to request a quote for your event. This form uses Formik + Yup validation.
          </DialogDescription>
        </DialogHeader>

        <Formik initialValues={initialValues} validationSchema={bookingValidationSchema} onSubmit={handleSubmit}>
          {({ values, setFieldValue, errors, touched }) => (
            <Form className="space-y-6">
              {/* Client Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Your Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="clientName">Full Name *</Label>
                    <Field
                      as={Input}
                      id="clientName"
                      name="clientName"
                      placeholder="Your full name"
                      className={errors.clientName && touched.clientName ? "border-red-500" : ""}
                    />
                    <ErrorMessage name="clientName" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="clientEmail">Email Address *</Label>
                    <Field
                      as={Input}
                      id="clientEmail"
                      name="clientEmail"
                      type="email"
                      placeholder="your.email@example.com"
                      className={errors.clientEmail && touched.clientEmail ? "border-red-500" : ""}
                    />
                    <ErrorMessage name="clientEmail" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="clientPhone">Phone Number *</Label>
                  <Field
                    as={Input}
                    id="clientPhone"
                    name="clientPhone"
                    placeholder="(555) 123-4567"
                    className={errors.clientPhone && touched.clientPhone ? "border-red-500" : ""}
                  />
                  <ErrorMessage name="clientPhone" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              {/* Event Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Event Details
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Select value={values.eventType} onValueChange={(value) => setFieldValue("eventType", value)}>
                      <SelectTrigger className={errors.eventType && touched.eventType ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <ErrorMessage name="eventType" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="eventDate">Event Date *</Label>
                    <Field
                      as={Input}
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      className={errors.eventDate && touched.eventDate ? "border-red-500" : ""}
                    />
                    <ErrorMessage name="eventDate" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="eventTime">Event Time *</Label>
                    <Select value={values.eventTime} onValueChange={(value) => setFieldValue("eventTime", value)}>
                      <SelectTrigger className={errors.eventTime && touched.eventTime ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTimes.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <ErrorMessage name="eventTime" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="duration">Duration *</Label>
                    <Select value={values.duration} onValueChange={(value) => setFieldValue("duration", value)}>
                      <SelectTrigger className={errors.duration && touched.duration ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        {durations.map((duration) => (
                          <SelectItem key={duration} value={duration}>
                            {duration}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <ErrorMessage name="duration" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="guestCount">Number of Guests *</Label>
                    <Field
                      as={Input}
                      id="guestCount"
                      name="guestCount"
                      placeholder="e.g., 50-100"
                      className={errors.guestCount && touched.guestCount ? "border-red-500" : ""}
                    />
                    <ErrorMessage name="guestCount" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="budget">Budget Range *</Label>
                    <Field
                      as={Input}
                      id="budget"
                      name="budget"
                      placeholder="e.g., ₹500-1000"
                      className={errors.budget && touched.budget ? "border-red-500" : ""}
                    />
                    <ErrorMessage name="budget" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="venue">Venue Details *</Label>
                  <Field
                    as={Input}
                    id="venue"
                    name="venue"
                    placeholder="Venue name and address"
                    className={errors.venue && touched.venue ? "border-red-500" : ""}
                  />
                  <ErrorMessage name="venue" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              {/* Additional Requirements */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Additional Information</h3>
                <div>
                  <Label htmlFor="additionalRequirements">Special Requirements (Optional)</Label>
                  <Field
                    as={Textarea}
                    id="additionalRequirements"
                    name="additionalRequirements"
                    placeholder="Any special requests, equipment needs, or additional information..."
                    className="min-h-24"
                  />
                  <ErrorMessage name="additionalRequirements" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>

              {/* Artist Info Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Booking Summary</h4>
                <div className="space-y-1 text-sm text-gray-600">
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
              <div className="flex justify-end space-x-4 pt-4">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending Request..." : "Send Quote Request (Formik)"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  )
}
