"use client"

import { useState, useEffect } from "react"
import { Users } from "lucide-react"

export function LedHeader() {
  const [jackpot, setJackpot] = useState(12_450_000)

  // Simulate jackpot incrementing
  useEffect(() => {
    const interval = setInterval(() => {
      setJackpot((prev) => prev + Math.floor(Math.random() * 150) + 50)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <header className="relative flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "var(--casino-gold-dim)", background: "var(--casino-surface)" }}>
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full animate-neon-pulse" style={{ background: "var(--casino-gold)", boxShadow: "0 0 8px var(--casino-gold)" }} />
          <span className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: "var(--casino-gold)" }}>
            Blackout
          </span>
          <span className="text-sm font-bold tracking-[0.2em] uppercase" style={{ color: "var(--casino-neon)" }}>
            Casino
          </span>
        </div>
      </div>

      {/* Center: Jackpot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-bold">
          Jackpot Global
        </span>
        <span className="led-text text-base font-bold tracking-wider animate-jackpot-glow font-mono">
          {formatCurrency(jackpot)}
        </span>
      </div>

      {/* Right: Balance + Online */}
      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end">
          <span className="text-[8px] uppercase tracking-wider text-white/30">Saldo</span>
          <span className="text-xs font-bold font-mono" style={{ color: "var(--casino-neon)" }}>
            R$ 1.250.500
          </span>
        </div>
        <div className="w-px h-6" style={{ background: "var(--casino-gold-dim)" }} />
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3 text-white/30" />
          <span className="text-[10px] font-mono text-white/40">1.250</span>
        </div>
      </div>
    </header>
  )
}
