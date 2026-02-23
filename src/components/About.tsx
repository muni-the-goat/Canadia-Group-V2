import { motion } from 'motion/react';
import { useInView } from './useInView';

interface AboutProps {
  aboutImage: string;
}

export function About({ aboutImage }: AboutProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div ref={ref} className="grid md:grid-cols-12 gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="md:col-span-6"
          >
            {/* Animated gold bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 h-1 bg-[#D4AF37]"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#0B1C2D]"
              style={{ marginBottom: '24px' }}
            >
              About Canadia Group
            </motion.h2>

            <div className="max-w-[520px]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="text-[#666666]"
                style={{ marginBottom: '24px' }}
              >
                Founded with a vision to drive Cambodia's economic transformation, Canadia Group has emerged as the nation's premier conglomerate. Through our subsidiaries—Overseas Cambodian Investment Corporation (OCIC) and Canadia Investment Holding (CIH)—we operate across diverse sectors critical to national development.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-[#666666]"
                style={{ marginBottom: '40px' }}
              >
                Our integrated approach combines financial services, infrastructure development, real estate, education, and hospitality to create lasting value for Cambodia and its people.
              </motion.p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3 h-12 rounded-lg hover:bg-[#0B1C2D] hover:text-white transition-all duration-200 font-medium tracking-wide"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="md:col-span-6"
          >
            <motion.div
              className="relative h-[500px] overflow-hidden rounded-lg shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={aboutImage}
                alt="Canadia Group"
                className="w-full h-full object-cover"
              />
              {/* Gold accent bar on hover reveal */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                style={{ transformOrigin: 'left' }}
                className="absolute bottom-0 left-0 w-16 h-1 bg-[#D4AF37]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}