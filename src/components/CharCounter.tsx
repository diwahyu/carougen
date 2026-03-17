interface CharCounterProps {
  value: string
  softLimit: number
}

export function CharCounter({ value, softLimit }: CharCounterProps) {
  const count = value.length
  const words = value.trim() ? value.trim().split(/\s+/).length : 0
  const ratio = count / softLimit

  const color =
    ratio > 1 ? "text-red-500" : ratio > 0.8 ? "text-amber-500" : "text-muted-foreground"

  return (
    <span className={`text-[10px] ${color}`}>
      {count}/{softLimit} chars · {words} words
    </span>
  )
}
