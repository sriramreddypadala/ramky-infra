
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '₹500Cr+', label: 'Projects Value' },
    { value: '500+', label: 'Happy Families' },
    { value: '2+', label: 'Major Projects' }
  ];

  return (
    <section id="about" className="py-20 bg-luxury-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
                Building Sustainable, Nature-Integrated Real Estate
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Ramky Infra Developers is focused on creating eco-friendly, gated community developments that harmonize with nature while providing modern amenities and 24/7 security.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our core philosophy centers on building sustainable, environmentally conscious communities. With projects like Brindavanam featuring dedicated Goshala and Dwaraka's luxury amenities, we create spaces where families can thrive in harmony with nature.
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
                alt="Ramky Infra Development"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-luxury-gold text-luxury-navy p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-playfair font-bold">15+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
