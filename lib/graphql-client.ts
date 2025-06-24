// GraphQL client setup and queries
export interface GraphQLArtist {
  id: string
  name: string
  category: string[]
  priceRange: string
  location: string
  bio: string
  languages: string[]
  image: string
  rating: number
  reviewCount: number
  verified: boolean
  availability: "available" | "busy" | "unavailable"
}

export interface GraphQLResponse<T> {
  data: T
  errors?: Array<{ message: string }>
}

// Mock GraphQL endpoint
const GRAPHQL_ENDPOINT = "https://api.artistly.com/graphql" // Mock endpoint

// GraphQL queries
export const GET_ARTISTS_QUERY = `
  query GetArtists($filter: ArtistFilter) {
    artists(filter: $filter) {
      id
      name
      category
      priceRange
      location
      bio
      languages
      image
      rating
      reviewCount
      verified
      availability
    }
  }
`

export const GET_ARTIST_BY_ID_QUERY = `
  query GetArtistById($id: ID!) {
    artist(id: $id) {
      id
      name
      category
      priceRange
      location
      bio
      languages
      image
      rating
      reviewCount
      verified
      availability
    }
  }
`

export const CREATE_BOOKING_MUTATION = `
  mutation CreateBooking($input: BookingInput!) {
    createBooking(input: $input) {
      id
      status
      artistId
      clientName
      eventDate
      createdAt
    }
  }
`

export const GET_ARTIST_STATS_QUERY = `
  query GetArtistStats {
    artistStats {
      total
      pending
      approved
      rejected
      averageRating
      totalBookings
    }
  }
`

// Mock GraphQL client
class GraphQLClient {
  private endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  async query<T>(query: string, variables?: any): Promise<GraphQLResponse<T>> {
    // Mock implementation - in real app, this would make HTTP request
    console.log("GraphQL Query:", query)
    console.log("Variables:", variables)

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Mock responses based on query type
    if (query.includes("GetArtists")) {
      const { mockArtists } = await import("@/lib/mock-data")
      return {
        data: {
          artists: mockArtists,
        } as T,
      }
    }

    if (query.includes("GetArtistById")) {
      const { mockArtists } = await import("@/lib/mock-data")
      const artist = mockArtists.find((a) => a.id === variables?.id) || mockArtists[0]
      return {
        data: {
          artist,
        } as T,
      }
    }

    if (query.includes("CreateBooking")) {
      return {
        data: {
          createBooking: {
            id: Date.now().toString(),
            status: "pending",
            artistId: variables?.input?.artistId,
            clientName: variables?.input?.clientName,
            eventDate: variables?.input?.eventDate,
            createdAt: new Date().toISOString(),
          },
        } as T,
      }
    }

    if (query.includes("GetArtistStats")) {
      return {
        data: {
          artistStats: {
            total: 8,
            pending: 3,
            approved: 4,
            rejected: 1,
            averageRating: 4.7,
            totalBookings: 156,
          },
        } as T,
      }
    }

    throw new Error("Unknown GraphQL query")
  }

  async mutate<T>(mutation: string, variables?: any): Promise<GraphQLResponse<T>> {
    return this.query<T>(mutation, variables)
  }
}

// Export singleton instance
export const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT)

// Helper functions for common operations
export async function fetchArtists(filter?: any): Promise<GraphQLArtist[]> {
  const response = await graphqlClient.query<{ artists: GraphQLArtist[] }>(GET_ARTISTS_QUERY, { filter })

  if (response.errors) {
    throw new Error(response.errors[0].message)
  }

  return response.data.artists
}

export async function fetchArtistById(id: string): Promise<GraphQLArtist> {
  const response = await graphqlClient.query<{ artist: GraphQLArtist }>(GET_ARTIST_BY_ID_QUERY, { id })

  if (response.errors) {
    throw new Error(response.errors[0].message)
  }

  return response.data.artist
}

export async function createBooking(input: any) {
  const response = await graphqlClient.mutate<{ createBooking: any }>(CREATE_BOOKING_MUTATION, { input })

  if (response.errors) {
    throw new Error(response.errors[0].message)
  }

  return response.data.createBooking
}

export async function fetchArtistStats() {
  const response = await graphqlClient.query<{ artistStats: any }>(GET_ARTIST_STATS_QUERY)

  if (response.errors) {
    throw new Error(response.errors[0].message)
  }

  return response.data.artistStats
}
