"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, User, Briefcase, BookOpen, Code, FileText, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme/theme-toggle"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Education", href: "/education", icon: BookOpen },
  { name: "Projects", href: "/projects", icon: Code },
  { name: "Blog", href: "/blog", icon: FileText },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/kartikdn2000", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/kartik-nayak-45b2b3331/", icon: Linkedin },
  { name: "Email", href: "mailto:kartikdn2000@gmail.com", icon: Mail },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full flex-col justify-between px-3 py-4">
        <div>
          <div className="mb-8 flex items-center justify-between px-3">
            <Link href="/" className="text-2xl font-bold">
              Kartik
            </Link>
            <ThemeToggle />
          </div>
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors ${isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "hover:bg-secondary/50"
                    }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              )
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kartik
          </p>
        </div>
      </div>
    </aside>
  )
}