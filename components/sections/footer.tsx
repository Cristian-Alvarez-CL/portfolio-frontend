import { content } from "@/data/content"
import { Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code2 className="h-6 w-6" />
          <span className="text-lg font-semibold">{content.meta.title}</span>
          <Code2 className="h-6 w-6" />
        </div>
        <p className="text-gray-400">{content.meta.copyright}</p>
      </div>
    </footer>
  )
}
