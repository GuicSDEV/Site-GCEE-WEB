import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import sponsor logos
import shellLogo from "@/assets/sponsors/shell.png";
import itaipuLogo from "@/assets/sponsors/itaipu.png";
import ptiLogo from "@/assets/sponsors/pti.png";
import swagelokLogo from "@/assets/sponsors/swagelok.png";
import unilaLogo from "@/assets/sponsors/unila.jpg";
import xbriLogo from "@/assets/sponsors/xbri.png";
import labmakerLogo from "@/assets/sponsors/labmaker.png";
import labiotLogo from "@/assets/sponsors/labiot.png";
import leserLogo from "@/assets/sponsors/leser.png";

interface Sponsor {
  name: string;
  logo: string;
  website: string;
  description: string;
  category: "Platina" | "Ouro" | "Prata" | "Apoiadores";
  videoUrl?: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Itaipu Parquetec",
    logo: ptiLogo,
    website: "https://www.pti.org.br",
    description: "O Itaipu Parquetec é um ecossistema de inovação localizado em Foz do Iguaçu, na Tríplice Fronteira. Reunindo instituições de ensino, empresas e governo, atua com foco em tecnologias sustentáveis e transição energética.",
    category: "Platina",
    videoUrl: "https://www.youtube.com/embed/sQ1QAwiWF38?rel=0"
  },
  {
    name: "Itaipu Binacional",
    logo: itaipuLogo,
    website: "https://www.itaipu.gov.br/",
    description: "A Itaipu Binacional é uma das maiores hidrelétricas do mundo, com compromisso sólido com a inovação. Reconhecida por gestão ambiental, preservação da biodiversidade e projetos sociais.",
    category: "Platina"
  },
  {
    name: "XBRI Pneus",
    logo: xbriLogo,
    website: "https://xbri.com.br/",
    description: "Marca brasileira especializada no desenvolvimento e fabricação de pneus de alta performance. Com foco em tecnologia, segurança e durabilidade, investe continuamente em pesquisa e inovação.",
    category: "Ouro"
  },
  {
    name: "Royal Dutch Shell",
    logo: shellLogo,
    website: "https://www.shell.com/",
    description: "Empresa global de energia comprometida com o fornecimento responsável de petróleo, gás e soluções voltadas para a transição energética. Investe em inovação, segurança e sustentabilidade.",
    category: "Ouro",
    videoUrl: "https://www.youtube.com/embed/UWLBvm_scnE?rel=0"
  },
  {
    name: "UNILA",
    logo: unilaLogo,
    website: "https://portal.unila.edu.br/",
    description: "Universidade Federal da Integração Latino-Americana. Instituição pública criada para promover a integração regional por meio da educação, oferecendo cursos voltados à ciência, tecnologia e desenvolvimento sustentável.",
    category: "Prata",
    videoUrl: "https://www.youtube.com/embed/k__tQPz6XL0?rel=0"
  },
  {
    name: "Swagelok",
    logo: swagelokLogo,
    website: "https://www.swagelok.com/",
    description: "Líder global em soluções de sistemas de fluidos, fornecendo produtos de alta qualidade para diversas indústrias.",
    category: "Apoiadores"
  },
  {
    name: "LabMaker Iguaçu",
    logo: labmakerLogo,
    website: "#",
    description: "Laboratório de inovação e fabricação digital, promovendo a cultura maker e o desenvolvimento tecnológico na região.",
    category: "Apoiadores"
  },
  {
    name: "LabIoT",
    logo: labiotLogo,
    website: "#",
    description: "Laboratório focado em Internet das Coisas e soluções tecnológicas inovadoras para diversos setores.",
    category: "Apoiadores"
  },
  {
    name: "LESER",
    logo: leserLogo,
    website: "https://www.leser.com/",
    description: "Fabricante líder mundial de válvulas de segurança e alívio de pressão para diversas aplicações industriais.",
    category: "Apoiadores"
  }
];

const categoryColors = {
  "Platina": "from-slate-200 to-slate-400",
  "Ouro": "from-yellow-200 to-yellow-400",
  "Prata": "from-gray-300 to-gray-400",
  "Apoiadores": "from-blue-100 to-blue-200"
};

const Sponsors = () => {
  const groupedSponsors = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.category]) {
      acc[sponsor.category] = [];
    }
    acc[sponsor.category].push(sponsor);
    return acc;
  }, {} as Record<string, Sponsor[]>);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Nossos Patrocinadores
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça as organizações que apoiam e impulsionam o desenvolvimento do GCEE
          </p>
        </section>

        {/* Sponsors by Category */}
        {(["Platina", "Ouro", "Prata", "Apoiadores"] as const).map((category) => (
          groupedSponsors[category] && (
            <section key={category} className="mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className={`inline-block px-8 py-3 rounded-full bg-gradient-to-r ${categoryColors[category]} shadow-elegant`}>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {category === "Apoiadores" ? "Apoiadores" : `Categoria ${category}`}
                  </h2>
                </div>
              </div>

              <div className="grid gap-8">
                {groupedSponsors[category].map((sponsor, index) => (
                  <Card
                    key={sponsor.name}
                    className="p-8 hover:shadow-2xl transition-all duration-300 animate-fade-in border-border/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Sponsor Info */}
                      <div className="space-y-6">
                        <div className="flex items-center space-x-6">
                          <div className="bg-white p-4 rounded-xl shadow-md flex-shrink-0">
                            <img
                              src={sponsor.logo}
                              alt={`${sponsor.name} logo`}
                              className="h-16 w-auto object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {sponsor.name}
                            </h3>
                            <span className="text-sm text-primary font-semibold">
                              {category === "Apoiadores" ? "Apoiador" : `Patrocinador ${category}`}
                            </span>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {sponsor.description}
                        </p>

                        <Button
                          asChild
                          variant="default"
                          className="w-full sm:w-auto"
                        >
                          <a
                            href={sponsor.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2"
                          >
                            <span>Acessar Site</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>

                      {/* Video or Placeholder */}
                      <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                        {sponsor.videoUrl ? (
                          <iframe
                            width="100%"
                            height="100%"
                            src={sponsor.videoUrl}
                            title={`Vídeo ${sponsor.name}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                            <div className="text-center p-8">
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-24 w-auto object-contain mx-auto opacity-30"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )
        ))}

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <Card className="p-12 bg-gradient-subtle border-border/50">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Interessado em Apoiar o GCEE?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Se sua organização compartilha dos nossos valores e deseja fazer parte desta jornada de inovação e sustentabilidade, entre em contato conosco.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:contato@gcee.unioeste.br">
                Entre em Contato
              </a>
            </Button>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sponsors;
