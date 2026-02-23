"use client"

import { useState, useCallback } from "react"
import type { GameCategory } from "@/lib/casino-data"
import { getGamesByCategory, getFeaturedGames, paginateGames } from "@/lib/casino-data"
import { LedHeader } from "./led-header"
import { CasinoDock } from "./casino-dock"
import { GameCard } from "./game-card"
import { FeaturedSpotlight } from "./featured-spotlight"
import { PageIndicator } from "./page-indicator"
import { LojaPanel } from "./loja-panel"
import { ConfigPanel } from "./config-panel"

const GAMES_PER_PAGE = 9 // 3x3 grid below the spotlight

export function CasinoPanel() {
  const [activeTab, setActiveTab] = useState<GameCategory>("cassino")
  const [currentPage, setCurrentPage] = useState(0)
  const [isReelSpinning, setIsReelSpinning] = useState(false)

  const handlePageChange = useCallback((page: number) => {
    setIsReelSpinning(true)
    // Small delay to trigger the animation
    setTimeout(() => {
      setCurrentPage(page)
      // Animation will play via CSS
      setTimeout(() => setIsReelSpinning(false), 600)
    }, 50)
  }, [])

  const handleTabChange = useCallback((tab: GameCategory) => {
    setIsReelSpinning(true)
    setTimeout(() => {
      setActiveTab(tab)
      setCurrentPage(0)
      setTimeout(() => setIsReelSpinning(false), 600)
    }, 50)
  }, [])

  const games = getGamesByCategory(activeTab)
  const featured = getFeaturedGames(activeTab)
  const pages = paginateGames(games, GAMES_PER_PAGE)
  const currentGames = pages[currentPage] || []

  // Determine grid columns based on game count
  const getGridClass = (count: number) => {
    if (count <= 2) return "grid-cols-2"
    if (count <= 3) return "grid-cols-3"
    return "grid-cols-3"
  }

  const renderGameContent = () => {
    if (activeTab === "loja") return <LojaPanel />
    if (activeTab === "config") return <ConfigPanel />

    // For PVP (5 games) and EVENTOS (3 games), show all in one view with bigger cards
    const isSmallCategory = games.length <= 6 && activeTab !== "cassino"

    if (isSmallCategory) {
      return (
        <div className="flex-1 flex flex-col gap-3 p-3 overflow-hidden">
          {/* Featured spotlight for small categories */}
          {featured.length > 0 && <FeaturedSpotlight games={featured} />}

          {/* All games in a grid */}
          <div className={`grid ${getGridClass(games.length)} gap-2.5 flex-1`}>
            {games.map((game, i) => (
              <GameCard key={game.id} game={game} index={i} isAnimating={isReelSpinning} />
            ))}
          </div>
        </div>
      )
    }

    // For CASSINO (19 games): spotlight + 3x3 grid + pagination with reel transition
    return (
      <div className="flex-1 flex flex-col gap-2 p-3 overflow-hidden">
        {/* Featured spotlight */}
        {featured.length > 0 && <FeaturedSpotlight games={featured} />}

        {/* Game grid - 3x3 */}
        <div className="flex-1 grid grid-cols-3 gap-2.5 auto-rows-fr">
          {currentGames.map((game, i) => (
            <GameCard
              key={`${currentPage}-${game.id}`}
              game={game}
              index={i}
              isAnimating={isReelSpinning}
            />
          ))}
          {/* Fill empty slots so layout stays consistent */}
          {currentGames.length < GAMES_PER_PAGE &&
            Array.from({ length: GAMES_PER_PAGE - currentGames.length }).map((_, i) => (
              <div
                key={`empty-${i}`}
                className="rounded-xl border border-dashed border-white/[0.04] flex items-center justify-center"
                style={{ background: "var(--casino-surface-card)" }}
              >
                <span className="text-[9px] uppercase tracking-wider text-white/10 font-bold">Em breve</span>
              </div>
            ))}
        </div>

        {/* Page indicator */}
        <PageIndicator
          total={pages.length}
          current={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    )
  }

  return (
    <div className="w-[85vw] max-w-[960px] h-[85vh] max-h-[680px] flex flex-col rounded-2xl overflow-hidden neon-border" style={{
      background: "var(--casino-surface)",
      border: "2px solid var(--casino-gold-dim)",
    }}>
      {/* Outer neon glow ring */}
      <div className="absolute -inset-[2px] rounded-2xl pointer-events-none" style={{
        border: "1px solid rgba(0,255,170,0.15)",
        borderRadius: "inherit",
      }} />

      {/* LED Header */}
      <LedHeader />

      {/* Content area */}
      <div className="flex-1 flex flex-col min-h-0">
        {renderGameContent()}
      </div>

      {/* Dock */}
      <CasinoDock activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  )
}
