
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, location, rating }: TestimonialCardProps) => {
  if (!quote || !author) {
    return null;
  }

  return (
    <Card className="bg-white border-none shadow-lg h-full hover:shadow-xl transition-shadow">
      <CardContent className="pt-6 p-6 h-full flex flex-col justify-between">
        <div>
          <div className="flex mb-4" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: rating }).map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 text-yellow-400 fill-yellow-400" 
                aria-hidden="true"
              />
            ))}
          </div>
          <Quote className="text-navy-300 mb-2 h-6 w-6" aria-hidden="true" />
          <p className="text-navy-600 text-sm leading-relaxed">
            {quote}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="font-semibold text-navy-500">{author}</p>
          {location && <p className="text-gray-500 text-sm">{location}</p>}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
