import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { useInView } from './useInView';

interface NewsProps {
  newsImages: {
    education: string;
    infrastructure: string;
    airport: string;
  };
}

export function News({ newsImages }: NewsProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const newsItems = [
    {
      image: newsImages.airport,
      title: 'Prime Minister Hun Manet Inaugurates New Airport, Marking a Major Milestone in Cambodia’s Infrastructure Development',
      date: 'February 10, 2026',
      excerpt: 'Strategic investment in new regional airports to enhance connectivity across Southeast Asia.',
    },
    {
      image: newsImages.infrastructure,
      title: 'CamTech University Holds First Graduation Ceremony',
      date: 'February 5, 2026',
      excerpt: 'Held on 17 December, CamTech University’s first graduation ceremony celebrated its inaugural graduates across PhD, Master’s, and Bachelor’s programs, attended by senior government officials and private-sector leaders.',
    },
    {
      image: newsImages.education,
      title: 'OCIC Launches Norea International School, Opening Phases Announced during the Ground Breaking Ceremony',
      date: 'January 28, 2026',
      excerpt: 'Partnership with international institutions to establish new schools and training centers.',
    },
  ];

  return (
    <section id="news" className="bg-[#F5F5F5] px-[0px] py-[64px] m-[0px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mx-[488px] mt-[0px] mb-[12px]" />
          <h2 className="text-[#0B1C2D] mb-4 px-[0px] py-[24px]">
            News & Updates
          </h2>
          <p className="text-[#666666] max-w-2xl mx-auto px-[0px] py-[12px]">
            Latest developments and announcements from Canadia Group
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 p-[0px] m-[0px]">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 px-[32px] py-[0px]"
            >
              <div className="overflow-hidden mb-6 rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex items-center text-sm text-[#666666] mb-3">
                <Calendar className="w-4 h-4 mr-2" />
                {item.date}
              </div>
              <h3 className="text-[#0B1C2D] mb-3 group-hover:text-[#D4AF37] transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-[#666666] leading-relaxed text-base">
                {item.excerpt}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-[#0B1C2D] text-[#0B1C2D] px-8 py-3 h-12 rounded-lg hover:bg-[#0B1C2D] hover:text-white transition-all duration-200 font-medium tracking-wide">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}