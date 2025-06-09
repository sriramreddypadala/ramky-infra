
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { value: '25+', label: 'Years Experience' },
    { value: '$2.5B+', label: 'Properties Sold' },
    { value: '500+', label: 'Happy Clients' },
    { value: '50+', label: 'Prime Locations' }
  ];

  return (
    <section id="about" className="py-20 bg-luxury-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
                Excellence in Luxury Real Estate
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                For over two decades, Luxe Estate has been the premier destination for discerning clients seeking exceptional luxury properties worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to excellence, combined with unparalleled market knowledge and personalized service, has established us as the trusted partner for the world's most prestigious real estate transactions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-playfair font-bold luxury-text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <Button
                size="lg"
                className="bg-luxury-navy hover:bg-luxury-charcoal text-luxury-cream font-semibold px-8"
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Estate"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-luxury-gold text-luxury-navy p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-playfair font-bold">25+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
