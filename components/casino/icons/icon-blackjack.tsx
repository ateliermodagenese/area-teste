export function IconBlackjack({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="cardFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#0D0D15" />
        </linearGradient>
        <filter id="cardShadow">
          <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      <rect
        x="32" y="18" width="32" height="44" rx="4"
        fill="url(#cardFace)" stroke="#FF2D5566" strokeWidth="1"
        transform="rotate(-8 48 40)" filter="url(#cardShadow)"
      />
      <text x="38" y="34" fill="#FF2D55" fontSize="11" fontWeight="bold" fontFamily="serif" transform="rotate(-8 48 40)">
        K
      </text>
      <text x="38" y="46" fill="#FF2D55" fontSize="14" transform="rotate(-8 48 40)">
        {"\\u2665"}
      </text>
      <rect
        x="38" y="22" width="32" height="44" rx="4"
        fill="url(#cardFace)" stroke="#ffffff22" strokeWidth="1"
        transform="rotate(6 54 44)" filter="url(#cardShadow)"
      />
      <text x="44" y="38" fill="#E0E0E0" fontSize="11" fontWeight="bold" fontFamily="serif" transform="rotate(6 54 44)">
        A
      </text>
      <text x="44" y="50" fill="#E0E0E0" fontSize="14" transform="rotate(6 54 44)">
        {"\\u2660"}
      </text>
      <circle cx="68" cy="28" r="11" fill="#00E676" opacity="0.9">
        <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="68" y="32" fill="#000" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
        21
      </text>
      <ellipse cx="26" cy="75" rx="12" ry="6" fill="#FF2D55" stroke="#ffffff33" strokeWidth="1" />
      <ellipse cx="26" cy="73" rx="12" ry="6" fill="#FF4444" stroke="#ffffff33" strokeWidth="1" />
      <ellipse cx="32" cy="78" rx="12" ry="6" fill="#FFD700" stroke="#ffffff33" strokeWidth="1" />
      <ellipse cx="32" cy="76" rx="12" ry="6" fill="#FFE044" stroke="#ffffff33" strokeWidth="1" />
    </svg>
  )
}
