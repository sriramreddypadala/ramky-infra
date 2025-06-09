
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'Brindavanam',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
      description: 'Nature-inspired community with dedicated Goshala along Srisailam-Bangalore Highway',
      features: ['Open Plots', 'Independent Villas', 'Gated Security', 'Green Infrastructure'],
      location: 'Srisailam-Bangalore Highway'
    },
    {
      id: 2,
      name: 'Dwaraka',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
      description: 'Where Nature Meets Luxury - Premium gated community near major landmarks',
      features: ['Clubhouse', 'Swimming Pool', 'Landscaped Gardens', 'Rainwater Harvesting'],
      location: 'Near Amazon Data Centre & Pharma City'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-navy text-luxury-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Our Exclusive Projects
            </h1>
            <p className="text-xl md:text-2xl text-luxury-champagne max-w-3xl mx-auto">
              Discover Ramky's premier gated communities, designed for comfort and environmental harmony
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects.map((project) => (
                <Card key={project.id} className="group luxury-hover bg-luxury-cream/20 border-luxury-champagne/30 overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 luxury-gradient opacity-40"></div>
                    <div className="absolute bottom-6 left-6 text-luxury-cream">
                      <h3 className="text-3xl font-playfair font-bold mb-2">{project.name}</h3>
                      <p className="text-luxury-champagne">{project.location}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full bg-luxury-navy hover:bg-luxury-charcoal text-luxury-cream font-semibold">
                      View Project Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
