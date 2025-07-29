"use client"

import { useState } from "react"
import { content } from "@/data/content"
import { Code2, Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <Code2 className="h-8 w-8 text-blue-600" />
          <span className="text-lg md:text-lg font-bold text-gray-900">
            {content.meta.title}
          </span>
          <Code2 className="h-8 w-8 text-blue-600" />
        </Link>

        {/* Menú de navegación para pantallas de escritorio (md y superior) - sin cambios */}
        <nav className="hidden md:flex gap-6">
          {content.navigation.map((item) => (
            <Link key={item.text} href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">
              {item.text}
            </Link>
          ))}
        </nav>

        {/* Botón del menú de hamburguesa para pantallas pequeñas (móvil y tablet) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {/* Muestra el ícono de X si el menú está abierto, o el de Menú si está cerrado */}
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móvil. Se muestra solo si 'isOpen' es true */}
      {isOpen && (
        <nav className="md:hidden bg-white px-4 pb-4">
          <ul className="flex flex-col items-center gap-4">
            {content.navigation.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                  onClick={handleLinkClick}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}