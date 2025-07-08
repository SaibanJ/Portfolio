"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Heart, Code, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Heart className="w-6 h-6 text-red-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">My Journey</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  After stepping away from college to care for family and experiencing homelessness, I taught myself
                  software development and built real-world applications using modern web technologies. Through every
                  setback, resilience has defined me—and my passion for coding remains as strong as ever.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">What I Do</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Today, I run my own hosting business, develop client solutions, and create tech that solves real
                  problems. I specialize in full-stack development with modern technologies like React, Next.js, and
                  TypeScript.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Zap className="w-6 h-6 text-yellow-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Core Values</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-500/30 mr-3">
                      Resilience
                    </Badge>
                    <span className="text-slate-300">Turning challenges into opportunities</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-500/30 mr-3">
                      Innovation
                    </Badge>
                    <span className="text-slate-300">Building solutions that matter</span>
                  </div>
                  <div className="flex items-center">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-200 border-green-500/30 mr-3">
                      Growth
                    </Badge>
                    <span className="text-slate-300">Continuous learning and improvement</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Education & Learning</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-purple-300 font-medium">Jackson Community College</p>
                    <p className="text-slate-400 text-sm">A.A.S. in Software Development (2017-2020)</p>
                  </div>
                  <div>
                    <p className="text-purple-300 font-medium">Harvard CS50</p>
                    <p className="text-slate-400 text-sm">Introduction to Computer Science (edX)</p>
                  </div>
                  <div>
                    <p className="text-purple-300 font-medium">Self-Taught Engineer</p>
                    <p className="text-slate-400 text-sm">Modern full-stack technologies & deployment</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
