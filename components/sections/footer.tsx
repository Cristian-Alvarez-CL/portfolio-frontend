import { content } from "@/data/content";
import { Code2, Lock } from "lucide-react";
import Link from "next/link";

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
      {/* Enlace oculto para el login */}
      <div className="absolute bottom-2 right-4">
        <Link href="/login" aria-label="Admin Login">
          <Lock className="h-5 w-5 text-gray-700 hover:text-gray-500 transition-colors" />
        </Link>
      </div>
    </footer>
  )
}
