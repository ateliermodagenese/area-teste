"use client"

import { useState, useEffect, useCallback } from "react"
import type { Game } from "@/lib/casino-data"
import { GAMES } from "@/lib/casino-data"
import { ICON_MAP } from "./icons/icon-map"
import { Particles } from "./particles"
import { CornerAccents } from "./corner-accents"
import { HeaderLED } from "./header-led"
import { HeroCarousel } from "./hero-carousel"
import { GameCard } from "./game-card"
import { Dock } from "./dock"

export function BlackoutCasino() {
  const [tab, setTab] = useState("cassino")
  const [isOpen, setIsOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [tabTr, setTabTr] = useState<string | null>(null)
  const [game, setGame] = useState<Game | null>(null)
  const [gameTr, setGameTr] = useState<string | null>(null)

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 100)
  }, [])

  useEffect(() => {
    setPage(0)
  }, [tab])

  const chgTab = useCallback(
    (t: string) => {
      if (t === tab || tabTr || gameTr) return
      setTabTr("out")
      setTimeout(() => {
        setTab(t)
        setTabTr("in")
        setTimeout(() => setTabTr(null), 500)
      }, 280)
    },
    [tab, tabTr, gameTr]
  )

  const playGame = useCallback(
    (g: Game) => {
      if (gameTr) return
      setGame(g)
      setGameTr("exp")
      setTimeout(() => setGameTr("open"), 550)
    },
    [gameTr]
  )

  const closeGame = useCallback(() => {
    if (gameTr === "col") return
    setGameTr("col")
    setTimeout(() => {
      setGameTr(null)
      setGame(null)
    }, 450)
  }, [gameTr])

  const games = GAMES[tab] || []
  const hasHero = ["cassino", "pvp", "eventos"].includes(tab)
  const gc =
    tab === "eventos"
      ? { cols: Math.min(games.length, 3), pp: 6, sz: "huge" as const }
      : tab === "pvp"
        ? { cols: games.length <= 4 ? 2 : 3, pp: 4, sz: "large" as const }
        : tab === "loja"
          ? { cols: 3, pp: 6, sz: "large" as const }
          : { cols: 4, pp: 8, sz: "normal" as const }

  const tp = Math.ceil(games.length / gc.pp)
  const pg = games.slice(page * gc.pp, (page + 1) * gc.pp)
  const renderIcon = game ? ICON_MAP[game.id] : null

  return (
    <>
      <div className={`ov ${isOpen ? "on" : ""}`} />
      <div className={`ebw ${isOpen ? "on" : ""}`}>
        <div className="panel">
          <div style={{ position: "absolute", inset: "8px", pointerEvents: "none", zIndex: 50 }}>
            <CornerAccents color="#00E67644" />
          </div>
          <div className="scanl" />
          <Particles />
          <button className="close" title="Fechar">{"\u2715"}</button>
          <HeaderLED />
          <div className="content">
            {game && (
              <div className={`geo ${gameTr === "open" ? "act" : ""}`}>
                <div className={`eg ${gameTr}`}>
                  {gameTr === "open" && (
                    <div className="gs">
                      <button className="gs-back" onClick={closeGame}>
                        {"\u2190 VOLTAR"}
                      </button>
                      <div style={{ position: "relative", zIndex: 2 }}>
                        {renderIcon ? renderIcon(140) : <span style={{ fontSize: "5rem" }}>{"\uD83C\uDFAE"}</span>}
                      </div>
                      <div className="gs-title">{game.name}</div>
                      <div className="gs-sub">{"Interface do jogo \u2014 em constru\u00E7\u00E3o"}</div>
                      <div className="gs-ring" style={{ width: 200, height: 200, borderColor: `${game.colors[0]}10` }} />
                      <div
                        className="gs-ring"
                        style={{ width: 300, height: 300, borderColor: `${game.colors[1]}08`, animationDirection: "reverse" }}
                      />
                    </div>
                  )}
                  {gameTr === "exp" && (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: `linear-gradient(135deg,${game.colors[0]}12,var(--bg))`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          animation: "hif 1s ease-in-out",
                          filter: `drop-shadow(0 0 40px ${game.colors[0]}66)`,
                        }}
                      >
                        {renderIcon ? renderIcon(120) : <span style={{ fontSize: "4rem" }}>{"\uD83C\uDFAE"}</span>}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div
              className={`tab-c ${tabTr === "out" ? "tout" : ""} ${tabTr === "in" ? "tin" : ""} ${gameTr === "exp" || gameTr === "open" ? "cfade" : ""} ${!gameTr && !game ? "cret" : ""}`}
            >
              {tab === "perfil" || tab === "config" ? (
                <div className="ph">
                  <span>{tab === "perfil" ? "\uD83D\uDC64" : "\u2699\uFE0F"}</span>
                  <span>{tab === "perfil" ? "PERFIL \u2014 EM BREVE" : "CONFIG \u2014 EM BREVE"}</span>
                </div>
              ) : (
                <>
                  {hasHero && <HeroCarousel onPlay={playGame} />}
                  <div className="grid-wrap">
                    <div className="grid" style={{ gridTemplateColumns: `repeat(${gc.cols},1fr)` }}>
                      {pg.map((g, i) => (
                        <GameCard key={`${tab}-${page}-${g.id}`} game={g} size={gc.sz} index={i} onPlay={playGame} />
                      ))}
                    </div>
                  </div>
                  {tp > 1 && (
                    <div className="dots">
                      {Array.from({ length: tp }, (_, i) => (
                        <button
                          key={i}
                          className="pg-dot"
                          onClick={() => setPage(i)}
                          style={{
                            background: page === i ? "#00E676" : "#4A4A5A",
                            boxShadow: page === i ? "0 0 12px #00E67666" : "none",
                            width: page === i ? 22 : 8,
                            borderRadius: 4,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <Dock activeTab={tab} onTabChange={chgTab} disabled={!!game} />
        </div>
      </div>
    </>
  )
}
