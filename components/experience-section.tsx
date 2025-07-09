"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code, Package } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Freelance Web Hosting & Website Developer",
      company: "Self-Employed",
      location: "Michigan, USA",
      period: "2021 – Present",
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
      responsibilities: [
        "Built and managed client websites using WHMCS reseller hosting and modern web technologies",
        "Provided end-to-end services including domain setup, deployment, maintenance, and client support",
        "Delivered responsive WordPress sites using custom code and plugins, implementing SEO best practices",
      ],
    },
    {
      title: "Stockroom Coordinator",
      company: "Cintas Corporation",
      location: "Lansing, MI",
      period: "2023 – 2025",
      icon: Package,
      gradient: "from-blue-500 to-cyan-500",
      responsibilities: [
        "Handled inventory management, order tracking, and new account preparation using SAP systems (BOBJ, MIGO)",
        "Collaborated with sales, service, and KAM teams to ensure timely installs and resolve customer inquiries",
        "Trained in multiple stockroom operations including grading, inventory, heat sealing, and emblem filing",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Professional journey combining technical expertise with business acumen
          </p>
        </motion.div>

        <div className="space-y-8 overflow-hidden">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${experience.gradient}`}>
                        <experience.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white text-xl">{experience.title}</CardTitle>
                        <p className="text-purple-300 font-medium">{experience.company}</p>
                        <p className="text-slate-400 text-sm">{experience.location}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-slate-700/50 text-slate-200 border-slate-600/50">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-slate-300 leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
