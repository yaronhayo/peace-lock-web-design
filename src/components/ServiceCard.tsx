
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof LucideIcons;
  features: string[];
  link: string;
}

const ServiceCard = ({ title, description, icon, features, link }: ServiceCardProps) => {
  // Get the correct icon component from LucideIcons
  const IconComponent = LucideIcons[icon];
  
  return (
    <Card className="transition-all duration-300 hover:shadow-lg bg-white border-none hover:shadow-navy-100 h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center text-navy-500 mb-4">
            {/* Render the icon component correctly */}
            {IconComponent && <IconComponent className="w-8 h-8" />}
          </div>
        </div>
        <CardTitle className="text-xl text-navy-600 text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="text-gray-600 mb-6">{description}</CardDescription>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <LucideIcons.CheckCircle className="w-4 h-4 mr-2 text-lime-500 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="bg-navy-500 text-white hover:bg-lime hover:text-navy-600 w-full transition-colors" asChild>
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
