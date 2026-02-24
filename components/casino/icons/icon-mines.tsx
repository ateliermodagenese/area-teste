export function IconMines({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <filter id="diamondGlow">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="diamondGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#0066FF" />
        </linearGradient>
      </defs>
      {Array.from({ length: 9 }, (_, i) => {
        const row = Math.floor(i / 3)
        const col = i % 3
        const x = 24 + col * 22
        const y = 24 + row * 22
        const isDiamond = [0, 2, 4, 6, 8].includes(i)
        const isBomb = i === 4
        return (
          <g key={i}>
            <rect
              x={x} y={y} width="18" height="18" rx="4"
              fill={isBomb ? "#FF2D7815" : isDiamond ? "#00D4FF08" : "#0D0D15"}
              stroke={isBomb ? "#FF2D7844" : isDiamond ? "#00D4FF33" : "#ffffff08"}
              strokeWidth="0.8"
            />
            {isDiamond && !isBomb && (
              <polygon
                points={`${x + 9},${y + 3} ${x + 15},${y + 9} ${x + 9},${y + 15} ${x + 3},${y + 9}`}
                fill="url(#diamondGrad)"
                opacity="0.7"
                filter="url(#diamondGlow)"
              >
                <animate
                  attributeName="opacity"
                  values="0.5;0.9;0.5"
                  dur={`${2 + i * 0.2}s`}
                  repeatCount="indefinite"
                />
              </polygon>
            )}
            {isBomb && (
              <g>
                <circle cx={x + 9} cy={y + 9} r="5" fill="#FF2D78" opacity="0.2" />
                <circle cx={x + 9} cy={y + 9} r="4" fill="#1a0008" stroke="#FF2D7888" strokeWidth="1" />
                <line x1={x + 9} y1={y + 4} x2={x + 9} y2={y + 2} stroke="#FF2D78" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx={x + 9} cy={y + 2} r="1" fill="#FF2D78">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="0.8s" repeatCount="indefinite" />
                </circle>
              </g>
            )}
          </g>
        )
      })}
      <polygon points="50,78 62,88 50,98 38,88" fill="url(#diamondGrad)" opacity="0.4" filter="url(#diamondGlow)">
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2.5s" repeatCount="indefinite" />
      </polygon>
    </svg>
  )
}
