import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  iconColor?: string
  className?: string
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  iconColor = "text-blue-600",
  className,
}: FeatureCardProps) {
  return (
    <Card className={className}>
      <CardContent className="p-6 text-center">
        <Icon className={cn("w-8 h-8 mx-auto mb-2", iconColor)} />
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
