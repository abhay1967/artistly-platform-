"use client"

import type React from "react"
import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet"
import { categories, priceRanges, locations, type Artist } from "@/lib/mock-data"
import { Star, MapPin, IndianRupee, Search, Grid, List, Verified, Filter } from "lucide-react"
import { BookingModal } from "@/components/booking-modal"

const SkeletonCard = ({ viewMode }: { viewMode: "grid" | "list" }) => {
  if (viewMode === "list") {
    return (
      <div className="flex flex-col sm:flex-row bg-white p-4 rounded-lg shadow animate-pulse gap-4 border">
        <div className="w-full sm:w-1/3 h-48 sm:h-auto bg-gray-200 rounded-md"></div>
        <div className="w-full sm:w-2/3 space-y-3 py-2">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-10 bg-gray-200 rounded w-full mt-4"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow animate-pulse border flex flex-col">
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
      <div className="h-10 bg-gray-200 rounded w-full mt-auto"></div>
    </div>
  )
}

const FilterBlock = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-3">
    <h3 className="text-base font-medium text-gray-900">{title}</h3>
    {children}
  </div>
)

const ArtistCard = ({
  artist,
  onClick,
  viewMode,
}: {
  artist: Artist
  onClick: () => void
  viewMode: "grid" | "list"
}) => {
  if (viewMode === "list") {
    return (
      <Card
        className="hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
        onClick={onClick}
      >
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full aspect-[4/3] sm:aspect-auto sm:w-1/3">
            <Image
              src={artist.image || "/placeholder.svg"}
              alt={`${artist.name} - ${artist.category.join(", ")}`}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            {artist.verified && (
              <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs">
                <Verified className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            )}
          </div>
          <div className="sm:w-2/3 flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-sm">{artist.rating}</span>
                <span className="text-xs text-gray-500">({artist.reviewCount} reviews)</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{artist.name}</h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {artist.category.slice(0, 2).map((cat) => (
                  <Badge key={cat} variant="secondary" className="text-xs">
                    {categories.find((c) => c.value === cat)?.label || cat}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="pt-0 flex-grow">
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span>{artist.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <IndianRupee className="w-4 h-4 mr-2 flex-shrink-0" />
                  <span className="font-medium">{artist.priceRange}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{artist.bio}</p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">Ask for Quote</Button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card
      className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative w-full aspect-[4/3] rounded-t-lg overflow-hidden flex-shrink-0">
        <Image
          src={artist.image || "/placeholder.svg"}
          alt={`${artist.name} - ${artist.category.join(", ")}`}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
        {artist.verified && (
          <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs">
            <Verified className="w-3 h-3 mr-1" />
            Verified
          </Badge>
        )}
      </div>
      <CardHeader className="pb-3 flex-shrink-0">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-sm">{artist.rating}</span>
          <span className="text-xs text-gray-500">({artist.reviewCount} reviews)</span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{artist.name}</h3>
        <div className="flex flex-wrap gap-1 mb-2">
          {artist.category.slice(0, 2).map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {categories.find((c) => c.value === cat)?.label || cat}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span>{artist.location}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <IndianRupee className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="font-medium">{artist.priceRange}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{artist.bio}</p>
        </div>
        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white mt-auto">Ask for Quote</Button>
      </CardContent>
    </Card>
  )
}

interface FilterContentProps {
  filters: {
    search: string
    category: string
    location: string
    priceRange: string
  }
  onFilterChange: (key: keyof FilterContentProps["filters"], value: string) => void
  clearFilters: () => void
  onApply: () => void
  activeFilterCount: number
}

const FilterContent = ({
  filters,
  onFilterChange,
  clearFilters,
  onApply,
  activeFilterCount,
}: FilterContentProps) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">Filters</h2>
      {activeFilterCount > 0 && (
        <Badge variant="secondary" className="text-xs">
          {activeFilterCount} active
        </Badge>
      )}
    </div>

    <FilterBlock title="Search Artists">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search by name or description..."
          value={filters.search}
          onChange={(e) => onFilterChange("search", e.target.value)}
          className="pl-10"
        />
      </div>
    </FilterBlock>

    <FilterBlock title="Category">
      <Select value={filters.category} onValueChange={(value) => onFilterChange("category", value)}>
        <SelectTrigger>
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.value} value={category.value}>
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FilterBlock>

    <FilterBlock title="Location">
      <Select value={filters.location} onValueChange={(value) => onFilterChange("location", value)}>
        <SelectTrigger>
          <SelectValue placeholder="All Locations" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Locations</SelectItem>
          {locations.map((location) => (
            <SelectItem key={location} value={location}>
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FilterBlock>

    <FilterBlock title="Price Range">
      <Select value={filters.priceRange} onValueChange={(value) => onFilterChange("priceRange", value)}>
        <SelectTrigger>
          <SelectValue placeholder="Any Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Any Price</SelectItem>
          {priceRanges.map((range) => (
            <SelectItem key={range.value} value={range.value}>
              {range.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FilterBlock>

    <div className="flex gap-3 pt-4 border-t">
      <Button onClick={onApply} className="flex-1 bg-gray-900 hover:bg-gray-800">
        Apply Filters
      </Button>
      <Button variant="outline" onClick={clearFilters} className="flex-1">
        Clear All
      </Button>
    </div>
  </div>
)

function ArtistsPageContent() {
  const searchParams = useSearchParams()

  const [allArtists, setAllArtists] = useState<Artist[]>([])
  const [displayedArtists, setDisplayedArtists] = useState<Artist[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const [filters, setFilters] = useState({
    search: "",
    category: searchParams.get("category") || "",
    location: "",
    priceRange: "",
  })

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    const fetchArtists = async () => {
      setIsLoading(true)
      try {
        const response = await fetch("/api/artists")
        if (!response.ok) throw new Error("Failed to fetch artists")
        const data = await response.json()
        setAllArtists(data)
      } catch (error) {
        console.error("Error fetching artists:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArtists()
  }, [])

  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...allArtists]

      if (filters.search.trim()) {
        const searchTerm = filters.search.toLowerCase()
        filtered = filtered.filter(
          (artist) =>
            artist.name.toLowerCase().includes(searchTerm) ||
            artist.bio.toLowerCase().includes(searchTerm) ||
            artist.category.some((cat) => cat.toLowerCase().includes(searchTerm))
        )
      }

      if (filters.category && filters.category !== "all") {
        filtered = filtered.filter((artist) => artist.category.includes(filters.category))
      }

      if (filters.location && filters.location !== "all") {
        filtered = filtered.filter((artist) => artist.location === filters.location)
      }

      if (filters.priceRange && filters.priceRange !== "all") {
        filtered = filtered.filter((artist) => artist.priceRange === filters.priceRange)
      }

      setDisplayedArtists(filtered)
    }

    const timer = setTimeout(applyFilters, 300)
    return () => clearTimeout(timer)
  }, [filters, allArtists])

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const clearFilters = () => {
    setFilters({ search: "", category: "", location: "", priceRange: "" })
    setIsFilterOpen(false)
  }

  const activeFilterCount = Object.values(filters).filter((v) => v && v !== "all").length

  const handleBookArtist = (artist: Artist) => {
    setSelectedArtist(artist)
    setIsBookingModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Artist</h1>
          <p className="text-lg text-gray-600">
            Browse our talented performers and find the perfect match for your event.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 p-6 bg-white rounded-lg shadow-sm border">
              <FilterContent
                filters={filters}
                onFilterChange={handleFilterChange}
                clearFilters={clearFilters}
                onApply={() => {}}
                activeFilterCount={activeFilterCount}
              />
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 p-4 bg-white rounded-lg shadow-sm border">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 sm:mb-0">
                <span>{displayedArtists.length} artists found.</span>
                {activeFilterCount > 0 && (
                  <Button variant="link" size="sm" className="p-0 h-auto" onClick={clearFilters}>
                    Clear filters
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="lg:hidden">
                  <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                    <SheetTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        <span>Filter</span>
                        {activeFilterCount > 0 && (
                          <Badge variant="secondary" className="rounded-full p-1 h-5 w-5 flex items-center justify-center">
                            {activeFilterCount}
                          </Badge>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px]">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="p-4">
                        <FilterContent
                          filters={filters}
                          onFilterChange={handleFilterChange}
                          clearFilters={clearFilters}
                          onApply={() => setIsFilterOpen(false)}
                          activeFilterCount={activeFilterCount}
                        />
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>

                <Button
                  variant={viewMode === "grid" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-5 h-5" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "secondary" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {isLoading ? (
              <div
                className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} viewMode={viewMode} />
                ))}
              </div>
            ) : displayedArtists.length > 0 ? (
              <div
                className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
                {displayedArtists.map((artist) => (
                  <ArtistCard
                    key={artist.id}
                    artist={artist}
                    onClick={() => handleBookArtist(artist)}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-xl font-semibold text-gray-900">No Artists Found</h3>
                <p className="text-gray-500 mt-2 mb-4">Try adjusting your filters to find what you're looking for.</p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {selectedArtist && (
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          artist={selectedArtist}
        />
      )}
    </div>
  )
}

export default function ArtistsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArtistsPageContent />
    </Suspense>
  )
}
