"use client"

import { motion } from "framer-motion"

const education = [
  {
    school: "Vishweshwarayya High School Jamkhandi",
    degree: "Class X",
    duration: "2016 - 2017",
    description: "Completed SSLC With the Percentage 78.00%."
  },
  {
    school: "Gnyan Gangotri PU College Jamkhandi",
    degree: "Class XII",
    duration: "2017 - 2019",
    description: "Completed PUC with the Percentage 60.00%"
  },
  {
    school: "Biluru Gurubasava Mahaswamiji Institute Of Technology Mudhol",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    duration: "2019 - 2023",
    description: "Completed Engineering with the CGPA of 7.06 "
  },
  {
    school: "KLS Gogte Institute of Technology",
    degree: "Masters of Technology in Computer Science and Engineering",
    duration: "2023 - 2025",
  }
]

export function EducationTimeline() {
  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
      {education.map((edu, index) => (
        <motion.div
          key={edu.school}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="relative pl-8"
        >
          <div className="absolute left-0 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />
          <div className="rounded-lg border p-6">
            <h2 className="mb-1 text-2xl font-bold">{edu.school}</h2>
            <p className="text-lg text-primary">{edu.degree}</p>
            <p className="mb-2 text-sm text-muted-foreground">{edu.duration}</p>
            <p className="text-muted-foreground">{edu.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}