export function IconCoinflip({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <defs>
        <linearGradient id="coinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFA000" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <filter id="coinGlow">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <ellipse cx="50" cy="50" rx="30" ry="30" fill="url(#coinGrad)" opacity="0.85" filter="url(#coinGlow)" stroke="#ffffff44" strokeWidth="1">
        <animateTransform attributeName="transform" type="scale" values="1 1;1 0.3;1 1" dur="2s" repeatCount="indefinite" additive="sum" />
      </ellipse>
      <ellipse cx="50" cy="50" rx="24" ry="24" fill="none" stroke="#ffffff33" strokeWidth="1.5" />
      <text x="50" y="55" fill="#0D0D15" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="serif" opacity="0.7">
        $
      </text>
      <circle cx="25" cy="30" r="2" fill="#FFD700" opacity="0.5">
        <animate attributeName="opacity" values="0;0.8;0" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="75" cy="35" r="1.5" fill="#FFD700" opacity="0.5">
        <animate attributeName="opacity" values="0;0.6;0" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="30" cy="70" r="1.5" fill="#FFD700" opacity="0.5">
        <animate attributeName="opacity" values="0;0.7;0" dur="1.8s" repeatCount="indefinite" begin="0.3s" />
      </circle>
    </svg>
  )
}
