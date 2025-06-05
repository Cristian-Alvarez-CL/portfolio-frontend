import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/ui/feature-card"
import { Section, SectionHeader } from "@/components/ui/section"
import { content } from "@/data/content"
import { Cloud, Server, Shield, Zap } from "lucide-react"
import { images } from "@/data/images"

// Mapping de nombres de iconos a componentes
const iconMap = {
  Zap,
  Shield,
  Server,
  Cloud,
  Github: images.github,
  Linkedin: images.linkdin,
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
            <p key={index + paragraph} className="text-lg text-gray-600 mb-6">
              {paragraph}
            </p>
          ))}
          <div className="flex gap-4">
            {content.about.socialLinks.map((link) => {
              const icon = iconMap[link.icon as keyof typeof iconMap]
              const IconComponent = icon

              return (
                <Button
                  key={link.name}
                  variant="outline"
                  size="sm"
                  className="px-8 py-6 text-base flex items-center gap-2 whitespace-nowrap"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {typeof IconComponent === "string" ? (
                      <img
                        src={IconComponent}
                        alt={link.name}
                        className="w-5 h-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    )}
                    <span className="font-medium">{link.name}</span>
                  </a>
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
                key={index + card.title}
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
