"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { categories, type Artist } from "@/lib/mock-data"
import { Search, Eye, Trash2, Users, DollarSign, Calendar, TrendingUp, Filter } from "lucide-react"
import { useArtists } from "@/lib/artist-context"

interface ArtistSubmission extends Artist {
  submissionDate: string
  status: "pending" | "approved" | "rejected"
}

/**
 * DashboardPage Component
 *
 * Manager dashboard for reviewing artist applications:
 * - Real-time statistics cards
 * - Filterable artist submissions table
 * - Status management (approve/reject/pending)
 * - Mobile-responsive design with filter sheet
 *
 * @returns {JSX.Element} Manager dashboard interface
 */
export default function DashboardPage() {
  // Artist context for state management
  const { artists, updateArtistStatus, deleteArtist } = useArtists()

  // Local state for filtering and UI
  const [filteredArtists, setFilteredArtists] = useState<ArtistSubmission[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter artists based on search and filter criteria
  useEffect(() => {
    let filtered = artists

    // Apply search filter across name and location
    if (searchTerm) {
      filtered = filtered.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          artist.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Apply status and category filters
    if (statusFilter !== "all") {
      filtered = filtered.filter((artist) => artist.status === statusFilter)
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter((artist) => artist.category.includes(categoryFilter))
    }

    setFilteredArtists(filtered)
  }, [artists, searchTerm, statusFilter, categoryFilter]) // Dependencies for re-filtering

  const handleStatusChange = (artistId: string, newStatus: "pending" | "approved" | "rejected") => {
    updateArtistStatus(artistId, newStatus)
  }

  const handleDelete = (artistId: string) => {
    deleteArtist(artistId)
  }

  // Calculate stats
  const stats = {
    total: artists.length,
    pending: artists.filter((a) => a.status === "pending").length,
    approved: artists.filter((a) => a.status === "approved").length,
    rejected: artists.filter((a) => a.status === "rejected").length,
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800 text-xs">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 text-xs">Rejected</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 text-xs">Pending</Badge>
      default:
        return (
          <Badge variant="secondary" className="text-xs">
            {status}
          </Badge>
        )
    }
  }

  const FilterContent = () => (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      <Select value={statusFilter} onValueChange={setStatusFilter}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="approved">Approved</SelectItem>
          <SelectItem value="rejected">Rejected</SelectItem>
        </SelectContent>
      </Select>

      <Select value={categoryFilter} onValueChange={setCategoryFilter}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by category" />
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
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Manager Dashboard</h1>
          <p className="text-base sm:text-lg text-gray-600">Manage artist applications and bookings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total Artists</CardTitle>
              <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Pending Review</CardTitle>
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">{stats.pending}</div>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Approved</CardTitle>
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">{stats.approved}</div>
              <p className="text-xs text-muted-foreground">Active on platform</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Avg. Fee Range</CardTitle>
              <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">₹650</div>
              <p className="text-xs text-muted-foreground">Per booking</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Artist Submissions</CardTitle>
            <CardDescription>Review and manage artist applications</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Desktop Filters */}
            <div className="hidden md:flex flex-col md:flex-row gap-4 mb-6">
              <FilterContent />
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden mb-4">
              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters & Search
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Filter Artists</SheetTitle>
                    <SheetDescription>Search and filter artist submissions</SheetDescription>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Artists Table */}
            <div className="rounded-md border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="min-w-[200px]">Artist</TableHead>
                      <TableHead className="hidden lg:table-cell">Category</TableHead>
                      <TableHead className="hidden xl:table-cell">Location</TableHead>
                      <TableHead className="hidden xl:table-cell">Fee Range</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="hidden sm:table-cell">Submitted</TableHead>
                      <TableHead className="text-right min-w-[120px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredArtists.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8">
                          <div className="text-gray-500">
                            <Users className="mx-auto h-8 w-8 sm:h-12 sm:w-12 mb-4 opacity-50" />
                            <p className="text-sm sm:text-base">No artists found</p>
                            <p className="text-xs sm:text-sm">Try adjusting your search or filters</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredArtists.map((artist) => (
                        <TableRow key={artist.id}>
                          <TableCell>
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
                              </div>
                              <div className="min-w-0">
                                <p className="font-medium text-sm sm:text-base truncate">{artist.name}</p>
                                <div className="lg:hidden">
                                  <div className="flex flex-wrap gap-1 mt-1">
                                    {artist.category.slice(0, 1).map((cat) => (
                                      <Badge key={cat} variant="outline" className="text-xs">
                                        {categories.find((c) => c.value === cat)?.label || cat}
                                      </Badge>
                                    ))}
                                  </div>
                                  <p className="text-xs text-gray-500 xl:hidden mt-1">{artist.location}</p>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="hidden lg:table-cell">
                            <div className="flex flex-wrap gap-1">
                              {artist.category.slice(0, 2).map((cat) => (
                                <Badge key={cat} variant="outline" className="text-xs">
                                  {categories.find((c) => c.value === cat)?.label || cat}
                                </Badge>
                              ))}
                              {artist.category.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{artist.category.length - 2}
                                </Badge>
                              )}
                            </div>
                          </TableCell>
                          <TableCell className="hidden xl:table-cell text-sm">{artist.location}</TableCell>
                          <TableCell className="hidden xl:table-cell text-sm">{artist.priceRange}</TableCell>
                          <TableCell>{getStatusBadge(artist.status)}</TableCell>
                          <TableCell className="hidden sm:table-cell text-sm">
                            {new Date(artist.submissionDate).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end space-x-1 sm:space-x-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                              </Button>
                              <Select
                                value={artist.status}
                                onValueChange={(value) =>
                                  handleStatusChange(artist.id, value as "pending" | "approved" | "rejected")
                                }
                              >
                                <SelectTrigger className="w-16 sm:w-20 h-8 text-xs">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="pending">Pending</SelectItem>
                                  <SelectItem value="approved">Approve</SelectItem>
                                  <SelectItem value="rejected">Reject</SelectItem>
                                </SelectContent>
                              </Select>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDelete(artist.id)}
                                className="text-red-600 hover:text-red-700 h-8 w-8 p-0"
                              >
                                <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
