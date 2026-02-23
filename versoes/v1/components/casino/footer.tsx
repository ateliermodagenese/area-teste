'use client'

import { useEffect, useState } from 'react'
import { formatBRL } from '@/lib/casino-data'

export function Footer() {
  const [players, setPlayers] = useState(247)
  const [bets, setBets] = useState(1847)
  const [paid, setPaid] = useState(234500)
  const [lastWin, setLastWin] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayers((p) => p + Math.floor(Math.random() * 3 - 1))
      setBets((b) => b + Math.floor(Math.random() * 5))
      setPaid((p) => p + Math.floor(Math.random() * 200 + 50))
      setLastWin(() => Math.floor(Math.random() * 12 + 1))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="h-10 flex items-center justify-center px-4 gap-6"
      style={{
        backgroundColor: '#0F0F0F',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <Stat emoji={'\u{1F7E2}'} text={`${players} jogadores online`} />
      <Stat emoji={'\u{1F3B0}'} text={`${bets.toLocaleString('pt-BR')} apostas hoje`} />
      <Stat emoji={'\u{1F4B0}'} text={`${formatBRL(paid)} pagos hoje`} />
      <Stat emoji={'\u{23F1}\u{FE0F}'} text={`Ultima vitoria: ${lastWin}s atras`} />
    </div>
  )
}

function Stat({ emoji, text }: { emoji: string; text: string }) {
  return (
    <span
      className="text-[11px] tracking-wide tabular-nums font-mono"
      style={{ color: 'rgba(255,255,255,0.3)' }}
    >
      {emoji} {text}
    </span>
  )
}
