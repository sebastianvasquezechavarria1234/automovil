import { type ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
}

export default function Section({ children, className = '' }: SectionProps) {
  return (
    <section
      className={`story-section relative min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-24 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  )
}
