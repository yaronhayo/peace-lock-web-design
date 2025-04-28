
import { useState } from "react";
import { motion } from "framer-motion";
import TestimonialCard from "@/components/TestimonialCard";
import { useTestimonialsCarousel } from "@/hooks/use-testimonials-carousel";
import { testimonials } from "@/data/testimonials";
import CarouselDots from "./CarouselDots";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

const TestimonialsCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const { currentSlide, isPaused, setIsPaused } = useTestimonialsCarousel(api);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title mb-4">What Our Customers Experience</h2>
          <p className="section-subtitle max-w-3xl mx-auto text-navy-300">
            Don't take our word for it — hear directly from the homeowners, businesses, and vehicle owners we've helped secure
          </p>
        </motion.div>
        <motion.div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Carousel 
            setApi={setApi} 
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                    <TestimonialCard {...testimonial} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          <CarouselDots 
            total={testimonials.length} 
            currentSlide={currentSlide} 
            onDotClick={(index) => api?.scrollTo(index, true)} 
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
