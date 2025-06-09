
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '₹500Cr+', label: 'Projects Value' },
    { value: '500+', label: 'Happy Families' },
    { value: '2+', label: 'Major Projects' }
  ];

  const highlights = [
    'Thoughtful planning and superior architectural design',
    'Focus on green living and energy-efficient features',
    'High attention to detail in every project',
    'Communities designed for healthy, balanced lifestyles'
  ];

  const sustainabilityFeatures = [
    'Eco-friendly infrastructure and layouts',
    'Integration of green spaces and water bodies',
    'Long-term environmental conservation initiatives'
  ];

  const values = [
    'Quality construction',
    'Integrity in delivery and processes',
    'Transparent customer communication',
    'Continuous pursuit of excellence'
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
                Ramky Infra Developers is a leading real estate development company committed to creating sustainable and eco-friendly living spaces. With a focus on innovation, quality, and community, we consistently deliver projects that transform urban and suburban landscapes.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-semibold text-luxury-navy">Key Highlights</h3>
              <div className="grid grid-cols-1 gap-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
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

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <div className="bg-background p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-luxury-navy mb-6">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To be a pioneering force in the real estate industry by setting new benchmarks in innovation, sustainability, and community building. We aspire to create eco-conscious, vibrant living environments that enrich lives and preserve the planet."
            </p>
          </div>
          
          <div className="bg-background p-8 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-playfair font-bold text-luxury-navy mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To deliver exceptional living spaces that integrate modern comforts with sustainable practices. We aim to exceed customer expectations, uphold integrity, and foster lasting relationships through responsible development."
            </p>
          </div>
        </div>

        {/* Sustainability & Values */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-6">Sustainability Commitment</h3>
            <div className="space-y-3">
              {sustainabilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-6">Customer-Centric Values</h3>
            <div className="space-y-3">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-playfair font-bold text-luxury-navy mb-8">Leadership</h3>
          <div className="bg-background p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h4 className="text-2xl font-playfair font-semibold text-luxury-navy mb-4">Mr. Ramky</h4>
            <p className="text-lg text-luxury-gold mb-4">Managing Director</p>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-muted-foreground">A visionary leader in real estate innovation</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-muted-foreground">Leading the company's mission to integrate global standards with local excellence</span>
              </div>
              <div className="flex items-start">
                <span className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-muted-foreground">Known for delivering transformative, value-driven projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
