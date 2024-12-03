import { notFound } from "next/navigation"
import { BlogPost } from "@/components/blog/blog-post"

// This would typically come from a CMS or API
const blogPosts = {
  "building-scalable-web-applications": {
    title: "Building Scalable Web Applications with Next.js",
    date: "2024-03-15",
    readTime: "8 min read",
    content: `
      Next.js has revolutionized the way we build web applications, offering a powerful framework that combines the best of React with server-side rendering capabilities.

      ## Why Next.js?

      Next.js provides several key features that make it an excellent choice for building modern web applications:

      1. Hybrid Static & Server Rendering
      2. Automatic Code Splitting
      3. Built-in CSS and Sass Support
      4. API Routes
      5. Fast Refresh

      ## Getting Started

      To create a new Next.js application, you can use the following command:

      \`\`\`bash
      npx create-next-app@latest my-app
      \`\`\`

      This will set up a new Next.js project with all the necessary configurations and dependencies.

      ## Best Practices

      When building scalable applications with Next.js, consider the following best practices:

      - Use TypeScript for better type safety
      - Implement proper code organization
      - Optimize images using next/image
      - Utilize incremental static regeneration
      - Implement proper error boundaries
    `
  },
  "future-of-web-development": {
    title: "The Future of Web Development: What's Next?",
    date: "2024-03-10",
    readTime: "6 min read",
    content: `
      The web development landscape is constantly evolving, with new technologies and approaches emerging regularly.

      ## Current Trends

      Several trends are shaping the future of web development:

      1. AI-Powered Development Tools
      2. WebAssembly
      3. Edge Computing
      4. Progressive Web Apps
      5. Serverless Architecture

      ## Emerging Technologies

      Keep an eye on these emerging technologies:

      - Web3 and Blockchain
      - AI/ML Integration
      - Advanced JavaScript Frameworks
      - Improved Developer Tools
    `
  },
  "mastering-typescript": {
    title: "Mastering TypeScript: Best Practices and Tips",
    date: "2024-03-05",
    readTime: "10 min read",
    content: `
      TypeScript has become an essential tool for modern web development, providing type safety and improved developer experience.

      ## Why TypeScript?

      TypeScript offers several advantages:

      1. Static Type Checking
      2. Enhanced IDE Support
      3. Better Code Organization
      4. Improved Maintainability
      5. Strong Ecosystem

      ## Advanced Features

      Some advanced TypeScript features to master:

      - Generics
      - Utility Types
      - Decorators
      - Type Guards
      - Mapped Types
    `
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <BlogPost {...post} />
    </div>
  )
}