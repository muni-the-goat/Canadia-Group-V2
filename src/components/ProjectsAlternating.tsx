import { motion } from 'motion/react';
import { useInView } from './useInView';

interface Project {
  image: string;
  title: string;
  description: string;
}

interface ProjectsAlternatingProps {
  projects: Project[];
}

export function ProjectsAlternating({ projects }: ProjectsAlternatingProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [headerRef, isHeaderInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="bg-white px-[0px] py-[32px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center p-[0px] mx-[0px] my-[32px]"
        >
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-[#0B1C2D] mb-4">Featured Projects</h2>
          <p className="text-[#666666] mx-auto text-center mx-[0px] my-[24px] px-[0px] py-[24px]">
            Landmark developments that define Cambodia's modern landscape
          </p>
        </motion.div>

        <div ref={ref} className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30, x: isEven ? -24 : 24 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-20 items-center ${ !isEven ? 'md:flex-row-reverse' : '' } mx-[0px] mt-[0px] mb-[32px]`}
              >
                {/* Image */}
                <div className={`${!isEven ? 'md:order-2' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.7, delay: index * 0.2 + 0.05 }}
                    className="relative h-[400px] overflow-hidden rounded-lg shadow-2xl group"
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      initial={false}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                </div>

                {/* Text */}
                <div className={`${!isEven ? 'md:order-1' : ''}`}>
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.15 }}
                    className="text-[#0B1C2D] mb-4"
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.25 }}
                    className="text-[#666666] leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}