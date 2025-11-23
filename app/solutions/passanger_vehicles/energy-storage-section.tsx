"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function EnergyStorageSection() {
  // Section 1 - Content that changes with images
  const section1Content = [
    {
      image: "/images/passagervehecals/pass-1.png",
      title: "News and Events",
      description: "STF Automotive aims to unveil its first passenger vehicle prototype by 2035. This functional four-seater compact vehicle will be optimized for Bangladeshi roads, focusing on reliability, low maintenance, and user-friendly daily driving to meet customer needs with the most appealing price point."
    },
  ]

  // Section 2 - Content that changes with images
  const section2Content = [
    {
      image: "/images/passagervehecals/pass-2.png",
      title: "Premium Service Packages",
      description: "Comprehensive maintenance packages designed for electric and hybrid vehicles. Our service plans include regular inspections, software updates, and priority scheduling. Experience hassle-free vehicle ownership with our tailored maintenance solutions."
    },
    {
      image: "/images/passagervehecals/pass-3.png",
      title: "Battery Health Diagnostics",
      description: "Advanced battery testing and health monitoring systems ensure your EV's battery performs at peak efficiency. We provide detailed reports and maintenance recommendations. Our state-of-the-art diagnostics catch potential issues before they become problems."
    },
    {
      image: "/images/passagervehecals/pass-4.png",
      title: "Fast Charging Solutions",
      description: "High-speed charging infrastructure available at our service center. Reduce your waiting time with our latest generation charging stations compatible with all major EV brands. Get back on the road faster with our rapid charging technology."
    },
  ]

  const [current1, setCurrent1] = useState(0)
  const [current2, setCurrent2] = useState(0)

  // Auto slide for first section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent1((prev) => (prev + 1) % section1Content.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [section1Content.length])

  // Auto slide for second section
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent2((prev) => (prev + 1) % section2Content.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [section2Content.length])

  return (
    <div className="via-blue-50/30 to-gray-100 overflow-hidden">
      {/* ---------- First Section ---------- */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Auto Slider */}
            <motion.div
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {section1Content.map((item, index) => (
                <Image
                  key={index}
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover absolute inset-0 rounded-2xl transition-all duration-[1500ms] ease-in-out ${
                    index === current1 ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                  priority={index === 0}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {section1Content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent1(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current1 ? "w-8 bg-white" : "w-2 bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Right - Dynamic Text with Animation */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${current1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    {section1Content[current1].title}
                  </h2>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${current1}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {section1Content[current1].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  key={`progress-${current1}`}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}