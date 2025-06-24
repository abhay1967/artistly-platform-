import { NextResponse } from "next/server";
import { mockArtists } from "@/lib/mock-data";

export async function GET() {
  // In a real application, you would fetch this data from a database.
  // For this demo, we're returning the mock data directly.
  return NextResponse.json(mockArtists);
}
