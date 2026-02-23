'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Settings } from 'lucide-react'
import { TICKER_MESSAGES, formatBRL } from '@/lib/casino-data'

export function TopBar() {
  const [balance, setBalance] = useState(125450.0)
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance((prev) => prev + Math.random() * 50 - 10)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const tickerText = TICKER_MESSAGES.map(
    (msg, i) =>
      `${i % 2 === 0 ? '\u{1F3C6}' : '\u{1F3B0}'} ${msg}`
  ).join('  \u{2022}  ')

  return (
    <div
      className="flex items-center h-14 px-4 relative z-10"
      style={{
        backgroundColor: '#0F0F0F',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 shrink-0 min-w-[160px]">
        <span className="text-[#FFD700] text-lg">{'\u{2666}'}</span>
        <div className="flex flex-col leading-none">
          <span
            className="font-black text-lg tracking-widest text-white"
            style={{ textShadow: '0 0 10px rgba(255,215,0,0.2)' }}
          >
            BLACKOUT
          </span>
          <span
            className="text-[10px] tracking-[0.3em] font-bold"
            style={{
              color: '#FFD700',
              textShadow: '0 0 8px rgba(255,215,0,0.4)',
            }}
          >
            CASINO
          </span>
        </div>
      </div>

      {/* Ticker */}
      <div className="flex-1 overflow-hidden mx-6 relative">
        <div
          className="absolute inset-y-0 left-0 w-12 z-10"
          style={{
            background: 'linear-gradient(to right, #0F0F0F, transparent)',
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-12 z-10"
          style={{
            background: 'linear-gradient(to left, #0F0F0F, transparent)',
          }}
        />
        <div className="relative overflow-hidden h-full flex items-center">
          <div
            ref={tickerRef}
            className="ticker-animate whitespace-nowrap flex items-center"
          >
            <span
              className="text-xs font-medium"
              style={{ color: '#FFD700' }}
            >
              {tickerText}
            </span>
            <span className="mx-4" />
            <span
              className="text-xs font-medium"
              style={{ color: '#FFD700' }}
            >
              {tickerText}
            </span>
          </div>
        </div>
      </div>

      {/* Player info */}
      <motion.div
        className="flex items-center gap-3 shrink-0 rounded-full px-4 py-2 cursor-pointer"
        style={{
          backgroundColor: '#141414',
          border: '1px solid rgba(255,255,255,0.1)',
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400 }}
      >
        {/* Avatar */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6, #FFD700)',
          }}
        >
          C
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-medium text-white">Carlos S.</span>
          <span
            className="text-xs font-mono font-bold tabular-nums"
            style={{
              color: '#10B981',
              textShadow: '0 0 6px rgba(16,185,129,0.4)',
            }}
          >
            {formatBRL(balance)}
          </span>
        </div>
        <Settings className="w-4 h-4 shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }} />
      </motion.div>
    </div>
  )
}
