"use client"

import { motion } from "framer-motion"

export function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl"
    >
      <h1 className="mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl">
        Hi, I'm <span className="text-primary">Kartik Naik</span>
      </h1>
      <p className="mb-8 text-xl text-muted-foreground">
        A passionate Full Stack Developer with expertise in building modern web applications.
        I specialize in React, Node.js, and cloud technologies.
      </p>
      <div className="flex space-x-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/projects"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          View Projects
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Contact Me
        </motion.a>
      </div>
    </motion.div>
  )
}