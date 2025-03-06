
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: '/' },
    { 
      name: 'Properties', 
      link: '#',
      dropdown: [
        { name: 'Residential', link: '#residential' },
        { name: 'Commercial', link: '#commercial' },
        { name: 'Featured', link: '#featured' },
      ]
    },
    { name: 'About Us', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:px-12 lg:px-24',
        scrolled ? 'py-3 navbar-blur shadow-lg' : 'py-5 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="https://iili.io/2mPx3rP.png" alt="Royal Group of Real Estates Logo" className="h-10 mr-2" />
          <span className="font-display text-xl font-bold tracking-tight text-royal-800 hidden sm:block">Royal<span className="text-gold-500">Group</span></span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <>
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="px-3 py-2 text-royal-800 hover:text-gold-600 flex items-center transition-colors duration-300"
                  >
                    {item.name}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className={cn(
                    "absolute left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-in-out transform origin-top-left",
                    activeDropdown === item.name ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  )}>
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.link}
                          className="block px-4 py-2 text-sm text-royal-700 hover:bg-royal-50 hover:text-gold-600"
                          onClick={closeMenu}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.link}
                  className="px-3 py-2 text-royal-800 hover:text-gold-600 transition-colors duration-300"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <CustomButton variant="primary" size="sm" className="ml-4">
            Get In Touch
          </CustomButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-royal-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out pt-24 px-6 overflow-y-auto",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div className="space-y-2">
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex justify-between items-center py-2 text-royal-800 font-medium"
                  >
                    {item.name}
                    <ChevronDown size={16} className={cn(
                      "transition-transform duration-200",
                      activeDropdown === item.name ? "transform rotate-180" : ""
                    )} />
                  </button>
                  <div className={cn(
                    "transition-all duration-300 ease-in-out space-y-1 ml-4",
                    activeDropdown === item.name ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  )}>
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.link}
                        className="block py-2 text-royal-700 hover:text-gold-600"
                        onClick={closeMenu}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.link}
                  className="block py-2 text-royal-800 font-medium hover:text-gold-600"
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <CustomButton variant="primary" size="md" className="mt-6">
            Get In Touch
          </CustomButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
