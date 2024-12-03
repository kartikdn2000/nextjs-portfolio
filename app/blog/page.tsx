import { BlogGrid } from "@/components/blog/blog-grid"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Blog Posts</h1>
      <BlogGrid />
    </div>
  )
}