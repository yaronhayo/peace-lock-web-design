
import { useEffect, useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
    }, 4000); // 2s pause + 2s transition

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
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            skipSnaps: false,
            slidesToScroll: 1,
            startIndex: 0,
          }}
        >
          <CarouselContent className="grid grid-cols-4 gap-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-1/4">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
