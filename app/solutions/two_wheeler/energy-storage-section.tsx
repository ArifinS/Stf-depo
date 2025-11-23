"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function EnergyStorageSection() {
  // Section 1 - Content that changes with images
  const section1Content = [
    {
      image: "/images/twowhiler/whi-10.png",
      title: "News & events",
      description: "Introducing the E-Thunder, STF Automotive's  groundbreaking electric mid-motor two-wheeler, set to revolutionize the Bangladeshi market by July2026. This highly anticipated e-cycle features apowerful 1 kW plug-and-play mega battery, with the innovative option to add two extra 0.5 kW batteries, ensuring you conquer every long mile with ease."
    },
    {
     image: "/images/twowhiler/whi-9.png",
      title: "Weekend Service Available",
      description: "Designed, developed, and manufactured   in Bangladesh, the E-Thunder boasts unparalleled reliability and a cutting-edge   mid-motor electric cycle setup  technology, making premium electric mobility accessible     to everyone. Experience the future of commuting with    E-Thunder – where power,    endurance,and affordability unite."
    },
  ]

  // Section 2 - Content that changes with images
  const section2Content = [
    {
      image: "/images/twowhiler/whi-11.png",
      title: "E-Thumder",
      description: " 750W High-Performance Motor – Delivers strong acceleration and reliable power for urban and off-road rides."
    },
    {
      image: "/images/twowhiler/whi-12.png",
   title: "E-Thumder",
      description: "1kW Mega Battery Pack – Ensures long-lasting performance with efficient energy output."
    },
    {
    image: "/images/twowhiler/whi-13.png",
    title: "E-Thumder",
      description: " Top Speed: 45 km/h – Perfect balance of speed and control for daily commutes or weekend adventures."
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
    <div className="bg-gray-50 overflow-hidden">
      {/* ---------- First Section ---------- */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Auto Slider */}
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              {section1Content.map((item, index) => (
                <Image
                  key={index}
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover rounded-xl absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === current1 ? "opacity-100" : "opacity-0"
                  }`}
                  priority={index === 0}
                />
              ))}
              
              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {section1Content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent1(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current1 ? "w-8 bg-white" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Dynamic Text */}
            <div className="space-y-6">
              <div className="overflow-hidden">
                <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
                  current1 !== undefined ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}>
                  {section1Content[current1].title}
                </h2>
              </div>

              <div className="overflow-hidden">
                <p className={`text-gray-600 leading-relaxed text-lg transition-all duration-700 delay-100 ${
                  current1 !== undefined ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}>
                  {section1Content[current1].description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-[4000ms] ease-linear"
                  style={{ width: current1 !== undefined ? '100%' : '0%' }}
                  key={current1}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Second Section ---------- */}
      <section className="py-16 px-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Dynamic Text */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="overflow-hidden">
                <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
                  current2 !== undefined ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}>
                  {section2Content[current2].title}
                </h2>
              </div>

              <div className="overflow-hidden">
                <p className={`text-gray-600 leading-relaxed text-lg transition-all duration-700 delay-100 ${
                  current2 !== undefined ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}>
                  {section2Content[current2].description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-[4500ms] ease-linear"
                  style={{ width: current2 !== undefined ? '100%' : '0%' }}
                  key={current2}
                />
              </div>
            </div>

            {/* Right - Auto Slider */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl order-1 lg:order-2">
              {section2Content.map((item, index) => (
                <Image
                  key={index}
                  src={item.image}
                  alt={item.title}
                  fill
                  className={`object-cover rounded-xl absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === current2 ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              
              {/* Pagination Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {section2Content.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent2(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current2 ? "w-8 bg-white" : "w-2 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}