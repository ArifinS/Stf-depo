"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image" // Import Next.js Image component

const advantages = [
  {
    id: "rapid-passenger",
    title: "Road Passenger Transport",
    heading: "Road Passenger Transport Solutions",
    description:
      "Focusing on the high-frequency and high-stability requirements of road passenger transport, CATL provides multi-scenario solutions that are safe, reliable, durable, and widely used in various urban public transport scenarios, passenger line, tourism passenger transport, commuter, etc. CATL helps customers reduce costs and create a beautiful, comfortable, and clean public transport image.",
    image: "/images/road-passenger-transport.png",
    layout: "image-left",
  },
  {
    id: "lithium-delivery",
    title: "Urban Delivery",
    heading: "Urban Delivery Solutions",
    description:
      "CATL's traction batteries are suitable for light trucks, mini buses, and minivans, and are widely used in express delivery, supermarket delivery, fresh food delivery and other scenarios. CATL provides customers with safe, reliable and comprehensive battery solutions, and accelerates the electrification of urban logistics to reduce costs and increase efficiency.",
    button: "DST electric logistics vehicle operation",
    image: "/delivery-truck-with-blue-battery.jpg",
    layout: "image-right",
  },
  {
    id: "heavy-duty",
    title: "Heavy-duty Transport",
    heading: "Easy Drive in Cold and Heat",
    description:
      "Engineered for extreme conditions, CATL batteries maintain optimal performance in both cold and hot environments, ensuring reliable heavy-duty transport operations.",
    image: "/images/five-advantages-bg.png",
    layout: "overlay",
  },
  {
    id: "urban-shared",
    title: "Urban Shared Charging",
    heading: "Services Beyond Expectations",
    description:
      "Our urban charging solutions provide comprehensive services that exceed expectations, supporting the growing shared mobility ecosystem with intelligent charging infrastructure.",
    image: "/images/five-advantages-bg.png",
    layout: "overlay",
  },
  {
    id: "construction",
    title: "Construction",
    heading: "Smart, Instant Feedback",
    description:
      "Construction applications benefit from smart battery systems that provide instant feedback and monitoring, ensuring optimal performance and safety on construction sites.",
    image: "/images/five-advantages-bg.png",
    layout: "overlay",
  },
  {
    id: "two-wheeled",
    title: "Two-wheeled Vehicle",
    heading: "Lightweight Power Solutions",
    description:
      "Specialized battery solutions for two-wheeled vehicles offer lightweight yet powerful energy storage, perfect for urban mobility and personal transportation.",
    image: "/images/five-advantages-bg.png",
    layout: "overlay",
  },
  {
    id: "vessel",
    title: "Vessel",
    heading: "Marine-Grade Reliability",
    description:
      "Marine applications require exceptional reliability and durability. CATL's vessel batteries are designed to withstand harsh marine environments while delivering consistent power.",
    image: "/images/five-advantages-bg.png",
    layout: "overlay",
  },
  {
    id: "special-vehicle",
    title: "Special Vehicle",
    heading: "Customized Solutions",
    description:
      "Every special vehicle has unique requirements. CATL provides customized battery solutions tailored to specific applications and performance needs.",
    image: "/images/five-advantages-bg.png",
    layout: "overlay",
  },
]

export default function FiveAdvantages() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const containerTop = containerRef.current.offsetTop
      const containerHeight = containerRef.current.offsetHeight
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight

      // Calculate which section should be active based on scroll position
      const relativeScroll = scrollTop - containerTop + windowHeight / 2
      const sectionHeight = containerHeight / advantages.length
      const newActiveIndex = Math.max(0, Math.min(advantages.length - 1, Math.floor(relativeScroll / sectionHeight)))

      setActiveIndex(newActiveIndex)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const renderContent = () => {
    const currentAdvantage = advantages[activeIndex]

    if (currentAdvantage.layout === "image-left") {
      return (
        <div className="flex items-center gap-12">
          <div className="flex-1 relative h-80">
            <Image
              src={currentAdvantage.image || "/placeholder.svg"}
              alt={currentAdvantage.heading}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentAdvantage.heading}</h3>
            <p className="text-gray-600 leading-relaxed">{currentAdvantage.description}</p>
          </div>
        </div>
      )
    }

    if (currentAdvantage.layout === "image-right") {
      return (
        <div className="flex items-center gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentAdvantage.heading}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{currentAdvantage.description}</p>
            {currentAdvantage.button && (
              <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                {currentAdvantage.button}
              </button>
            )}
          </div>
          <div className="flex-1 relative h-80">
            <Image
              src={currentAdvantage.image || "/placeholder.svg"}
              alt={currentAdvantage.heading}
              fill
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      )
    }

    // Default overlay layout for remaining sections
    return (
      <>
        {/* Image Section */}
        <div className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
          <Image
            src={currentAdvantage.image || "/placeholder.svg"}
            alt="Five Advantages Background"
            fill
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />

          {/* Overlay Points */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-5 gap-8 w-full max-w-4xl px-8">
              {[
                "Standing the Test of Time",
                "Confidence Comes with Reliability",
                "Easy Drive in Cold and Heat",
                "Services Beyond Expectations",
                "Smart, Instant Feedback",
              ].map((label, index) => (
                <div
                  key={index}
                  className={cn(
                    "text-center transition-all duration-500",
                    activeIndex === index + 2 ? "opacity-100 scale-110" : "opacity-70 scale-100",
                  )}
                >
                  <div
                    className={cn(
                      "w-3 h-3 rounded-full mx-auto mb-2 transition-all duration-300",
                      activeIndex === index + 2 ? "bg-white shadow-lg" : "bg-white/70",
                    )}
                  />
                  <p className="text-white text-xs font-medium leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="transition-all duration-500 ease-in-out">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentAdvantage.heading}</h3>
            <p className="text-gray-600 leading-relaxed">{currentAdvantage.description}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <section ref={containerRef} className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Five Advantages</h2>

        <div className="flex gap-8 lg:gap-16">
          {/* Left Navigation */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-32">
              <nav className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div
                    key={advantage.id}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300",
                      activeIndex === index ? "bg-blue-50 border-l-4 border-blue-600" : "hover:bg-gray-100",
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div
                      className={cn(
                        "w-2 h-2 rounded-full transition-colors duration-300",
                        activeIndex === index ? "bg-blue-600" : "bg-gray-400",
                      )}
                    />
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors duration-300",
                        activeIndex === index ? "text-blue-600" : "text-gray-600",
                      )}
                    >
                      {advantage.title}
                    </span>
                  </div>
                ))}
              </nav>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <div className="sticky top-32">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="transition-all duration-500 ease-in-out">{renderContent()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}