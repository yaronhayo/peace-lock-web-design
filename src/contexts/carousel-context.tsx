
import * as React from "react"
import type { UseEmblaCarouselType } from "embla-carousel-react"
import type { CarouselApi, CarouselOptions, CarouselPlugin } from "@/hooks/use-carousel"

// Use the exact type from embla-carousel-react
type EmblaViewportRefType = UseEmblaCarouselType[0]

type CarouselContextProps = {
  carouselRef: EmblaViewportRefType
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  opts?: CarouselOptions
  orientation?: "horizontal" | "vertical"
  plugins?: CarouselPlugin
  setApi?: (api: CarouselApi) => void
}

export const CarouselContext = React.createContext<CarouselContextProps | null>(null)

export function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }

  return context
}
