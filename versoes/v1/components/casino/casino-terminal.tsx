'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { TopBar } from './top-bar'
import { Sidebar } from './sidebar'
import { Lobby } from './lobby'
import { CategoryView } from './category-view'
import { Footer } from './footer'
import { NAV_ITEMS } from '@/lib/casino-data'

export function CasinoTerminal() {
  const [activeNav, setActiveNav] = useState('lobby')
  const [transparentBg, setTransparentBg] = useState(false)

  const handleNavChange = (id: string) => {
    setActiveNav(id)
  }

  const handleCategoryClick = (categoryId: string) => {
    setActiveNav(categoryId)
  }

  // Determine what to show in main content
  const currentNavItem = NAV_ITEMS.find((n) => n.id === activeNav)
  const isLobby = activeNav === 'lobby'
  const isCategoryView = currentNavItem?.category != null

  return (
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{
        backgroundColor: transparentBg
          ? 'rgba(10,10,10,0.92)'
          : '#0A0A0A',
      }}
    >
      {/* Bezel glow */}
      <div className="bezel-glow" />

      {/* Scanlines overlay */}
      <div className="scanlines" />

      {/* Top Bar */}
      <TopBar />

      {/* Middle: Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeNav={activeNav} onNavChange={handleNavChange} />

        {/* Main Content */}
        <main
          className="flex-1 overflow-y-auto custom-scrollbar relative"
          style={{ backgroundColor: 'transparent' }}
        >
          <AnimatePresence mode="wait">
            {isLobby && (
              <Lobby
                key="lobby"
                onCategoryClick={handleCategoryClick}
              />
            )}
            {isCategoryView && currentNavItem?.category && (
              <CategoryView
                key={currentNavItem.category}
                categoryId={currentNavItem.category}
              />
            )}
            {!isLobby && !isCategoryView && (
              <PlaceholderView
                key={activeNav}
                label={currentNavItem?.label || activeNav}
                emoji={currentNavItem?.emoji || ''}
              />
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Footer */}
      <Footer />

      {/* Transparency toggle */}
      <button
        onClick={() => setTransparentBg((v) => !v)}
        className="fixed bottom-12 right-4 z-50 text-[10px] px-3 py-1.5 rounded-full cursor-pointer font-medium"
        style={{
          backgroundColor: '#141414',
          border: '1px solid rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        {transparentBg ? 'Fundo: Transparente' : 'Fundo: Solido'}
      </button>
    </div>
  )
}

/* Placeholder for non-game views (Loja, Eventos, Stats, Config) */
import { motion } from 'framer-motion'

function PlaceholderView({ label, emoji }: { label: string; emoji: string }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full gap-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-5xl">{emoji}</span>
      <h2 className="text-xl font-bold text-white uppercase tracking-wider">
        {label}
      </h2>
      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
        Em breve disponivel
      </p>
      <div
        className="mt-2 px-4 py-2 rounded-lg text-xs"
        style={{
          backgroundColor: '#141414',
          border: '1px solid rgba(255,215,0,0.1)',
          color: '#FFD700',
        }}
      >
        Aguarde as proximas atualizacoes
      </div>
    </motion.div>
  )
}
