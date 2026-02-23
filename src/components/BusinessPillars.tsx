import { useState } from 'react';
import { Building2, DollarSign, Plane, GraduationCap, Hotel, TrendingUp } from 'lucide-react';

interface PillarImages {
  banking: string;
  realEstate: string;
  airports: string;
  education: string;
  hospitality: string;
  investment: string;
}

interface BusinessPillarsProps {
  images: PillarImages;
}

export function BusinessPillars({ images }: BusinessPillarsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pillars = [
    {
      icon: DollarSign,
      title: 'Banking & Finance',
      description: 'Comprehensive financial services including commercial banking, microfinance, and investment solutions.',
      image: images.banking,
    },
    {
      icon: Building2,
      title: 'Real Estate & Infrastructure',
      description: 'Large-scale urban development, commercial properties, and critical infrastructure projects.',
      image: images.realEstate,
    },
    {
      icon: Plane,
      title: 'Airports & Transportation',
      description: 'Aviation infrastructure management and integrated transportation solutions.',
      image: images.airports,
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: "International standard educational institutions fostering Cambodia's future leaders.",
      image: images.education,
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Premium hotels and resorts that position Cambodia as a world-class destination.',
      image: images.hospitality,
    },
    {
      icon: TrendingUp,
      title: 'Investment Holdings',
      description: 'Strategic equity investments across high-growth sectors and emerging industries.',
      image: images.investment,
    },
  ];

  return (
    <section id="businesses" className="py-32 bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-1 bg-[#D4AF37] mx-auto mb-3" />
            <h2 className="text-[#0B1C2D]">Our Business Pillars</h2>
            <div className="h-6" />
            <p className="text-[#666666] mx-auto text-center">
              Diversified operations across key sectors driving Cambodia's economic development
            </p>
          </div>
        {/* Accordion Cards */}
        <div style={{ display: 'flex', gap: '8px', height: '520px', alignItems: 'stretch' }}>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div
                key={pillar.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  flex: isHovered ? '3 1 0%' : isAnyHovered ? '0.5 1 0%' : '1 1 0%',
                  transition: 'flex 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  minWidth: 0,
                }}
              >
                {/* Background Image */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${pillar.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.6s ease',
                  }}
                />

                {/* Gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: isHovered
                      ? 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(11,28,45,0.6) 50%, rgba(11,28,45,0.92) 100%)'
                      : 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(11,28,45,0.7) 60%, rgba(11,28,45,0.95) 100%)',
                    transition: 'background 0.5s ease',
                  }}
                />

                {/* Gold left border on hover */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '3px',
                    height: isHovered ? '100%' : '0%',
                    backgroundColor: '#D4AF37',
                    transition: 'height 0.45s ease',
                    zIndex: 3,
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '28px 22px',
                  }}
                >
                  {/* Icon */}
                  <div style={{ marginBottom: '10px' }}>
                    <Icon
                      style={{
                        width: 26,
                        height: 26,
                        color: isHovered ? '#D4AF37' : 'rgba(255,255,255,0.75)',
                        transition: 'color 0.3s ease',
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      color: '#ffffff',
                      fontSize: isHovered ? '18px' : '14px',
                      fontWeight: 600,
                      lineHeight: 1.3,
                      margin: 0,
                      marginBottom: isHovered ? '10px' : '0',
                      whiteSpace: isHovered ? 'normal' : 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      transition: 'font-size 0.3s ease, margin-bottom 0.3s ease',
                    }}
                  >
                    {pillar.title}
                  </h3>

                  {/* Gold divider */}
                  <div
                    style={{
                      width: isHovered ? '36px' : '0px',
                      height: '2px',
                      backgroundColor: '#D4AF37',
                      marginBottom: isHovered ? '10px' : '0',
                      transition: 'width 0.35s ease 0.1s, margin-bottom 0.35s ease 0.1s',
                    }}
                  />

                  {/* Description */}
                  <div
                    style={{
                      maxHeight: isHovered ? '120px' : '0px',
                      opacity: isHovered ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease 0.1s, opacity 0.35s ease 0.15s',
                    }}
                  >
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.82)',
                        fontSize: '13px',
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}