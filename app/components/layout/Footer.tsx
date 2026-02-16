import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start gap-2">
                    <Link
                        href="#hero"
                        className="text-xl font-bold text-primary"
                    >
                        MK
                    </Link>
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        Building digital experiences that matter.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/MaulikKhoyani"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/maulik-khoyani-64369128b"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        href="mailto:maulik.freelancing1010@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>

                <p className="text-sm text-muted-foreground">
                    © {currentYear} Maulik Khoyani. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
