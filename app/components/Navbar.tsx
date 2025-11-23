"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

const menuItems = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    dropdown: [
      { name: "Mission Vision", href: "/about/mission" },
      { name: "History", href: "/about/history" },
    ],
  },
  {
    name: "Solutions",
    dropdown: [
      { name: "Passenger Vehicles", href: "/solutions/passanger_vehicles" },
      { name: "Two Wheeler", href: "/solutions/two_wheeler" },
      { name: "Commercial Vehicles", href: "/solutions/commercial_vehicles" },
      { name: "Automotive Lifestyle", href: "/solutions/automotive_lifestyle" },
      { name: "Aeromotion", href: "/solutions/aromotion" },
      { name: "Agricultural & Industrial Transportation", href: "/solutions/agricultural_industrial" },
      { name: "Marine Transportation", href: "/solutions/marine_transportation" },
    ],
  },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null)

  // Check if current route matches exactly
  const isActive = (href: string) => pathname === href

  // Check if any dropdown item is active (for parent highlight)
  const isDropdownActive = (dropdown?: typeof menuItems[0]["dropdown"]) => {
    if (!dropdown) return false
    return dropdown.some((item) => pathname.startsWith(item.href.split("/").slice(0, 3).join("/")))
  }

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="bg-black/50 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="relative group">
              <Image
                src="/images/logo.png"
                alt="EShElL Motors"
                width={160}
                height={80}
                className="h-30 w-auto transition-all duration-300 group-hover:scale-105"
                priority
              />
              <span className="absolute -inset-1 bg-yellow-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => {
                const active = item.dropdown ? isDropdownActive(item.dropdown) : isActive(item.href)

                return item.dropdown ? (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-2 px-5 py-3 font-medium tracking-wider uppercase text-xs lg:text-sm transition-all duration-300 ${
                        active
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                      {active && (
                        <motion.span
                          layoutId="desktop-active-indicator"
                          className="absolute -bottom-5 left-0 right-0 h-0.5 bg-yellow-400"
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-80"
                        >
                          <div className="bg-black/95 backdrop-blur-3xl border border-yellow-500/20 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-yellow-500/10">
                            <div className="p-4 space-y-1">
                              {item.dropdown.map((sub) => {
                                const subActive = pathname === sub.href
                                return (
                                  <Link
                                    key={sub.name}
                                    href={sub.href}
                                    className={`group/sub block px-6 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                                      subActive
                                        ? "text-yellow-400 bg-yellow-500/10"
                                        : "text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/5"
                                    }`}
                                  >
                                    <span
                                      className={`w-1.5 h-1.5 bg-yellow-400 rounded-full transition-all ${
                                        subActive ? "opacity-100 scale-125" : "opacity-0 group-hover/sub:opacity-100"
                                      }`}
                                    />
                                    <span className="font-medium tracking-wide">{sub.name}</span>
                                  </Link>
                                )
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-3 font-medium tracking-wider uppercase text-xs lg:text-sm transition-all duration-300 ${
                      active ? "text-yellow-400" : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {item.name}
                    {active && (
                      <motion.span
                        layoutId="desktop-active-indicator"
                        className="absolute -bottom-5  left-0 right-0 h-0.5 bg-yellow-400"
                      />
                    )}
                  </Link>
                )
              })}
            </div>

            <MobileMenuTrigger />
          </div>
        </div>
      </div>
    </nav>
  )
}

// Mobile Menu Trigger
function MobileMenuTrigger() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
      >
        <div className="relative w-7 h-7">
          <span className={`absolute top-2 left-0 block w-7 h-0.5 bg-yellow-400 rounded-full transition-all duration-500 ${open ? "rotate-45 top-3" : ""}`} />
          <span className={`absolute top-4 left-0 block w-7 h-0.5 bg-yellow-400 rounded-full transition-all duration-500 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute top-6 left-0 block w-7 h-0.5 bg-yellow-400 rounded-full transition-all duration-500 ${open ? "-rotate-45 top-3" : ""}`} />
        </div>
      </button>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  )
}

// Mobile Menu with Active State
function MobileMenu({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const pathname = usePathname()
  const [expanded, setExpanded] = React.useState<string | null>(null)

  const isActive = (href: string) => pathname === href
  const isDropdownActive = (items?: typeof menuItems[0]["dropdown"]) =>
    items?.some((i) => pathname.startsWith(i.href.split("/").slice(0, 3).join("/")))

  React.useEffect(() => {
    // Auto-expand active dropdown on mobile
    const activeDropdown = menuItems.find((item) => item.dropdown && isDropdownActive(item.dropdown))
    if (activeDropdown) setExpanded(activeDropdown.name)
  }, [pathname])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-40 lg:hidden"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-full max-w-lg bg-gradient-to-br from-black via-zinc-950 to-black border-l border-yellow-500/20 shadow-2xl z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="p-8 border-b border-white/10">
                <Image src="/images/logo.png" alt="EShElL" width={180} height={90} className="h-16 w-auto" />
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-10">
                <div className="space-y-2">
                  {menuItems.map((item) => {
                    const active = item.dropdown ? isDropdownActive(item.dropdown) : isActive(item.href)

                    return (
                      <div key={item.name} className="border-b border-white/5 last:border-b-0">
                        {item.dropdown ? (
                          <>
                            <button
                              onClick={() => setExpanded(expanded === item.name ? null : item.name)}
                              className={`w-full flex items-center justify-between py-6 text-2xl font-bold transition-all duration-300 ${
                                active ? "text-yellow-400" : "text-white hover:text-yellow-400"
                              }`}
                            >
                              {item.name}
                              <ChevronDown
                                className={`w-7 h-7 transition-transform duration-500 ${
                                  expanded === item.name ? "rotate-180 text-yellow-400" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {expanded === item.name && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.4, ease: "easeOut" }}
                                  className="overflow-hidden pb-6"
                                >
                                  <div className="space-y-4 pl-6 pt-4 border-l-2 border-yellow-400/30">
                                    {item.dropdown.map((sub) => {
                                      const subActive = pathname === sub.href
                                      return (
                                        <Link
                                          key={sub.name}
                                          href={sub.href}
                                          onClick={() => setOpen(false)}
                                          className={`block py-3 text-lg transition-all duration-300 ${
                                            subActive
                                              ? "text-yellow-400 font-semibold pl-2"
                                              : "text-gray-300 hover:text-yellow-400 hover:pl-2"
                                          }`}
                                        >
                                          {sub.name}
                                          {subActive && <span className="ml-3 text-yellow-400">Active</span>}
                                        </Link>
                                      )
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`block py-6 text-2xl font-bold transition-all duration-300 ${
                              active ? "text-yellow-400" : "text-white hover:text-yellow-400"
                            }`}
                          >
                            {item.name}
                            {active && <span className="ml-4 text-sm opacity-70">Active</span>}
                          </Link>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="p-8 text-center border-t border-white/10">
                <p className="text-gray-500 text-sm">
                  © 2025 <span className="text-yellow-400 font-bold text-lg">EShElL Motors</span>
                  <br />
                  <span className="text-xs">Pioneering the Future of Mobility</span>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}