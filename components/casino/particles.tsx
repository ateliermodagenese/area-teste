"use client"

const particles = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 25,
  dur: 12 + Math.random() * 22,
  size: 1 + Math.random() * 2.5,
  op: 0.06 + Math.random() * 0.18,
  color: ["#00E676", "#00D4FF", "#FFD700", "#FF2D78", "#fff"][Math.floor(Math.random() * 5)],
  drift: -20 + Math.random() * 40,
}))

export function Particles() {
  return (
    <div className="p-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="p-dot"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            opacity: p.op,
            background: p.color,
            "--drift": `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
