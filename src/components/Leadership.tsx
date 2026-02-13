import { motion } from 'motion/react';
import { useInView } from './useInView';

interface LeadershipProps {
  leaderImage: string;
}

export function Leadership({ leaderImage }: LeadershipProps) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="leadership" className="bg-[#F5F5F5] px-[0px] py-[64px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-[#0B1C2D] mb-4">
            Leadership
          </h2>
        </div>

        <div ref={ref} className="flex flex-col items-center">
          {/* Chairman Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-80 h-80 overflow-hidden rounded-lg shadow-2xl mx-auto">
              <img
                src={leaderImage}
                alt="Chairman Pung Kheav Se"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-6"
          >
            <h3 className="text-[#0B1C2D] mb-2">
              Pung Kheav Se
            </h3>
            <p className="text-[#666666] text-lg">
              Chairman, Canadia Group
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[600px] text-center"
          >
            <p className="text-[#666666] leading-relaxed mb-6">
              "Our commitment extends beyond business success. We are dedicated to building a prosperous Cambodia through sustainable development, ethical leadership, and unwavering service to our nation."
            </p>
            <p className="text-[#666666] leading-relaxed">
              Under visionary leadership, Canadia Group has established itself as Cambodia's most trusted and innovative conglomerate. Our governance framework ensures transparency, accountability, and long-term value creation for all stakeholders.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}