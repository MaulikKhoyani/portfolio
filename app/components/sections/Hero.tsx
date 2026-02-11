"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

import { Button } from "@/app/components/ui/Button"
import { Container, Section } from "@/app/components/ui/Section"

export function Hero() {
    return (
        <Section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <Container className="flex flex-col items-center text-center gap-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-secondary text-sm font-medium text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Available for Opportunities
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-cyan-500">Maulik Khoyani</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-muted-foreground">
                        Flutter Developer & UI/UX Designer
                    </p>
                    <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
                        Crafting pixel-perfect, production-ready mobile experiences.
                        I bridge the gap between design and engineering to build apps that perform as good as they look.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-0">
                        <Link href="#contact">
                            Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/5">
                        <Link href="#projects">
                            View Projects
                        </Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-6 mt-8"
                >
                    <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} label="GitHub" />
                    <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
                    <SocialLink href="mailto:maulik.freelancing1010@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
                </motion.div>
            </Container>
        </Section>
    )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all hover:-translate-y-1 duration-200"
            aria-label={label}
        >
            {icon}
        </Link>
    )
}
