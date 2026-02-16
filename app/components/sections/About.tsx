"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, Smartphone } from "lucide-react"
import Image from "next/image"

import { Container, Section } from "@/app/components/ui/Section"

export function About() {
    return (
        <Section id="about" className="bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-lg text-muted-foreground">
                        A passionate Flutter Developer & UI/UX Designer translating ideas into performant mobile applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold">
                            BSc.IT Graduate (2025) with Production Experience
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I specialize in building cross-platform mobile apps using Flutter. My expertise extends from crafting pixel-perfect UIs to integrating complex backends with Firebase and REST APIs.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            I leverage AI tools to boost productivity and deliver robust, scalable code. Whether it's integrating payments, handling state management with GetX, or optimizing app performance, I ensure top-notch quality.
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-2">
                                <Smartphone className="text-primary w-5 h-5" />
                                <span className="font-medium">Flutter Expert</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Layout className="text-primary w-5 h-5" />
                                <span className="font-medium">Pixel Perfect UI</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Database className="text-primary w-5 h-5" />
                                <span className="font-medium">Firebase / API</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Code className="text-primary w-5 h-5" />
                                <span className="font-medium">Clean Architecture</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative"
                    >
                        <motion.div
                            className="relative aspect-square rounded-2xl overflow-hidden"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-1 rounded-2xl">
                                <div className="w-full h-full bg-background rounded-2xl overflow-hidden">
                                    <Image
                                        src="/portfolio/1770192747797.jpeg"
                                        alt="Maulik Khoyani - Flutter Developer"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    )
}
