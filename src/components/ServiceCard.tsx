
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  link: string;
}

const ServiceCard = ({ title, description, icon, features, link }: ServiceCardProps) => {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg bg-white border-none hover:shadow-navy-100">
      <CardHeader className="pb-2">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center text-navy-500 text-4xl mb-4">
            {icon}
          </div>
        </div>
        <CardTitle className="text-xl text-navy-600 text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="text-gray-600 mb-6">{description}</CardDescription>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <svg className="w-4 h-4 mr-2 text-lime-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="btn-secondary w-full text-gray-800" asChild>
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
