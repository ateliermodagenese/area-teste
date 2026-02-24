"use client"

import { LIVE_FEED } from "@/lib/casino-data"

export function LiveFeedTicker() {
  const items = [...LIVE_FEED, ...LIVE_FEED, ...LIVE_FEED]

  return (
    <div className="ticker-wrap">
      <div className="ticker-label">
        <span className="ticker-dot" />
        LIVE
      </div>
      <div className="ticker-track">
        <div className="ticker-scroll">
          {items.map((it, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-user">{it.user}</span>
              <span className="ticker-game">{it.game}</span>
              <span style={{ color: it.color }} className="ticker-amt">
                {it.amount}
              </span>
              <span className="ticker-sep">{"\u25C8"}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
