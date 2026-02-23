'use client'

import { motion } from 'framer-motion'

const QUICK_GAMES = [
  { emoji: '\u{26A1}', name: 'Crash', gradient: 'linear-gradient(135deg, #8B5CF6, #3B82F6)' },
  { emoji: '\u{1F48E}', name: 'Mines', gradient: 'linear-gradient(135deg, #10B981, #14B8A6)' },
  { emoji: '\u{1F0CF}', name: 'Blackjack', gradient: 'linear-gradient(135deg, #FFD700, #F59E0B)' },
  { emoji: '\u{1F3B0}', name: 'Slots', gradient: 'linear-gradient(135deg, #EF4444, #EC4899)' },
]

export function QuickAccess() {
  return (
    <motion.div
      className="flex gap-3 mt-5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {QUICK_GAMES.map((game) => (
        <motion.button
          key={game.name}
          className="flex items-center gap-2 rounded-full px-5 py-2.5 cursor-pointer text-sm font-semibold text-white"
          style={{
            background: game.gradient,
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
          }}
          whileHover={{
            scale: 1.06,
            boxShadow: '0 4px 25px rgba(0,0,0,0.5)',
          }}
          whileTap={{ scale: 0.95, y: 1 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <span className="text-base">{game.emoji}</span>
          <span>{game.name}</span>
        </motion.button>
      ))}
    </motion.div>
  )
}
