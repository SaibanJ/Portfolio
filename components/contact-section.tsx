"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Github, Send, MapPin, Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { toast } from "sonner"

// Define the schema for form validation.
const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Type for the contact form data
type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with react-hook-form and zod validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // Handle form submission
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Show success message
      toast.success('Message sent successfully! I will get back to you soon.');

      // Reset the form
      reset();
    } catch (error) {
      // Show error message
      toast.error(error instanceof Error ? error.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

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
      href: "https://www.linkedin.com/in/james-saiban-ba3b60217/",
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

        <div className="grid lg:grid-cols-2 gap-12 overflow-hidden">
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-300 text-sm font-medium mb-2 block">First Name</label>
                      <Input
                        {...register("firstName")}
                        placeholder="John"
                        className={`bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 ${errors.firstName ? 'border-red-500' : ''}`}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-slate-300 text-sm font-medium mb-2 block">Last Name</label>
                      <Input
                        {...register("lastName")}
                        placeholder="Doe"
                        className={`bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 ${errors.lastName ? 'border-red-500' : ''}`}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-300 text-sm font-medium mb-2 block">Email</label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="john@example.com"
                      className={`bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-slate-300 text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      {...register("subject")}
                      placeholder="Project Discussion"
                      className={`bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 ${errors.subject ? 'border-red-500' : ''}`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-slate-300 text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      {...register("message")}
                      placeholder="Tell me about your project..."
                      rows={5}
                      className={`bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 resize-none ${errors.message ? 'border-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}

                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
