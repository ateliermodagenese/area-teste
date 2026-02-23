'use client'

import { motion } from 'framer-motion'
import { GAMES, CATEGORIES } from '@/lib/casino-data'
import { HeroBanner } from './hero-banner'
import { QuickAccess } from './quick-access'
import { GameCard } from './game-card'

interface LobbyProps {
  onCategoryClick: (categoryId: string) => void
}

export function Lobby({ onCategoryClick }: LobbyProps) {
  return (
    <motion.div
      className="p-6 flex flex-col gap-8"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <HeroBanner />

      {/* Quick Access */}
      <QuickAccess />

      {/* Categories */}
      {CATEGORIES.map((cat, catIndex) => {
        const games = GAMES.filter((g) => g.category === cat.id)
        const isBrazilian = cat.id === 'brasileiro'

        return (
          <motion.section
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + catIndex * 0.08, duration: 0.4 }}
          >
            {/* Section header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg">{cat.emoji}</span>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  {cat.label}
                </h3>
              </div>
              <button
                onClick={() => onCategoryClick(cat.id)}
                className="text-xs font-medium cursor-pointer transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.4)' }}
              >
                Ver todos {'\u{2192}'}
              </button>
            </div>

            {/* Scroll row */}
            <div
              className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar scroll-snap-x"
              style={
                isBrazilian
                  ? {
                      borderRadius: 12,
                      padding: 16,
                      border: '1px solid rgba(255,215,0,0.15)',
                      background: 'rgba(255,215,0,0.02)',
                    }
                  : undefined
              }
            >
              {games.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  large={game.featured}
                />
              ))}
            </div>
          </motion.section>
        )
      })}
    </motion.div>
  )
}
