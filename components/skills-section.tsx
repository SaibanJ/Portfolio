"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Palette, Server, PenToolIcon as Tool } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS", "C++", "Java"],
    },
    {
      title: "Libraries & Frameworks",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      skills: [
        "React 19",
        "Next.js 15",
        "Shadcn/UI",
        "Tailwind CSS 4",
        "Clerk",
        "Express",
        "Prisma",
        "Radix UI",
        "React Hook Form",
        "Zod",
      ],
    },
    {
      title: "Backend & Database",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: ["Supabase", "RESTful APIs", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    },
    {
      title: "Tools & Platforms",
      icon: Tool,
      color: "from-orange-500 to-red-500",
      skills: ["Git", "Vercel", "WHMCS", "Coolify", "Sentry", "Vapi AI", "ESLint", "Prettier", "TurboRepo", "Notion"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm h-full hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-700/50 text-slate-200 border-slate-600/50 hover:bg-slate-600/50 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
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
