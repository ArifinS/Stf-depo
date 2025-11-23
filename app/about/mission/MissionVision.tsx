import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation"; // Import TypeAnimation
import { motion, Variants } from "framer-motion"; // Import Framer Motion

export default function MissionVision() {
  // Animation variants for Vision (left-to-right)
  const visionVariants: Variants = {
    hidden: { opacity: 0, x: -100 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }, // Use 'as const' for literal type
    },
  };

  // Animation variants for Mission (right-to-left)
  const missionVariants: Variants = {
    hidden: { opacity: 0, x: 100 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }, // Use 'as const' for literal type
    },
  };

  return (
    <section id="missionvission" className="w-full py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="relative rounded-3xl border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-12 gap-6 p-6 md:p-10 lg:p-12">
            {/* Left visuals */}
            <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-100 relative">
                <Image
                  src="/images/mission/mission.png"
                  alt="Team working in hallway"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="hidden md:block aspect-[4/3] w-9/12 overflow-hidden rounded-xl bg-zinc-100 relative">
                <Image
                  src="/images/mission/mission2.png"
                  alt="Happy team"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
            </div>

            {/* Center text with Typewriter Effect */}
            <div className="col-span-12 md:col-span-6 flex items-center">
              <div>
                <h2 className="text-3xl leading-tight md:text-5xl font-semibold tracking-tight text-zinc-900">
                  <TypeAnimation
                    sequence={[
                      "Where Creativity", // First part
                      1000, // Pause for 1 second
                      "Where Creativity Meets", // Second part
                      1000,
                      "Where Creativity Meets Cutting-Edge", // Third part
                      1000,
                      "Where Creativity Meets Cutting-Edge Technology", // Full text
                      2000, // Stay for 2 seconds
                      () => {}, // Optional callback
                    ]}
                    wrapper="span" // Wrap in a span to match h2 styling
                    cursor={true} // Show blinking cursor
                    repeat={Infinity} // Loop the animation
                    style={{ display: "inline-block" }} // Ensure proper rendering
                  />
                </h2>
              <p className="mt-5 max-w-xl text-sm md:text-[15px] leading-relaxed text-zinc-500">
                We believe in the power of creativity to transform ideas into engineering revolutions. 
                <br />
                Founded with a passion for innovation, we are a team of visionary creators and strategic thinkers dedicated to fulfilling customer needs and requirements.
              </p>
              </div>
            </div>

            {/* Right visuals */}
            <div className="col-span-12 md:col-span-3 flex flex-col items-end gap-6">
              <div className="aspect-[4/5] w-8/12 md:w-full overflow-hidden rounded-xl bg-zinc-100 relative">
                <Image
                  src="/images/mission/mission2.png"
                  alt="Coworking"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="hidden md:block aspect-[4/3] w-8/12 overflow-hidden rounded-xl bg-zinc-100 relative">
                <Image
                  src="/images/mission/mission.png"
                  alt="Workshop"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>
            </div>
          </div>

          {/* Subtle radial motif at bottom center */}
          <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center opacity-15">
            <div className="h-28 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.08),transparent_60%)]" />
          </div>
        </div>
      </div>

      {/* Secondary section - Vision with Left-to-Right Animation */}
      <motion.div
        className="mx-auto mt-10 md:mt-14 max-w-6xl px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
        variants={visionVariants}
      >
        <div className="rounded-3xl border border-black/5 bg-white p-6 md:p-10 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">Our Vision</h3>
          <p className="mt-4 max-w-2xl text-sm md:text-[15px] leading-relaxed text-zinc-600">
            Vision: At STF Automotive, we aim to build a complete automotive ecosystem that serves society with sustainable products and cutting-edge technology. We strive to bring smart, eco-friendly mobility solutions right to people’s doors, meeting everyday transportation needs.
          </p>
        </div>
      </motion.div>

      {/* Secondary section - Mission with Right-to-Left Animation */}
      <motion.div
        className="mx-auto mt-10 md:mt-14 max-w-6xl px-4 md:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of the element is in view
        variants={missionVariants}
      >
        <div className="rounded-3xl border border-black/5 bg-white p-6 md:p-10 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)]">
          <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">Our Mission</h3>
          <p className="mt-4 max-w-2xl text-sm md:text-[15px] leading-relaxed text-zinc-600">
            Mission: Our goal is to bring a personal passenger car to every doorstep by 2040, delivering affordable two-wheeler e-mobility to save up to 70% on transport costs and increase income levels by up to 50%.
          </p>
        </div>
      </motion.div>
    </section>
  );
}