import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  heroImage: string;
}

export function Hero({ heroImage }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToBusinesses = () => {
    const element = document.getElementById('businesses');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Techo International Airport"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1C2D]/80 via-[#0B1C2D]/60 to-[#0B1C2D]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[700px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-white mb-6 leading-tight">Invest in <span className="text-[#D4AF37]">Tomorrow</span></h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[#F5F5F5] max-w-[580px] mx-auto mx-[0px] my-[24px] px-[0px] py-[24px]"
          style={{ fontSize: '16px', lineHeight: '26px', fontWeight: 400 }}
        >
          As Cambodia's leading conglomerate, Canadia Group drives sustainable economic growth through strategic investments in banking, infrastructure, real estate, and essential services that shape the nation's development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center px-[10px] py-[0px] mx-[10px] my-[0px]"
        >
          <button
            onClick={scrollToBusinesses}
            className="bg-[#D4AF37] text-[#0B1C2D] px-8 py-3 h-12 rounded-lg hover:bg-[#C5A11F] transition-all duration-300 font-medium tracking-wide w-full sm:w-auto shadow-xl mx-[0px] my-[34px]"
          >
            Explore Our Businesses
          </button>
          <button
            onClick={scrollToProjects}
            className="border-2 border-white bg-transparent text-white px-8 py-3 h-12 rounded-lg hover:bg-white hover:text-[#0B1C2D] transition-all duration-300 font-medium tracking-wide w-full sm:w-auto"
          >
            View Projects
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 2, ease: 'easeInOut' }
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-[#D4AF37] transition-colors"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={40} />
      </motion.button>
    </section>
  );
}