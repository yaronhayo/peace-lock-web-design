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
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      clearInterval(interval);
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">What Our Customers Say</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our locksmith services.
          </p>
        </div>
        <div className="relative group">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
              startIndex: 0,
            }}
            className="mx-auto max-w-5xl"
            onMouseEnter={() => {
              if (api) {
                api.stop();
              }
            }}
            onMouseLeave={() => {
              if (api) {
                api.start();
              }
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:-left-12" />
            <CarouselNext className="right-0 sm:-right-12" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? "bg-navy-600" : "bg-gray-300 hover:bg-navy-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
