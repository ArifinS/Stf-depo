import Image from "next/image"
import { Twitter, Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"

const teamMembers = [
  {
    id: 1,
    name: "Shazzad Kazi",
    role: "Founder &CEO",
    description: "I've established pagedone in 2022 and it was one of the best idea I've had in my life.",
    image: "/images/team/team.jpg",
    highlighted: false,
  },
  {
    id: 2,
    name: "Forhad Ahmed Talha ",
    role: "Founder & head of supply chain",
    description: "I am the co founder of pagedone and we've pushed our limit so far to make it successful.",
    image: "/images/team/team-1.jpg",
    highlighted: true,
  },
  {
    id: 3,
    name: "Md Abu Taher",
    role: "Founder Denting technician",
    description: "I'm the chief executive of sales and closed valuable deals that helped pagedone in growth.",
       image: "/images/team/team-2.jpg",
    highlighted: false,
  },
]

export default function TeamGrid() {
  return (
    <section className="py-26 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Brilliant Team</h2>
          <p className="text-lg text-gray-600">These people work on making our product best.</p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg ${
                member.highlighted ? "border-2 border-blue-500 shadow-lg" : "border border-gray-200"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-2 ml-4">
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <Twitter size={16} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <Instagram size={16} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                        <Linkedin size={16} />
                      </button>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}