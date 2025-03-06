
import { Mail, Phone, MapPin, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '#about' },
    { name: 'Properties', link: '#featured' },
    { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' }
  ];
  
  const services = [
    { name: 'Residential Properties', link: '#' },
    { name: 'Commercial Properties', link: '#' },
    { name: 'Property Management', link: '#' },
    { name: 'Investment Advisory', link: '#' },
    { name: 'Legal Assistance', link: '#' }
  ];
  
  const cities = [
    { name: 'Srinagar', link: '#' },
    { name: 'Jammu', link: '#' },
    { name: 'Chandigarh', link: '#' },
    { name: 'Delhi', link: '#' },
    { name: 'Bangalore', link: '#' }
  ];
  
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={18} />, link: '#' },
    { name: 'Twitter', icon: <Twitter size={18} />, link: '#' },
    { name: 'Instagram', icon: <Instagram size={18} />, link: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, link: '#' }
  ];

  return (
    <footer className="bg-royal-800 text-white animate-fade-up">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <a href="/" className="flex items-center">
              <span className="font-display text-2xl font-bold tracking-tight text-white">Royal <span className="text-gold-400">Group</span></span>
            </a>
            <p className="mt-4 text-royal-200">
              Premium real estate solutions across India's major cities. Building excellence in real estate since 2012.
            </p>
            <div className="mt-8">
              <div className="flex items-center mb-4 hover:-translate-y-0.5 transition-transform duration-300">
                <Mail size={18} className="mr-3 text-gold-400 animate-bounce hover:text-gold-300 transition-colors duration-300" />
                <a href="mailto:info@royalgroupofrealestates.com" className="text-royal-200 hover:text-white hover:underline transition-all duration-300">
                  info@royalgroupofrealestates.com
                </a>
              </div>
              <div className="flex items-center mb-4 hover:-translate-y-0.5 transition-transform duration-300">
                <Phone size={18} className="mr-3 text-gold-400 animate-bounce hover:text-gold-300 transition-colors duration-300" />
                <a href="tel:+917006064587" className="text-royal-200 hover:text-white hover:underline transition-all duration-300">
                  +91 700-606-4587
                </a>
              </div>
              <div className="flex items-start hover:-translate-y-0.5 transition-transform duration-300">
                <MapPin size={18} className="mr-3 text-gold-400 mt-1 animate-bounce hover:text-gold-300 transition-colors duration-300" />
                <span className="text-royal-200 hover:text-white transition-colors duration-300">
                  Residency Road -190001, Srinagar, Jammu and Kashmir, India
                </span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.link} 
                    className="text-royal-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-2 text-gold-400 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mt-8 mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.link} 
                    className="text-royal-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-2 text-gold-400 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Cities</h3>
            <ul className="space-y-3">
              {cities.map((city, index) => (
                <li key={index}>
                  <a 
                    href={city.link} 
                    className="text-royal-200 hover:text-white hover:translate-x-2 transition-all duration-300 flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-2 text-gold-400 group-hover:translate-x-1 transition-transform duration-300" />
                    {city.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mt-8 mb-6 text-white">Working Hours</h3>
            <div className="text-royal-200">
              <p className="mb-2">Monday - Saturday</p>
              <p className="font-semibold text-white">9:00 AM - 6:00 PM</p>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-royal-200 mb-4">
              Subscribe to our newsletter for the latest updates on properties and market insights.
            </p>
            <form className="mt-4">
              <div className="flex transform hover:scale-[1.02] transition-transform duration-300">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-l-lg border-0 text-royal-800 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-shadow duration-300 hover:shadow-lg"
                />
                <button 
                  type="submit" 
                  className="bg-gold-500 text-white px-4 py-2 rounded-r-lg hover:bg-gold-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
            
            <h3 className="text-lg font-semibold mt-8 mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                   href={social.link} 
                  className="w-10 h-10 rounded-full bg-royal-700 flex items-center justify-center hover:bg-gold-500 hover:scale-110 hover:rotate-6 transition-all duration-300 text-white shadow-lg hover:shadow-gold-500/50"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-royal-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-royal-300 text-sm">
            &copy; 2025 Royal Group of Real Estates. All rights reserved. 
            <span className="md:ml-2 block md:inline mt-1 md:mt-0">Designed by Mussadiq Wani</span>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-royal-300 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-royal-300 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-royal-300 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
