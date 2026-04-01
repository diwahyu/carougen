import { z } from "zod"

const hookSlideSchema = z.object({
  type: z.literal("hook"),
  text: z.string().min(1, "Hook text is required"),
  emoji: z.string().optional(),
})

const contentSlideSchema = z.object({
  type: z.literal("content"),
  text: z.string().min(1, "Content text is required"),
})

const ctaSlideSchema = z.object({
  type: z.literal("cta"),
  text: z.string().min(1, "CTA text is required"),
  creditName: z.string().optional(),
  socials: z.array(z.string()).optional(),
})

const slideSchema = z.discriminatedUnion("type", [
  hookSlideSchema,
  contentSlideSchema,
  ctaSlideSchema,
])

export const carouselInputSchema = z
  .object({
    projectTitle: z.string().optional(),
    topic: z.string().optional(),
    prefix: z.string().min(1, "Prefix is required"),
    theme: z.enum(["bw-gradient", "dark", "warm", "ai", "akademi-profit", "lovaria"]).optional(),
    layout: z.enum(["classic", "impact", "bold"]).optional(),
    highlightColor: z.string().optional(),
    slides: z.array(slideSchema).min(2, "Minimum 2 slides required").max(15, "Maximum 15 slides"),
  })
  .refine((data) => data.slides[0]?.type === "hook", {
    message: "First slide must be hook type",
    path: ["slides", 0],
  })
  .refine((data) => data.slides[data.slides.length - 1]?.type === "cta", {
    message: "Last slide must be cta type",
    path: ["slides"],
  })

export type CarouselInput = z.infer<typeof carouselInputSchema>
