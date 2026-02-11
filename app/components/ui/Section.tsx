import * as React from "react"
import { cn } from "@/app/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string
    className?: string
    children: React.ReactNode
}

export function Section({ id, className, children, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 lg:py-32", className)}
            {...props}
        >
            {children}
        </section>
    )
}

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string
    children: React.ReactNode
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn("container mx-auto px-4 md:px-6", className)}
            {...props}
        >
            {children}
        </div>
    )
}
