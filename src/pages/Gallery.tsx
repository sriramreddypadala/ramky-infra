
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'plots', name: 'Residential Plots' },
    { id: 'villas', name: 'Villas' },
    { id: 'landscape', name: 'Landscape' },
    { id: 'amenities', name: 'Amenities' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
      category: 'villas',
      title: 'Luxury Villa Design',
      description: 'Modern architectural excellence'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=800&q=80',
      category: 'plots',
      title: 'Premium Residential Plots',
      description: 'Spacious plots in gated community'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=800&q=80',
      category: 'landscape',
      title: 'Landscaped Gardens',
      description: 'Beautiful green spaces'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800&q=80',
      category: 'landscape',
      title: 'Water Features',
      description: 'Serene water bodies'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
      category: 'amenities',
      title: 'Recreation Areas',
      description: 'Community spaces for relaxation'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      category: 'amenities',
      title: 'Modern Facilities',
      description: 'State-of-the-art amenities'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-luxury-navy text-luxury-cream">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
              Our Exclusive Gallery
            </h1>
            <p className="text-xl md:text-2xl text-luxury-champagne max-w-3xl mx-auto">
              Showcasing distinction and sophistication in every detail
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-12 bg-luxury-cream/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-luxury-navy text-luxury-cream'
                      : 'bg-background text-luxury-navy hover:bg-luxury-gold hover:text-luxury-navy'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredImages.map((image) => (
                <div key={image.id} className="group luxury-hover cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 luxury-gradient opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 text-luxury-cream transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-playfair font-semibold mb-1">{image.title}</h3>
                      <p className="text-luxury-champagne text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
