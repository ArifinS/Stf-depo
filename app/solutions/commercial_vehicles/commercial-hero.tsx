"use client"

import { ChevronRight, ChevronLeft, Zap, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

type Slide = {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  color: string
  icon: "zap" | "shield"
}

const slides: Slide[] = [
  {
    id: 1,
   title: "Commercial Application Solutions",
    subtitle: "Premium Transportation Systems",
    description:
      "Engineered for excellence. Our passenger vehicle solutions deliver cutting-edge performance, safety, and comfort for modern commercial fleets.",
   image: "/images/commercial/one.png",
    color: "#0ea5e9",
    icon: "zap",
  },
  {
    id: 2,
   title: "Your Requredment our Solutions",
    subtitle: "Comprehensive Support",
    description:
      "24/7 dedicated support, maintenance, and consultation services designed to maximize uptime and operational efficiency for your entire fleet.",
   image: "/images/commercial/two.png",
    color: "#06b6d4",
    icon: "shield",
  },
    {
    id: 3,
    title: "Meet Your Last Mile Delivery",
    subtitle: "Comprehensive Support",
    description:
      "24/7 dedicated support, maintenance, and consultation services designed to maximize uptime and operational efficiency for your entire fleet.",
    image: "/images/commercial/four.png",
    color: "#06b6d4",
    icon: "shield",
  },
]

export default function CommercialHero() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 6000
    const interval = 50
    const increment = (interval / duration) * 100

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDirection(1)
          setCurrent((prevCurrent) => (prevCurrent + 1) % slides.length)
          return 0
        }
        return prev + increment
      })
    }, interval)

    return () => clearInterval(progressInterval)
  }, [current])

  const handleNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
    setProgress(0)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const currentSlide = slides[current]
  const IconComponent = currentSlide.icon === "zap" ? Zap : Shield

  return (
    <section className="relative w-full h-screen md:h-[600px] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slides[current].image})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at 100% 100%, ${currentSlide.color}20, transparent 70%)`,
            }}
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrev}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 md:p-5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 md:h-7 md:w-7 text-white group-hover:translate-x-1 transition-transform" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-4 md:p-5 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 hover:border-white/40 group"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 md:h-7 md:w-7 text-white group-hover:-translate-x-1 transition-transform" />
      </button>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="max-w-2xl">
            {/* Icon badge */}
            <motion.div
              key={`icon-${slides[current].id}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
            </motion.div>

            {/* Main heading with improved animation */}
            <div className="overflow-hidden mb-4">
              <motion.h1
                key={`title-${slides[current].id}`}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                }}
                className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight tracking-tight text-balance"
                style={{
                  textShadow: "0 25px 50px rgba(0,0,0,0.95)",
                }}
              >
                {slides[current].title}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center gap-3 backdrop-blur-md bg-white/5 px-6 py-4 rounded-full border border-white/10">
          {slides.map((slide, i: number) => (
            <motion.button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to slide ${i + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-8 h-2 bg-white shadow-lg" : "w-2 h-2 bg-white/40 hover:bg-white/60"
                }`}
              />
              {i === current && (
                <motion.div
                  className="absolute inset-0 rounded-full border border-white/50"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </motion.button>
          ))}

          <div className="h-6 w-px bg-white/20 mx-2" />

          {/* Slide counter */}
          <span className="text-white/80 text-sm font-medium">
            <span className="font-bold" style={{ color: currentSlide.color }}>
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-white/40 mx-1">/</span>
            <span className="text-white/60">{String(slides.length).padStart(2, "0")}</span>
          </span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-8 left-8 z-30"
      >
        <div className="text-white/50 text-xs font-mono tracking-widest uppercase">✦ Commercial Fleet Solutions ✦</div>
      </motion.div>
    </section>
  )
}
