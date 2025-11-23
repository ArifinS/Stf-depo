
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Zap, 
  Heart, 
  Compass, 
  Camera, 
  Coffee,
  Mountain,
  Sunset,
  Wind,
  Star,
  TrendingUp,
  Users
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

// Sample slide data for the hero section slider
const heroSlides = [
  {
    image: "/images/automobile/5.png",
    title: "Discover Your Drive",
    subtitle: "Unleash your passion for the open road",
    cta: "Explore Now",
  },
  {
    image: "/images/automobile/2.png",
    title: "Urban Adventures Await",
    subtitle: "Navigate the city with style and ease",
    cta: "Find Your Path",
  },
  {
    image: "/images/automobile/6.png",
    title: "Epic Getaways",
    subtitle: "Turn every weekend into an adventure",
    cta: "Start Your Journey",
  },
    {
    image: "/images/automobile/7.png",
    title: "Flex your Parformance",
    subtitle: "Turn every weekend into an adventure",
    cta: "Start Your Journey",
  },
]

const lifestyleCategories = [
  {
    id: 1,
    title: "ArtoMotive",
    tagline: "Moving down to the next 1st lifestyle ArtoMotive",
    description: "Artomotive is the creative wing of STF Automotive, where vehicles become a canvas for artistic expression. We redesign cars, bikes, and custom parts with visionary craftsmanship and aesthetic detail, blending art, design, and fabrication to showcase the true beauty of motion. By choosing this lifestyle you will be rewarded with STF Speed mafia logo cap with Artomotive badge.",
    image: "/images/automobile/3.png",
    icon: Compass,
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-600",
    features: ["Artistic Design", "Custom Fabrication", "Visionary Craftsmanship"],
    stats: { journeys: "Artistic" }
  },
  {
    id: 2,
    title: "Performance Warrior",
    tagline: "Crafting performance upgrades to move with new speed",
    description: "At STF Automotive, we craft high-performance upgrades that blend design precision with engineering excellence. From aerodynamic spoilers and diffusers to carbon fiber hoods and tuning parts, every detail is built to enhance speed, stability, and style. Our focus is on refining performance through smart design and advanced. By choosing this lifestyle you will be rewarded with STF Speed mafia cap with Performance Warrior badge.",
    image: "/images/automobile/1.png",
    icon: Zap,
    color: "#ef4444",
    gradient: "from-red-500 to-pink-600",
    features: ["Aerodynamic Upgrades", "Carbon Fiber Parts", "Performance Tuning"],
    stats: {journeys: "High-Performance" }
  },
  {
    id: 3,
    title: "Automotive Surfer",
    tagline: "Where Passion Meets Community and the Drive Becomes a Lifestyle",
    description: "Automotive Surfers is the community heartbeat of STF Automotive, built for those who live and breathe the spirit of motion. It’s more than a gathering — it’s a culture where enthusiasts connect, celebrate, and share their passion for cars and bikes. Through yearly festivals, car shows, and creative competitions, we bring together a community driven by freedom, design, and the love of the road. By choosing this lifestyle you will be rewarded with STF Speed mafia cap with Automotive Surfers badge.",
    image: "/images/automobile/4.png",
    icon: Users,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-600",
    features: ["Community Events", "Car Shows", "Creative Competitions"],
    stats: { journeys: "Community" }
  },
]

const communityHighlights = [
  { 
    icon: Users, 
    value: "12M+", 
    label: "Active Community",
    color: "#6366f1" 
  },
  { 
    icon: Camera, 
    value: "500K+", 
    label: "Shared Moments",
    color: "#10b981" 
  },
  { 
    icon: TrendingUp, 
    value: "98%", 
    label: "Satisfaction Rate",
    color: "#f59e0b" 
  },
  { 
    icon: Coffee, 
    value: "2,500+", 
    label: "Monthly Meetups",
    color: "#ef4444" 
  }
]

export default function AutomotiveLifestyle() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-slider effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(timer)
  }, [])

  // Function to jump to a specific slide
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section with Auto Slider */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Slider */}
        <div className="relative w-full h-[600px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          </AnimatePresence>

          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="max-w-7xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge variant="outline" className="mb-6 px-6 py-2 text-sm border-indigo-500/50 text-indigo-300">
                  <Sparkles className="w-4 h-4 mr-2 inline" />
                  Lifestyle Collection 2024
                </Badge>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {heroSlides[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>

              <motion.button
                className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {heroSlides[currentSlide].cta}
              </motion.button>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  currentSlide === index ? "bg-indigo-500 scale-125" : "bg-slate-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Categories Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your Lifestyle
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Every driver has a unique story. What's yours?
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {lifestyleCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.id}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card className="group relative overflow-hidden bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-500 h-full backdrop-blur-sm">
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    {/* Image Section */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        animate={hoveredCard === index ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={category.image}
                          alt={`${category.title} lifestyle image`}
                          width={800}
                          height={400}
                          className="w-full h-64 object-cover"
                          priority={index === 0} // Prioritize first image for faster loading
                        />
                      </motion.div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                      
                      {/* Floating Icon */}
                      <motion.div 
                        className="absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10"
                        style={{ backgroundColor: `${category.color}20` }}
                        animate={hoveredCard === index ? { 
                          rotate: [0, -10, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon 
                          className="w-7 h-7" 
                          style={{ color: category.color }}
                        />
                      </motion.div>

                      {/* Stats Badge */}
                      <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                        <Badge 
                          variant="secondary" 
                          className="backdrop-blur-md bg-black/40 border-white/10 text-white"
                        >
                          {category.stats.journeys}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6 relative z-10">
                      <motion.h3 
                        className="text-2xl font-bold text-white mb-2"
                        animate={hoveredCard === index ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {category.title}
                      </motion.h3>
                      
                      <p 
                        className="text-sm font-medium mb-3"
                        style={{ color: category.color }}
                      >
                        {category.tagline}
                      </p>

                      <p className="text-slate-400 mb-6 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Features Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {category.features.map((feature, idx) => (
                          <motion.span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-slate-300 border border-slate-700"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                          >
                            {feature}
                          </motion.span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link href="/contact">
                        <motion.button
                          className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden group/btn"
                          style={{ backgroundColor: category.color }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.span 
                            className="relative z-10"
                            animate={hoveredCard === index ? { x: -5 } : { x: 0 }}
                          >
                            Contact for Collaboration
                          </motion.span>
                          <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                            transition={{ duration: 0.5 }}
                          />
                        </motion.button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

    </div>
  )
}