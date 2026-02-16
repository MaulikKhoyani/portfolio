"use client"

import { useEffect, useRef } from "react"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    hue: number
}

export function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })
    const animationFrameRef = useRef<number>()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Track mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY }

            // Create new particles
            for (let i = 0; i < 2; i++) {
                particlesRef.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    life: 1,
                    maxLife: 60 + Math.random() * 30,
                    hue: 200 + Math.random() * 80, // Cyan to purple range
                })
            }
        }

        // Animation loop
        const animate = () => {
            if (!ctx) return

            // Clear with fade effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particlesRef.current = particlesRef.current.filter((particle) => {
                particle.x += particle.vx
                particle.y += particle.vy
                particle.life++

                const alpha = 1 - particle.life / particle.maxLife
                if (alpha <= 0) return false

                // Draw particle with gradient
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    20
                )
                gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 60%, ${alpha * 0.8})`)
                gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, ${alpha * 0.4})`)
                gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 40%, 0)`)

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, 20, 0, Math.PI * 2)
                ctx.fill()

                return true
            })

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        window.addEventListener("mousemove", handleMouseMove)
        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            window.removeEventListener("mousemove", handleMouseMove)
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50 mix-blend-screen opacity-60"
            style={{ isolation: "isolate" }}
        />
    )
}
