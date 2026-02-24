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
      {/* Text buttons row */}
      <div className="dock-text-row">
        {DOCK_ITEMS.map((it) => (
          <button
            key={`text-${it.id}`}
            className={`dock-text-btn ${activeTab === it.id ? "act" : ""} ${pr === it.id ? "pr" : ""}`}
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
            {it.label}
          </button>
        ))}
      </div>
      {/* Icon row below */}
      <div className="dock-icon-row">
        {DOCK_ITEMS.map((it) => (
          <button
            key={`icon-${it.id}`}
            className={`dock-icon-btn ${activeTab === it.id ? "act" : ""}`}
            style={{
              "--dc": it.color,
              opacity: disabled ? 0.35 : 1,
              pointerEvents: disabled ? "none" : "auto",
            } as React.CSSProperties}
            onClick={() => onTabChange(it.id)}
          >
            <span className="dock-icon-emoji">{it.icon}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}
