"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useToast } from "@/hooks/use-toast"
import { categories, languages, priceRanges } from "@/lib/mock-data"
import { User, FileText, DollarSign, Globe, Camera } from "lucide-react"
import { useArtists } from "@/lib/artist-context"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  bio: z.string().min(50, "Bio must be at least 50 characters").max(500, "Bio must be less than 500 characters"),
  experience: z.coerce.number().min(0, "Experience cannot be negative"),
  categories: z.array(z.string()).min(1, "Please select at least one category"),
  languages: z.array(z.string()).min(1, "Please select at least one language"),
  priceRange: z.string().min(1, "Please select a price range"),
  location: z.string().min(2, "Location is required"),
  profileImage: z.any().optional(),
})

type FormData = z.infer<typeof formSchema>

/**
 * OnboardingPage Component
 *
 * Multi-step artist registration form with:
 * - Step-by-step wizard interface
 * - Form validation using React Hook Form + Zod
 * - Controlled components for all inputs
 * - Multi-select checkboxes and dropdowns
 *
 * @returns {JSX.Element} Artist onboarding form wizard
 */
export default function OnboardingPage() {
  // Form state and step management
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { addArtist } = useArtists()

  // Form validation and submission handling
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      experience: 0,
      categories: [], // Multi-select array
      languages: [], // Multi-select array
      priceRange: "",
      location: "",
    },
  })

  const steps = [
    {
      id: 1,
      title: "Personal Information",
      description: "Tell us about yourself",
      icon: User,
    },
    {
      id: 2,
      title: "Professional Details",
      description: "Your skills and expertise",
      icon: FileText,
    },
    {
      id: 3,
      title: "Pricing & Location",
      description: "Set your rates and availability",
      icon: DollarSign,
    },
    {
      id: 4,
      title: "Profile & Languages",
      description: "Complete your profile",
      icon: Globe,
    },
  ]

  // Step navigation with validation
  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep)
    const isValid = await form.trigger(fieldsToValidate) // Validate current step

    if (isValid && currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1:
        return ["name", "bio"]
      case 2:
        return ["categories", "experience"]
      case 3:
        return ["priceRange", "location"]
      case 4:
        return ["languages"]
      default:
        return []
    }
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Add artist to context
      addArtist({
        name: data.name,
        bio: data.bio,
        experience: data.experience,
        category: data.categories,
        languages: data.languages,
        priceRange: data.priceRange,
        location: data.location,
        image: "/placeholder.svg?height=300&width=300",
        rating: 0,
        reviewCount: 0,
        verified: false,
        availability: ["available"],
      })

      console.log("Form submitted:", data)

      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you within 24 hours.",
      })

      // Reset form
      form.reset()
      setCurrentStep(1)
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

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Professional Bio *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your experience, style, and what makes you unique as a performer..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{field.value?.length || 0}/500 characters (minimum 50)</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Years of Experience *</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 5" {...field} />
                  </FormControl>
                  <FormDescription>How many years have you been performing professionally?</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="categories"
              render={() => (
                <FormItem>
                  <FormLabel>Performance Categories *</FormLabel>
                  <FormDescription>Select all categories that apply to your skills</FormDescription>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4">
                    {categories.map((category) => (
                      <FormField
                        key={category.value}
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(category.value)}
                                onCheckedChange={(checked) => {
                                  const updatedValue = checked
                                    ? [...(field.value || []), category.value]
                                    : field.value?.filter((value) => value !== category.value) || []
                                  field.onChange(updatedValue)
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">{category.label}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="priceRange"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price Range *</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your typical fee range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {priceRanges.map((range) => (
                        <SelectItem key={range.value} value={range.value}>
                          {range.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>This helps clients find artists within their budget</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location *</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Mumbai, Maharashtra" {...field} />
                  </FormControl>
                  <FormDescription>Your primary location for performances</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <FormField
              control={form.control}
              name="languages"
              render={() => (
                <FormItem>
                  <FormLabel>Languages Spoken *</FormLabel>
                  <FormDescription>Select all languages you can perform in</FormDescription>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 max-h-48 overflow-y-auto">
                    {languages.map((language) => (
                      <FormField
                        key={language}
                        control={form.control}
                        name="languages"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(language)}
                                onCheckedChange={(checked) => {
                                  const updatedValue = checked
                                    ? [...(field.value || []), language]
                                    : field.value?.filter((value) => value !== language) || []
                                  field.onChange(updatedValue)
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">{language}</FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <Label>Profile Image (Optional)</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 sm:p-6 text-center hover:border-gray-400 transition-colors">
                <Camera className="mx-auto h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mb-3 sm:mb-4" />
                <div className="text-sm text-gray-600">
                  <Label htmlFor="profile-image" className="cursor-pointer text-primary hover:text-primary/80">
                    Click to upload
                  </Label>
                  <Input
                    id="profile-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) {
                        form.setValue("profileImage", file)
                      }
                    }}
                  />
                  <p className="mt-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Join Artistly as a Performer
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Complete your profile to start receiving booking requests
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id

              return (
                <div key={step.id} className="flex flex-col items-center flex-1 relative">
                  <div
                    className={`
                    w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 transition-colors
                    ${
                      isActive
                        ? "bg-primary text-white"
                        : isCompleted
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-600"
                    }
                  `}
                  >
                    <IconComponent className="w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-center">
                    <p className={`text-xs sm:text-sm font-medium ${isActive ? "text-primary" : "text-gray-600"}`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 hidden sm:block">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`
                      hidden sm:block absolute top-6 left-1/2 w-full h-0.5 -z-10
                      ${isCompleted ? "bg-green-500" : "bg-gray-200"}
                    `}
                      style={{ width: "calc(100% - 3rem)", marginLeft: "1.5rem" }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">
              Step {currentStep}: {steps[currentStep - 1].title}
            </CardTitle>
            <CardDescription>{steps[currentStep - 1].description}</CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="order-2 sm:order-1"
                  >
                    Previous
                  </Button>

                  {currentStep < steps.length ? (
                    <Button type="button" onClick={nextStep} className="order-1 sm:order-2">
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting} className="order-1 sm:order-2">
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
