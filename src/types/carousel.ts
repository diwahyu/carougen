export type HookSlide = {
  id: string
  type: "hook"
  text: string
  emoji?: string
}

export type ContentSlide = {
  id: string
  type: "content"
  text: string
}

export type CtaSlide = {
  id: string
  type: "cta"
  text: string
  creditName?: string
  socials?: string[]
}

export type Slide = HookSlide | ContentSlide | CtaSlide

export type LayoutId = "classic" | "impact" | "bold"

export type ThemeId = "bw-gradient" | "dark" | "warm" | "ai" | "akademi-profit" | "lovaria"

export type ThemeConfig = {
  id: ThemeId
  name: string
  slideBg: string
  textPrimary: string
  textSecondary: string
  gradientFrom: string
  gradientVia: string
  gradientTo: string
  highlightFrom: string
  highlightVia: string
  highlightTo: string
  blurOrbs: { position: string; color: string; size: string }[]
  badgeBg: string
  badgeText: string
  accentLine: { from: string; via: string; to: string }
  swipeColor: string
}

export type CarouselProject = {
  id: string
  projectTitle?: string
  topic?: string
  prefix: string
  createdAt: string
  slides: Slide[]
  theme?: ThemeId
  layout?: LayoutId
  highlightColor?: string
}
