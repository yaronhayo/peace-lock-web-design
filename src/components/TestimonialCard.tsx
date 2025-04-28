
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
}

const TestimonialCard = ({ quote, author, location, rating }: TestimonialCardProps) => {
  return (
    <Card className="bg-white border-none shadow-lg h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <div className="text-navy-600 text-lg mb-4">
          <span className="text-4xl text-navy-300 font-serif leading-none">"</span>
          {quote}
          <span className="text-4xl text-navy-300 font-serif leading-none">"</span>
        </div>
        <div className="mt-6">
          <p className="font-medium text-navy-500">{author}</p>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
