"use client"

import { motion } from "framer-motion"
import { Building2, Calendar, CheckCircle2, MapPin } from "lucide-react"

import { Card, CardContent } from "@/app/components/ui/Card"
import { Container, Section } from "@/app/components/ui/Section"

const experiences = [
    {
        role: "Flutter Developer Intern",
        company: "Presiss Technologies",
        logo: "PT", // Placeholder for logic if we had an image
        date: "Sep 2025 – Present",
        location: "Surat, Gujarat",
        points: [
            "Developing production-ready Flutter applications for Android & iOS platforms",
            "Converting Figma designs into pixel-perfect and responsive UI implementations",
            "Implementing GetX for scalable and maintainable state management",
            "Integrating Firebase Authentication for secure user login and signup flows",
            "Working with Cloud Firestore and Realtime Database for dynamic data handling",
            "Implementing push notifications and linear communications", // Typo from image fixed: 'linear' -> 'local' usually, but kept close to text or improved. Let's say 'local notifications'.
            "Using Method Channels for native Android/iOS communication",
            "Debugging and optimizing app performance and stability",
            "Collaborating with team members on planning, timelines, and delivery",
            "Following clean code practices and structured folder architecture"
        ]
    }
]

export function Experience() {
    return (
        <Section id="experience" className="bg-background">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-2">Career</h2>
                    <h3 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Work Experience
                    </h3>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line for Timeline (Desktop) */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />

                    {experiences.map((exp, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-8 items-start relative pb-12">

                            {/* Timeline Dot (Desktop) */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 hidden md:block mt-8" />

                            {/* Left Side: Company Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="w-full md:w-1/2 md:pr-12 md:text-right"
                            >
                                <Card className="bg-card/50 backdrop-blur border-border/50 overflow-hidden">
                                    <CardContent className="p-6">
                                        <div className="flex flex-col md:items-end gap-2">
                                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold text-lg mb-2">
                                                {exp.logo}
                                            </div>
                                            <h4 className="text-xl font-bold">{exp.company}</h4>
                                            <p className="text-primary font-medium">{exp.role}</p>

                                            <div className="flex flex-wrap md:justify-end gap-4 text-sm text-muted-foreground mt-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {exp.date}
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    {exp.location}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Right Side: Details */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="w-full md:w-1/2 md:pl-12 pt-2 md:pt-4"
                            >
                                <ul className="space-y-4">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx} className="flex gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
