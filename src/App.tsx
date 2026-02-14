import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BusinessPillars } from './components/BusinessPillars';
import { ProjectsAlternating } from './components/ProjectsAlternating';
import { Sustainability } from './components/Sustainability';
import { Leadership } from './components/Leadership';
import { News } from './components/News';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import TIANightTime from './assets/TIA_Night_time.jpg';
import DaraHotel from './assets/Dara_Hotel.avif';
import KohNoreaBridge from './assets/Koh_Norea_Bridge.jpg';
import CNDTower from './assets/cnd_tower.jpg';
import CHM from './assets/chairman.jpg';
import NIS from './assets/NIS_Ceremony.jpg';
import CamTech from './assets/CamTech_Graduation_2025.jpg';
import TIA from './assets/Techo_International_Airport_Official_Inauguration.jpg';

export default function App() {
  const projects = [
    {
      image: TIANightTime,
      title: "Techo International Airport",
      description: "A landmark aviation infrastructure project that positions Cambodia as a regional hub. This state-of-the-art facility features cutting-edge technology and sustainable design principles, serving millions of passengers annually while driving economic growth and regional connectivity."
    },
    {
      image: KohNoreaBridge,
      title: "Infrastructure Development",
      description: "Critical transportation and urban infrastructure projects that enhance connectivity across Cambodia. Our developments include modern bridges, highways, and urban transit systems that facilitate trade, tourism, and economic development throughout the nation."
    },
    {
      image: DaraHotel,
      title: "Hospitality & Real Estate",
      description: "Premium mixed-use developments and world-class hospitality destinations that set new standards for luxury and service. Our portfolio includes flagship hotels, commercial towers, and residential communities that enhance Cambodia's global standing."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero 
        heroImage={TIANightTime}
      />
      <About 
        aboutImage={CNDTower}
      />
      <BusinessPillars />
      <ProjectsAlternating projects={projects} />
      <Sustainability 
        sustainabilityImage="https://images.unsplash.com/photo-1692118459258-0b90b2b691fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGdyZWVuJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwODcwODAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
      />
      <Leadership 
        leaderImage={CHM}
      />
      <News 
        newsImages={{
          education: NIS,
          infrastructure: CamTech,
          airport: TIA
        }}
      />
      <CTA />
      <Footer />
    </div>
  );
}