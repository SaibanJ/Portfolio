"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Mail, Phone, ArrowDown } from "lucide-react"
import { Linkedin } from "@/components/icons/linkedin"
import { motion } from "framer-motion"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1"
          >
            <img
              src="/mypic.png"
              alt="James Saiban"
              className="w-full h-full rounded-full object-cover bg-slate-800"
            />
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
            >
              James Saiban
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-2"
            >
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30">
                Software Engineer
              </Badge>
              <Badge variant="secondary" className="bg-pink-500/20 text-pink-200 border-pink-500/30">
                Freelance Web Developer
              </Badge>
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-500/30">
                SaaS Builder
              </Badge>
            </motion.div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Self-taught full-stack engineer with 3+ years of experience creating modern web applications. Turning
            challenges into code, one project at a time.
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-purple-500/50 text-purple-200 hover:bg-purple-500/20"
              asChild
            >
              <a href="tel:+15172008248">
                <Phone className="w-4 h-4 mr-2" />
                (517) 200-8248
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-purple-500/50 text-purple-200 hover:bg-purple-500/20"
              asChild
            >
              <a href="mailto:saibanjamesr@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                saibanjamesr@gmail.com
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-purple-500/50 text-purple-200 hover:bg-purple-500/20"
              asChild
            >
              <a href="https://www.linkedin.com/in/james-saiban-ba3b60217/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-purple-500/50 text-purple-200 hover:bg-purple-500/20"
              asChild
            >
              <a href="https://github.com/SaibanJ" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
