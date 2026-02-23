'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { formatBRL } from '@/lib/casino-data'

export function HeroBanner() {
  const [jackpot, setJackpot] = useState(234567.89)

  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.random() * 15 + 2)
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden corner-accents shimmer-effect"
      style={{
        background: 'linear-gradient(135deg, #6D28D9 0%, #1a0a3e 40%, #0A0A0A 100%)',
        minHeight: 220,
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? '#FFD700' : '#8B5CF6',
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col justify-center h-full p-8" style={{ minHeight: 220 }}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{'\u{1F4C8}'}</span>
          <h2
            className="text-2xl font-black tracking-wide text-white uppercase"
            style={{ textShadow: '0 0 20px rgba(139,92,246,0.5)' }}
          >
            CRASH MANIA
          </h2>
        </div>
        <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Multiplicadores ate 1000x — Cash out no momento certo!
        </p>

        {/* Jackpot counter */}
        <div className="mb-5">
          <span
            className="text-[11px] tracking-[0.2em] uppercase font-medium"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            Acumulado
          </span>
          <div
            className="text-3xl font-mono font-black tabular-nums mt-1"
            style={{
              color: '#FFD700',
              textShadow: '0 0 20px rgba(255,215,0,0.4), 0 0 40px rgba(255,215,0,0.2)',
            }}
          >
            {formatBRL(jackpot)}
          </div>
        </div>

        <motion.button
          className="self-start rounded-lg px-6 py-3 font-bold text-sm uppercase tracking-wider cursor-pointer"
          style={{
            backgroundColor: '#FFD700',
            color: '#000000',
            boxShadow: '0 0 20px rgba(255,215,0,0.3)',
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(255,215,0,0.5)',
          }}
          whileTap={{ scale: 0.97, y: 1 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          JOGAR AGORA
        </motion.button>
      </div>

      {/* Decorative right side glow */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 50%, rgba(255,215,0,0.08), transparent 60%)',
        }}
      />
    </motion.div>
  )
}
