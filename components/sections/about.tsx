import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/ui/feature-card"
import { Section, SectionHeader } from "@/components/ui/section"
import { content } from "@/data/content"
import { Cloud, Github, Linkedin, Server, Shield, Zap } from "lucide-react"

// Mapping de nombres de iconos a componentes
const iconMap = {
  Zap,
  Shield,
  Server,
  Cloud,
  Github,
  Linkedin,
}

// Mapping de colores
const colorMap = {
  blue: "text-blue-600",
  green: "text-green-600",
  purple: "text-purple-600",
  orange: "text-orange-600",
}

export function About() {
  return (
    <Section id="about" variant="white">
      <SectionHeader title={content.about.title} />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          {content.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-600 mb-6">
              {paragraph}
            </p>
          ))}
          <div className="flex gap-4">
            {content.about.socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <Button key={index} variant="outline" size="sm">
                  <Icon className="w-4 h-4 mr-2" />
                  {link.name}
                </Button>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {content.about.cards.map((card, index) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap]
            return (
              <FeatureCard
                key={index}
                title={card.title}
                description={card.description}
                icon={Icon}
                iconColor={colorMap[card.color as keyof typeof colorMap]}
              />
            )
          })}
        </div>
      </div>
    </Section>
  )
}
