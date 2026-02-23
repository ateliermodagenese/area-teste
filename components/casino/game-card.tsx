"use client"

import { useState } from "react"
import type { CasinoGame } from "@/lib/casino-data"

// SVG icon components for each game
function GameIcon({ gameId, color }: { gameId: string; color: string }) {
  const iconMap: Record<string, React.ReactNode> = {
    crash: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <path d="M12 52L28 28L38 36L52 12" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42 12H52V22" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="52" cy="12" r="4" fill={color} fillOpacity="0.4" />
      </svg>
    ),
    bicho: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <circle cx="32" cy="28" r="16" stroke={color} strokeWidth="3" />
        <circle cx="26" cy="25" r="2.5" fill={color} />
        <circle cx="38" cy="25" r="2.5" fill={color} />
        <path d="M26 33Q32 38 38 33" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M22 14L18 6M42 14L46 6" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <path d="M20 44Q26 52 32 48Q38 52 44 44" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    roleta: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <circle cx="32" cy="32" r="22" stroke={color} strokeWidth="3" />
        <circle cx="32" cy="32" r="14" stroke={color} strokeWidth="2" strokeOpacity="0.5" />
        <circle cx="32" cy="32" r="4" fill={color} />
        <line x1="32" y1="10" x2="32" y2="18" stroke={color} strokeWidth="2" />
        <line x1="32" y1="46" x2="32" y2="54" stroke={color} strokeWidth="2" />
        <line x1="10" y1="32" x2="18" y2="32" stroke={color} strokeWidth="2" />
        <line x1="46" y1="32" x2="54" y2="32" stroke={color} strokeWidth="2" />
      </svg>
    ),
    blackjack: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="8" y="12" width="24" height="34" rx="3" stroke={color} strokeWidth="2.5" transform="rotate(-8 8 12)" />
        <rect x="30" y="14" width="24" height="34" rx="3" stroke={color} strokeWidth="2.5" transform="rotate(8 30 14)" />
        <text x="18" y="34" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">A</text>
        <text x="44" y="34" fill={color} fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="monospace">K</text>
      </svg>
    ),
    poker: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <path d="M32 14C32 14 22 22 22 30C22 36 26.5 40 32 40C37.5 40 42 36 42 30C42 22 32 14 32 14Z" stroke={color} strokeWidth="2.5" />
        <path d="M32 40V52" stroke={color} strokeWidth="2.5" />
        <path d="M24 48H40" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    slots: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="8" y="14" width="48" height="36" rx="4" stroke={color} strokeWidth="2.5" />
        <line x1="24" y1="14" x2="24" y2="50" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="40" y1="14" x2="40" y2="50" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
        <text x="16" y="37" fill={color} fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">7</text>
        <text x="32" y="37" fill={color} fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">7</text>
        <text x="48" y="37" fill={color} fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="monospace">7</text>
      </svg>
    ),
    mines: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <circle cx="32" cy="32" r="12" stroke={color} strokeWidth="2.5" />
        <circle cx="32" cy="32" r="4" fill={color} />
        <line x1="32" y1="16" x2="32" y2="8" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="32" y1="56" x2="32" y2="48" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="16" y1="32" x2="8" y2="32" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="56" y1="32" x2="48" y2="32" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20.7" y1="20.7" x2="15" y2="15" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="43.3" y1="43.3" x2="49" y2="49" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="20.7" y1="43.3" x2="15" y2="49" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <line x1="43.3" y1="20.7" x2="49" y2="15" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    plinko: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <circle cx="32" cy="10" r="4" fill={color} />
        {[20, 30, 40].map((y, ri) =>
          Array.from({ length: ri + 2 }).map((_, ci) => (
            <circle key={`${ri}-${ci}`} cx={32 - (ri + 1) * 6 + ci * 12} cy={y} r="2" fill={color} fillOpacity="0.5" />
          ))
        )}
        <path d="M14 52H50" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M18 46V52M26 46V52M34 46V52M42 46V52" stroke={color} strokeWidth="1.5" />
      </svg>
    ),
    dados: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="10" y="10" width="44" height="44" rx="8" stroke={color} strokeWidth="2.5" />
        <circle cx="24" cy="24" r="3" fill={color} />
        <circle cx="40" cy="24" r="3" fill={color} />
        <circle cx="32" cy="32" r="3" fill={color} />
        <circle cx="24" cy="40" r="3" fill={color} />
        <circle cx="40" cy="40" r="3" fill={color} />
      </svg>
    ),
    tower: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <rect x="22" y="8" width="20" height="48" rx="2" stroke={color} strokeWidth="2.5" />
        <line x1="22" y1="20" x2="42" y2="20" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="22" y1="32" x2="42" y2="32" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="22" y1="44" x2="42" y2="44" stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M28 14H36" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="26" r="2" fill={color} />
      </svg>
    ),
    wheel: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <circle cx="32" cy="32" r="22" stroke={color} strokeWidth="3" />
        <circle cx="32" cy="32" r="6" fill={color} fillOpacity="0.3" />
        <circle cx="32" cy="32" r="2" fill={color} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180
          return <line key={angle} x1={32 + 6 * Math.cos(rad)} y1={32 + 6 * Math.sin(rad)} x2={32 + 22 * Math.cos(rad)} y2={32 + 22 * Math.sin(rad)} stroke={color} strokeWidth="1.5" strokeOpacity="0.4" />
        })}
        <polygon points="32,6 29,12 35,12" fill={color} />
      </svg>
    ),
    limbo: (
      <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
        <path d="M12 48L32 16L52 48" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
        <text x="32" y="42" fill={color} fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">{"x?"}</text>
      </svg>
    ),
  }

  // Fallback icon for games not in the map
  const fallback = (
    <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10">
      <rect x="12" y="12" width="40" height="40" rx="8" stroke={color} strokeWidth="2.5" />
      <circle cx="32" cy="28" r="6" stroke={color} strokeWidth="2" />
      <path d="M22 44C22 38 26 36 32 36C38 36 42 38 42 44" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )

  return iconMap[gameId] || fallback
}

interface GameCardProps {
  game: CasinoGame
  index: number
  isAnimating: boolean
}

export function GameCard({ game, index, isAnimating }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const animDelay = `${(index % 4) * 80}ms`

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col items-center justify-center rounded-xl border border-white/[0.06] p-3 transition-all duration-300 cursor-pointer select-none overflow-hidden"
      style={{
        background: `radial-gradient(ellipse at center bottom, ${game.glowColor.replace("0.3", "0.06")}, var(--casino-surface-card) 70%)`,
        borderColor: game.featured ? "rgba(255,215,0,0.35)" : undefined,
        boxShadow: game.featured
          ? `0 0 20px rgba(255,215,0,0.12), 0 0 40px rgba(255,215,0,0.05)`
          : isHovered
            ? `0 0 20px ${game.glowColor}`
            : "none",
        transform: isHovered ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)",
        animationDelay: isAnimating ? animDelay : "0ms",
        animation: isAnimating ? `reel-spin 0.5s ease-out ${animDelay} both` : "none",
      }}
      aria-label={`Jogar ${game.name}`}
    >
      {/* Shimmer overlay for featured */}
      {game.featured && (
        <div className="absolute inset-0 animate-shimmer rounded-xl pointer-events-none" />
      )}

      {/* Corner accents for featured */}
      {game.featured && (
        <>
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-xl" style={{ borderColor: "var(--casino-gold)" }} />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-xl" style={{ borderColor: "var(--casino-gold)" }} />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-xl" style={{ borderColor: "var(--casino-gold)" }} />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-xl" style={{ borderColor: "var(--casino-gold)" }} />
        </>
      )}

      {/* Badge */}
      {game.badge && (
        <span
          className="absolute top-1.5 right-1.5 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md animate-badge-pulse"
          style={{
            background: game.badge === "HOT" ? "var(--casino-red)" : game.badge === "FREE" ? "var(--casino-neon)" : game.badge === "NEW" ? "#3B82F6" : "var(--casino-gold)",
            color: game.badge === "FREE" || game.badge === "EXCL" ? "#000" : "#fff",
          }}
        >
          {game.badge}
        </span>
      )}

      {/* Icon with glow */}
      <div
        className="relative mb-1.5 transition-transform duration-300"
        style={{
          filter: isHovered ? `drop-shadow(0 0 8px ${game.color})` : "none",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        <GameIcon gameId={game.id} color={game.color} />
      </div>

      {/* Name */}
      <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 text-center leading-tight">
        {game.name}
      </span>

      {/* Subtitle */}
      <span className="text-[8px] uppercase tracking-wide text-white/30 mt-0.5">
        {game.subtitle}
      </span>
    </button>
  )
}
