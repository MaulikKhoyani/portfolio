"use client"

import { motion } from "framer-motion"
import Link from "next/link"

import { Card, CardContent, CardHeader } from "@/app/components/ui/Card"
import { Container, Section } from "@/app/components/ui/Section"

const projects = [
    {
        title: "Ikono Meditation App",
        description: "A calming meditation app built with Flutter featuring audio playback, progress tracking, and daily reminders.",
        tags: ["Flutter", "Audio Players", "State Management"],
        links: {
            github: "https://github.com",
            live: "#",
        },
    },
    {
        title: "Event Management / Social App",
        description: "A comprehensive platform for organizing events, selling tickets, and social networking.",
        tags: ["Flutter", "Firebase", "Stripe API"],
        links: {
            github: "https://github.com",
            live: "#",
        },
    },
    {
        title: "Admin Dashboard",
        description: "A powerful web-based admin panel for managing users, analytics, and content.",
        tags: ["PHP", "MySQL", "Tailwind CSS"],
        links: {
            github: "https://github.com",
            live: "#",
        },
    },
    {
        title: "Job Portal Project",
        description: "A job search application connecting seekers with employers, featuring resume parsing and real-time chat.",
        tags: ["Flutter", "Node.js", "MongoDB"],
        links: {
            github: "https://github.com",
            live: "#",
        },
    },
]

export function Projects() {
    return (
        <Section id="projects" className="bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground">
                        A selection of my recent work in mobile and web development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <motion.h3
                                            className="text-xl font-bold group-hover:text-primary transition-colors"
                                            whileHover={{ x: 5 }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <motion.span
                                                key={tag}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                                                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="pb-8">
                                    <p className="text-muted-foreground">{project.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
