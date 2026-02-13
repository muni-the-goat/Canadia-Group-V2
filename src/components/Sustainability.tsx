import { motion } from 'motion/react';
import { Leaf, Users, Shield } from 'lucide-react';
import { useInView } from './useInView';

interface SustainabilityProps {
  sustainabilityImage: string;
}

export function Sustainability({ sustainabilityImage }: SustainabilityProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const pillars = [
    {
      icon: Leaf,
      title: 'Environmental Commitment',
      description: 'Implementing sustainable practices across all operations, from green building standards to renewable energy initiatives.',
    },
    {
      icon: Users,
      title: 'Community Development',
      description: 'Investing in education, healthcare, and local communities to create shared prosperity across Cambodia.',
    },
    {
      icon: Shield,
      title: 'Corporate Governance',
      description: 'Maintaining the highest standards of transparency, ethics, and accountability in all business practices.',
    },
  ];

  return (
    <section id="sustainability" className="bg-white px-[0px] py-[64px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="text-center mx-[0px] mt-[0px] mb-[32px]">
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-[#0B1C2D] mb-4">
            Sustainability & ESG
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto text-left m-[0px] px-[0px] py-[24px]">
            Building a sustainable future through responsible corporate practices
          </p>
        </div>

        {/* Image Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 h-96 overflow-hidden rounded-lg shadow-xl"
        >
          <img
            src={sustainabilityImage}
            alt="Sustainable infrastructure"
            className="w-full h-full object-cover mx-[0px] my-[10px] rounded-[10px]"
          />
        </motion.div>

        <div ref={ref} className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0B1C2D] rounded-lg mb-6">
                  <Icon className="w-10 h-10 text-[#D4AF37]" />
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