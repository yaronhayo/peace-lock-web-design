
import { useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";

export const useTestimonialsCarousel = (api: CarouselApi | null) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      if (!isPaused) {
        api.scrollNext(true, true); // Adding both required arguments (first for animation, second likely for loop behavior)
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      api.off('select');
    };
  }, [api, isPaused]);

  return {
    currentSlide,
    isPaused,
    setIsPaused,
  };
};
