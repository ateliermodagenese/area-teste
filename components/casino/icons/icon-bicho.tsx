export function IconBicho({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <radialGradient id="bichoGlow" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>
        <filter id="eyeGlow">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="50" cy="50" r="38" fill="url(#bichoGlow)">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <ellipse cx="50" cy="52" rx="28" ry="25" fill="#1A1A0A" stroke="#FFD70066" strokeWidth="1" />
      <path d="M32 40 Q36 38 38 42" stroke="#FF8C00" strokeWidth="2.5" fill="none" opacity="0.6" />
      <path d="M28 48 Q33 46 34 52" stroke="#FF8C00" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M68 40 Q64 38 62 42" stroke="#FF8C00" strokeWidth="2.5" fill="none" opacity="0.6" />
      <path d="M72 48 Q67 46 66 52" stroke="#FF8C00" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M30 35 L26 20 L38 30Z" fill="#2A2A10" stroke="#FFD70044" strokeWidth="0.5" />
      <path d="M70 35 L74 20 L62 30Z" fill="#2A2A10" stroke="#FFD70044" strokeWidth="0.5" />
      <path d="M32 33 L30 24 L37 31Z" fill="#FF8C0033" />
      <path d="M68 33 L70 24 L63 31Z" fill="#FF8C0033" />
      <ellipse cx="40" cy="46" rx="6" ry="5" fill="#001100" />
      <ellipse cx="60" cy="46" rx="6" ry="5" fill="#001100" />
      <ellipse cx="40" cy="46" rx="4" ry="4" fill="#00E676" filter="url(#eyeGlow)">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="60" cy="46" rx="4" ry="4" fill="#00E676" filter="url(#eyeGlow)">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="3s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="41" cy="46" rx="2" ry="3" fill="#003300" />
      <ellipse cx="61" cy="46" rx="2" ry="3" fill="#003300" />
      <path d="M47 55 L50 58 L53 55Z" fill="#FF8C00" opacity="0.7" />
      <path d="M44 61 Q50 66 56 61" stroke="#FFD70044" strokeWidth="1" fill="none" />
      <line x1="36" y1="56" x2="18" y2="54" stroke="#FFD70033" strokeWidth="0.8" />
      <line x1="36" y1="58" x2="20" y2="60" stroke="#FFD70033" strokeWidth="0.8" />
      <line x1="64" y1="56" x2="82" y2="54" stroke="#FFD70033" strokeWidth="0.8" />
      <line x1="64" y1="58" x2="80" y2="60" stroke="#FFD70033" strokeWidth="0.8" />
    </svg>
  )
}
