
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export const useTestimonialsCarousel = (api: CarouselApi | null) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    const interval = setInterval(() => {
      if (!isPaused) {
        // Fix: Call scrollNext without additional options, as the API expects a boolean or no arguments
        api.scrollNext();
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      // Fix: Pass both the event name and the handler function to off
      api.off("select", onSelect);
    };
  }, [api, isPaused]);

  return {
    currentSlide,
    isPaused,
    setIsPaused,
  };
};
