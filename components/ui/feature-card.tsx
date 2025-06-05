import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

type IconType = LucideIcon | string

interface FeatureCardProps {
  readonly title: string
  readonly description: string
  readonly icon: IconType
  readonly iconColor?: string
  readonly className?: string
}

export function FeatureCard({
  title,
  description,
  icon,
  iconColor = "text-blue-600",
  className,
}: FeatureCardProps) {
  const isImage = typeof icon === "string"

  return (
    <Card className={className}>
      <CardContent className="p-6 text-center">
        {isImage ? (
          <img
            src={icon}
            alt=""
            className="w-8 h-8 mx-auto mb-2"
          />
        ) : (
          // Aquí ya no necesitas aserción, TypeScript sabe que no es string
          (() => {
            const IconComponent = icon
            return <IconComponent className={cn("w-8 h-8 mx-auto mb-2", iconColor)} />
          })()
        )}
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
