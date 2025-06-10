import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlotInfo from '@/components/PlotInfo';
import { ArrowLeft, MapPin, Home, Leaf, Car, FileText } from 'lucide-react';

// Mock data - in a real app, this would come from an API
const projects = [
  {
    id: 1,
    name: 'Brindavanam',
    tagline: 'Gated Community with Open Plots & Villas',
    image: '/src/assets/DJI_0188.JPG',
    description: 'Welcome to Brindavanam Gated Community, where nature meets luxury. Nestled amidst lush greenery, our gated community features a range of open plots and villas designed to provide you with the perfect blend of tranquility and modern amenities.',
    highlights: [
      'Premium open plots in a gated community',
      'Meticulously landscaped with gardens and water bodies',
      '24/7 security and gated access',
      'Prime location on Srisailam-Bangalore Highway',
      'Proximity to Amazon Data Centre and Pharma City',
      'Easy access to ORR and Gachibowli',
      'Vastu-compliant plots',
      'Sustainable living with green initiatives'
    ],
    features: [
      'Premium Open Plots', 'Gated Community', '24/7 Security',
      'Landscaped Gardens', 'Water Harvesting', 'Wide Roads',
      'Clubhouse', 'Swimming Pool', 'Sports Facilities',
      'Children\'s Play Area'
    ],
    ecoFeatures: [
      'Rainwater harvesting', 'Solar lighting', 'Green spaces',
      'Waste management', 'Energy-efficient design'
    ],
    location: 'Along 6-lane Srisailam Highway to Bangalore Highway',
    locationLink: 'https://maps.app.goo.gl/Ew7sm3HkJ5fkyoLx6',
    connectivity: [
      '1 hour to Gachibowli',
      '25 minutes to Outer Ring Road',
      'Close to Amazon Data Centre',
      'Near World\'s Largest Pharma City',
      'Easy access to Rajiv Gandhi International Airport'
    ]
  },
  {
    id: 2,
    name: 'Ramky Villa',
    tagline: 'EcoLife Community',
    image: '/src/assets/villa.JPG',
    description: 'A thoughtfully designed gated villa enclave that brings together luxury living and sustainable lifestyle. Set in a serene, green environment, this community is where your dream of eco-conscious, premium living becomes reality.',
    highlights: [
      'Premium gated villa community on 10 acres',
      'Eco-friendly features and sustainable living',
      'Vastu-compliant architecture',
      'Private gardens with each villa',
      'High-end finishes and fittings',
      'Peaceful, pollution-free environment',
      'High appreciation zone',
      'Ideal for both living & investment'
    ],
    features: [
      '3 & 4 BHK Villas', 'Private Gardens', 'Clubhouse with Fitness Studio',
      'Swimming Pool & Yoga Deck', 'Children\'s Play Area',
      'Walking/Jogging Tracks', 'Meditation Garden', 'Community Hall',
      '24/7 Security & CCTV'
    ],
    ecoFeatures: [
      'Rainwater harvesting systems',
      'Solar-powered street lighting',
      'Organic waste management',
      'Low-flow water fixtures',
      'Eco-certified building materials'
    ],
    location: 'Along 6-lane Srisailam Highway',
    connectivity: [
      'Near Pharma City & Amazon Data Centre',
      '25 minutes to Outer Ring Road',
      '1 hour to Gachibowli IT Hub',
      'Easy access to Rajiv Gandhi International Airport'
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === parseInt(id || '1'));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-luxury-cream/10">
      <Header />
      <main className="pt-20">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild>
            <Link to="/projects" className="flex items-center text-luxury-navy">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Hero */}
        <section className="bg-luxury-navy text-luxury-cream py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-2">
              {project.name}
            </h1>
            <p className="text-xl text-luxury-gold mb-6">{project.tagline}</p>
            <div className="flex items-center text-luxury-champagne">
              <MapPin className="w-5 h-5 mr-2" />
              <a 
                href={project.locationLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline hover:text-luxury-gold transition-colors"
              >
                {project.location}
              </a>
            </div>
          </div>
        </section>

        {/* Project Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Main Image */}
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover max-h-[500px]"
                  />
                </div>

                {/* Description */}
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-4">
                    About {project.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-4">
                    Project Highlights
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-luxury-gold mr-2 mt-1">•</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h2 className="text-2xl font-playfair font-semibold mb-4">
                    Features & Amenities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center bg-luxury-cream/30 p-3 rounded-lg">
                        <span className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></span>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plot Availability - Only show for Brindavanam */}
                {project.name === 'Brindavanam' && <PlotInfo />}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Info */}
                <Card className="border-luxury-gold/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold mb-4">
                      Project Details
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Project Type</h4>
                        <p className="text-luxury-navy">
                          {project.name.includes('Villa') ? 'Villa Community' : 'Plotted Development'}
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                        <a 
                          href={project.locationLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-luxury-navy hover:underline hover:text-luxury-gold transition-colors"
                        >
                          {project.location}
                        </a>
                      </div>
                      
                      {project.ecoFeatures && (
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground flex items-center">
                            <Leaf className="w-4 h-4 mr-2 text-luxury-gold" />
                            Eco Features
                          </h4>
                          <ul className="mt-2 space-y-1">
                            {project.ecoFeatures.map((feature, index) => (
                              <li key={index} className="text-luxury-navy text-sm">• {feature}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground flex items-center">
                          <Car className="w-4 h-4 mr-2 text-luxury-gold" />
                          Connectivity
                        </h4>
                        <ul className="mt-2 space-y-2">
                          {project.connectivity.map((item, index) => (
                            <li key={index} className="text-luxury-navy text-sm flex">
                              <span className="text-luxury-gold mr-2">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {project.name === 'Brindavanam' ? (
                      <a 
                        href="/src/assets/brouchures/Flyer .pdf" 
                        download="Brindavanam-Brochure.pdf"
                        className="w-full block"
                      >
                        <Button className="w-full mt-6 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold flex items-center justify-center gap-2">
                          <FileText className="w-5 h-5" />
                          Download Brochure
                        </Button>
                      </a>
                    ) : (
                      <a 
                        href="/src/assets/brouchures/Flyer .pdf" 
                        download="Ramky-Villa-Brochure.pdf"
                        className="w-full block"
                      >
                        <Button className="w-full mt-6 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold flex items-center justify-center gap-2">
                          <FileText className="w-5 h-5" />
                          Download Brochure
                        </Button>
                      </a>
                    )}
                    
                    <a href="tel:7416665003" className="w-full block">
                      <Button variant="outline" className="w-full mt-3 border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10">
                        Contact Sales: 7416665003
                      </Button>
                    </a>
                  </CardContent>
                </Card>
                
                {/* Location Map */}
                <Card className="border-luxury-gold/30">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-semibold mb-4">
                      Location Map
                    </h3>
                    <div className="aspect-video bg-luxury-cream/30 rounded-lg overflow-hidden">
                      {/* Replace with actual map component */}
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                        Location Map Coming Soon
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-luxury-navy text-luxury-cream py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              Interested in {project.name}?
            </h2>
            <p className="text-xl text-luxury-champagne mb-8 max-w-3xl mx-auto">
              Contact our sales team today to schedule a site visit or request more information about this exclusive project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:7416665003" className="block">
                <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy font-semibold px-8 py-6 text-lg">
                  Contact Sales: 7416665003
                </Button>
              </a>
              {project.name === 'Brindavanam' ? (
                <a 
                  href="/src/assets/brouchures/Flyer .pdf" 
                  download="Brindavanam-Brochure.pdf"
                >
                  <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 px-8 py-6 text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Download Brochure
                  </Button>
                </a>
              ) : (
                <a 
                  href="/src/assets/brouchures/Flyer .pdf" 
                  download="Ramky-Villa-Brochure.pdf"
                >
                  <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 px-8 py-6 text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Download Brochure
                  </Button>
                </a>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
