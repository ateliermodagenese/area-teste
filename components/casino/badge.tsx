interface BadgeProps {
  text: string
  color: string
}

export function Badge({ text, color }: BadgeProps) {
  return (
    <span
      className="g-badge"
      style={{
        background: `${color}22`,
        border: `1px solid ${color}66`,
        color,
        boxShadow: `0 0 12px ${color}33`,
      }}
    >
      <span className="badge-dot" style={{ background: color }} />
      {text}
    </span>
  )
}
