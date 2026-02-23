"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface PageIndicatorProps {
  total: number
  current: number
  onPageChange: (page: number) => void
  accentColor?: string
}

export function PageIndicator({ total, current, onPageChange, accentColor = "var(--casino-gold)" }: PageIndicatorProps) {
  if (total <= 1) return null

  return (
    <div className="flex items-center justify-center gap-3 py-1">
      {/* Left arrow */}
      <button
        onClick={() => onPageChange(Math.max(0, current - 1))}
        disabled={current === 0}
        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-20 hover:scale-110 active:scale-95 cursor-pointer disabled:cursor-default"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        aria-label="Pagina anterior"
      >
        <ChevronLeft className="w-3.5 h-3.5 text-white/50" />
      </button>

      {/* Dots */}
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className="transition-all duration-300 rounded-full cursor-pointer"
            style={{
              width: i === current ? 16 : 6,
              height: 6,
              background: i === current ? accentColor : "rgba(255,255,255,0.12)",
              boxShadow: i === current ? `0 0 8px ${accentColor}` : "none",
            }}
            aria-label={`Pagina ${i + 1}`}
          />
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={() => onPageChange(Math.min(total - 1, current + 1))}
        disabled={current === total - 1}
        className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 disabled:opacity-20 hover:scale-110 active:scale-95 cursor-pointer disabled:cursor-default"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        aria-label="Proxima pagina"
      >
        <ChevronRight className="w-3.5 h-3.5 text-white/50" />
      </button>
    </div>
  )
}
