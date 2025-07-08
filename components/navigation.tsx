"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Home, User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const menuItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = section === "hero" ? document.body : document.getElementById(section)
        if (element) {
          const offsetTop = section === "hero" ? 0 : element.offsetTop
          const offsetBottom = offsetTop + (section === "hero" ? window.innerHeight : element.offsetHeight)

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open - improved for mobile
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop

      // Apply styles with fallbacks
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"

      // Additional iOS Safari fix
      document.documentElement.style.overflow = "hidden"
      document.documentElement.style.height = "100%"
    } else {
      // Restore scroll position with better browser support
      const scrollY = document.body.style.top
      const numericScrollY = scrollY ? Number.parseInt(scrollY.replace("px", "")) * -1 : 0

      // Reset styles
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
      document.documentElement.style.height = ""

      // Restore scroll with fallbacks
      if (window.scrollTo) {
        window.scrollTo(0, numericScrollY)
      } else {
        document.documentElement.scrollTop = numericScrollY
        document.body.scrollTop = numericScrollY
      }
    }

    return () => {
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      document.documentElement.style.overflow = ""
      document.documentElement.style.height = ""
    }
  }, [isOpen])

  // Add this useEffect for iOS Safari viewport fixes:
  useEffect(() => {
    // iOS Safari viewport height fix
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    setVH()
    window.addEventListener("resize", setVH)
    window.addEventListener("orientationchange", setVH)

    return () => {
      window.removeEventListener("resize", setVH)
      window.removeEventListener("orientationchange", setVH)
    }
  }, [])

  return (
    <>
      {/* Hamburger Button - improved mobile positioning */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-800/80 backdrop-blur-md border border-slate-700/50 hover:bg-slate-700/80 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 touch-manipulation"
          size="icon"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 sm:w-6 sm:h-6">
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 6 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} // Better easing for all browsers
              className="block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white mb-1 sm:mb-1.5 origin-center"
              style={{ transformOrigin: "center" }} // Explicit transform origin
            />
            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white mb-1 sm:mb-1.5"
            />
            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -6 : 0,
              }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }} // Better easing for all browsers
              className="block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white origin-center"
              style={{ transformOrigin: "center" }} // Explicit transform origin
            />
          </div>
        </Button>
      </motion.div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 overflow-hidden"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100vw",
              height: "100vh",
              minHeight: "100vh",
              maxHeight: "100vh",
              background: "rgba(15, 23, 42, 0.98)", // Increased opacity for better fallback
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              MozBackdropFilter: "blur(12px)", // Firefox support
              msBackdropFilter: "blur(12px)", // IE/Edge support
            }}
          >
            {/* Additional background layer to ensure no white space */}
            <div
              className="absolute inset-0 bg-slate-900"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
              }}
            />

            <div className="flex items-center justify-center min-h-screen min-h-[100vh] p-4 sm:p-8 relative z-10">
              <motion.nav
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-center w-full max-w-md mx-auto py-8"
              >
                <motion.h2
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 sm:mb-12"
                >
                  Navigation
                </motion.h2>

                <ul className="space-y-4 sm:space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <button
                        onClick={() => scrollToSection(item.id)}
                        onTouchStart={() => {}} // Enables :active states on iOS
                        onTouchEnd={() => scrollToSection(item.id)}
                        className={`group flex items-center justify-center space-x-3 sm:space-x-4 w-full max-w-xs mx-auto p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-slate-800/50 touch-manipulation ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                            : "hover:scale-105 active:scale-95"
                        }`}
                      >
                        <div
                          className={`p-2 rounded-lg transition-all duration-300 ${
                            activeSection === item.id
                              ? "bg-gradient-to-r from-purple-500 to-pink-500"
                              : "bg-slate-700 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500"
                          }`}
                        >
                          <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <span
                          className={`text-lg sm:text-xl font-medium transition-all duration-300 ${
                            activeSection === item.id ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {item.label}
                        </span>
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Decorative Elements */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 sm:mt-12 flex justify-center space-x-2"
                >
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                      className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  ))}
                </motion.div>
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Indicator */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block"
      >
        <div className="flex flex-col space-y-3">
          {menuItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 scale-125"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-slate-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">{item.label}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  )
}
