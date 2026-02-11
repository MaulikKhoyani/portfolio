"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/app/components/ui/Card"
import { Container, Section } from "@/app/components/ui/Section"

const services = [
    {
        title: "Custom Flutter App Development",
        description: "Building high-performance, cross-platform mobile applications tailored to your business needs.",
    },
    {
        title: "UI to Flutter Conversion",
        description: "Transforming your Figma or XD designs into pixel-perfect, responsive Flutter code.",
    },
    {
        title: "Firebase Integration",
        description: "Seamless integration of Firebase Auth, Firestore, and Cloud Functions for robust backends.",
    },
    {
        title: "API Integration",
        description: "Connecting your app to RESTful APIs and third-party services like Stripe, Google Maps, etc.",
    },
    {
        title: "App Deployment",
        description: "Handling the entire submission process for Google Play Store and Apple App Store.",
    },
    {
        title: "Bug Fixing & Optimization",
        description: "Analyzing existing code to identify bottlenecks, fix bugs, and improve performance.",
    },
]

export function Services() {
    return (
        <Section id="services">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Freelance Services</h2>
                    <p className="text-lg text-muted-foreground">
                        Professional services to help you bring your ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full hover:border-primary/50 transition-colors">
                                <CardHeader>
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle2 className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">{service.title}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{service.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
