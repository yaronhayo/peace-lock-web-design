
import { useEffect, useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // 2s pause + 2s transition time

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">What Our Customers Say</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our locksmith services.
          </p>
        </div>
        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: false,
              skipSnaps: false,
              containScroll: false,
            }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent>
              {Array.from({ length: Math.ceil(testimonials.length / 4) }).map((_, slideIndex) => (
                <CarouselItem key={slideIndex} className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {testimonials
                      .slice(slideIndex * 4, slideIndex * 4 + 4)
                      .map((testimonial, index) => (
                        <div key={index} className="h-full">
                          <TestimonialCard {...testimonial} />
                        </div>
                      ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12" />
            <CarouselNext className="right-0 sm:-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
