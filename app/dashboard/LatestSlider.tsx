"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const CARDS = [
  {
    id: "two-wheeler",
    title: "Two Wheeler Solutions",   
    image: "/images/apple/1.png",
  },
  {
    id: "marin",
    title: "Marin Transportation Solutions",
    image: "/images/apple/2.png",
  },
  {
    id: "commercial",
    title: "Commercial Vehicle Solutions",
    image: "/images/apple/3.png",
  },
  {
    id: "aromotion",
    title: "Aromotion Solution",
    image: "/images/apple/7.png",
  },
  {
    id: "agri-industrial",
    title: "Agriculture & Industrial Automotive",
    image: "/images/apple/8.png",
  },
  {
    id: "passenger",
    title: "Passenger Vehicle Solutions",
    image: "/images/apple/4.png",
  },
  {
    id: "lifestyle",
    title: "Automotive Lifestyle",
    image: "/images/apple/9.png",
  },
];

export default function FullWidthOverlaySlider() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Autoplay, EffectCreative]}
          spaceBetween={40}
          slidesPerView={1.3}
          centeredSlides={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: ["-120%", 0, -500],
              rotate: [0, 0, -10],
            },
            next: {
              shadow: true,
              translate: ["120%", 0, -500],
              rotate: [0, 0, 10],
            },
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.4,
            },
            1280: {
              slidesPerView: 2.7,
            },
          }}
          className="w-full"
        >
          {CARDS.map((card, index) => (
            <SwiperSlide key={card.id}>
              {({ isActive, isNext, isPrev }) => (
                <motion.div
                  className="relative group cursor-pointer"
                  animate={{
                    scale: isActive ? 1 : isNext || isPrev ? 0.92 : 0.85,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Card Container */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                    {/* Image */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1200}
                      height={800}
                      className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                      priority={index < 3}
                    />

                    {/* Content - Only fully visible on active slide */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-10 text-white z-20 transition-all duration-700 ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}
                    >
                      <motion.h2
                        initial={{ y: 20 }}
                        animate={{ y: isActive ? 0 : 20 }}
                        className="text-1xl md:text-3xl font-bold tracking-tight mb-3"
                      >
                        {card.title}
                      </motion.h2>
                    </div>
                  </div>
                </motion.div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronLeft className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        >
          <ChevronRight className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </button>``````````````````````````````````

        {/* Optional: Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {CARDS.map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/40 transition-all duration-300 hover:bg-white/80"
            />
          ))}
        </div>
      </div>
    </section>
  );
}