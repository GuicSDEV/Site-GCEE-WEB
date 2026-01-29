import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import shellLogo from "@/assets/sponsors/shell.png";
import itaipuLogo from "@/assets/sponsors/itaipu.png";
import ptiLogo from "@/assets/sponsors/pti.png";
import swagelokLogo from "@/assets/sponsors/swagelok.png";
import unilaLogo from "@/assets/sponsors/unila.jpg";
import xbriLogo from "@/assets/sponsors/xbri-black.png";
import labmakerLogo from "@/assets/sponsors/labmaker.png";
import labiotLogo from "@/assets/sponsors/labiot.png";
import leserLogo from "@/assets/sponsors/leser.png";
import fundepLogo from "@/assets/sponsors/fundep.png";
import govPrLogo from "@/assets/sponsors/gov-pr.png";
import h2heliumLogo from "@/assets/sponsors/h2helium.png";
import horizonLogo from "@/assets/sponsors/horizon.png";
import xbriBanner from "@/assets/sponsors/banner-xbri.jpeg";
import itaipuBanner from "@/assets/sponsors/banner-itaipu.jpg";
import receitaFederalLogo from "@/assets/sponsors/receita-federal.png";
import altairCyclesLogo from "@/assets/sponsors/altair-cycles.png";
import tdiEngenhariaLogo from "@/assets/sponsors/3di-engenharia.avif";
import ponteNovaEnergiaLogo from "@/assets/sponsors/ponte-nova-energia.png";

interface Sponsor {
  name: string;
  logo: string;
  website: string;
  description: string;
  videoUrl?: string;
  banner?: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Shell",
    logo: shellLogo,
    website: "https://www.shell.com.br",
    description: "Líder global em energia e petroquímica, a Shell apoia projetos de mobilidade sustentável através da Shell Eco-marathon.",
    videoUrl: "https://www.youtube.com/embed/UWLBvm_scnE"
  },
  {
    name: "Itaipu Binacional",
    logo: itaipuLogo,
    website: "https://www.itaipu.gov.br",
    description: "A maior geradora de energia limpa e renovável do planeta, localizada na fronteira entre Brasil e Paraguai.",
    videoUrl: "https://www.youtube.com/embed/5Kejx8uZ9pg"
  },
  {
    name: "Itaipu Parquetec",
    logo: ptiLogo,
    website: "https://www.itaipuparquetec.org.br",
    description: "Itaipu Parquetec - Promove o desenvolvimento científico, tecnológico e de inovação da região.",
    videoUrl: "https://www.youtube.com/embed/us9op0jeDCg"
  },
  {
    name: "Swagelok",
    logo: swagelokLogo,
    website: "https://www.swagelok.com",
    description: "Referência mundial em conexões e válvulas de alta qualidade para sistemas de fluidos.",
    videoUrl: "https://www.youtube.com/embed/blsTJgICs-U"
  },
  {
    name: "XBRI",
    logo: xbriLogo,
    website: "https://www.xbri.com.br",
    description: "Fabricante brasileira de pneus de alta performance para veículos off-road e comerciais.",
    banner: xbriBanner
  },
  {
    name: "Unila",
    logo: unilaLogo,
    website: "https://www.unila.edu.br",
    description: "Universidade Federal da Integração Latino-Americana.",
    videoUrl: "https://www.youtube.com/embed/k__tQPz6XL0"
  },
  {
    name: "Labmaker",
    logo: labmakerLogo,
    website: "#",
    description: "Laboratório de inovação e prototipagem da Unioeste."
  },
  {
    name: "Labiot",
    logo: labiotLogo,
    website: "#",
    description: "Laboratório de Internet das Coisas da Unioeste."
  },
  {
    name: "Leser",
    logo: leserLogo,
    website: "https://www.leser.com",
    description: "Líder mundial em válvulas de segurança e sistemas de alívio de pressão."
  },
  {
    name: "Fundep",
    logo: fundepLogo,
    website: "https://www.fundep.ufmg.br",
    description: "Fundação de Desenvolvimento da Pesquisa."
  },
  {
    name: "Governo do Paraná",
    logo: govPrLogo,
    website: "https://www.pr.gov.br",
    description: "Governo do Estado do Paraná."
  },
  {
    name: "H2 Helium",
    logo: h2heliumLogo,
    website: "#",
    description: "Especializada em tecnologias de hidrogênio e células de combustível."
  },
  {
    name: "Horizon Fuel Cell",
    logo: horizonLogo,
    website: "https://www.horizonfuelcell.com",
    description: "Líder em tecnologia de células de combustível de hidrogênio."
  },
  {
    name: "Receita Federal",
    logo: receitaFederalLogo,
    website: "https://www.gov.br/receitafederal/pt-br",
    description: "Receita Federal do Brasil."
  },
  {
    name: "Altair Cycles",
    logo: altairCyclesLogo,
    website: "#",
    description: "Altair Cycles - Soluções em mobilidade."
  },
  {
    name: "3Di Engenharia",
    logo: tdiEngenhariaLogo,
    website: "#",
    description: "3Di Engenharia - Soluções em engenharia e tecnologia."
  },
  {
    name: "Ponte Nova Energia",
    logo: ponteNovaEnergiaLogo,
    website: "https://pontenovaenergia.com",
    description: "Ponte Nova Energia - Soluções inovadoras em energia sustentável."
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12
    }
  }
};

const heroVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Sponsors() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20 overflow-hidden">
          <div className="container px-4">
            <motion.div 
              className="text-center max-w-3xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={heroVariants}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('sponsors.hero.title')}
                <span className="bg-gradient-energy bg-clip-text text-transparent"> {t('sponsors.hero.partners')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('sponsors.hero.description')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sponsors Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
              >
                {sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    <Card className="bg-gradient-card border-0 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                      <CardContent className="p-6 space-y-4">
                        {/* Logo */}
                        <motion.div 
                          className="bg-white p-6 rounded-lg flex items-center justify-center min-h-[150px] overflow-hidden"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            className="max-w-[180px] max-h-[100px] w-auto h-auto object-contain"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                          />
                        </motion.div>

                        {/* Content */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-bold text-foreground">
                            {sponsor.name}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {sponsor.description}
                          </p>
                          
                          {sponsor.banner ? (
                            <motion.div 
                              className="aspect-video rounded-lg overflow-hidden"
                              whileHover={{ scale: 1.02 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <img
                                src={sponsor.banner}
                                alt={`${sponsor.name} banner`}
                                className="w-full h-full object-cover"
                              />
                            </motion.div>
                          ) : sponsor.videoUrl ? (
                            <div className="aspect-video">
                              <iframe
                                src={sponsor.videoUrl}
                                title={`${sponsor.name} video`}
                                className="w-full h-full rounded-lg"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            </div>
                          ) : null}

                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button
                              className="w-full bg-accent hover:bg-accent-light text-accent-foreground group"
                              asChild
                            >
                              <a
                                href={sponsor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2"
                              >
                                <span>{t('sponsors.visit')}</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={ctaVariants}
            >
              <Card className="max-w-3xl mx-auto bg-gradient-card border-0 shadow-xl overflow-hidden">
                <CardContent className="p-12 text-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-foreground mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {t('sponsors.cta.title')}
                  </motion.h2>
                  <motion.p 
                    className="text-lg text-muted-foreground mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {t('sponsors.cta.description')}
                  </motion.p>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        asChild
                      >
                        <a href="/carta-patrocinio.pdf" download>
                          {t('sponsors.cta.downloadLetter')}
                        </a>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent-light text-accent-foreground"
                        asChild
                      >
                        <a href="https://wa.me/5544999001713" target="_blank" rel="noopener noreferrer">
                          {t('sponsors.cta.button')}
                        </a>
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
