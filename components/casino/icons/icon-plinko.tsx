export function IconPlinko({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: row + 3 }, (_, col) => {
          const x = 50 - (row + 2) * 7 + col * 14
          const y = 18 + row * 14
          return (
            <circle
              key={`${row}-${col}`}
              cx={x} cy={y} r="2.5"
              fill="#ffffff" opacity="0.2"
              stroke="#00E67633" strokeWidth="0.5"
            />
          )
        })
      ).flat()}
      <circle cx="50" cy="15" r="4" fill="#00E676" opacity="0.9">
        <animate attributeName="cy" values="15;75" dur="3s" repeatCount="indefinite" />
        <animate attributeName="cx" values="50;42;55;38;52;45" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0.9;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="15" r="8" fill="#00E676" opacity="0.15">
        <animate attributeName="cy" values="15;75" dur="3s" repeatCount="indefinite" />
        <animate attributeName="cx" values="50;42;55;38;52;45" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.2;0.2;0" dur="3s" repeatCount="indefinite" />
      </circle>
      {["#FF2D78", "#FF8C00", "#FFD700", "#00E676", "#00D4FF", "#FFD700", "#FF8C00", "#FF2D78"].map((c, i) => (
        <rect
          key={i}
          x={14 + i * 9.5} y="82" width="8" height="12" rx="2"
          fill={c} opacity="0.25"
          stroke={c} strokeWidth="0.5" strokeOpacity="0.4"
        />
      ))}
    </svg>
  )
}
