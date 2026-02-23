"use client"

import { Dice5, Swords, ShoppingBag, Gift, Settings } from "lucide-react"
import type { GameCategory } from "@/lib/casino-data"
import { DOCK_TABS } from "@/lib/casino-data"

const iconMap = {
  Dice: Dice5,
  Swords: Swords,
  ShoppingBag: ShoppingBag,
  Gift: Gift,
  Settings: Settings,
}

interface CasinoDockProps {
  activeTab: GameCategory
  onTabChange: (tab: GameCategory) => void
}

export function CasinoDock({ activeTab, onTabChange }: CasinoDockProps) {
  return (
    <nav
      className="flex items-stretch gap-1.5 px-3 py-2 border-t"
      style={{ borderColor: "var(--casino-gold-dim)", background: "var(--casino-surface)" }}
      role="tablist"
    >
      {DOCK_TABS.map((tab) => {
        const Icon = iconMap[tab.icon as keyof typeof iconMap]
        const isActive = activeTab === tab.id

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className="group relative flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-lg transition-all duration-200 cursor-pointer select-none"
            style={{
              background: isActive
                ? "linear-gradient(180deg, rgba(255,215,0,0.12) 0%, rgba(255,215,0,0.04) 100%)"
                : "transparent",
              transform: isActive ? "translateY(1px)" : "translateY(0)",
              boxShadow: isActive
                ? "0 0 15px rgba(255,215,0,0.1), inset 0 1px 0 rgba(255,215,0,0.2)"
                : "none",
            }}
          >
            {/* Active top bar */}
            {isActive && (
              <div
                className="absolute top-0 left-2 right-2 h-0.5 rounded-full"
                style={{ background: "var(--casino-gold)", boxShadow: "0 0 8px var(--casino-gold)" }}
              />
            )}

            <Icon
              className="w-4 h-4 transition-all duration-200"
              style={{
                color: isActive ? "var(--casino-gold)" : "rgba(255,255,255,0.3)",
                filter: isActive ? "drop-shadow(0 0 4px rgba(255,215,0,0.4))" : "none",
              }}
            />
            <span
              className="text-[8px] font-bold uppercase tracking-[0.15em] transition-colors duration-200"
              style={{
                color: isActive ? "var(--casino-gold)" : "rgba(255,255,255,0.3)",
              }}
            >
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
