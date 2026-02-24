"use client"

import { useState } from "react"
import type { Game } from "@/lib/casino-data"
import { ICON_MAP } from "./icons/icon-map"
import { CornerAccents } from "./corner-accents"
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
  const iconSize = size === "huge" ? 100 : size === "large" ? 90 : 75
  const renderIcon = ICON_MAP[game.id]

  return (
    <div
      className={`g-card ${isFeatured ? "featured" : ""} ${pressed ? "pressed" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false) }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => { setPressed(false); onPlay?.(game) }}
      style={{
        "--c1": game.colors[0],
        "--c2": game.colors[1],
        animationDelay: `${index * 70}ms`,
        transform: hovered ? `translateY(-${isFeatured ? 10 : 7}px) scale(1.02)` : "translateY(0) scale(1)",
      } as React.CSSProperties}
    >
      {isFeatured && <div className="card-shimmer" />}
      {isFeatured && <div className="card-border-grad" />}
      {(isFeatured || hovered) && (
        <div className="card-corners" style={{ opacity: hovered ? 1 : isFeatured ? 0.7 : 0 }}>
          <CornerAccents color={isFeatured ? game.colors[0] : "#ffffff33"} s={20} />
        </div>
      )}
      {game.badge && (
        <div className="card-badge-pos">
          <Badge text={game.badge} color={game.badgeColor || "#fff"} />
        </div>
      )}

      <div className="card-icon-wrap">
        <div
          className="card-icon-glow"
          style={{
            background: `radial-gradient(circle,${game.colors[0]}25 0%,transparent 70%)`,
            transform: hovered ? "scale(1.4)" : "scale(1)",
            opacity: hovered ? 1 : 0.5,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            transform: hovered ? "scale(1.1)" : "scale(1)",
            transition: "transform .35s cubic-bezier(.34,1.56,.64,1)",
            filter: hovered
              ? `drop-shadow(0 0 15px ${game.colors[0]}88)`
              : `drop-shadow(0 0 5px ${game.colors[0]}33)`,
          }}
        >
          {renderIcon ? renderIcon(iconSize) : <span style={{ fontSize: `${iconSize * 0.5}px` }}>{"\uD83C\uDFAE"}</span>}
        </div>
      </div>

      <div className="card-text" style={{ background: `linear-gradient(transparent,${game.colors[0]}06)` }}>
        <div className="card-name">{game.name}</div>
        <div className="card-sub">{game.sub}</div>
        {game.players && hovered && (
          <div className="card-live">
            <span className="live-d" />
            {game.players.toLocaleString()} jogando
          </div>
        )}
      </div>

      <div
        className="card-btm-glow"
        style={{
          background: `linear-gradient(90deg,transparent,${game.colors[0]}${hovered ? "99" : "33"},transparent)`,
          boxShadow: hovered ? `0 2px 20px ${game.colors[0]}44` : "none",
        }}
      />
      {hovered && <div className="card-sweep" style={{ "--sw": game.colors[0] } as React.CSSProperties} />}
    </div>
  )
}
