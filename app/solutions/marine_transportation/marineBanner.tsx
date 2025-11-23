"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Ship,
  Anchor,
  Waves,
  Package,
  Clock,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
  Settings,
  Sailboat,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // ✅ added motion

const MarineTransportSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Container Shipping",
      description: "Global cargo solutions with state-of-the-art container vessels",
      image: "/images/marin/6.png",
      icon: Ship,
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: 2,
      title: "Port Services",
      description: "Comprehensive port management and logistics support",
      image: "/images/marin/2.png",
      icon: Anchor,
      color: "from-teal-600 to-blue-500",
    },
    {
      id: 3,
      title: "Ocean Freight",
      description: "Reliable maritime transport across international waters",
      image: "/images/marin/3.png",
      icon: Waves,
      color: "from-indigo-600 to-blue-600",
    },
    {
      id: 4,
      title: "Bulk Carriers",
      description: "Efficient transportation of dry and liquid bulk cargo",
      image: "/images/marin/4.png",
      icon: Ship,
      color: "from-blue-700 to-teal-600",
    },
  ];

  const solutionTiles = [
    {
      id: 1,
      title: "Design",
      description:
        "At STF Automotive, we craft innovative marine designs that blend aerodynamics, efficiency, and modern aesthetics. From electric water taxis to urban sea metros, our design solutions focus on streamlined form, sustainable materials, and user-centered functionality.",
      image: "/images/marin/4.png",
      icon: Sailboat,
      color: "#0ea5e9",
      gradient: "from-sky-500 to-blue-600",
      features: ["Electric Water Taxis", "Sustainable Materials", "User-Centered Design"],
    },
    {
      id: 2,
      title: "Sourcing",
      description:
        "STF Automotive provides specialized sourcing solutions for the marine industry, offering high-quality components such as electric propulsion systems, battery modules, control units, and structural parts.",
      image: "/images/marin/1.png",
      icon: Anchor,
      color: "#14b8a6",
      gradient: "from-teal-500 to-cyan-600",
      features: ["Electric Propulsion", "Battery Modules", "Structural Parts"],
    },
    {
      id: 3,
      title: "Manufacturing",
      description:
        "STF Automotive leverages advanced manufacturing techniques to produce high-performance marine vessels and components. From precision-engineered hulls to eco-friendly propulsion systems, our manufacturing solutions ensure durability and sustainability.",
      image: "/images/marin/3.png",
      icon: Ship,
      color: "#0284c7",
      gradient: "from-blue-600 to-indigo-600",
      features: ["Precision Hulls", "Eco-Friendly Propulsion", "Advanced Manufacturing"],
    },
    {
      id: 4,
      title: "Project Solution",
      description:
        "STF Automotive delivers comprehensive project solutions for marine transportation, managing every phase from concept to deployment.",
      image: "/images/marin/7.png",
      icon: Settings,
      color: "#1e3a8a",
      gradient: "from-blue-800 to-indigo-700",
      features: ["Project Management", "Integrated Solutions", "Reliable Execution"],
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const IconComponent = slides[currentSlide].icon;

  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* --- Hero Slider --- */}
      <div className="flex items-center justify-center p-4 py-12">
        <div className="w-full max-w-6xl">
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-x-0"
                    : index < currentSlide
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-20">
                  <IconComponent className="w-16 h-16 text-white mb-6" />
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                    Marine Transportation
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                    {slide.description}
                  </p>
                  <button className="mt-8 px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 w-fit">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* --- Solution Section with Animation --- */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Marine Solutions
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Comprehensive solutions tailored for the future of marine transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {solutionTiles.map((tile, index) => {
              const Icon = tile.icon;
              const motionVariant = index % 2 === 0 ? fadeInLeft : fadeInRight;

              return (
                <motion.div
                  key={tile.id}
                  className="group relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
                  variants={motionVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={tile.image}
                      alt={`${tile.title} marine solution`}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${tile.gradient} opacity-20`} />
                    <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                      <Icon className="w-7 h-7" style={{ color: tile.color }} />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tile.title}
                    </h3>
                    <p className="text-blue-200 mb-4">{tile.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tile.features.map((f, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-slate-800/50 text-blue-200 border border-blue-700"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <Link href="/contact">
                      <button
                        className="w-full py-3 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden"
                        style={{ backgroundColor: tile.color }}
                      >
                        <span className="relative z-10">Contact for Collaboration</span>
                        <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarineTransportSlider;
