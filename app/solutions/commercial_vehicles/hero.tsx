"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
const advantages = [
  {
    id: "whole-life-cost",
    title: "Design Solution",
    description:
      'STF Automotive offers comprehensive design solutions for commercial vehicles, encompassing everything from initial visualization and prototyping to the development of scalable, manufacturable products. We specialize in problem-based design, ensuring that each solution addresses specific challenges and meets the unique requirements of commercial applications.',
    image: "/images/commercial/six.png",
    position: { x: "15%", y: "65%" },
        number: "01",
    highlights: ["Advanced Automation", "Lean Principles", "Quality Assurance"]
  },
  {
    id: "comprehensive-safety",
    title: "Sourcing Solution",
    description:
      ":For commercial vehicle sourcing, STF Automotive delivers bespoke solutions, procuring high-quality components and materials globally to meet diverse customer",
    image: "/images/commercial/sev.png",
    position: { x: "50%", y: "65%" },
        number: "01",
    highlights: ["Advanced Automation", "Lean Principles", "Quality Assurance"]
  },
  {
    id: "whole-process-solutions",
    title: "Manufecturing vSolutions",
    description:
      "STF Automotive's manufacturing process solution for commercial vehicles focuses on developing and optimizing production systems. We design efficient, scalable production lines, integrating advanced automation and lean principles to ensure optimal resource utilization, reduced production costs, and superior product quality from assembly to final inspection, all while addressing the unique requirements of commercial applications.Now we are moving for ne next section is news and events ",
    image: "/images/commercial/five.png",
    position: { x: "85%", y: "65%" },
        number: "01",
    highlights: ["Advanced Automation", "Lean Principles", "Quality Assurance"]
  },
]
// const advantages = [
//   {
//     id: "whole-life-cost",
//     title: "Manufacture Process Solutions",
//     description:
//       "STF Automotive's manufacturing process solution focuses on developing and optimizing manufacturing systems for passenger vehicles. We design efficient, scalable production lines, integrating advanced automation and lean principles to ensure optimal resource utilization, reduced production costs, and superior product quality from assembly to final inspection",
//    image: "/images/twowhiler/whi-8.png",
//     position: { x: "15%", y: "65%" },
//     number: "01",
//     highlights: ["Advanced Automation", "Lean Principles", "Quality Assurance"]
//   },
//   {
//     id: "Sourching Solution",
//     title: "Sourcing Solution",
//     description:
//       "STF Automotive's sourcing solution specializes in identifying and securing high-quality components and materials for passenger vehicle manufacturing. We leverage a global network of trusted suppliers to optimize supply chains, reduce costs, and ensure the timely delivery of all necessary parts, from raw materials to specialized assemblies.",
//    image: "/images/twowhiler/whi-7.png",
//     position: { x: "50%", y: "65%" },
//     number: "02",
//     highlights: ["Global Network", "Cost Optimization", "Timely Delivery"]
//   },
//   {
//     id: "Design-Solutions",
//     title: "Design Solutions",
//     description:
//       "STF Automotive's design solution offers comprehensive passenger vehicle design services, guiding clients from initial prototyping through to a fully manufacturable design. We provide a complete design package, ensuring a seamless transition from concept to production readiness.",
//       image: "/images/twowhiler/whi-6.png",
//     position: { x: "85%", y: "65%" },
//     number: "03",
//     highlights: ["Full Prototyping", "Complete Package", "Production Ready"]
//   },
// ]

export default function ThreeAdvantages() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeAdvantage = advantages[activeIndex]

  return (
    <section className="py-24 px-4  relative overflow-hidden">
      {/* Decorative Background Elements */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div> */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold tracking-wide">
              OUR SOLUTIONS
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            Solution Domain
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Comprehensive automotive solutions from design to delivery
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Number Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAdvantage.number}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                <div className="text-8xl font-bold text-blue-500/20">
                  {activeAdvantage.number}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Title */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={activeAdvantage.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                {activeAdvantage.title}
              </motion.h3>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeAdvantage.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-gray-600 text-lg leading-relaxed"
              >
                {activeAdvantage.description}
              </motion.p>
            </AnimatePresence>

            {/* Highlights */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAdvantage.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="flex flex-wrap gap-3"
              >
                {activeAdvantage.highlights.map((highlight, idx) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-2 bg-white px-4 py-2 rounded-full  border border-gray-200"
                  >
                    <Check className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Learn More Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right Interactive Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAdvantage.id}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeAdvantage.image || "/placeholder.svg"}
                    alt={activeAdvantage.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </motion.div>
              </AnimatePresence>

              {/* Interactive Points */}
              {advantages.map((advantage, idx) => (
                <motion.button
                  key={advantage.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1, type: "spring" }}
                  onClick={() => setActiveIndex(idx)}
                  className={`absolute w-12 h-12 rounded-full transition-all duration-300 group z-10 ${
                    activeIndex === idx
                      ? "bg-blue-600 shadow-lg shadow-blue-500/50 scale-110"
                      : "bg-white border-2 border-blue-500 hover:scale-110"
                  }`}
                  style={{
                    left: advantage.position.x,
                    top: advantage.position.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Pulse animation for active */}
                  {activeIndex === idx && (
                    <motion.div
                      className="absolute inset-0 bg-blue-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    ></motion.div>
                  )}

                  {/* Number */}
                  <div className={`relative z-10 text-sm font-bold ${
                    activeIndex === idx ? "text-white" : "text-blue-600"
                  }`}>
                    {advantage.number}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-xl whitespace-nowrap">
                      {advantage.title}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Navigation Tabs Below Image */}
            <div className="mt-8 flex gap-4 justify-center">
              {advantages.map((advantage, idx) => (
                <button
                  key={advantage.id}
                  onClick={() => setActiveIndex(idx)}
                  className="relative group"
                >
                  
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 