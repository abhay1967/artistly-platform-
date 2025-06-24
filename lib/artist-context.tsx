"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Artist } from "@/lib/mock-data"

interface ArtistSubmission extends Artist {
  submissionDate: string
  status: "pending" | "approved" | "rejected"
}

interface ArtistContextType {
  artists: ArtistSubmission[]
  addArtist: (artist: Omit<ArtistSubmission, "id" | "submissionDate" | "status">) => void
  updateArtistStatus: (id: string, status: "pending" | "approved" | "rejected") => void
  deleteArtist: (id: string) => void
}

const ArtistContext = createContext<ArtistContextType | undefined>(undefined)

export function ArtistProvider({ children }: { children: React.ReactNode }) {
  const [artists, setArtists] = useState<ArtistSubmission[]>([])

  // Fetch data from API on mount
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('/api/artists');
        if (!response.ok) {
          throw new Error('Failed to fetch artists');
        }
        const data: Artist[] = await response.json();
        
        // Add submission details to the fetched data
        const submissions: ArtistSubmission[] = data.map((artist) => ({
          ...artist,
          submissionDate: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
          status: ["pending", "approved", "rejected"][Math.floor(Math.random() * 3)] as "pending" | "approved" | "rejected",
        }));
        setArtists(submissions);
      } catch (error) {
        console.error("Error fetching artists:", error);
        // Optionally, set an error state here
      }
    };

    fetchArtists();
  }, []);

  const addArtist = (newArtist: Omit<ArtistSubmission, "id" | "submissionDate" | "status">) => {
    const artist: ArtistSubmission = {
      ...newArtist,
      id: Date.now().toString(),
      submissionDate: new Date().toISOString().split("T")[0],
      status: "pending",
    }
    setArtists((prev) => [artist, ...prev])
  }

  const updateArtistStatus = (id: string, status: "pending" | "approved" | "rejected") => {
    setArtists((prev) => prev.map((artist) => (artist.id === id ? { ...artist, status } : artist)))
  }

  const deleteArtist = (id: string) => {
    setArtists((prev) => prev.filter((artist) => artist.id !== id))
  }

  return (
    <ArtistContext.Provider value={{ artists, addArtist, updateArtistStatus, deleteArtist }}>
      {children}
    </ArtistContext.Provider>
  )
}

export function useArtists() {
  const context = useContext(ArtistContext)
  if (context === undefined) {
    throw new Error("useArtists must be used within an ArtistProvider")
  }
  return context
}
