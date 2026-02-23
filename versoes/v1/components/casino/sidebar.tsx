'use client'

import { motion } from 'framer-motion'
import { NAV_ITEMS } from '@/lib/casino-data'

interface SidebarProps {
  activeNav: string
  onNavChange: (id: string) => void
}

export function Sidebar({ activeNav, onNavChange }: SidebarProps) {
  return (
    <div
      className="w-56 shrink-0 flex flex-col py-4 px-3 overflow-y-auto custom-scrollbar"
      style={{
        backgroundColor: '#0A0A0A',
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="flex flex-col gap-1.5 flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.id
          return (
            <motion.button
              key={item.id}
              onClick={() => onNavChange(item.id)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-left relative overflow-hidden"
              style={{
                backgroundColor: isActive ? '#141414' : '#0F0F0F',
                boxShadow: isActive
                  ? '0 0 15px rgba(255,215,0,0.06)'
                  : 'none',
              }}
              whileHover={{
                scale: 1.02,
                backgroundColor: '#141414',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {/* Active indicator bar */}
              <div
                className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: isActive
                    ? '#FFD700'
                    : 'transparent',
                }}
              />

              <span className="text-lg ml-1">{item.emoji}</span>
              <span
                className="text-[13px] font-medium flex-1"
                style={{
                  color: isActive
                    ? '#FFFFFF'
                    : 'rgba(255,255,255,0.4)',
                }}
              >
                {item.label}
              </span>

              {item.badge && (
                <span
                  className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: 'rgba(139,92,246,0.2)',
                    color: '#8B5CF6',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </motion.button>
          )
        })}
      </div>

      {/* Bottom badges */}
      <div className="mt-4 flex flex-col gap-2 px-1">
        <div
          className="flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-md text-[10px] font-medium"
          style={{
            backgroundColor: '#141414',
            border: '1px solid rgba(16,185,129,0.2)',
            color: 'rgba(16,185,129,0.6)',
          }}
        >
          Provably Fair {'\u{1F512}'}
        </div>
        <span
          className="text-center text-[9px]"
          style={{ color: 'rgba(255,255,255,0.1)' }}
        >
          v1.0.0
        </span>
      </div>
    </div>
  )
}
