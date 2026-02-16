"use client"

import { motion } from "framer-motion"
import { Mail, MessageSquare, Phone, Send } from "lucide-react"
import Link from "next/link"
import React from "react"

import { Button } from "@/app/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/Card"
import { Input } from "@/app/components/ui/Input"
import { Container, Section } from "@/app/components/ui/Section"
import { Textarea } from "@/app/components/ui/Textarea"

export function Contact() {
    const [isSubmitted, setIsSubmitted] = React.useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch("https://formspree.io/f/mzdagpgj", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true)
                form.reset()
                // Reset success message after 5 seconds
                setTimeout(() => setIsSubmitted(false), 5000)
            } else {
                alert("Oops! There was a problem submitting your form. Please try again.")
            }
        } catch (error) {
            alert("Oops! There was a problem submitting your form. Please try again.")
        }
    }

    const contactLinks = [
        {
            title: "Email Me",
            value: "maulik.freelancing1010@gmail.com",
            href: "mailto:maulik.freelancing1010@gmail.com",
            icon: Mail,
            color: "text-primary",
            bg: "bg-primary/10",
        },
        {
            title: "WhatsApp",
            value: "+91 9773279892",
            href: "https://wa.me/919773279892",
            icon: MessageSquare,
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
    ]

    return (
        <Section id="contact">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground">
                        Have a project in mind? Let&apos;s build something amazing together.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {contactLinks.map((link, index) => (
                            <motion.a
                                key={link.title}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="block"
                            >
                                <Card className="hover:border-primary/50 transition-all duration-300">
                                    <CardContent className="p-6 flex items-center gap-4">
                                        <div className={`w-12 h-12 ${link.bg} rounded-full flex items-center justify-center ${link.color}`}>
                                            <link.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{link.title}</h4>
                                            <p className="text-muted-foreground">{link.value}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.a>
                        ))}

                        <div className="p-6 bg-secondary/50 rounded-xl border border-secondary">
                            <h4 className="font-bold mb-2">Available for Freelance</h4>
                            <p className="text-muted-foreground">
                                I&apos;m currently accepting new projects. Feel free to reach out for a consultation.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Send a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-primary/10 border border-primary/20 p-8 rounded-xl text-center space-y-4"
                                    >
                                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto text-primary">
                                            <Send className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold">Message Sent!</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Thank you for reaching out. I&apos;ll get back to you soon at maulik.freelancing1010@gmail.com.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                                <Input name="name" id="name" placeholder="John Doe" required />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                                <Input name="email" id="email" type="email" placeholder="john@example.com" required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                            <Input name="subject" id="subject" placeholder="Project Inquiry" required />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">Message</label>
                                            <Textarea
                                                name="message"
                                                id="message"
                                                placeholder="Tell me about your project..."
                                                className="min-h-[150px]"
                                                required
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 font-bold"
                                        >
                                            Send Message <Send className="w-4 h-4 ml-2" />
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
