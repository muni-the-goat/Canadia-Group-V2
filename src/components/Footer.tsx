import { Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    'About Us',
    'Our Businesses',
    'Featured Projects',
    'Sustainability',
    'Leadership',
    'News & Media',
    'Careers',
    'Investors',
  ];

  const subsidiaries = [
    {
      name: 'Overseas Cambodian Investment Corporation (OCIC)',
      url: 'https://www.ocic.com.kh/',
    },
    {
      name: 'Canadia Investment Holding (CIH)',
      url: 'https://www.canadiagroup.com.kh/',
    },
  ];

  return (
    <footer id="contact" className="bg-[#0B1C2D] text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl mb-6 tracking-tight font-semibold">
              CANADIA GROUP
            </h3>
            <p className="text-white/70 leading-relaxed mb-6 text-base">
              Cambodia's premier conglomerate driving sustainable economic development across key sectors.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#D4AF37] transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 flex items-center justify-center rounded hover:bg-[#D4AF37] transition-colors duration-200"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-6 text-[#D4AF37] font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#D4AF37] transition-colors duration-200 text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-lg mb-6 text-[#D4AF37] font-semibold">Our Companies</h4>
            <ul className="space-y-3">
              {subsidiaries.map((company) => (
                <li key={company.name}>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[#D4AF37] transition-colors duration-200 text-sm"
                  >
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-6 text-[#D4AF37] font-semibold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Canadia Tower, Monivong Blvd<br />
                  Phnom Penh, Cambodia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="tel:+85523215000"
                  className="text-white/70 hover:text-[#D4AF37] transition-colors duration-200 text-sm"
                >
                  +855 23 215 000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@canadiagroup.com"
                  className="text-white/70 hover:text-[#D4AF37] transition-colors duration-200 text-sm"
                >
                  info@canadiagroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2026 Canadia Group. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200 text-sm">
                Terms of Use
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors duration-200 text-sm">
                Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
