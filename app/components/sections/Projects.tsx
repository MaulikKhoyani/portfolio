"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/app/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader } from "@/app/components/ui/Card"
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
                        >
                            <Card className="h-full flex flex-col overflow-hidden group hover:border-primary/50 cursor-default">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{project.description}</p>
                                </CardContent>
                                <CardFooter className="gap-4">
                                    {project.links.github && (
                                        <Button asChild variant="outline" size="sm">
                                            <Link href={project.links.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" /> Code
                                            </Link>
                                        </Button>
                                    )}
                                    {project.links.live && (
                                        <Button asChild size="sm">
                                            <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                            </Link>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    )
}
