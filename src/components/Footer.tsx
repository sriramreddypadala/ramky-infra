
const Footer = () => {
  const footerSections = [
    {
      title: 'Properties',
      links: ['Luxury Homes', 'Penthouses', 'Estates', 'Commercial', 'Investment']
    },
    {
      title: 'Services',
      links: ['Buying', 'Selling', 'Renting', 'Property Management', 'Consultation']
    },
    {
      title: 'Company',
      links: ['About Us', 'Team', 'Careers', 'Press', 'Investors']
    },
    {
      title: 'Support',
      links: ['Contact', 'FAQ', 'Legal', 'Privacy', 'Terms']
    }
  ];

  return (
    <footer className="bg-luxury-navy text-luxury-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold luxury-text-gradient mb-4">
              Luxe Estate
            </h3>
            <p className="text-luxury-champagne leading-relaxed mb-6">
              Your premier destination for luxury real estate. Discover exceptional properties and experience unparalleled service in the world's most prestigious locations.
            </p>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-luxury-gold/20 hover:bg-luxury-gold/30 rounded-full flex items-center justify-center transition-colors duration-300"
                  aria-label={social}
                >
                  <span className="text-sm font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-playfair font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-luxury-champagne hover:text-luxury-gold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-luxury-champagne/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-luxury-champagne text-sm">
              © 2024 Luxe Estate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-luxury-champagne hover:text-luxury-gold text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-luxury-champagne hover:text-luxury-gold text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-luxury-champagne hover:text-luxury-gold text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
