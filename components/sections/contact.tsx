import { Button } from "@/components/ui/button"
import { Section, SectionHeader } from "@/components/ui/section"
import { content } from "@/data/content"
import { Mail } from "lucide-react"
import { images } from "@/data/images"

// Mapping de nombres de iconos a componentes
const iconMap = {
  Mail,
  Github: images.github,
  Linkedin: images.linkdin,
}

export function Contact() {
  return (
    <Section id="contact" variant="white">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader title={content.contact.title} />
        <p className="text-lg text-gray-600 mb-8">{content.contact.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {content.contact.buttons.map((button, index) => {
            const icon = iconMap[button.icon as keyof typeof iconMap]
            const IconComponent = icon
            return (
              <Button
                key={button.text}
                size="lg"
                asChild
                className={button.variant === "primary"
                  ? "bg-green-400 hover:bg-green-500/50 px-8 py-6 text-base flex items-center gap-2 whitespace-nowrap"
                  : "flex items-center gap-2 px-8 py-6 text-base whitespace-nowrap"}
                variant={button.variant === "primary" ? "default" : "outline"}
              >
                <a href={button.href} target="_blank" rel="noopener noreferrer">
                  {typeof IconComponent === "string" ? (
                    <img
                      src={IconComponent}
                      alt={`Icon for ${button.text}`}
                      className="w-5 h-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  )}
                  <span className="font-medium">{button.text}</span>
                </a>
              </Button>

            )
          })}
        </div>
      </div>
    </Section>
  )
}
