"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Server } from "lucide-react"

const skills = [
  { name: "Frontend Development", icon: Globe, description: "React, Next.js, TypeScript" },
  { name: "Backend Development", icon: Server, description: "Node.js, Express, Python" },
  { name: "Database Management", icon: Database, description: "PostgreSQL, MongoDB" },
  { name: "DevOps & Cloud", icon: Code2, description: "AWS, Docker, CI/CD" },
]

export function AboutContent() {
  return (
    <div className="space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mb-8 text-4xl font-bold">About Me</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          I'm a passionate Full Stack Developer with 5+ years of experience in building web applications.
          I love creating elegant solutions to complex problems and am constantly learning new technologies.
        </p>
        <p className="text-xl text-muted-foreground">
          When I'm not coding, you can find me contributing to open-source projects,
          writing technical blog posts, or exploring new technologies.
        </p>
      </motion.div>

      <div>
        <h2 className="mb-6 text-2xl font-bold">Skills & Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex items-start space-x-4 rounded-lg border p-4"
            >
              <skill.icon className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold">{skill.name}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}