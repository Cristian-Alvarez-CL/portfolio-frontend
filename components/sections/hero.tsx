import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { content } from "@/data/content"
import { images } from "@/data/images"
import { Calendar, Download, Mail, MapPin, Users } from "lucide-react"

// Mapping de nombres de iconos a componentes
const iconMap = {
  MapPin,
  Calendar,
  Users,
  Download,
  Mail,
}

export function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img
            src={images.profile || "/placeholder.svg"}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">{content.hero.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{content.hero.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {content.hero.badges.map((badge, index) => {
              const Icon = iconMap[badge.icon as keyof typeof iconMap]
              return (
                <Badge key={index + badge.text} variant="secondary" className="px-4 py-2">
                  <Icon className="w-4 h-4 mr-2" />
                  {badge.text}
                </Badge>
              )
            })}
          </div>
          <div className="flex justify-center gap-4">
            {content.hero.buttons.map((button, index) => {
              const Icon = iconMap[button.icon as keyof typeof iconMap]
              return (
                <Button
                  key={index + button.text}
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
      </div>
    </section>
  )
}
