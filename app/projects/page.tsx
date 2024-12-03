import { ProjectGrid } from "@/components/projects/project-grid"

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <ProjectGrid />
    </div>
  )
}