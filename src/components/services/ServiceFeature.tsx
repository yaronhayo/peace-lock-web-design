
import React from "react";

interface ServiceFeatureProps {
  title: string;
  description: string;
}

const ServiceFeature: React.FC<ServiceFeatureProps> = ({ title, description }) => {
  return (
    <div className="flex items-start">
      <svg className="w-5 h-5 mr-2 text-lime-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
      <div>
        <h3 className="font-medium text-navy-500">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceFeature;
