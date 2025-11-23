"use client"
import { motion } from "framer-motion"

export default function Overview() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-background to-muted/30 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-5"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-serif font-light text-foreground mb-8 text-balance"
        >
          Overview
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16 max-w-4xl mx-auto text-pretty"
        >
          CATL is a global leader of new energy innovative technologies, committed to providing premier solutions and
          services for new energy applications worldwide.
        </motion.p>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="CATL Overview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years of Innovation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Global Partners</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
