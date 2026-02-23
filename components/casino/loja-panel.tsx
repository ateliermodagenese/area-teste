"use client"

import { Package, ArrowUpCircle, Store } from "lucide-react"

const LOJA_ITEMS = [
  { id: "caixas", name: "Caixas", subtitle: "Abra e ganhe premios", icon: Package, color: "#FFD700", glowColor: "rgba(255,215,0,0.25)" },
  { id: "upgrade", name: "Upgrade", subtitle: "Melhore seus itens", icon: ArrowUpCircle, color: "#10B981", glowColor: "rgba(16,185,129,0.25)" },
  { id: "marketplace", name: "Marketplace", subtitle: "Compre e venda", icon: Store, color: "#3B82F6", glowColor: "rgba(59,130,246,0.25)" },
]

export function LojaPanel() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-4 p-6">
      <div className="grid grid-cols-3 gap-4 w-full max-w-lg">
        {LOJA_ITEMS.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-xl border border-white/[0.06] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
              style={{
                background: `radial-gradient(ellipse at center bottom, ${item.glowColor.replace("0.25", "0.08")}, var(--casino-surface-card) 70%)`,
              }}
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  background: `radial-gradient(circle, ${item.glowColor.replace("0.25", "0.12")}, transparent)`,
                }}
              >
                <Icon className="w-8 h-8" style={{ color: item.color }} />
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-xs font-bold uppercase tracking-wider text-white/90">{item.name}</span>
                <span className="text-[8px] uppercase tracking-wide text-white/30">{item.subtitle}</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
