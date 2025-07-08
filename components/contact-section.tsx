"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(517) 200-8248",
      href: "tel:+15172008248",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Mail,
      label: "Email",
      value: "saibanjamesr@gmail.com",
      href: "mailto:saibanjamesr@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "james-saiban",
      href: "https://linkedin.com/in/james-saiban",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "SaibanJ",
      href: "https://github.com/SaibanJ",
      gradient: "from-gray-700 to-gray-900",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8" />
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
                    rel={contact.label === "LinkedIn" || contact.label === "GitHub" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-4 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-all duration-300 group"
                  >
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${contact.gradient} mr-4 group-hover:scale-110 transition-transform`}
                    >
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{contact.label}</p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-white text-lg font-semibold mb-4">Available For</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    Freelance Projects
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    Full-time Opportunities
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    Consulting & Code Reviews
                  </div>
                  <div className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    Technical Partnerships
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-slate-300 text-sm font-medium mb-2 block">First Name</label>
                    <Input
                      placeholder="John"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="text-slate-300 text-sm font-medium mb-2 block">Last Name</label>
                    <Input
                      placeholder="Doe"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 text-sm font-medium mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-slate-300 text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    placeholder="Project Discussion"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-slate-300 text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 resize-none"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
