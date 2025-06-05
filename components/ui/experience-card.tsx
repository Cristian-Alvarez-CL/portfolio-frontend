import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Experience } from "@/utils/types"

interface ExperienceCardProps {
  readonly experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{experience.position}</CardTitle>
            <CardDescription className="text-lg font-medium text-blue-600">{experience.company}</CardDescription>
          </div>
          <Badge variant="secondary">{experience.period}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{experience.description}</p>
        <div>
          <h4 className="font-semibold mb-2">Logros principales:</h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx + achievement} className="flex items-start gap-2 text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
