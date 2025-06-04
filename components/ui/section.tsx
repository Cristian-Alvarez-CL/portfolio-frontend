import { cn } from "@/lib/utils"
import type React from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string
  variant?: "default" | "white"
  container?: boolean
  children: React.ReactNode
}

export function Section({ id, className, variant = "default", container = true, children, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 px-4",
        variant === "white" ? "bg-white" : "bg-gradient-to-br from-slate-50 to-slate-100",
        className,
      )}
      {...props}
    >
      {container ? <div className="max-w-6xl mx-auto">{children}</div> : children}
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  className?: string
}

export function SectionHeader({ title, className }: SectionHeaderProps) {
  return <h2 className={cn("text-3xl font-bold text-center mb-12", className)}>{title}</h2>
}
