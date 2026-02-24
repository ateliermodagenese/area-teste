"use client"

import { useState } from "react"
import { DOCK_ITEMS } from "@/lib/casino-data"
import { LiveFeedTicker } from "./live-feed-ticker"

interface DockProps {
  activeTab: string
  onTabChange: (tab: string) => void
  disabled?: boolean
}

export function Dock({ activeTab, onTabChange, disabled }: DockProps) {
  const [pr, setPr] = useState<string | null>(null)

  return (
    <nav className="dock">
      <LiveFeedTicker />
      <div className="dock-sep" />
      <div className="dock-btns">
        {DOCK_ITEMS.map((it) => (
          <button
            key={it.id}
            className={`dock-b ${activeTab === it.id ? "act" : ""} ${pr === it.id ? "pr" : ""}`}
            style={{
              "--dc": it.color,
              opacity: disabled ? 0.35 : 1,
              pointerEvents: disabled ? "none" : "auto",
            } as React.CSSProperties}
            onClick={() => onTabChange(it.id)}
            onMouseDown={() => setPr(it.id)}
            onMouseUp={() => setPr(null)}
            onMouseLeave={() => setPr(null)}
          >
            <span className="dock-i">{it.icon}</span>
            <span className="dock-l">{it.label}</span>
            {activeTab === it.id && (
              <div
                className="dock-bar"
                style={{
                  background: it.color,
                  boxShadow: `0 0 14px ${it.color}66`,
                }}
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}
