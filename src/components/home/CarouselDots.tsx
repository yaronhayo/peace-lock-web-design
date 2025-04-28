
interface CarouselDotsProps {
  total: number;
  currentSlide: number;
  onDotClick: (index: number) => void;
}

const CarouselDots = ({ total, currentSlide, onDotClick }: CarouselDotsProps) => {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-2 h-2 rounded-full transition-colors ${
            currentSlide === index ? 'bg-navy-500' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onDotClick(index);
            }
          }}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
