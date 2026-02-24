export function IconRoleta({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="roletaGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF2D55" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FF2D55" stopOpacity="0" />
        </radialGradient>
        <filter id="roletaBloom">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>
      <circle cx="50" cy="50" r="38" fill="url(#roletaGlow)" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="#FFD70044" strokeWidth="2" />
      <circle cx="50" cy="50" r="33" fill="#0A0A0A" stroke="#ffffff11" strokeWidth="1" />
      <g style={{ transformOrigin: "50px 50px" }}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0;360"
          dur="8s"
          repeatCount="indefinite"
        />
        {Array.from({ length: 12 }, (_, i) => {
          const angle = i * 30
          const isRed = i % 3 !== 0
          const color = i === 0 ? "#00E676" : isRed ? "#FF2D55" : "#1a1a2e"
          return (
            <g key={i}>
              <path
                d={`M50 50 L${50 + 28 * Math.cos(((angle - 15) * Math.PI) / 180)} ${50 + 28 * Math.sin(((angle - 15) * Math.PI) / 180)} A28 28 0 0 1 ${50 + 28 * Math.cos(((angle + 15) * Math.PI) / 180)} ${50 + 28 * Math.sin(((angle + 15) * Math.PI) / 180)} Z`}
                fill={color}
                opacity="0.7"
                stroke="#ffffff08"
                strokeWidth="0.5"
              />
              <text
                x={50 + 22 * Math.cos((angle * Math.PI) / 180)}
                y={50 + 22 * Math.sin((angle * Math.PI) / 180)}
                fill="#ffffff"
                fontSize="5"
                textAnchor="middle"
                dominantBaseline="middle"
                opacity="0.6"
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: `${50 + 22 * Math.cos((angle * Math.PI) / 180)}px ${50 + 22 * Math.sin((angle * Math.PI) / 180)}px`,
                }}
              >
                {i === 0 ? "0" : (i * 3).toString()}
              </text>
            </g>
          )
        })}
      </g>
      <circle cx="50" cy="50" r="10" fill="#1a1a2e" stroke="#FFD70066" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="6" fill="#0D0D15" stroke="#FFD70033" strokeWidth="1" />
      <circle cx="50" cy="50" r="2" fill="#FFD700" opacity="0.5" />
      <circle cx="50" cy="19" r="3" fill="#E0E0E0" stroke="#ffffff44" strokeWidth="0.5">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 50 50;-360 50 50"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <polygon points="50,12 47,7 53,7" fill="#FFD700" opacity="0.8" />
    </svg>
  )
}
