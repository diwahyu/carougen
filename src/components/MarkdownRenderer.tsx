"use client"

import ReactMarkdown from "react-markdown"
import { ThemeConfig } from "@/types/carousel"
import { CSSProperties } from "react"

interface MarkdownRendererProps {
  markdown: string
  themeConfig: ThemeConfig
  highlightColor?: string
  variant: "hook" | "content" | "cta"
  gradientText?: boolean
}

const FONT_SIZES = {
  hook: { h1: "72px", h2: "60px", p: "54px", li: "48px", quote: "48px" },
  content: { h1: "54px", h2: "46px", p: "40px", li: "36px", quote: "36px" },
  cta: { h1: "54px", h2: "46px", p: "40px", li: "36px", quote: "36px" },
}

export function MarkdownRenderer({
  markdown,
  themeConfig,
  highlightColor,
  variant,
  gradientText = false,
}: MarkdownRendererProps) {
  const sizes = FONT_SIZES[variant]

  const textColor = themeConfig.textPrimary
  const secondaryColor = themeConfig.textSecondary

  const gradientStyle: CSSProperties = gradientText
    ? {
        backgroundImage: `linear-gradient(to bottom right, ${themeConfig.gradientFrom}, ${themeConfig.gradientVia}, ${themeConfig.gradientTo})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }
    : { color: textColor }

  const strongStyle: CSSProperties = highlightColor
    ? { color: highlightColor, WebkitTextFillColor: highlightColor }
    : {
        backgroundImage: `linear-gradient(to right, ${themeConfig.highlightFrom}, ${themeConfig.highlightVia}, ${themeConfig.highlightTo})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }

  const isCta = variant === "cta"

  return (
    <div
      className="markdown-slide"
      style={{ textAlign: isCta ? "center" : "left", width: "100%" }}
    >
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <p
              style={{
                fontSize: sizes.h1,
                fontWeight: 900,
                lineHeight: 1.1,
                marginBottom: "24px",
                ...gradientStyle,
              }}
            >
              {children}
            </p>
          ),
          h2: ({ children }) => (
            <p
              style={{
                fontSize: sizes.h2,
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: "20px",
                ...gradientStyle,
              }}
            >
              {children}
            </p>
          ),
          p: ({ children }) => (
            <p
              style={{
                fontSize: sizes.p,
                fontWeight: 600,
                lineHeight: 1.4,
                marginBottom: "16px",
                ...gradientStyle,
              }}
            >
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: "0 0 16px 0",
              }}
            >
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol
              style={{
                listStyleType: "none",
                padding: 0,
                margin: "0 0 16px 0",
                counterReset: "item",
              }}
            >
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li
              style={{
                fontSize: sizes.li,
                fontWeight: 600,
                lineHeight: 1.5,
                marginBottom: "12px",
                paddingLeft: "40px",
                position: "relative",
                color: textColor,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: secondaryColor,
                  fontWeight: 700,
                }}
              >
                •
              </span>
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <div
              style={{
                borderLeft: `4px solid ${secondaryColor}`,
                paddingLeft: "24px",
                marginBottom: "16px",
                fontStyle: "italic",
              }}
            >
              {children}
            </div>
          ),
          strong: ({ children }) => (
            <strong style={{ fontWeight: 900, ...strongStyle }}>{children}</strong>
          ),
          em: ({ children }) => (
            <em style={{ fontStyle: "italic" }}>{children}</em>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
