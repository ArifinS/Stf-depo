"use client";
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Truck, Factory, Wheat, Package, Clock, Shield, Users, Award, Leaf, Zap, Settings, TrendingUp, ArrowRight, CheckCircle, Phone, Mail, MapPin, Star, BarChart, Globe, PlayCircle } from 'lucide-react';

const STFAutomationTransport = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Services ",
      description: "All problems in one solution from design to sourcing and manufacturing No more slides on cover now moving to solutions tile  in the below ",
      image: "/images/agriculture/a5.png",
      icon: Wheat,  
    },
    {
      id: 2,
      title: "Agricultural & industrial transportation ",
      description: "Engineering Efficiency for Fields and Factories",
      image: "/images/agriculture/a3.png",
      icon: Zap,
    },
    {
      id: 3,
      title: "R&D that ease your life",
      description: "Innovating for Easier, Safer, and Smarter Work.",
      image: "/images/agriculture/a4.png",
      icon: Truck, 
    }
  ];

 const services = [
  {
    title: "Design Solution",
    image: "/images/agriculture/a6.png", 
    heading: "Innovating Mobility: Automotive Design for Farm & Factory",
    features: ["Conceptual", "Prototyping", "Manufacturability"],
    description:
      "We bring innovation to mobility with comprehensive automotive design solutions that bridge agricultural and industrial needs."
  },
  {
    title: "Sourcing Solution",
     image: "/images/agriculture/a2.png",
    heading:
      "From Field to Factory — Comprehensive Sourcing for Industrial & Agricultural Automotive Parts",
    features: ["Meeting Requirements", "OEM Sourcing", "Maintaining Quality"],
    description:
      "We connect industries with reliable sourcing solutions, ensuring top-quality components for farm and factory automotive applications."
  },
  {
    title: "Manufacturing Solution",
     image: "/images/agriculture/a1.png",
    heading:
      "Advanced Automotive Manufacturing for Farm & Factory Automotives",
    features: ["Planning", "Optimization", "Execution"],
    description:
      "We deliver advanced manufacturing solutions that optimize production for both agricultural and industrial vehicles."
  },
  {
    title: "Project Solution",
    image: "/images/agriculture/a7.png",
    heading:
      "Tailored Automotive Solutions for Agriculture & Industry — From Concept to Production",
    features: [
      "Comprehensive Solutions",
      "Customer-Centric Approach",
      "Quality & Reliability"
    ],
    description:
      "Our final solution offers custom project-based services, addressing specific customer requirements and delivering high reliability."
  }
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Slider */}
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
              {/* Left Content */}
              <div className="order-2 lg:order-1">
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {heroSlides[currentSlide].title}
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  {heroSlides[currentSlide].description}
                </p>
              </div>

              {/* Right Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
                  <img
                    src={heroSlides[currentSlide].image}
                    alt={heroSlides[currentSlide].title}
                    className="w-full h-[500px] object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur-3xl opacity-50"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl blur-3xl opacity-50"></div>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-4 justify-center">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentSlide 
                      ? 'w-32 h-20 ring-2 ring-green-500 ring-offset-2 ring-offset-slate-950' 
                      : 'w-24 h-16 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40"></div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🌿 Services - Animated Section */}
      <div id="services" className="py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 text-sm font-semibold mb-4">
              OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Complete Transport Solutions</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Specialized services for agriculture and industrial sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -100 : 100, // left-right alternating animation
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-6">{service.description}</p>
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-40">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default STFAutomationTransport;
