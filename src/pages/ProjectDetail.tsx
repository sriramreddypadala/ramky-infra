import { useParams, Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { X } from 'lucide-react';
import Footer from '@/components/Footer';
import PlotInfo from '@/components/PlotInfo';
import { ArrowLeft, MapPin, Home, Leaf, Car, FileText, Play } from 'lucide-react';
import { getAssetPath } from '@/utils/assetUtils';

// Mock data - in a real app, this would come from an API
const projects = [
  {
    id: 1,
    name: 'Brindavanam',
    tagline: 'Gated Community with Open Plots & Villas',
    image: getAssetPath('/src/assets/DJI_0188.JPG'),
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
    locationLink: 'https://maps.app.goo.gl/577wBZCLSsKWFjEE6',
    layoutPdf: '/src/assets/brouchures/RAMKY MAP FINAL PAGE ppp (1).pdf',
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
    image: getAssetPath('/src/assets/villa.JPG'),
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
  
  // Debug log to check the ID
  console.log('Project ID from URL:', id);
  
  // Convert id to number and find the project
  const projectId = id ? parseInt(id, 10) : 1;
  const project = projects.find(p => p.id === projectId);
  
  // Debug log to check found project
  console.log('Found project:', project);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-luxury-navy mb-4">Project Not Found</h2>
          <p className="text-luxury-charcoal/70 mb-6">The project you're looking for doesn't exist or has been moved.</p>
          <Button asChild>
            <Link to="/projects" className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-navy">
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    );
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
                        Contact Sales
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
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d145143.19385168614!2d78.36977424687623!3d17.06899686283097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3bca4d7f292456ad%3A0xdcc8457bfcd03fb!2sWCXM%2BQ4R%20RAMKY'S%20BRINDHAVANAM%2C%20Kadthal%2C%20Seriramakrishnapur%2C%20Telangana%20509408!3m2!1d16.9494973!2d78.4327797!5e0!3m2!1sen!2sin!4v1749556139866!5m2!1sen!2sin" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Brindavanam Location Map"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Layout Plan */}
                {project.name === 'Brindavanam' && project.layoutPdf && (
                  <Card className="border-luxury-gold/30 mt-8">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-playfair font-semibold mb-4">
                        Layout Plan
                      </h3>
                      <div className="rounded-lg overflow-hidden border border-luxury-gold/20 bg-luxury-cream/10 p-4">
                        <div className="flex items-center justify-center">
                          <img 
                            src={getAssetPath('/src/assets/brouchures/RAMKY MAP FINAL PAGE ppp (1).pdf')} 
                            alt="Brindavanam Layout Plan" 
                            className="max-w-full h-auto max-h-[600px] object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22600%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20600%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18a1f4e1b0a%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18a1f4e1b0a%22%3E%3Crect%20width%3D%22800%22%20height%3D%22600%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22290.5625%22%20y%3D%22331.5%22%3ELayout%20Image%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
                              target.alt = 'Layout image failed to load. Please check the file path.';
                            }}
                          />
                        </div>
                        <div className="mt-2 text-center">
                          <a 
                            href={getAssetPath('/src/assets/brouchures/RAMKY MAP FINAL PAGE ppp (1).pdf')} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-sm text-luxury-gold hover:underline"
                          >
                            View Full Size
                          </a>
                        </div>
                      </div>
                      <div className="mt-4 text-center">
                        <p className="text-sm text-muted-foreground">
                          Brindavanam Gated Community Layout Plan
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Video Modal - Kept for any potential video modals used elsewhere */}
        <VideoModal />
        
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
                  Contact Sales
                </Button>
              </a>
              {project.name === 'Brindavanam' ? (
                <a 
                  href={getAssetPath('/src/assets/brouchures/Flyer .pdf')} 
                  download="Brindavanam-Brochure.pdf"
                >
                  <Button variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10 px-8 py-6 text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Download Brochure
                </Button>
                </a>
              ) : (
                <a 
                  href={getAssetPath('/src/assets/brouchures/Flyer .pdf')} 
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

// Video Thumbnail Component
const VideoThumbnail = ({ thumbnail, title, videoId }: { thumbnail: string; title: string; videoId: string }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div 
        className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <img
          src={thumbnail}
          alt={`${title} Thumbnail`}
          className="w-full h-full object-cover aspect-[16/9]"
          onContextMenu={(e) => e.preventDefault()}
          draggable="false"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
          <div className="bg-luxury-gold/90 text-luxury-navy p-3 rounded-full">
            <Play className="w-6 h-6" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white font-medium">{title}</h3>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(false);
            }}
            className="absolute top-4 right-4 text-white hover:text-luxury-gold transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

// Video Modal Component
const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<{id: string, title: string} | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setCurrentVideo(null);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button 
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 text-white hover:text-luxury-gold transition-colors"
      >
        <X className="w-8 h-8" />
      </button>
      
      <div className="w-full max-w-4xl" ref={modalRef}>
        {currentVideo && (
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${currentVideo.id}?autoplay=1&rel=0&modestbranding=1`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={currentVideo.title}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
