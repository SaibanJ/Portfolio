"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ExternalLink, Github, Mic, Palette } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Converso - AI Teaching Platform",
      description:
        "A real-time AI-powered education platform featuring voice-based teaching companions with progress tracking and subscription management.",
      image: "/projectvapi.png",
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "Vapi AI", "Clerk", "Vercel"],
      liveUrl: "https://saas-app1-lana.vercel.app",
      githubUrl: "https://github.com/SaibanJ/saas-app",
      icon: Mic,
      gradient: "from-purple-500 to-pink-500",
      year: "2024 – Present",
    },
    {
      title: "First Portfolio Website",
      description:
        "A personal portfolio website designed from scratch using Figma for UI design and React for development, showcasing early web development skills.",
      image: "/projectportfolio.png",
      technologies: ["React", "Figma", "HTML", "CSS"],
      liveUrl: "https://saibanj.github.io/my-portfolio-redone",
      githubUrl: "https://github.com/SaibanJ/my-portfolio-redone/tree/gh-pages",
      icon: Palette,
      gradient: "from-blue-500 to-cyan-500",
      year: "2021",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm overflow-hidden hover:bg-slate-800/70 transition-all duration-300 h-full">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-slate-300 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-slate-700/50 text-slate-200 border-slate-600/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white`}
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
