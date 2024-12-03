"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "Building Scalable Web Applications with Next.js",
    excerpt: "Learn how to build and deploy scalable web applications using Next.js and modern web technologies.",
    date: "2024-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    slug: "building-scalable-web-applications"
  },
  {
    title: "The Future of Web Development: What's Next?",
    excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
    date: "2024-03-10",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    slug: "future-of-web-development"
  },
  {
    title: "Mastering TypeScript: Best Practices and Tips",
    excerpt: "A comprehensive guide to TypeScript best practices and advanced features for modern web development.",
    date: "2024-03-05",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    slug: "mastering-typescript"
  }
]

export function BlogGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-lg border bg-card"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="mb-4 flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                  })}
                </time>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            <h2 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">
              {post.title}
            </h2>
            <p className="mb-4 line-clamp-2 text-muted-foreground">
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center space-x-1 text-sm font-medium text-primary"
            >
              <span>Read More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  )
}