"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import type { Game } from "@/lib/casino-data"
import { HERO_SLIDES } from "@/lib/casino-data"
import { ICON_MAP } from "./icons/icon-map"
import { Badge } from "./badge"

interface HeroCarouselProps {
  onPlay?: (game: Game) => void
}

export function HeroCarousel({ onPlay }: HeroCarouselProps) {
  const [cur, setCur] = useState(0)
  const [trans, setTrans] = useState(false)
  const [glitch, setGlitch] = useState(false)
  const paused = useRef(false)

  const goTo = useCallback(
    (i: number) => {
      if (trans) return
      setTrans(true)
      setGlitch(true)
      setTimeout(() => {
        setCur(i)
        setGlitch(false)
      }, 350)
      setTimeout(() => setTrans(false), 700)
    },
    [trans]
  )

  useEffect(() => {
    const iv = setInterval(() => {
      if (!paused.current) goTo((cur + 1) % HERO_SLIDES.length)
    }, 8000)
    return () => clearInterval(iv)
  }, [cur, goTo])

  const sl = HERO_SLIDES[cur]
  const renderIcon = ICON_MAP[sl.id]

  return (
    <div
      className="hero"
      onMouseEnter={() => { paused.current = true }}
      onMouseLeave={() => { paused.current = false }}
    >
      {glitch && <div className="hero-glitch" />}
      <div className={`hero-inner ${glitch ? "hero-out" : "hero-in"}`}>
        <div className="hero-left">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            {renderIcon && (
              <div style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {renderIcon(40)}
              </div>
            )}
            {sl.badge && <Badge text={sl.badge} color={sl.badgeColor || "#fff"} />}
          </div>
          <h2 className="hero-title">{sl.name}</h2>
          <p className="hero-desc">{sl.desc}</p>
          <div className="hero-stat">
            <span className="hero-stat-dot" />
            <span>{sl.stat}</span>
          </div>
          <button className="hero-btn" onClick={() => onPlay?.(sl)}>
            {"JOGAR AGORA \u25B6"}
          </button>
          <div className="hero-dots">
            {HERO_SLIDES.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} className={`hero-dot ${cur === i ? "active" : ""}`} />
            ))}
          </div>
        </div>
        <div className="hero-right">
          <div
            className="hero-glow"
            style={{
              background: `radial-gradient(circle,${sl.colors[0]}18 0%,${sl.colors[1]}08 40%,transparent 70%)`,
            }}
          />
          <div className="hero-icon-big">
            {renderIcon ? renderIcon(160) : <span style={{ fontSize: "6rem" }}>{"\uD83C\uDFAE"}</span>}
          </div>
          <div className="orbit r1" style={{ borderColor: `${sl.colors[0]}12` }} />
          <div className="orbit r2" style={{ borderColor: `${sl.colors[1]}08` }} />
        </div>
      </div>
      <div
        className="hero-line"
        style={{
          background: `linear-gradient(90deg,transparent,${sl.colors[0]}44,#00D4FF33,transparent)`,
        }}
      />
    </div>
  )
}
