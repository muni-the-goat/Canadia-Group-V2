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
        <div ref={ref} className="grid md:grid-cols-12 gap-20 items-center">
          {/* Image - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <div className="w-full h-[500px] overflow-hidden rounded-lg shadow-2xl">
              <img
                src={leaderImage}
                alt="Chairman Pung Kheav Se"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <div className="mb-6">
              <div className="w-16 h-1 bg-[#D4AF37]" />
            </div>
            <h2 className="text-[#0B1C2D] mb-6 px-[0px] py-[12px]">
              Leadership
            </h2>
            
            <h3 className="text-[#0B1C2D] mb-3 px-[0px] py-[12px]">Pung Kheav Se, Chairman of Canadia Group</h3>
            <p className="text-[#666666] text-lg mb-6 px-[0px] py-[8px]">
              Chairman, Canadia Group
            </p>
            
            <p className="text-[#666666] leading-relaxed mb-6">
              "Our commitment extends beyond business success. We are dedicated to building a prosperous Cambodia through sustainable development, ethical leadership, and unwavering service to our nation."
            </p>
            <p className="text-[#666666] leading-relaxed mb-10">
              Under visionary leadership, Canadia Group has established itself as Cambodia's most trusted and innovative conglomerate. Our governance framework ensures transparency, accountability, and long-term value creation for all stakeholders.
            </p>
            
            <button className="border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3 h-12 rounded-lg hover:bg-[#0B1C2D] hover:text-white transition-all duration-200 font-medium tracking-wide mx-[0px] my-[64px]">
              View Leadership & Governance
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}