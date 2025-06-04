import { Button } from "@/components/ui/button"
import { Section, SectionHeader } from "@/components/ui/section"
import { content } from "@/data/content"
import { Github, Linkedin, Mail } from "lucide-react"

// Mapping de nombres de iconos a componentes
const iconMap = {
  Mail,
  Github,
  Linkedin,
}

export function Contact() {
  return (
    <Section id="contact" variant="white">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader title={content.contact.title} />
        <p className="text-lg text-gray-600 mb-8">{content.contact.description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {content.contact.buttons.map((button, index) => {
            const Icon = iconMap[button.icon as keyof typeof iconMap]
            return (
              <Button
                key={index}
                size="lg"
                className={button.variant === "primary" ? "bg-blue-600 hover:bg-blue-700" : ""}
                variant={button.variant === "primary" ? "default" : "outline"}
              >
                <Icon className="w-4 h-4 mr-2" />
                {button.text}
              </Button>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
