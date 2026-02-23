import { motion } from 'motion/react';
import { useInView } from './useInView';

interface LeadershipProps {
  leaderImage: string;
}

export function Leadership({ leaderImage }: LeadershipProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="leadership" className="bg-[#F5F5F5] px-[0px] py-[64px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <div ref={ref} className="grid md:grid-cols-12 gap-20 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="md:col-span-6"
          >
            <motion.div
              className="w-full h-[500px] overflow-hidden rounded-lg shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={leaderImage}
                alt="Chairman Pung Kheav Se"
                className="w-full h-full object-cover"
              />
              {/* Gold accent bar */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                style={{ transformOrigin: 'left' }}
                className="absolute bottom-0 left-0 w-16 h-1 bg-[#D4AF37]"
              />
            </motion.div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="md:col-span-6"
          >
            {/* Animated gold bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 h-1 bg-[#D4AF37]"
            />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[#0B1C2D]"
              style={{ marginBottom: '16px' }}
            >
              Leadership
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-[#0B1C2D]"
              style={{ marginBottom: '8px' }}
            >
              Pung Kheav Se, Chairman of Canadia Group
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-[#666666] text-lg"
              style={{ marginBottom: '24px' }}
            >
              Chairman, Canadia Group
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-[#666666] leading-relaxed"
              style={{ marginBottom: '24px' }}
            >
              "Our commitment extends beyond business success. We are dedicated to building a prosperous Cambodia through sustainable development, ethical leadership, and unwavering service to our nation."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-[#666666] leading-relaxed"
              style={{ marginBottom: '40px' }}
            >
              Under visionary leadership, Canadia Group has established itself as Cambodia's most trusted and innovative conglomerate. Our governance framework ensures transparency, accountability, and long-term value creation for all stakeholders.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.75 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3 h-12 rounded-lg hover:bg-[#0B1C2D] hover:text-white transition-all duration-200 font-medium tracking-wide"
            >
              View Leadership & Governance
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}