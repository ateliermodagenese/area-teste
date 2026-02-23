"use client"

import { Volume2, Bell, Eye, LogOut } from "lucide-react"

export function ConfigPanel() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6 p-6">
      <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">Configuracoes</h2>
      <div className="w-full max-w-xs flex flex-col gap-3">
        {[
          { icon: Volume2, label: "Som", desc: "Efeitos sonoros" },
          { icon: Bell, label: "Notificacoes", desc: "Alertas de jogos" },
          { icon: Eye, label: "Visual", desc: "Efeitos visuais" },
        ].map((item) => {
          const Icon = item.icon
          return (
            <div key={item.label} className="flex items-center justify-between p-3 rounded-lg border border-white/[0.06]" style={{ background: "var(--casino-surface-card)" }}>
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 text-white/40" />
                <div className="flex flex-col">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">{item.label}</span>
                  <span className="text-[8px] text-white/30">{item.desc}</span>
                </div>
              </div>
              <div className="w-8 h-4 rounded-full relative cursor-pointer" style={{ background: "var(--casino-neon)", boxShadow: "0 0 8px var(--casino-neon-dim)" }}>
                <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-white transition-all" />
              </div>
            </div>
          )
        })}
        <button className="mt-4 flex items-center justify-center gap-2 py-2.5 rounded-lg border border-red-500/20 text-red-400/70 text-[10px] font-bold uppercase tracking-wider transition-all hover:bg-red-500/10 cursor-pointer">
          <LogOut className="w-3.5 h-3.5" />
          Sair do Casino
        </button>
      </div>
    </div>
  )
}
