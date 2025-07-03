"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  bounceSpeed: number
  bounceOffset: number
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Generate stars
    const generateStars = () => {
      const stars: Star[] = []
      const numStars = 150

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1 + 0.2,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          bounceSpeed: Math.random() * 0.01 + 0.003,
          bounceOffset: Math.random() * Math.PI * 2,
        })
      }

      starsRef.current = stars
    }

    generateStars()

    // Animation loop
    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed) * 0.3 + 0.7
        const currentOpacity = star.opacity * twinkle

        // Subtle bouncing effect
        const bounce = Math.sin(time * star.bounceSpeed + star.bounceOffset) * 2
        const currentY = star.y + bounce

        ctx.beginPath()
        ctx.arc(star.x, currentY, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity})`
        ctx.fill()

        // Add a subtle glow effect for larger stars
        if (star.size > 0.8) {
          ctx.beginPath()
          ctx.arc(star.x, currentY, star.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.1})`
          ctx.fill()
        }
      })

      time += 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="relative h-[776px] overflow-hidden bg-black">
      {/* Stars Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />

      {/* Hero Content */}
     <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {/* Large glowing stars */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-blue-200 rounded-full animate-pulse shadow-[0_0_15px_rgba(147,197,253,0.6)]"></div>
        <div className="absolute top-64 left-64 w-1.5 h-1.5 bg-purple-200 rounded-full animate-pulse shadow-[0_0_18px_rgba(196,181,253,0.7)]"></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-pink-200 rounded-full animate-pulse shadow-[0_0_22px_rgba(251,207,232,0.8)]"></div>
        <div className="absolute bottom-20 left-32 w-1 h-1 bg-yellow-200 rounded-full animate-pulse shadow-[0_0_16px_rgba(254,240,138,0.6)]"></div>

        {/* Medium stars */}
        <div className="absolute top-40 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_12px_rgba(255,255,255,0.5)]"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-100 rounded-full animate-pulse shadow-[0_0_10px_rgba(219,234,254,0.4)]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-100 rounded-full animate-pulse shadow-[0_0_14px_rgba(237,233,254,0.5)]"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-100 rounded-full animate-pulse shadow-[0_0_11px_rgba(252,231,243,0.4)]"></div>

        {/* Small distant stars */}
        <div className="absolute top-16 right-16 w-0.5 h-0.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
        <div className="absolute top-48 left-48 w-0.5 h-0.5 bg-blue-50 rounded-full animate-pulse shadow-[0_0_6px_rgba(239,246,255,0.3)]"></div>
        <div className="absolute bottom-48 right-48 w-0.5 h-0.5 bg-purple-50 rounded-full animate-pulse shadow-[0_0_7px_rgba(250,245,255,0.3)]"></div>
        <div className="absolute bottom-16 left-16 w-0.5 h-0.5 bg-pink-50 rounded-full animate-pulse shadow-[0_0_5px_rgba(253,242,248,0.3)]"></div>
        <div className="absolute top-24 left-3/4 w-0.5 h-0.5 bg-yellow-50 rounded-full animate-pulse shadow-[0_0_6px_rgba(255,251,235,0.3)]"></div>
        <div className="absolute bottom-24 right-3/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>

        {/* Twinkling effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white max-w-4xl mx-auto">
        {/* Tagline */}
        <h1 className="text-lg tracking-widest mb-8 opacity-80 font-medium">SHARE . STREAM . EARN</h1>

        {/* Main Heading */}
        <div className="mb-12">
          <h2 className="font-inter font-extrabold text-6xl md:text-7xl lg:text-8xl xl:text-[96px] leading-tight lg:leading-[60px] tracking-normal">
            Stream Music
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Own The Experience
            </span>
          </h2>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="w-[145px] h-[48px] pt-2 pr-2 pb-2 pl-4 gap-2 rounded-full bg-[#D2045B] hover:bg-[#B8043F] flex items-center text-white font-medium transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started
            <div className="bg-black rounded-full p-1">
              <ArrowRight className="h-4 w-4 rotate-[300deg] text-white" />
            </div>
          </button>

          <button className="w-[145px] h-[48px] pt-2 pr-2 pb-2 pl-4 gap-2 rounded-full border border-[#885FA8] flex items-center text-[#885FA8] font-medium hover:bg-[#885FA8] hover:text-white transition-all duration-200 whitespace-nowrap text-sm hover:scale-105 shadow-lg hover:shadow-xl">
            Join Waitlist
            <div className="bg-black rounded-full p-1">
              <ArrowRight className="h-4 w-4 rotate-[300deg] text-white" />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-pulse {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
      <div>
      </div>
    </div>
  )
}
