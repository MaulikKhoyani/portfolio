"use client"

import { motion } from "framer-motion"
import { Code2, Database, Layout, Smartphone } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/Card"
import { Container, Section } from "@/app/components/ui/Section"

const skillCategories = [
    {
        title: "Mobile Development",
        icon: <Smartphone className="w-6 h-6 text-cyan-400" />,
        skills: ["Flutter (Dart)", "Android & iOS", "Cross-Platform", "Responsive UI"]
    },
    {
        title: "State Management & Architecture",
        icon: <Layout className="w-6 h-6 text-purple-400" />,
        skills: ["GetX", "MVC / MVP", "Clean Architecture", "Reusable Components"]
    },
    {
        title: "Backend & Databases",
        icon: <Database className="w-6 h-6 text-blue-400" />,
        skills: ["Firebase Auth", "Cloud Firestore", "Firebase Storage", "REST APIs"]
    },
    {
        title: "UI/UX & Design",
        icon: <Code2 className="w-6 h-6 text-pink-400" />, // Placeholder icon
        skills: ["Figma to Flutter", "Custom Widgets", "Material & Cupertino", "Animations"]
    },
]

export function Skills() {
    return (
        <Section id="skills">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-xl font-bold text-primary mb-2">Tech Stack</h2>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h3>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <div className="p-2 rounded-lg bg-secondary">
                                        {category.icon}
                                    </div>
                                    <CardTitle className="text-lg md:text-xl font-bold">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1.5 bg-secondary/50 border border-border rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
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
