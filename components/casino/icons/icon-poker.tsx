export function IconPoker({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="pokerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0066FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="35" fill="url(#pokerGlow)" />
      {[-16, -8, 0, 8, 16].map((rot, i) => (
        <g key={i} transform={`rotate(${rot} 50 70)`}>
          <rect
            x="37" y="20" width="26" height="38" rx="3"
            fill="#0D0D18"
            stroke={i === 2 ? "#FFD70066" : "#ffffff15"}
            strokeWidth={i === 2 ? "1.5" : "0.8"}
          />
          <text
            x="50" y="42"
            fill={i % 2 === 0 ? "#E0E0E0" : "#FF2D55"}
            fontSize="16"
            textAnchor="middle"
            fontFamily="serif"
          >
            {["10", "J", "Q", "K", "A"][i]}
          </text>
          <text
            x="50" y="52"
            fill={i % 2 === 0 ? "#E0E0E080" : "#FF2D5580"}
            fontSize="8"
            textAnchor="middle"
          >
            {"\u2660"}
          </text>
        </g>
      ))}
      <circle cx="50" cy="35" r="20" fill="#FFD700" opacity="0.06">
        <animate attributeName="opacity" values="0.04;0.1;0.04" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
