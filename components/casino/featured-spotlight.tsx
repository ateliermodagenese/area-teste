"use client"

import { useState, useEffect, useCallback } from "react"
import type { CasinoGame } from "@/lib/casino-data"

interface FeaturedSpotlightProps {
  games: CasinoGame[]
}

export function FeaturedSpotlight({ games }: FeaturedSpotlightProps) {
  const [current, setCurrent] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const next = useCallback(() => {
    if (games.length <= 1) return
    setIsFlipping(true)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % games.length)
      setIsFlipping(false)
    }, 400)
  }, [games.length])

  useEffect(() => {
    if (games.length <= 1) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [games.length, next])

  if (games.length === 0) return null

  const game = games[current]

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.06]" style={{ background: "var(--casino-surface)" }}>
      {/* Background glow */}
      <div
        className="absolute inset-0 opacity-20 transition-colors duration-700"
        style={{ background: `radial-gradient(ellipse at 30% 50%, ${game.glowColor.replace("0.3", "0.5")}, transparent 70%)` }}
      />

      <div
        className="relative flex items-center gap-4 px-5 py-4"
        style={{
          transform: isFlipping ? "rotateX(90deg)" : "rotateX(0deg)",
          opacity: isFlipping ? 0 : 1,
          transition: "transform 0.4s ease, opacity 0.3s ease",
        }}
      >
        {/* Icon area */}
        <div className="relative flex-shrink-0">
          <div
            className="w-16 h-16 rounded-lg flex items-center justify-center animate-float"
            style={{
              background: `radial-gradient(circle, ${game.glowColor.replace("0.3", "0.15")}, transparent)`,
            }}
          >
            <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
              {game.id === "crash" ? (
                <>
                  <path d="M12 52L28 28L38 36L52 12" stroke={game.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M42 12H52V22" stroke={game.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="52" cy="12" r="5" fill={game.color} fillOpacity="0.4" />
                </>
              ) : game.id === "bicho" ? (
                <>
                  <circle cx="32" cy="28" r="16" stroke={game.color} strokeWidth="3" />
                  <circle cx="26" cy="25" r="2.5" fill={game.color} />
                  <circle cx="38" cy="25" r="2.5" fill={game.color} />
                  <path d="M26 33Q32 38 38 33" stroke={game.color} strokeWidth="2" strokeLinecap="round" />
                  <path d="M22 14L18 6M42 14L46 6" stroke={game.color} strokeWidth="2.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <rect x="12" y="12" width="40" height="40" rx="8" stroke={game.color} strokeWidth="2.5" />
                  <circle cx="32" cy="32" r="8" fill={game.color} fillOpacity="0.3" />
                </>
              )}
            </svg>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-0.5 min-w-0">
          {game.badge && (
            <span
              className="self-start px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md mb-0.5 animate-badge-pulse"
              style={{
                background: game.badge === "HOT" ? "var(--casino-red)" : game.badge === "EXCL" ? "var(--casino-gold)" : "var(--casino-neon)",
                color: game.badge === "HOT" ? "#fff" : "#000",
              }}
            >
              {game.badge}
            </span>
          )}
          <h3 className="text-lg font-bold uppercase tracking-wider text-white leading-none">
            {game.name}
          </h3>
          <p className="text-[10px] uppercase tracking-wide text-white/40">
            {game.subtitle}
          </p>
        </div>

        {/* Play button */}
        <button
          className="ml-auto flex-shrink-0 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            background: game.color,
            color: "#000",
            boxShadow: `0 0 15px ${game.glowColor}`,
          }}
        >
          Jogar
        </button>
      </div>

      {/* Dots indicator */}
      {games.length > 1 && (
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {games.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsFlipping(true)
                setTimeout(() => {
                  setCurrent(i)
                  setIsFlipping(false)
                }, 400)
              }}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i === current ? game.color : "rgba(255,255,255,0.15)",
                boxShadow: i === current ? `0 0 6px ${game.color}` : "none",
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
