import { ParticlesBackground } from "@/components/3d/particles-background"
import { HeroContent } from "@/components/home/hero-content"

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-16">
        <HeroContent />
      </div>
    </>
  )
}