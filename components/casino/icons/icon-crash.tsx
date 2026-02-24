export function IconCrash({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="rocketGlow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rocketBody" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" />
          <stop offset="50%" stopColor="#B0B0B0" />
          <stop offset="100%" stopColor="#808080" />
        </linearGradient>
        <linearGradient id="flameGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FF6B00" />
          <stop offset="40%" stopColor="#FF4400" />
          <stop offset="100%" stopColor="#FF000088" />
        </linearGradient>
        <filter id="rocketBloom">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="55" r="35" fill="url(#rocketGlow)">
        <animate attributeName="r" values="32;38;32" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M44 68 L50 92 L56 68" fill="url(#flameGrad)" filter="url(#rocketBloom)" opacity="0.9">
        <animate
          attributeName="d"
          values="M44 68 L50 92 L56 68;M42 68 L50 96 L58 68;M44 68 L50 92 L56 68"
          dur="0.3s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M46 70 L50 84 L54 70" fill="#FFD700" opacity="0.6">
        <animate
          attributeName="d"
          values="M46 70 L50 84 L54 70;M47 70 L50 88 L53 70;M46 70 L50 84 L54 70"
          dur="0.2s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M50 15 C50 15 38 35 38 55 C38 65 43 70 50 70 C57 70 62 65 62 55 C62 35 50 15 50 15Z"
        fill="url(#rocketBody)"
        stroke="#ffffff22"
        strokeWidth="0.5"
      />
      <circle cx="50" cy="42" r="7" fill="#0A1628" stroke="#00D4FF" strokeWidth="1.5">
        <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="42" r="4" fill="#00D4FF" opacity="0.15" />
      <circle cx="48" cy="40" r="2" fill="#00D4FF" opacity="0.4" />
      <path d="M38 58 L28 68 L38 65Z" fill="#FF6B00" opacity="0.8" />
      <path d="M62 58 L72 68 L62 65Z" fill="#FF6B00" opacity="0.8" />
      <path d="M50 15 C50 15 44 30 44 40" stroke="#ffffff44" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <line x1="30" y1="30" x2="26" y2="38" stroke="#ffffff" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0;0.3;0" dur="1.5s" repeatCount="indefinite" />
      </line>
      <line x1="70" y1="25" x2="74" y2="33" stroke="#ffffff" strokeWidth="1" opacity="0.2">
        <animate attributeName="opacity" values="0;0.3;0" dur="1.8s" repeatCount="indefinite" />
      </line>
    </svg>
  )
}
