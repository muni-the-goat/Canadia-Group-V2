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
          education: "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwbW9kZXJuJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzcwODYyNDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
          infrastructure: "https://images.unsplash.com/photo-1759453072569-4f21d4e96493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdHJ1Y3Rpb24lMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NzA4NzA4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
          airport: "https://images.unsplash.com/photo-1758669246636-17a5f6d972ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhaXJwb3J0JTIwdGVybWluYWwlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzcwODcwODAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
        }}
      />
      <CTA />
      <Footer />
    </div>
  );
}