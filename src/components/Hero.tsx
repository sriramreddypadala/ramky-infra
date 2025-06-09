
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=2000&q=80',
      title: 'Experience Exceptional Living with Ramky Infra',
      subtitle: 'Eco-friendly gated communities with modern amenities and 24/7 security'
    },
    {
      url: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80',
      title: 'Brindavanam Goshala Community',
      subtitle: 'Nature-focused lifestyle with dedicated cow shelter and green living'
    },
    {
      url: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=2000&q=80',
      title: 'Sustainable Real Estate Development',
      subtitle: 'Building environmentally conscious communities for future generations'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen overflow-hidden pt-16 md:pt-20">
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
          
          {/* Logo Section */}
          <div className="mb-8">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 bg-luxury-gold/10 rounded-full flex items-center justify-center backdrop-blur-sm p-4">
              <img 
                src="/src/assets/ramky logo 2.png" 
                alt="Ramky Infra & Developers" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-luxury-cream mb-6 animate-fade-in">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-luxury-champagne mb-8 animate-slide-up">
            {heroImages[currentSlide].subtitle}
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <Link to="/projects">
              <Button
                size="lg"
                className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-12 py-6 text-lg"
              >
                View Our Projects
              </Button>
            </Link>
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
