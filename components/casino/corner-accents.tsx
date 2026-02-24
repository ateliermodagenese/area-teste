interface CornerAccentsProps {
  color?: string
  s?: number
}

export function CornerAccents({ color = "#00E676", s = 28 }: CornerAccentsProps) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: `${s}px`,
    height: `${s}px`,
    transition: "all .3s",
  }
  const b = `2px solid ${color}`

  return (
    <>
      <div style={{ ...base, top: -1, left: -1, borderTop: b, borderLeft: b, filter: `drop-shadow(0 0 6px ${color}55)` }} />
      <div style={{ ...base, top: -1, right: -1, borderTop: b, borderRight: b, filter: `drop-shadow(0 0 6px ${color}55)` }} />
      <div style={{ ...base, bottom: -1, left: -1, borderBottom: b, borderLeft: b, filter: `drop-shadow(0 0 6px ${color}55)` }} />
      <div style={{ ...base, bottom: -1, right: -1, borderBottom: b, borderRight: b, filter: `drop-shadow(0 0 6px ${color}55)` }} />
    </>
  )
}
