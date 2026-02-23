'use client'

import { motion } from 'framer-motion'
import type { Game } from '@/lib/casino-data'

interface GameCardProps {
  game: Game
  large?: boolean
}

export function GameCard({ game, large }: GameCardProps) {
  const width = large ? 'w-48' : 'w-40'
  const height = large ? 'h-56' : 'h-52'

  return (
    <motion.div
      className={`${width} ${height} shrink-0 rounded-xl cursor-pointer relative overflow-hidden flex flex-col`}
      style={{
        backgroundColor: '#141414',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
      whileHover={{
        scale: 1.04,
        y: -4,
        boxShadow: `0 0 24px ${game.accentColor}25, 0 0 48px ${game.accentColor}10`,
        borderColor: `${game.accentColor}30`,
      }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Shimmer for featured */}
      {game.featured && <div className="shimmer-effect absolute inset-0 z-10 pointer-events-none" />}

      {/* Corner accents */}
      <div
        className="absolute top-2 left-2 w-3 h-3 pointer-events-none"
        style={{
          borderTop: `2px solid ${game.accentColor}`,
          borderLeft: `2px solid ${game.accentColor}`,
        }}
      />
      <div
        className="absolute bottom-2 right-2 w-3 h-3 pointer-events-none"
        style={{
          borderBottom: `2px solid ${game.accentColor}`,
          borderRight: `2px solid ${game.accentColor}`,
        }}
      />

      {/* Top area with emoji */}
      <div
        className="flex-1 flex items-center justify-center relative"
        style={{
          background: `radial-gradient(circle at center, ${game.accentColor}12 0%, transparent 70%)`,
        }}
      >
        {/* Radial glow behind emoji */}
        <div
          className="absolute w-20 h-20 rounded-full blur-xl"
          style={{ backgroundColor: `${game.accentColor}15` }}
        />
        <span className={`relative z-10 ${large ? 'text-5xl' : 'text-4xl'}`}>
          {game.emoji}
        </span>
      </div>

      {/* Info area */}
      <div className="px-3 pb-3 flex flex-col gap-1">
        <span className="text-sm font-bold text-white truncate">
          {game.name}
        </span>
        <span
          className="text-[11px]"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          {game.subtitle}
        </span>
        {game.badges.length > 0 && (
          <div className="flex gap-1 mt-1 flex-wrap">
            {game.badges.map((badge, i) => (
              <span
                key={i}
                className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${badge.colorClass} ${game.featured ? 'badge-pulse' : ''}`}
              >
                {badge.emoji} {badge.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
