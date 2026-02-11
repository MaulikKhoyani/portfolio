"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import { Card, CardContent } from "@/app/components/ui/Card"
import { Container, Section } from "@/app/components/ui/Section"

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, TechStart",
        content: "Maulik delivered our app on time and it exceeded our expectations. His attention to detail and Flutter expertise are unmatched.",
    },
    {
        name: "Sarah Smith",
        role: "Product Manager",
        content: "Working with Maulik was a pleasure. He understood our requirements perfectly and suggested improvements that made the app even better.",
    },
    {
        name: "Mike Johnson",
        role: "Founder, AppCo",
        content: "The best freelancer I've worked with. Clean code, great communication, and a fantastic final product. Highly recommended!",
    },
]

export function Testimonials() {
    return (
        <Section id="testimonials" className="bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
                    <p className="text-lg text-muted-foreground">
                        Kind words from people I&apos;ve worked with.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full border-none shadow-md bg-card/50 backdrop-blur-sm">
                                <CardContent className="pt-6 relative">
                                    <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
                                    <p className="text-muted-foreground italic mb-6 relative z-10 pl-4">
                                        &quot;{testimonial.content}&quot;
                                    </p>
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-primary">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
