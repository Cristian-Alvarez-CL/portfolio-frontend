import { content } from "@/data/content"
import { Code2 } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Code2 className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">{content.meta.title}</span>
        </div>
        <nav className="hidden md:flex gap-6">
          {content.navigation.map((item, index) => (
            <Link key={index} href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
