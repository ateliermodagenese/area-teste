import { CasinoPanel } from "@/components/casino/casino-panel"

export default function Home() {
  return (
    <main
      className="relative w-screen h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)",
      }}
    >
      {/* Simulated GTA world blur background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "linear-gradient(135deg, #0a1628 0%, #0d0d0d 30%, #1a0a0a 60%, #0a0a1a 100%)",
          }}
        />
        {/* City lights simulation */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/3 opacity-20"
          style={{
            background:
              "linear-gradient(0deg, rgba(255,165,0,0.15) 0%, transparent 100%)",
          }}
        />
      </div>

      <CasinoPanel />
    </main>
  )
}
