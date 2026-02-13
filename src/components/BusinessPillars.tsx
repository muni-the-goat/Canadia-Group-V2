import { motion } from 'motion/react';
import { Building2, DollarSign, Plane, GraduationCap, Hotel, TrendingUp } from 'lucide-react';
import { useInView } from './useInView';

const pillars = [
  {
    icon: DollarSign,
    title: 'Banking & Finance',
    description: 'Comprehensive financial services including commercial banking, microfinance, and investment solutions.',
  },
  {
    icon: Building2,
    title: 'Real Estate & Infrastructure',
    description: 'Large-scale urban development, commercial properties, and critical infrastructure projects.',
  },
  {
    icon: Plane,
    title: 'Airports & Transportation',
    description: 'Aviation infrastructure management and integrated transportation solutions.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'International standard educational institutions fostering Cambodia\'s future leaders.',
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    description: 'Premium hotels and resorts that position Cambodia as a world-class destination.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Holdings',
    description: 'Strategic equity investments across high-growth sectors and emerging industries.',
  },
];

export function BusinessPillars() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="businesses" className="py-32 bg-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="text-center mx-[0px] mt-[0px] mb-[34px]">
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mx-[488px] mt-[0px] mb-[12px]" />
          <h2 className="text-[#0B1C2D] mb-4 px-[0px] py-[12px]">
            Our Business Pillars
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto p-[12px] mx-[0px] my-[12px] text-left">Diversified operations across key sectors driving Cambodia's economic development</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-[0px] m-[0px]">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer relative overflow-hidden h-full rounded-lg"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-[#D4AF37] group-hover:h-full transition-all duration-300" />
                <div className="mb-6">
                  <Icon className="w-12 h-12 text-[#0B1C2D] group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                <h3 className="text-[#0B1C2D] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-[#666666] leading-relaxed text-base">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}