import { ProjectCard } from "@/components/ui/project-card"
import { Section, SectionHeader } from "@/components/ui/section"
import { content } from "@/data/content"
import { projects } from "@/data/projects"

export function Projects() {
  return (
    <Section id="projects" variant="white">
      <SectionHeader title={content.projects.title} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  )
}
