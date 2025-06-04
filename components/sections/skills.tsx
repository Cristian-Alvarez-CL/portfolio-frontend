import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section, SectionHeader } from "@/components/ui/section"
import { content } from "@/data/content"
import { skills } from "@/data/skills"
import { Code2, Database, Server } from "lucide-react"

// Mapping de nombres de iconos a componentes
const iconMap = {
  Code2,
  Database,
  Server,
}

// Mapping de colores
const colorMap = {
  blue: "text-blue-600",
  green: "text-green-600",
  purple: "text-purple-600",
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader title={content.skills.title} />
      <div className="grid md:grid-cols-3 gap-8">
        {content.skills.categories.map((category, index) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap]
          return (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon className={`w-5 h-5 ${colorMap[category.color as keyof typeof colorMap]}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => category.filter.includes(skill.category))
                    .map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}
