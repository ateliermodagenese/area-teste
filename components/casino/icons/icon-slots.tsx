export function IconSlots({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="slotBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#0D0D15" />
        </linearGradient>
      </defs>
      <rect x="18" y="20" width="64" height="55" rx="8" fill="url(#slotBody)" stroke="#FF2D7844" strokeWidth="1.5" />
      <path d="M25 22 Q50 10 75 22" stroke="#FFD70066" strokeWidth="1.5" fill="none" />
      {[30, 48, 66].map((x, i) => (
        <g key={i}>
          <rect x={x - 8} y="30" width="16" height="28" rx="3" fill="#070710" stroke="#ffffff11" strokeWidth="0.8" />
          <text
            x={x} y="49"
            fill={["#FF2D78", "#FFD700", "#00E676"][i]}
            fontSize="16"
            textAnchor="middle"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            7
          </text>
          {i === 1 && (
            <text
              x={x} y="49"
              fill="#FFD700"
              fontSize="16"
              textAnchor="middle"
              fontWeight="bold"
              opacity="0.5"
            >
              <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.5s" repeatCount="indefinite" />
              7
            </text>
          )}
        </g>
      ))}
      <line x1="20" y1="44" x2="80" y2="44" stroke="#FFD700" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      <rect x="82" y="32" width="5" height="20" rx="2.5" fill="#FF8C00" stroke="#FFD70044" strokeWidth="0.5" />
      <circle cx="84.5" cy="30" r="4" fill="#FF6B00" stroke="#FFD70066" strokeWidth="1">
        <animate attributeName="cy" values="30;28;30" dur="2s" repeatCount="indefinite" />
      </circle>
      {[30, 42, 54, 66].map((x, i) => (
        <circle
          key={i} cx={x} cy="18" r="2"
          fill={["#FF2D78", "#FFD700", "#00E676", "#00D4FF"][i]}
          opacity="0.7"
        >
          <animate attributeName="opacity" values="0.4;1;0.4" dur={`${1 + i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <rect x="25" y="62" width="50" height="10" rx="3" fill="#0A0A10" stroke="#ffffff08" strokeWidth="0.5" />
      <text x="50" y="69.5" fill="#00E676" fontSize="5" textAnchor="middle" fontFamily="monospace" fontWeight="bold" opacity="0.7">
        JACKPOT
      </text>
    </svg>
  )
}
