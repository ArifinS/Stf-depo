"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wrench, Users, Award, MapPin, Calendar, Car, Bike } from "lucide-react"
import Image from "next/image" // Import Next.js Image component
import { motion } from "framer-motion"

const milestones = [
  {
    title: "Founding Ideation",
    description: "STF Automotive takes its name from the first letters of its founders—Shazzad, Taher, and Forhad.The journey began in 2024, when Taher shared an idea with Shazzad to build an electric cycle. Together, they started working on the project and quickly discovered its huge potential. Delivery riders, office commuters, and regular cyclists all showed strong interest—",
    icon: Wrench,
    image: "/images/workshop/w1.jpg",
  },
  {
    title: "Humbel Bigining",
    description: " the market was filled with high-priced, low-quality e-cycles.Seeing this gap, they focused on creating a better, cost-effective electric cycle with high quality and stylish design that outperformed existing options. Later, Forhad Ahmed Talha joined the team, and the three partners decided to launch a company built on the promise of performance and quality.From the beginning, their philosophy has been to showcase the craftsmanship, design, and engineering power of Bangladesh to the world.",
    icon: MapPin,
    image: "/images/workshop/w2.jpg",
  },
]

const stats = [
  { number: "39", label: "Years of Excellence", icon: Calendar },
  { number: "50,000+", label: "Vehicles Serviced", icon: Car },
  { number: "25", label: "Expert Technicians", icon: Users },
  { number: "98%", label: "Customer Satisfaction", icon: Award },
]

export default function WorkshopHistory() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Step Into The 
            <span className="text-primary"> New Automotive Dimention</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Experience the future of mobility with cutting-edge delivering unmatched reliability and efficiency.From desiging to delevaring products on your hands where you will find all solution in one place
          </motion.p>
        </div>
      </motion.section>


      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey Through Time</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every milestone tells a story of growth, innovation, and our commitment to serving our community.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <motion.div 
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-0.5"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.div 
              className="space-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.4
                  }
                }
              }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full md:transform md:-translate-x-1.5 z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>

                  {/* Content Card */}
                  <motion.div 
                    className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                    whileHover={{ y: -5 }}
                  >
                    <motion.div
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className="aspect-video bg-muted relative overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <Image
                          src={milestone.image}
                          alt={milestone.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </motion.div>
                      <CardContent className="p-6">
                        <motion.div 
                          className="flex items-center gap-3 mb-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
                            <milestone.icon className="w-5 h-5 text-primary" />
                          </div>
                        </motion.div>
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                        >
                          {milestone.title}
                        </motion.h3>
                        <motion.p 
                          className="text-muted-foreground text-pretty"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          {milestone.description}
                        </motion.p>
                      </CardContent>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}