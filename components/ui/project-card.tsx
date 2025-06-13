import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Project } from "@/utils/types"
import { ExternalLink } from "lucide-react"
import { images } from "@/data/images"
import Image from "next/image"

interface ProjectCardProps {
  readonly project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="mb-4">
          <h4 className="font-semibold mb-2">Tecnologías:</h4>
          <div className="flex flex-wrap gap-1">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <h4 className="font-semibold mb-2">Características:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {project.features.map((feature, idx) => (
              <li key={idx + feature} className="flex items-start gap-2">
                <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <div className="p-6 pt-0">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Image width={20}
                height={20} 
                src={images.github} 
                alt="GitHub" 
                className="w-4 h-4 mr-2"
              />
              <span>Código</span>
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </a>
          </Button>
        </div>
      </div>
    </Card>
  )
}
