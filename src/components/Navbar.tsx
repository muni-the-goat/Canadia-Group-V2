import CanadiaLogo from '../assets/Canadia_logo.png'
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Businesses', id: 'businesses' },
    { label: 'Projects', id: 'projects' },
    { label: 'Sustainability', id: 'sustainability' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'News', id: 'news' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0B1C2D] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3"
          >
            <img 
              src={CanadiaLogo} 
              alt="Canadia Logo" 
              className="h-14 w-14"
            />
            <span className="text-white text-lg tracking-tight font-semibold">
              CANADIA GROUP
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-[#D4AF37] transition-colors duration-200 text-sm font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#D4AF37] text-[#0B1C2D] px-6 py-3 rounded-lg hover:bg-[#C5A11F] transition-colors duration-200 text-sm font-medium tracking-wide"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0B1C2D] border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-white hover:text-[#D4AF37] transition-colors duration-200 py-2 font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-[#D4AF37] text-[#0B1C2D] px-6 py-3 rounded-lg hover:bg-[#C5A11F] transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}