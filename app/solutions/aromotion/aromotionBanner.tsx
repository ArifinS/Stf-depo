"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

type Slide = {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  color: string
}

export default function PremiumSlider() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  const slides: Slide[] = [
    {
      id: 1,
      title: "AeroMotion",
      subtitle: "Reach New Heights",
      description:
        "AeroMotion is a visionary transportation lineup bringing advanced dynamic problem solution to bring highest speed for the fastest transportation system to solve the complex dynamic problem.",
      image: "/aeromotion-advanced-drone-technology.jpg",
      color: "#0ea5e9",
    },
    {
      id: 2,
      title: "Custom Solutions",
      subtitle: "Your Requirement, Our Commitment",
      description:
        "At STF Automotive, our Aero Motion Solutions deliver custom-designed aerial systems—from drones to air taxis—engineered to meet unique performance needs and specialized altitude requirements.",
      image: "/custom-aerial-solutions-design.jpg",
      color: "#8b5cf6",
    },
    {
      id: 3,
      title: "Aero Sourcing",
      subtitle: "Quality with Reliability",
      description:
        "STF Automotive provides specialized sourcing solutions for the aerospace industry, offering high-quality motors, propellers, control systems, and structural components.",
      image: "/aerospace-sourcing-components.jpg",
      color: "#f59e0b",
    },
  ]

  const nextSlide = () => {
    setDirection("next")
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection("prev")
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "next" : "prev")
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [currentSlide, isPlaying])

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {/* Main Slides Container */}
      <div className="relative w-full h-screen">
        {slides.map((slide, index: number) => {
          const isActive = index === currentSlide
          const isPrev = index === (currentSlide - 1 + slides.length) % slides.length
          const isNext = index === (currentSlide + 1) % slides.length

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 z-20 scale-100"
                  : isPrev
                    ? "opacity-0 z-10 scale-105 -translate-x-full"
                    : isNext
                      ? "opacity-0 z-10 scale-95 translate-x-full"
                      : "opacity-0 z-0 scale-95"
              }`}
            >
              {/* Background Image with Parallax Effect */}
              <div className="absolute inset-0">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center px-8 md:px-16 lg:px-24 z-10">
                <div className="max-w-4xl">
                  {/* Number Badge */}
                  <div
                    className={`mb-8 transition-all duration-1000 ${
                      isActive ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <div className="inline-flex items-center gap-4">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white border-2 border-white/40 backdrop-blur-xl shadow-2xl"
                        style={{ backgroundColor: `${slide.color}30` }}
                      >
                        {slide.id}
                      </div>
                      <div className="h-px w-24 bg-gradient-to-r from-white/60 to-transparent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h1
                    className={`text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight transition-all duration-1000 ${
                      isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      textShadow: "0 20px 40px rgba(0,0,0,0.9)",
                    }}
                  >
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2
                    className={`text-3xl md:text-5xl font-light mb-8 transition-all duration-1000 ${
                      isActive ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-8"
                    }`}
                    style={{ color: slide.color }}
                  >
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p
                    className={`text-lg md:text-xl text-white/85 mb-12 font-light leading-relaxed transition-all duration-1000 max-w-2xl ${
                      isActive ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-8"
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div
                    className={`flex gap-4 transition-all duration-1000 ${
                      isActive ? "opacity-100 translate-y-0 delay-600" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <button
                      className="px-8 py-4 rounded-full font-bold text-base text-white border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                      style={{
                        backgroundColor: slide.color,
                        borderColor: slide.color,
                      }}
                    >
                      Explore Now
                    </button>
                    <button className="px-8 py-4 rounded-full font-semibold text-base text-white border-2 border-white/40 backdrop-blur-md hover:bg-white/10 hover:border-white/60 transition-all duration-300 transform hover:scale-105">
                      View Gallery
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30">
        {slides.map((slide, index: number) => (
          <button key={index} onClick={() => goToSlide(index)} className="group relative transition-all duration-300">
            <div
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-500 ${
                index === currentSlide ? "bg-white scale-150 shadow-lg" : "bg-white/30 hover:bg-white/60"
              }`}
            />
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm whitespace-nowrap shadow-2xl">
                {slide.title}
              </div>
            </div>
            {index === currentSlide && (
              <div
                className="absolute right-6 top-1/2 -translate-y-1/2 h-px w-10 animate-pulse"
                style={{ backgroundColor: slides[currentSlide].color }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30 bg-gradient-to-t from-black/80 to-transparent pt-8">
        <div className="flex items-center justify-between px-8 py-8">
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center hover:bg-white/20 hover:border-white/60 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center hover:bg-white/20 hover:border-white/60 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="flex-1 mx-12">
            <div className="flex items-center gap-4">
              <span className="text-white font-bold text-base">{String(currentSlide + 1).padStart(2, "0")}</span>
              <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-500 rounded-full shadow-lg"
                  style={{
                    width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    backgroundColor: slides[currentSlide].color,
                  }}
                />
              </div>
              <span className="text-white/60 font-bold text-base">{String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* Play / Pause */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 text-white flex items-center justify-center hover:bg-white/20 hover:border-white/60 transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5" fill="currentColor" />
            )}
          </button>
        </div>
      </div>

      <div className="absolute top-8 left-8 z-30">
        <div className="text-white/50 text-xs font-mono tracking-widest uppercase">✦ AeroMotion Series ✦</div>
      </div>
    </div>
  )
}
