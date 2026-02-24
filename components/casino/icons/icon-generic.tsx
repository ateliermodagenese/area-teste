interface IconGenericProps {
  size?: number
  emoji: string
  color1: string
  color2?: string
}

export function IconGeneric({ size = 80, emoji, color1 }: IconGenericProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id={`gg-${emoji}`} cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor={color1} stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="32" fill={`url(#gg-${emoji})`}>
        <animate attributeName="r" values="30;34;30" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="28" fill="#0D0D1588" stroke={`${color1}33`} strokeWidth="1" />
      <text x="50" y="58" fontSize="32" textAnchor="middle">
        {emoji}
      </text>
    </svg>
  )
}
