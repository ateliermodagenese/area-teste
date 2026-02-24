"use client"

import { useState, useEffect } from "react"

export function HeaderLED() {
  const [jp, setJp] = useState(12450000)

  useEffect(() => {
    const iv = setInterval(() => setJp((p) => p + Math.floor(Math.random() * 500 + 100)), 2200)
    return () => clearInterval(iv)
  }, [])

  return (
    <header className="hdr">
      <div className="hdr-logo">
        <span className="glitch" data-text="BLACKOUT">BLACKOUT</span>
        <span className="logo-g"> CASINO</span>
      </div>
      <div className="hdr-jp">
        <div className="jp-label">{"\u25C8 JACKPOT GLOBAL \u25C8"}</div>
        <div className="jp-val">R$ {jp.toLocaleString("pt-BR")},00</div>
      </div>
      <div className="hdr-right">
        <div className="hdr-bal-box">
          <span className="bal-val-big">R$ 2.680.500</span>
        </div>
        <div className="hdr-online">
          <span className="on-dot" />
          <span>1.250 online</span>
        </div>
      </div>
      <div className="hdr-sep" />
    </header>
  )
}
