"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
// import { SlLike } from "react-icons/sl"
import { FcLike } from "react-icons/fc"

interface Song {
  id: string
  name: string
  artist: string
  image: string
  album: string
}

interface Playlist {
  id: string
  name: string
  songs: Song[]
}

const playlists: Playlist[] = [
  {
    id: "pop-hits",
    name: "Pop Hits",
    songs: [
      {
        id: "1",
        name: "Blinding Lights",
        artist: "The Weeknd",
        image: "/placeholder.svg?height=200&width=200",
        album: "After Hours",
      },
      {
        id: "2",
        name: "Watermelon Sugar",
        artist: "Harry Styles",
        image: "/placeholder.svg?height=200&width=200",
        album: "Fine Line",
      },
      {
        id: "3",
        name: "Levitating",
        artist: "Dua Lipa",
        image: "/placeholder.svg?height=200&width=200",
        album: "Future Nostalgia",
      },
      {
        id: "4",
        name: "Good 4 U",
        artist: "Olivia Rodrigo",
        image: "/placeholder.svg?height=200&width=200",
        album: "SOUR",
      },
      {
        id: "5",
        name: "Anti-Hero",
        artist: "Taylor Swift",
        image: "/placeholder.svg?height=200&width=200",
        album: "Midnights",
      },
      {
        id: "6",
        name: "As It Was",
        artist: "Harry Styles",
        image: "/placeholder.svg?height=200&width=200",
        album: "Harry's House",
      },
      {
        id: "7",
        name: "Heat Waves",
        artist: "Glass Animals",
        image: "/placeholder.svg?height=200&width=200",
        album: "Dreamland",
      },
      {
        id: "8",
        name: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        image: "/placeholder.svg?height=200&width=200",
        album: "F*CK LOVE 3",
      },
      {
        id: "9",
        name: "Bad Habit",
        artist: "Steve Lacy",
        image: "/placeholder.svg?height=200&width=200",
        album: "Gemini Rights",
      },
      {
        id: "10",
        name: "Unholy",
        artist: "Sam Smith ft. Kim Petras",
        image: "/placeholder.svg?height=200&width=200",
        album: "Gloria",
      },
      {
        id: "11",
        name: "Flowers",
        artist: "Miley Cyrus",
        image: "/placeholder.svg?height=200&width=200",
        album: "Endless Summer Vacation",
      },
      {
        id: "12",
        name: "Cruel Summer",
        artist: "Taylor Swift",
        image: "/placeholder.svg?height=200&width=200",
        album: "Lover",
      },
    ],
  },
  {
    id: "rock-classics",
    name: "Rock Classics",
    songs: [
      {
        id: "13",
        name: "Bohemian Rhapsody",
        artist: "Queen",
        image: "/placeholder.svg?height=200&width=200",
        album: "A Night at the Opera",
      },
      {
        id: "14",
        name: "Hotel California",
        artist: "Eagles",
        image: "/placeholder.svg?height=200&width=200",
        album: "Hotel California",
      },
      {
        id: "15",
        name: "Stairway to Heaven",
        artist: "Led Zeppelin",
        image: "/placeholder.svg?height=200&width=200",
        album: "Led Zeppelin IV",
      },
      {
        id: "16",
        name: "Sweet Child O' Mine",
        artist: "Guns N' Roses",
        image: "/placeholder.svg?height=200&width=200",
        album: "Appetite for Destruction",
      },
      {
        id: "17",
        name: "Don't Stop Believin'",
        artist: "Journey",
        image: "/placeholder.svg?height=200&width=200",
        album: "Escape",
      },
      {
        id: "18",
        name: "We Will Rock You",
        artist: "Queen",
        image: "/placeholder.svg?height=200&width=200",
        album: "News of the World",
      },
      {
        id: "19",
        name: "Back in Black",
        artist: "AC/DC",
        image: "/placeholder.svg?height=200&width=200",
        album: "Back in Black",
      },
      {
        id: "20",
        name: "Livin' on a Prayer",
        artist: "Bon Jovi",
        image: "/placeholder.svg?height=200&width=200",
        album: "Slippery When Wet",
      },
      {
        id: "21",
        name: "Free Bird",
        artist: "Lynyrd Skynyrd",
        image: "/placeholder.svg?height=200&width=200",
        album: "Pronounced Leh-nerd Skin-nerd",
      },
      {
        id: "22",
        name: "More Than a Feeling",
        artist: "Boston",
        image: "/placeholder.svg?height=200&width=200",
        album: "Boston",
      },
      {
        id: "23",
        name: "Dream On",
        artist: "Aerosmith",
        image: "/placeholder.svg?height=200&width=200",
        album: "Aerosmith",
      },
      {
        id: "24",
        name: "Smoke on the Water",
        artist: "Deep Purple",
        image: "/placeholder.svg?height=200&width=200",
        album: "Machine Head",
      },
    ],
  },
  {
    id: "chill-vibes",
    name: "Chill Vibes",
    songs: [
      {
        id: "25",
        name: "Sunflower",
        artist: "Post Malone",
        image: "/placeholder.svg?height=200&width=200",
        album: "Hollywood Bleeding",
      },
      {
        id: "26",
        name: "Stay",
        artist: "Rihanna",
        image: "/placeholder.svg?height=200&width=200",
        album: "Unapologetic",
      },
      {
        id: "27",
        name: "Perfect",
        artist: "Ed Sheeran",
        image: "/placeholder.svg?height=200&width=200",
        album: "÷ (Divide)",
      },
      {
        id: "28",
        name: "Someone You Loved",
        artist: "Lewis Capaldi",
        image: "/placeholder.svg?height=200&width=200",
        album: "Divinely Uninspired to a Hellish Extent",
      },
      {
        id: "29",
        name: "Circles",
        artist: "Post Malone",
        image: "/placeholder.svg?height=200&width=200",
        album: "Hollywood's Bleeding",
      },
      {
        id: "30",
        name: "Thinking Out Loud",
        artist: "Ed Sheeran",
        image: "/placeholder.svg?height=200&width=200",
        album: "x (Multiply)",
      },
      {
        id: "31",
        name: "All of Me",
        artist: "John Legend",
        image: "/placeholder.svg?height=200&width=200",
        album: "Love in the Future",
      },
      {
        id: "32",
        name: "Say Something",
        artist: "A Great Big World & Christina Aguilera",
        image: "/placeholder.svg?height=200&width=200",
        album: "Is There Anybody Out There?",
      },
      {
        id: "33",
        name: "Let Her Go",
        artist: "Passenger",
        image: "/placeholder.svg?height=200&width=200",
        album: "All the Little Lights",
      },
      {
        id: "34",
        name: "Stay With Me",
        artist: "Sam Smith",
        image: "/placeholder.svg?height=200&width=200",
        album: "In the Lonely Hour",
      },
      {
        id: "35",
        name: "Photograph",
        artist: "Ed Sheeran",
        image: "/placeholder.svg?height=200&width=200",
        album: "x (Multiply)",
      },
      {
        id: "36",
        name: "A Thousand Years",
        artist: "Christina Perri",
        image: "/placeholder.svg?height=200&width=200",
        album: "The Twilight Saga: Breaking Dawn",
      },
    ],
  },
  {
    id: "hip-hop",
    name: "Hip Hop",
    songs: [
      { id: "37", name: "God's Plan", artist: "Drake", image: "/wif.jpg", album: "Scorpion" },
      {
        id: "38",
        name: "HUMBLE.",
        artist: "Kendrick Lamar",
        image: "/placeholder.svg?height=200&width=200",
        album: "DAMN.",
      },
      {
        id: "39",
        name: "Sicko Mode",
        artist: "Travis Scott",
        image: "/placeholder.svg?height=200&width=200",
        album: "Astroworld",
      },
      {
        id: "40",
        name: "Old Town Road",
        artist: "Lil Nas X",
        image: "/placeholder.svg?height=200&width=200",
        album: "7",
      },
      {
        id: "41",
        name: "Rockstar",
        artist: "Post Malone ft. 21 Savage",
        image: "/placeholder.svg?height=200&width=200",
        album: "Beerbongs & Bentleys",
      },
      {
        id: "42",
        name: "Lucid Dreams",
        artist: "Juice WRLD",
        image: "/placeholder.svg?height=200&width=200",
        album: "Goodbye & Good Riddance",
      },
      {
        id: "43",
        name: "Sunflower",
        artist: "Post Malone & Swae Lee",
        image: "/placeholder.svg?height=200&width=200",
        album: "Spider-Man: Into the Spider-Verse",
      },
      {
        id: "44",
        name: "Money",
        artist: "Cardi B",
        image: "/placeholder.svg?height=200&width=200",
        album: "Invasion of Privacy",
      },
      {
        id: "45",
        name: "Life Is Good",
        artist: "Future ft. Drake",
        image: "/placeholder.svg?height=200&width=200",
        album: "High Off Life",
      },
      {
        id: "46",
        name: "The Box",
        artist: "Roddy Ricch",
        image: "/placeholder.svg?height=200&width=200",
        album: "Please Excuse Me for Being Antisocial",
      },
      {
        id: "47",
        name: "Congratulations",
        artist: "Post Malone ft. Quavo",
        image: "/placeholder.svg?height=200&width=200",
        album: "Stoney",
      },
      { id: "48", name: "Mask Off", artist: "Future", image: "/placeholder.svg?height=200&width=200", album: "Future" },
    ],
  },
]

export default function MusicBrowser() {
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist>(playlists[0])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const songsPerSlide = 4
  const totalSlides = Math.ceil(selectedPlaylist.songs.length / songsPerSlide)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [totalSlides, isAutoPlaying])

  // Reset slide when playlist changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [selectedPlaylist])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    setIsAutoPlaying(false)
  }

  return (
    <div className="flex h-screen bg-black w-5/6 mx-auto mt-10">
      {/* Left Sidebar */}
      <div className="w-80 bg-black p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-white">
            {/* <Music className="h-6 w-6" /> */}
            {/* Playlists */}
          </h2>
        </div>

        <div className="space-y-2">
          {playlists.map((playlist) => (
            <Button
              key={playlist.id}
              variant={selectedPlaylist.id === playlist.id ? "default" : "ghost"}
              className={`w-full flex rounded-4xl text-left h-auto p-4 ${
                selectedPlaylist.id === playlist.id
                  ? "bg-black hover:bg-[#D2045B] text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
              onClick={() => setSelectedPlaylist(playlist)}
            >
              <div>
                <div className="font-medium">{playlist.name}</div>
                {/* <div className={`text-sm ${selectedPlaylist.id === playlist.id ? "text-blue-100" : "text-gray-400"}`}>
                  {playlist.songs.length} songs
                </div> */}
              </div>
            </Button>
          ))}
        </div>

        {/* Navigation Controls - Added under sidebar */}
        <div className="flex flex-col items-center space-y-4 mt-8">
          <div className="flex items-center space-x-4">
            <Button
              onClick={prevSlide}
              size="icon"
              className="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              disabled={totalSlides <= 1}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

           
            <Button
              onClick={nextSlide}
              size="icon"
              className="rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              disabled={totalSlides <= 1}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Auto-play Toggle */}
          
        </div>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-6 overflow-hidden bg-black">
        {/* Fade Slider Container */}
        <div className="relative h-full">
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                slideIndex === currentSlide
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-4 scale-95 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {selectedPlaylist.songs
                  .slice(slideIndex * songsPerSlide, (slideIndex + 1) * songsPerSlide)
                  .map((song, cardIndex) => (
                    <div
                      key={song.id}
                      className={`transition-all duration-1000 ease-out ${
                        slideIndex === currentSlide
                          ? "opacity-100 translate-y-0 scale-100"
                          : "opacity-0 translate-y-8 scale-90"
                      }`}
                      style={{
                        transitionDelay: slideIndex === currentSlide ? `${cardIndex * 100}ms` : "0ms",
                      }}
                    >
                      <Card className="group hover:shadow-lg hover:shadow-gray-700/50 transition-all duration-200 cursor-pointer bg-black hover:scale-105">
                        <CardContent className="p-4">
                          <div className="relative mb-4">
                            <img
                              src={song.image || "/placeholder.svg"}
                              alt={song.name}
                              className="w-full aspect-square object-cover rounded-md"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-md flex items-center justify-center">
                              <Button size="icon" className="rounded-full bg-transparent hover:bg-gray-700 text-white">
                                <Play className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <h3 className="font-semibold text-sm line-clamp-1 text-white">{song.name}</h3>
                            <p className="text-sm text-gray-400 line-clamp-1">{song.artist}</p>
                            <div>
                              <p className="text-sm text-gray-400 line-clamp-1">{song.album}</p>
                            </div>
                            <div className="flex justify-between mt-3">
                              <button className="bg-[#D2045B] px-5 py-2 rounded-2xl">Vote</button>
                              <button>
                                <FcLike />
                              </button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
