"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Zap,
  Clock,
  Award,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface NewsItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  fullDescription: string;
  gradient: string;
  image: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  date: string;
  category: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    badge: "New Equipment",
    title: "Advanced EV Diagnostic Equipment",
    description: "State-of-the-art electric vehicle diagnostic tools now available for all major EV brands.",
    fullDescription: "Our workshop is equipped to handle the most complex EV systems with precision and efficiency.",
    gradient: "from-blue-500 to-indigo-600",
    image: "/images/News2/1.jpg",
    icon: Zap,
    date: "Nov 8, 2025",
    category: "Technology",
  },
  {
    id: 2,
    badge: "Extended Hours",
    title: "Weekend Service Available",
    description: "Saturday and Sunday appointments now available starting January 2025.",
    fullDescription: "We're here when you need us most, including weekends and holidays.",
    gradient: "from-emerald-500 to-teal-600",
    image: "/images/News2/1.jpg",
    icon: Clock,
    date: "Nov 5, 2025",
    category: "Service",
  },
  {
    id: 3,
    badge: "Expert Team",
    title: "Certified Hybrid Specialists",
    description: "Over 100,000 vehicles serviced by our trusted hybrid maintenance experts.",
    fullDescription: "Join thousands of satisfied customers who trust our certified team.",
    gradient: "from-orange-500 to-pink-600",
    image: "/images/News2/1.jpg",
    icon: Award,
    date: "Nov 1, 2025",
    category: "Team",
  },
];

export default function WorkshopNews() {
  const [mounted, setMounted] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullSubtitle = "Discover our newest services and innovations";

  // Typing Animation
  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (currentIndex === 0) {
          setIsDeleting(false);
          return;
        }
        setTypedText((prev) => prev.slice(0, -1));
        setCurrentIndex(currentIndex - 1);
      } else {
        if (currentIndex === fullSubtitle.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          return;
        }
        setTypedText((prev) => prev + fullSubtitle[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 70);
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, fullSubtitle]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCardClick = (news: NewsItem) => {
    setSelectedNews(selectedNews?.id === news.id ? null : news);
  };

  return (
    <section className="relative min-h-screen bg-white py-24 md:py-32 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-pink-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header with Typing */}
        <div className={`text-center mb-20 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/30 rounded-full mb-8 shadow-lg">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold text-zinc-800">What's Happening</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 mb-6 tracking-tight">
            Latest News
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto font-medium">
            <span className="inline-block min-w-[20ch] text-center">
              {typedText}
              <span className="inline-block w-1 h-7 bg-gradient-to-b from-blue-600 to-purple-600 ml-1 animate-pulse rounded-full"></span>
            </span>
          </p>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="relative">
          <div className="flex gap-6 pb-12 snap-x snap-mandatory scrollbar-hide">
            {newsData.map((news, idx) => {
              const Icon = news.icon;
              const isSelected = selectedNews?.id === news.id;
              const isHovered = hoveredCard === news.id;

              return (
                <Card
                  key={news.id}
                  className={`
                    group relative flex-shrink-0 w-[85vw] md:w-[420px] h-[560px] rounded-3xl overflow-hidden
                    bg-white/70 backdrop-blur-2xl border border-white/30 shadow-2xl
                    transition-all duration-700 ease-out snap-center
                    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                    ${isSelected ? "ring-4 ring-blue-500/50 scale-[1.02]" : "hover:scale-[1.02]"}
                    cursor-pointer
                  `}
                  style={{
                    transitionDelay: mounted ? `${idx * 180}ms` : "0ms",
                    transform: `perspective(1200px) rotateY(${idx % 2 === 0 ? '-2deg' : '2deg'})`,
                  }}
                  onClick={() => handleCardClick(news)}
                  onMouseEnter={() => setHoveredCard(news.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 pointer-events-none z-10"></div>

                  {/* Image */}
                  <div className="relative h-[300px] overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className={`object-cover transition-transform duration-1000 ${isHovered ? "scale-110" : "scale-100"}`}
                      priority={idx < 2}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${news.gradient} opacity-60 mix-blend-multiply`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                    {/* Floating Icon Badge */}
                    <div className="absolute top-6 left-6">
                      <div className={`
                        p-4 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/40 shadow-xl
                        transition-all duration-500 ${isHovered ? "scale-110 rotate-12 shadow-2xl" : "shadow-lg"}
                      `}>
                        <Icon className="w-7 h-7 text-white drop-shadow-md" />
                      </div>
                    </div>

                    {/* Category Tag */}
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-xl text-white text-xs font-bold rounded-full border border-white/30 shadow-md">
                        {news.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 bg-gradient-to-t from-white via-white to-white/90">
                    <div className="flex items-center gap-2 text-zinc-500 text-sm mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{news.date}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-3 leading-tight">
                      {news.title}
                    </h3>

                    <p className="text-zinc-600 leading-relaxed mb-4">
                      {news.description}
                    </p>

                    {/* Expandable Full Description */}
                    <div className={`
                      overflow-hidden transition-all duration-700 ease-out
                      ${isSelected ? "max-h-32 opacity-100 mb-5" : "max-h-0 opacity-0"}
                    `}>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {news.fullDescription}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Button
                      className={`
                        w-full h-14 bg-gradient-to-r ${news.gradient} text-white font-bold
                        rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                        ${isSelected ? "scale-100" : "scale-95 opacity-90"}
                        group-hover:shadow-2xl group-hover:scale-[1.02]
                      `}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Learn more:", news.id);
                      }}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>

                  {/* Shine Sweep Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
        }
        .animate-pulse { animation: pulse 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}