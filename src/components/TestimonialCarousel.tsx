
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { QuoteIcon } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  return (
    <div className="relative w-full overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-full">
              <div 
                className="relative h-[400px] flex items-center justify-center p-6 md:p-12"
                style={{
                  backgroundImage: `url('/public/lovable-uploads/ccaa5ae3-1929-4a39-b8bb-aaf792e7b006.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-highshine/70"></div>
                <div className="relative text-white text-center max-w-3xl mx-auto">
                  <QuoteIcon className="w-16 h-16 mx-auto mb-4 opacity-70" />
                  <blockquote className="text-xl md:text-3xl font-medium italic mb-6">
                    {testimonial.text}
                  </blockquote>
                  <p className="text-lg md:text-xl">- {testimonial.author}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white" />
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
