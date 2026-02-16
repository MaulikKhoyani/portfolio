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
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <Card className="h-full bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                    <motion.div
                                        className="p-2 rounded-lg bg-secondary"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {category.icon}
                                    </motion.div>
                                    <CardTitle className="text-lg md:text-xl font-bold">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 pt-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.span
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                className="px-3 py-1.5 bg-secondary/50 border border-border rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/20 transition-all duration-200 cursor-default"
                                            >
                                                {skill}
                                            </motion.span>
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
