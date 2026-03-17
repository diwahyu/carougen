import { ThemeConfig } from "@/types/carousel"

interface GradientTextProps {
  text: string
  highlight?: string
  className?: string
  style?: React.CSSProperties
  gradientText?: boolean
  themeConfig?: ThemeConfig
  highlightColor?: string
}

export function GradientText({
  text,
  highlight,
  className = "",
  style: extraStyle,
  gradientText = false,
  themeConfig,
  highlightColor,
}: GradientTextProps) {
  const gradFrom = themeConfig?.gradientFrom ?? "#171717"
  const gradVia = themeConfig?.gradientVia ?? "#737373"
  const gradTo = themeConfig?.gradientTo ?? "#171717"

  const hlFrom = highlightColor ?? themeConfig?.highlightFrom ?? "#262626"
  const hlVia = highlightColor ?? themeConfig?.highlightVia ?? "#a3a3a3"
  const hlTo = highlightColor ?? themeConfig?.highlightTo ?? "#262626"

  const gradientStyle = gradientText
    ? {
        backgroundImage: `linear-gradient(to bottom right, ${gradFrom}, ${gradVia}, ${gradTo})`,
        WebkitBackgroundClip: "text" as const,
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }
    : extraStyle

  if (!highlight) {
    return (
      <p className={className} style={gradientStyle}>
        {text}
      </p>
    )
  }

  const parts = text.split(new RegExp(`(${escapeRegex(highlight)})`, "gi"))

  const highlightStyle = highlightColor
    ? { color: highlightColor, fontWeight: "inherit" as const }
    : {
        backgroundImage: `linear-gradient(to right, ${hlFrom}, ${hlVia}, ${hlTo})`,
        WebkitBackgroundClip: "text" as const,
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }

  return (
    <p className={className} style={gradientStyle}>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} style={highlightStyle}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </p>
  )
}

function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}
