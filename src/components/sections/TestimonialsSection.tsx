
import { useEffect, useRef } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Peace & Lock saved me when I was locked out of my apartment at 2am. The locksmith arrived in 15 minutes and got me back in quickly without damaging my door.",
    author: "Sarah Johnson",
    location: "Newark, NJ",
    rating: 5
  },
  {
    quote: "I've used them multiple times for my business security needs. They're always professional, prompt and provide excellent service at reasonable prices.",
    author: "Michael Rodriguez",
    location: "Jersey City, NJ",
    rating: 5
  },
  {
    quote: "After losing my car keys at the beach, these guys came to the rescue and made me a new key on the spot. Couldn't recommend them more highly!",
    author: "Jennifer Williams",
    location: "Hoboken, NJ",
    rating: 5
  },
  {
    quote: "Had my locks changed after moving into a new home. The service was efficient, professional, and the price was very reasonable. Great experience!",
    author: "David Thompson",
    location: "Paterson, NJ",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const apiRef = useRef<any>(null);

  useEffect(() => {
    if (!apiRef.current) return;
    
    const interval = setInterval(() => {
      if (apiRef.current) {
        apiRef.current.scrollNext();
      }
    }, 2000); // 2 seconds pause
    
    return () => clearInterval(interval);
  }, [apiRef]);

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
          opts={{
            align: "start",
            loop: true,
            duration: 2000,
          }}
          setApi={(api) => {
            apiRef.current = api;
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <TestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
