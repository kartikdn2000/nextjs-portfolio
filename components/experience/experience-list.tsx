"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    company: "AiRobosoft Produts and Services Pvt Ltd",
    role: "Machine Learning Intern ",
    duration: "2022-2023",
    description: "As a Machine Learning Intern, I had the opportunity to work on cutting-edge AI and ML projects. I collaborated with the data science team to design, develop, and deploy machine learning models that solve complex business problems. Throughout this internship, I gained hands-on experience in data preprocessing, model development, and performance optimization.",
    technologies: ["Python, Matplotlib, Anaconda, Linear Regression , OpenCV, MediaPipe"],
    links: {
      github: "https://github.com/example",
      live: "https://example.com"
    }
  },
]

export function ExperienceList() {
  return (
    <div className="space-y-8">
      {experiences.map((experience, index) => (
        <motion.div
          key={experience.company}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="rounded-lg border p-6"
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold">{experience.company}</h2>
              <p className="text-lg text-primary">{experience.role}</p>
              <p className="text-sm text-muted-foreground">{experience.duration}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <a href={experience.links.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={experience.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <p className="mb-4 text-muted-foreground">{experience.description}</p>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}