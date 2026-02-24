export function IconDados({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="diceGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FF8C00" />
        </linearGradient>
        <filter id="diceGlow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g transform="rotate(-15 40 50)">
        <rect
          x="18" y="28" width="36" height="36" rx="6"
          fill="url(#diceGrad)" opacity="0.85"
          filter="url(#diceGlow)" stroke="#ffffff33" strokeWidth="0.5"
        />
        {([[26, 36], [26, 46], [26, 56], [46, 36], [46, 46], [46, 56]] as [number, number][]).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#0D0D15" opacity="0.8" />
        ))}
      </g>
      <g transform="rotate(12 60 50)">
        <rect
          x="44" y="32" width="36" height="36" rx="6"
          fill="url(#diceGrad)" opacity="0.9"
          filter="url(#diceGlow)" stroke="#ffffff33" strokeWidth="0.5"
        />
        {([[52, 40], [52, 60], [72, 40], [72, 60], [62, 50]] as [number, number][]).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="#0D0D15" opacity="0.8" />
        ))}
      </g>
      <ellipse cx="50" cy="80" rx="25" ry="5" fill="#FFD700" opacity="0.1" />
    </svg>
  )
}
