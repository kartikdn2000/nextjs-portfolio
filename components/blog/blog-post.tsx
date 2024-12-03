"use client"

import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"
import ReactMarkdown from "react-markdown"

interface BlogPostProps {
  title: string
  date: string
  readTime: string
  content: string
}

export function BlogPost({ title, date, readTime, content }: BlogPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-3xl"
    >
      <header className="mb-8">
        <h1 className="mb-4 text-4xl font-bold">{title}</h1>
        <div className="flex items-center space-x-4 text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </time>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </motion.article>
  )
}