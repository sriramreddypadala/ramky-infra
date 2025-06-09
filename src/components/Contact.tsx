
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      title: 'Office Location',
      value: 'KVR Holdings, 2nd Floor',
      description: 'Road #36, Jubilee Hills, Hyderabad'
    },
    {
      title: 'Phone',
      value: '+91 99668 58799',
      description: 'Available for project inquiries and site visits'
    },
    {
      title: 'Email',
      value: 'admin@ramkyinfra.com',
      description: 'info@ramkyinfra.com for general inquiries'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Contact Our Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discover your perfect home in our gated communities? Our team is here to provide personalized assistance for Brindavanam and Dwaraka projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-luxury-champagne/30 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-luxury-navy mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-luxury-champagne/50 focus-visible:ring-luxury-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-luxury-navy mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-luxury-champagne/50 focus-visible:ring-luxury-gold"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-luxury-navy mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-luxury-champagne/50 focus-visible:ring-luxury-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-luxury-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-luxury-champagne/50 rounded-md focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-transparent resize-none"
                    placeholder="Tell us about your dream property..."
                  />
                </div>
                
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-luxury-navy hover:bg-luxury-charcoal text-luxury-cream font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-luxury-champagne/30 hover:border-luxury-gold/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-playfair font-semibold text-luxury-navy mb-2">
                    {info.title}
                  </h4>
                  <p className="text-lg font-medium text-luxury-gold mb-1">
                    {info.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}

            {/* Map Placeholder */}
            <Card className="border-luxury-champagne/30">
              <CardContent className="p-0">
                <div className="aspect-[16/10] bg-luxury-cream/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-luxury-gold text-2xl">📍</span>
                    </div>
                    <p className="text-luxury-navy font-medium">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">Find our offices worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
