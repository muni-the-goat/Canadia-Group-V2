import { motion } from 'motion/react';
import { useInView } from './useInView';

export function CTA() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-[#0B1C2D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 p-[0px] m-[0px]" style={{
          backgroundImage: 'linear-gradient(45deg, #D4AF37 25%, transparent 25%), linear-gradient(-45deg, #D4AF37 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #D4AF37 75%), linear-gradient(-45deg, transparent 75%, #D4AF37 75%)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>

      <div ref={ref} className="max-w-[800px] mx-auto px-6 lg:px-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-white mb-6">
            Investing in Cambodia's Long-Term Growth
          </h2>
          <p className="text-[#F5F5F5] mb-10 text-lg px-[0px] py-[24px]">
            Partner with Cambodia's leading conglomerate to unlock opportunities in Southeast Asia's fastest-growing economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mx-[0px] my-[24px]">
            <button
              onClick={scrollToContact}
              className="bg-[#D4AF37] text-[#0B1C2D] px-10 py-3 h-12 rounded-lg hover:bg-[#C5A11F] transition-all duration-200 font-medium tracking-wide"
            >
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-10 py-3 h-12 rounded-lg hover:bg-white hover:text-[#0B1C2D] transition-all duration-200 font-medium tracking-wide">
              Investor Relations
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}