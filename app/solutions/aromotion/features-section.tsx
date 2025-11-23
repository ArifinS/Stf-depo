import { Zap, Shield, Gauge, TrendingUp } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Advanced propulsion systems delivering unprecedented speed and acceleration for next-generation aerial mobility.",
      stat: "300+ km/h",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Military Grade",
      description: "Built with aerospace-grade materials and redundant systems for maximum reliability and safety.",
      stat: "99.9% Uptime",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Gauge,
      title: "Precision Control",
      description: "Intelligent flight systems with AI-powered navigation and real-time environmental adaptation.",
      stat: "±1cm Accuracy",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: TrendingUp,
      title: "Scalable Design",
      description: "Modular architecture supporting everything from micro-drones to commercial air taxis.",
      stat: "50+ Configurations",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="w-full py-24 bg-gradient-to-b from-black via-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full border border-white/20">
            <span className="text-white/60 text-sm font-mono tracking-wider uppercase">Core Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">Engineering Excellence</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Cutting-edge technology meets precision engineering in every AeroMotion solution
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-white/10"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500"
                    style={{
                      backgroundClip: "unset",
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6">{feature.description}</p>

                  {/* Stat */}
                  <div
                    className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${feature.color} text-white text-sm font-bold`}
                  >
                    {feature.stat}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
