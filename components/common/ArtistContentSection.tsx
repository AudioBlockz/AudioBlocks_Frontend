"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Play } from "lucide-react"
// import { SlLike } from "react-icons/sl"
import { FcLike } from "react-icons/fc";

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
      { id: "1", name: "Blinding Lights", artist: "The Weeknd", image: "/placeholder.svg?height=200&width=200", album: "After Hours" },
      { id: "2", name: "Watermelon Sugar", artist: "Harry Styles", image: "/placeholder.svg?height=200&width=200", album: "Fine Line" },
      { id: "3", name: "Levitating", artist: "Dua Lipa", image: "/placeholder.svg?height=200&width=200", album: "Future Nostalgia" },
      { id: "4", name: "Good 4 U", artist: "Olivia Rodrigo", image: "/placeholder.svg?height=200&width=200", album: "SOUR" },
    ],
  },
  {
    id: "rock-classics",
    name: "Rock Classics",
    songs: [
      { id: "5", name: "Bohemian Rhapsody", artist: "Queen", image: "/placeholder.svg?height=200&width=200", album: "A Night at the Opera" },
      { id: "6", name: "Hotel California", artist: "Eagles", image: "/placeholder.svg?height=200&width=200", album: "Hotel California" },
      { id: "7", name: "Stairway to Heaven", artist: "Led Zeppelin", image: "/placeholder.svg?height=200&width=200", album: "Led Zeppelin IV" },
      { id: "8", name: "Sweet Child O' Mine", artist: "Guns N' Roses", image: "/placeholder.svg?height=200&width=200", album: "Appetite for Destruction" },
    ],
  },
  {
    id: "chill-vibes",
    name: "Chill Vibes",
    songs: [
      { id: "9", name: "Sunflower", artist: "Post Malone", image: "/placeholder.svg?height=200&width=200", album: "Hollywood Bleeding", },
      { id: "10", name: "Stay", artist: "Rihanna", image: "/placeholder.svg?height=200&width=200", album: "Unapologetic" },
      { id: "11", name: "Perfect", artist: "Ed Sheeran", image: "/placeholder.svg?height=200&width=200", album: "÷ (Divide)" },
      { id: "12", name: "Someone You Loved", artist: "Lewis Capaldi", image: "/placeholder.svg?height=200&width=200", album: "Divinely Uninspired to a Hellish Extent" },
    ],
  },
  {
    id: "hip-hop",
    name: "Hip Hop",
    songs: [
      { id: "13", name: "God's Plan", artist: "Drake", image: "/wif.jpg", album: "Scorpion" },
      { id: "14", name: "HUMBLE.", artist: "Kendrick Lamar", image: "/placeholder.svg?height=200&width=200", album: "DAMN." },
      { id: "15", name: "Sicko Mode", artist: "Travis Scott", image: "/placeholder.svg?height=200&width=200", album: "Astroworld" },
      { id: "16", name: "Old Town Road", artist: "Lil Nas X", image: "/placeholder.svg?height=200&width=200", album: "7" },
    ],
  },
]

export default function MusicBrowser() {
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist>(playlists[0])

  return (
    <div className="flex h-screen bg-black w-5/6 mx-auto mt-10">
      {/* Left Sidebar */}
      <div className="w-80  bg-black p-6">
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
      </div>

      {/* Right Content Area */}
      <div className="flex-1 p-6 overflow-auto bg-black">
        {/* <div className="mb-6">
          <h1 className="text-3xl font-bold text-white">{selectedPlaylist.name}</h1>
          <p className="text-gray-400 mt-2">{selectedPlaylist.songs.length} songs in this playlist</p>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {selectedPlaylist.songs.map((song) => (
            <Card
              key={song.id}
              className="group hover:shadow-lg hover:shadow-gray-700/50 transition-all duration-200 cursor-pointer bg-black"
            >
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
                    <button><FcLike /></button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
