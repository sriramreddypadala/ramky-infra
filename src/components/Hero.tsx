
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=2000&q=80',
      title: 'Exceptional Luxury Homes',
      subtitle: 'Discover properties that redefine elegant living'
    },
    {
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80',
      title: 'Architectural Excellence',
      subtitle: 'Where design meets sophistication'
    },
    {
      url: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=2000&q=80',
      title: 'Prime Locations',
      subtitle: 'Exclusive properties in prestigious neighborhoods'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 luxury-gradient opacity-70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-luxury-cream mb-6 animate-fade-in">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-luxury-champagne mb-8 animate-slide-up">
            {heroImages[currentSlide].subtitle}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4 p-4 bg-background/90 backdrop-blur-sm rounded-2xl shadow-2xl">
              <div className="flex-1">
                <Input
                  placeholder="Search by location, property type..."
                  className="border-0 bg-transparent text-lg placeholder:text-muted-foreground focus-visible:ring-luxury-gold"
                />
              </div>
              <Button
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8 sm:px-12"
              >
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-luxury-cream hover:bg-luxury-champagne text-luxury-navy font-semibold px-8 py-3 text-lg"
            >
              View Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-luxury-cream text-luxury-cream hover:bg-luxury-cream hover:text-luxury-navy font-semibold px-8 py-3 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-luxury-gold scale-125'
                : 'bg-luxury-cream/50 hover:bg-luxury-cream/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
