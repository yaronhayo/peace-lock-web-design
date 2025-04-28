
import { useEffect, useState } from "react";
import TestimonialCard from "@/components/TestimonialCard";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "After being locked out of my house at midnight, their emergency service was a lifesaver. The locksmith arrived in 20 minutes and was incredibly professional.",
    author: "Maria Rodriguez",
    location: "Hoboken, NJ",
    rating: 5
  },
  {
    quote: "Installed a new smart lock system for my business. The team was knowledgeable and walked me through all the features. Great investment!",
    author: "James Chen",
    location: "Jersey City, NJ",
    rating: 5
  },
  {
    quote: "Had to replace all the locks after moving into our new home. They were prompt, efficient, and the prices were very reasonable.",
    author: "Sarah Mitchell",
    location: "Newark, NJ",
    rating: 5
  },
  {
    quote: "Best car key replacement service I've ever used. They came to my location and had me back on the road in no time.",
    author: "David Thompson",
    location: "Elizabeth, NJ",
    rating: 5
  },
  {
    quote: "Helped secure my retail store with a master key system. Very professional consultation and excellent workmanship.",
    author: "Robert Kim",
    location: "Paterson, NJ",
    rating: 5
  },
  {
    quote: "Lost my only house key while jogging. They arrived quickly and made me a new one on the spot. Incredible service!",
    author: "Emily Walsh",
    location: "Union City, NJ",
    rating: 5
  },
  {
    quote: "They installed high-security locks for my apartment complex. The attention to detail and follow-up service was outstanding.",
    author: "Michael Patel",
    location: "Clifton, NJ",
    rating: 5
  },
  {
    quote: "Had an emergency with my safe and they handled it professionally. Would definitely recommend their safe services.",
    author: "Lisa Anderson",
    location: "Bayonne, NJ",
    rating: 5
  },
  {
    quote: "Great experience getting new locks installed. The locksmith was friendly and explained everything clearly.",
    author: "Thomas Wilson",
    location: "Trenton, NJ",
    rating: 5
  },
  {
    quote: "Quick response time for my business security upgrade. They really understand commercial security needs.",
    author: "Jennifer Lee",
    location: "Camden, NJ",
    rating: 5
  },
  {
    quote: "Helped me with a car lockout situation. Very quick and professional service at a reasonable price.",
    author: "Mark Sullivan",
    location: "Passaic, NJ",
    rating: 5
  },
  {
    quote: "Installed new deadbolts on all my doors. Great work and they even gave me security tips!",
    author: "Rachel Cohen",
    location: "East Orange, NJ",
    rating: 5
  },
  {
    quote: "After a break-in attempt, they helped secure my home with high-security locks. Feel much safer now.",
    author: "Daniel Martinez",
    location: "Vineland, NJ",
    rating: 5
  },
  {
    quote: "Regular maintenance service for our office building. Always reliable and professional.",
    author: "Ashley Williams",
    location: "New Brunswick, NJ",
    rating: 5
  },
  {
    quote: "Changed all the locks in my rental property. Fast, efficient, and great value for money.",
    author: "Kevin O'Brien",
    location: "Perth Amboy, NJ",
    rating: 5
  }
];

const TestimonialsCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    api.on('select', () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    const interval = setInterval(() => {
      if (!isPaused) {
        api.scrollNext();
      }
    }, 5000); // Increased interval to 5 seconds for better readability

    return () => {
      clearInterval(interval);
      api.off('select');
    };
  }, [api, isPaused]);

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
          
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index, true)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-navy-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    api?.scrollTo(index, true);
                  }
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
