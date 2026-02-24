"use client"

import { useState } from "react"
import type { Game } from "@/lib/casino-data"
import { ICON_MAP } from "./icons/icon-map"
import { Badge } from "./badge"

interface GameCardProps {
  game: Game
  size?: "normal" | "large" | "huge"
  index?: number
  onPlay?: (game: Game) => void
}

export function GameCard({ game, size = "normal", index = 0, onPlay }: GameCardProps) {
  const [hovered, setHovered] = useState(false)
  const [pressed, setPressed] = useState(false)
  const isFeatured = game.featured

  /* Icon sizes: huge for featured cards, smaller for grid cards */
  const iconSize = size === "huge" ? 110 : size === "large" ? 90 : 72
  const renderIcon = ICON_MAP[game.id]

  return (
    <div
      className={`g-card ${size} ${isFeatured ? "featured" : ""} ${pressed ? "pressed" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => { setPressed(false); onPlay?.(game) }}
      style={{
        "--c1": game.colors[0],
        "--c2": game.colors[1],
        animationDelay: `${index * 70}ms`,
        transform: hovered ? `translateY(-${isFeatured ? 6 : 4}px) scale(1.02)` : "translateY(0) scale(1)",
      } as React.CSSProperties}
    >
      {/* Gold metallic border frame */}
      <div className="card-gold-frame" />

      {isFeatured && <div className="card-shimmer" />}

      {game.badge && (
        <div className="card-badge-pos">
          <Badge text={game.badge} color={game.badgeColor || "#fff"} />
        </div>
      )}

      {/* Large icon area - dominates the card */}
      <div className="card-icon-wrap">
        <div
          className="card-icon-glow"
          style={{
            background: `radial-gradient(circle,${game.colors[0]}30 0%,${game.colors[1]}10 50%,transparent 70%)`,
            transform: hovered ? "scale(1.5)" : "scale(1)",
            opacity: hovered ? 1 : 0.6,
          }}
        />
        <div
          className="card-icon-main"
          style={{
            transform: hovered ? "scale(1.12) translateY(-4px)" : "scale(1)",
            filter: hovered
              ? `drop-shadow(0 0 25px ${game.colors[0]}99) drop-shadow(0 8px 16px rgba(0,0,0,0.6))`
              : `drop-shadow(0 0 10px ${game.colors[0]}44) drop-shadow(0 4px 8px rgba(0,0,0,0.4))`,
          }}
        >
          {renderIcon ? renderIcon(iconSize) : <span style={{ fontSize: `${iconSize * 0.6}px` }}>{"\uD83C\uDFAE"}</span>}
        </div>
      </div>

      {/* Large, bold game name + subtitle at bottom */}
      <div className="card-text-area">
        <div className="card-name-big">{game.name}</div>
        <div className="card-sub-text">{game.sub}</div>
        {game.players && (
          <div className={`card-players ${hovered ? "show" : ""}`}>
            <span className="live-d" />
            {game.players.toLocaleString()} jogando
          </div>
        )}
      </div>

      {/* Bottom glow line */}
      <div
        className="card-btm-glow"
        style={{
          background: `linear-gradient(90deg,transparent,${game.colors[0]}${hovered ? "bb" : "44"},transparent)`,
          boxShadow: hovered ? `0 2px 25px ${game.colors[0]}55` : "none",
        }}
      />
      {hovered && <div className="card-sweep" style={{ "--sw": game.colors[0] } as React.CSSProperties} />}
    </div>
  )
}
