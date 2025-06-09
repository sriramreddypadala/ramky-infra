
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
      description: 'Available on call & WhatsApp for project inquiries'
    },
    {
      title: 'Email',
      value: 'admin@ramkyinfra.com',
      description: 'info@ramkyinfra.com for general inquiries'
    }
  ];

  const lifestyleOfferings = [
    'Free site visits for prospective buyers',
    'Free resort membership',
    'Free maintenance of plantation',
    '100% eco-friendly ventures'
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-navy mb-6">
            Get in Touch with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            We Love to Hear from You! Let's Discuss Your Dream Home.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Explore Ramky Infra's open plots and gated villas offering luxury living in green surroundings. Whether you're interested in a custom-built home or ready-to-move villas, our team is here to help.
          </p>
        </div>

        {/* Lifestyle Offerings */}
        <div className="bg-luxury-cream/30 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-playfair font-semibold text-luxury-navy mb-6 text-center">
            Lifestyle Offerings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifestyleOfferings.map((offering, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-luxury-gold text-xl">✓</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">{offering}</p>
              </div>
            ))}
          </div>
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
                      Name
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
                    Email
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
                    Message Box
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

            {/* Social Media Links */}
            <Card className="border-luxury-champagne/30">
              <CardContent className="p-6">
                <h4 className="text-xl font-playfair font-semibold text-luxury-navy mb-4">
                  Connect With Us
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="border-luxury-champagne/50 hover:bg-luxury-gold/10">
                    Facebook
                  </Button>
                  <Button variant="outline" className="border-luxury-champagne/50 hover:bg-luxury-gold/10">
                    Instagram
                  </Button>
                  <Button variant="outline" className="border-luxury-champagne/50 hover:bg-luxury-gold/10">
                    YouTube
                  </Button>
                  <Button variant="outline" className="border-luxury-champagne/50 hover:bg-luxury-gold/10">
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-luxury-champagne/30">
              <CardContent className="p-0">
                <div className="aspect-[16/10] bg-luxury-cream/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-luxury-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-luxury-gold text-2xl">📍</span>
                    </div>
                    <p className="text-luxury-navy font-medium">Visit Our Office</p>
                    <p className="text-sm text-muted-foreground">Jubilee Hills, Hyderabad</p>
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
