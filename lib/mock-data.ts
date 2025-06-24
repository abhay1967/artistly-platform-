export interface Artist {
  id: string
  name: string
  category: string[]
  location: string
  priceRange: string
  rating: number
  reviewCount: number
  image: string
  bio: string
  verified: boolean
  languages: string[]
  experience: number
  availability: string[]
}

export const categories = [
  { value: "musician", label: "Musician" },
  { value: "singer", label: "Singer" },
  { value: "dancer", label: "Dancer" },
  { value: "comedian", label: "Comedian" },
  { value: "magician", label: "Magician" },
  { value: "dj", label: "DJ" },
  { value: "band", label: "Band" },
  { value: "performer", label: "Performer" },
]

export const languages = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Mandarin",
  "Japanese",
  "Russian",
  "Arabic",
  "Portuguese",
  "Bengali",
  "Punjabi",
  "Telugu",
  "Marathi",
  "Tamil",
  "Urdu",
]

export const priceRanges = [
  { value: "₹10,000-₹25,000", label: "₹10,000 - ₹25,000" },
  { value: "₹25,000-₹50,000", label: "₹25,000 - ₹50,000" },
  { value: "₹50,000-₹1,00,000", label: "₹50,000 - ₹1,00,000" },
  { value: "₹1,00,000+", label: "₹1,00,000+" },
]

export const locations = [
  "Mumbai, MH",
  "Delhi, DL",
  "Bangalore, KA",
  "Chennai, TN",
  "Kolkata, WB",
  "Hyderabad, TS",
  "Pune, MH",
  "Ahmedabad, GJ",
  "Jaipur, RJ",
  "Chandigarh, CH",
]

export const mockArtists: Artist[] = [
  {
    id: "1",
    name: "Priya Sharma",
    category: ["singer", "musician"],
    location: "Delhi, DL",
    priceRange: "₹25,000-₹50,000",
    rating: 4.9,
    reviewCount: 152,
    image: "https://source.unsplash.com/400x300/?indian,woman,singing",
    bio: "Soulful vocalist trained in Hindustani classical music, with a flair for Bollywood hits. Ideal for weddings and cultural festivals.",
    verified: true,
    languages: ["Hindi", "English", "Punjabi"],
    experience: 8,
    availability: ["weekends", "evenings"],
  },
  {
    id: "2",
    name: "Rohan Verma",
    category: ["dj", "performer"],
    location: "Mumbai, MH",
    priceRange: "₹50,000-₹1,00,000",
    rating: 4.7,
    reviewCount: 210,
    image: "/artists/rohan-verma.jpg", // Local image
    bio: "Mumbai's top DJ for high-energy sangeets, corporate parties, and club nights. Specializes in Bollywood, Bhangra, and electronic music.",
    verified: true,
    languages: ["Hindi", "English"],
    experience: 10,
    availability: ["weekends", "evenings"],
  },
  {
    id: "3",
    name: "Anjali Singh",
    category: ["dancer", "performer"],
    location: "Bangalore, KA",
    priceRange: "₹25,000-₹50,000",
    rating: 4.8,
    reviewCount: 180,
    image: "https://source.unsplash.com/400x300/?indian,classical,dance",
    bio: "Exquisite Bharatanatyam and Kathak dancer. Offers mesmerizing performances and workshops for all ages.",
    verified: true,
    languages: ["English", "Kannada", "Tamil"],
    experience: 12,
    availability: ["weekends", "weekdays"],
  },
  {
    id: "4",
    name: "Vikram Patel",
    category: ["comedian"],
    location: "Ahmedabad, GJ",
    priceRange: "₹10,000-₹25,000",
    rating: 4.6,
    reviewCount: 250,
    image: "/artists/vikram-patel.jpg", // Local image
    bio: "Hilarious stand-up comedian known for his clean, observational humor in Gujarati and Hindi. Perfect for family and corporate shows.",
    verified: false,
    languages: ["Gujarati", "Hindi", "English"],
    experience: 7,
    availability: ["weekends", "evenings"],
  },
  {
    id: "5",
    name: "Sunita Rao",
    category: ["musician", "singer"],
    location: "Chennai, TN",
    priceRange: "₹50,000-₹1,00,000",
    rating: 5.0,
    reviewCount: 95,
    image: "https://source.unsplash.com/400x300/?indian,woman,violin",
    bio: "Renowned Carnatic vocalist and violinist. Her divine music adds a touch of class to any prestigious event.",
    verified: true,
    languages: ["Tamil", "English"],
    experience: 22,
    availability: ["weekends"],
  },
  {
    id: "6",
    name: "The Dhol Drummers",
    category: ["band", "musician"],
    location: "Chandigarh, CH",
    priceRange: "₹25,000-₹50,000",
    rating: 4.9,
    reviewCount: 130,
    image: "https://source.unsplash.com/400x300/?dhol,punjabi,wedding",
    bio: "An explosive Dhol and percussion group from Punjab. Guaranteed to bring unmatched energy to weddings and celebrations.",
    verified: true,
    languages: ["Punjabi", "Hindi"],
    experience: 15,
    availability: ["weekends", "evenings"],
  },
  {
    id: "7",
    name: "Sameer Khan",
    category: ["comedian", "performer"],
    location: "Hyderabad, TS",
    priceRange: "₹10,000-₹25,000",
    rating: 4.5,
    reviewCount: 190,
    image: "/artists/sameer-khan.jpg", // Local image
    bio: "Witty stand-up comedian with a unique Hyderabadi sense of humor. His storytelling will leave you in splits.",
    verified: false,
    languages: ["Hindi", "Urdu", "English"],
    experience: 5,
    availability: [`weekends`, `evenings`, `weekdays`],
  },
  {
    id: "8",
    name: "DJ Riya",
    category: ["dj", "musician"],
    location: "Pune, MH",
    priceRange: "₹25,000-₹50,000",
    rating: 4.7,
    reviewCount: 188,
    image: "/artists/dj-riya.jpg", // Local image
    bio: "Versatile DJ playing the best of Bollywood remixes, commercial hits, and Marathi chartbusters for the young crowd.",
    verified: true,
    languages: ["Marathi", "Hindi", "English"],
    experience: 9,
    availability: ["weekends", "evenings"],
  },
  {
    id: "9",
    name: "Meera Iyer",
    category: ["dancer", "performer"],
    location: "Kolkata, WB",
    priceRange: "₹25,000-₹50,000",
    rating: 4.8,
    reviewCount: 110,
    image: "https://source.unsplash.com/400x300/?odissi,dancer,india",
    bio: "Graceful Odissi and contemporary dancer. Her performances are a beautiful blend of tradition and modernity.",
    verified: true,
    languages: ["Bengali", "English", "Hindi"],
    experience: 11,
    availability: ["weekends", "evenings"],
  },
  {
    id: "10",
    name: "Akash & Diya",
    category: ["band", "singer"],
    location: "Jaipur, RJ",
    priceRange: "₹50,000-₹1,00,000",
    rating: 4.9,
    reviewCount: 165,
    image: "/artists/akash-diya.jpg", // Local image
    bio: "A mesmerizing acoustic duo from Jaipur, blending Rajasthani folk with Sufi and contemporary melodies. Perfect for royal weddings.",
    verified: true,
    languages: ["Hindi", "English", "Marwari"],
    experience: 8,
    availability: ["weekends", "evenings", "weekdays"],
  },
]
