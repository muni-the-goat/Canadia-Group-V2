import { motion } from 'motion/react';
import { useInView } from './useInView';

interface AboutProps {
  aboutImage: string;
}

export function About({ aboutImage }: AboutProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div ref={ref} className="grid md:grid-cols-12 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <div className="mb-6">
              <div className="w-16 h-1 bg-[#D4AF37]" />
            </div>
            <h2 className="text-[#0B1C2D] mb-6 px-[0px] py-[8px]">
              About Canadia Group
            </h2>
            <div className="max-w-[520px]">
              <p className="text-[#666666] mb-6 px-[0px] py-[12px]">
                Founded with a vision to drive Cambodia's economic transformation, Canadia Group has emerged as the nation's premier conglomerate. Through our subsidiaries—Overseas Cambodian Investment Corporation (OCIC) and Canadia Investment Holding (CIH)—we operate across diverse sectors critical to national development.
              </p>
              <p className="text-[#666666] mb-8">
                Our integrated approach combines financial services, infrastructure development, real estate, education, and hospitality to create lasting value for Cambodia and its people.
              </p>
            </div>
            <button className="border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3 h-12 rounded-lg hover:bg-[#0B1C2D] hover:text-white transition-all duration-200 font-medium tracking-wide mx-[0px] my-[64px]">
              Learn More
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <div className="relative h-[500px]">
              <img
                src={aboutImage}
                alt="Canadia Group Leadership"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}