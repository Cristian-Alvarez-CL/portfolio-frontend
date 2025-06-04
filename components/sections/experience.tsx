import { ExperienceCard } from "@/components/ui/experience-card"
import { Section, SectionHeader } from "@/components/ui/section"
import { content } from "@/data/content"
import { experience } from "@/data/experience"

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader title={content.experience.title} />
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </Section>
  )
}
