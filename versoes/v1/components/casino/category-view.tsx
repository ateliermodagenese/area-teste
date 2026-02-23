'use client'

import { motion } from 'framer-motion'
import { GAMES, CATEGORIES } from '@/lib/casino-data'
import { GameCard } from './game-card'

interface CategoryViewProps {
  categoryId: string
}

export function CategoryView({ categoryId }: CategoryViewProps) {
  const category = CATEGORIES.find((c) => c.id === categoryId)
  const games = GAMES.filter((g) => g.category === categoryId)

  if (!category) return null

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{category.emoji}</span>
        <h2 className="text-xl font-black uppercase tracking-wide text-white">
          {category.label}
        </h2>
        <span
          className="text-sm font-medium ml-2"
          style={{ color: 'rgba(255,255,255,0.3)' }}
        >
          {'\u{2014}'} {games.length} {games.length === 1 ? 'jogo' : 'jogos'}
        </span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {games.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
          >
            <GameCard game={game} large />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
