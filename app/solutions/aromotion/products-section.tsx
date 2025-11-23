"use client"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ProductsSection() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const products = [
    {
      id: 1,
      name: "Commercial Drones",
      category: "Delivery & Mapping",
      description: "Enterprise-grade drones for logistics, surveying, and inspection",
      specs: ["500km Range", "30kg Payload", "120min Flight Time"],
      image: "/commercial-drone-technology.jpg",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      id: 2,
      name: "Urban Air Mobility",
      category: "Air Taxi Systems",
      description: "Next-generation personal air vehicles for urban transportation",
      specs: ["4-6 Passenger", "150km/h Speed", "Zero Emissions"],
      image: "/urban-air-taxi-vehicle.jpg",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      id: 3,
      name: "Aerospace Components",
      category: "OEM Sourcing",
      description: "Premium motors, propellers, and control systems for integrators",
      specs: ["ISO 9001", "50+ Models", "24/7 Support"],
      image: "/aerospace-components-parts.jpg",
      gradient: "from-amber-600 to-orange-600",
    },
  ]

  return (
    <section className="w-full py-24 bg-gradient-to-b from-black via-black to-slate-950">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <span className="text-white/60 text-sm font-mono tracking-wider uppercase">Product Lineup</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight max-w-3xl">
            Solutions for Every Need
          </h2>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            From enterprise drones to air taxis, our comprehensive product portfolio powers the future of aerial
            mobility
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredProduct(idx)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-white/20"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category Badge */}
                <div
                  className={`inline-block mb-4 px-3 py-1 bg-gradient-to-r ${product.gradient} rounded-full text-white text-xs font-bold opacity-75 group-hover:opacity-100 transition-opacity`}
                >
                  {product.category}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                  style={{
                    backgroundClip: "unset",
                  }}
                >
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 leading-relaxed">{product.description}</p>

                {/* Specs */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.specs.map((spec, specIdx) => (
                    <span
                      key={specIdx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 group/btn bg-gradient-to-r ${product.gradient} hover:shadow-lg hover:shadow-white/20 transform hover:scale-105`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
