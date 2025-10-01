import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { useLanguage } from "@/contexts/LanguageContext";
import processoSeletivoImg from "@/assets/processo-seletivo.jpg";
import shellVictoryPodium from "@/assets/shell-victory-podium.png";
import shellVictoryTeam from "@/assets/shell-victory-team.png";
import teamTechnicalInspection from "@/assets/team-technical-inspection.png";

const newsItems = [
  {
    id: 1,
    title: "GCEE Vencedor da Shell Eco-marathon 2025",
    summary: "O Grupo Cataratas de Eficiência Energética conquistou o 1º lugar na categoria Conceito Urbano (URBAN) com célula de hidrogênio na Shell Eco-marathon Brasil 2025!",
    content: `Uma conquista histórica para o GCEE! Nossa equipe alcançou o primeiro lugar na categoria Conceito Urbano (URBAN) com célula de hidrogênio na Shell Eco-marathon Brasil 2025, realizada no Rio de Janeiro.

A Shell Eco-marathon é uma das competições mais prestigiadas do mundo em eficiência energética e mobilidade sustentável. Nosso protótipo demonstrou excelência técnica, inovação e comprometimento com um futuro mais limpo e eficiente.

Esta vitória é resultado de meses de dedicação, pesquisa e trabalho em equipe. Parabéns a todos os membros que tornaram este sonho realidade!`,
    link: "https://www.instagram.com/gcee_unila/",
    images: [shellVictoryPodium, shellVictoryTeam],
    date: "Agosto 2025"
  },
  {
    id: 2,
    title: "Resultado do Processo Seletivo de 2025",
    summary: "O Grupo Cataratas de Eficiência Energética (GCEE) tem a satisfação de anunciar o resultado oficial do Processo Seletivo 2025!",
    content: `Após um criterioso processo de análise e entrevistas, queremos parabenizar todos os candidatos que demonstraram empenho, criatividade e dedicação durante todas as entrevistas. A seleção deste ano reforça o compromisso do GCEE com a excelência acadêmica, a inovação em engenharia e o desenvolvimento de soluções sustentáveis.

A lista com os aprovados está disponível nas imagens deste post, na aba "Notícias" do nosso site e também será divulgada via nosso Instagram.

Aos novos integrantes, sejam muito bem-vindos! Estamos entusiasmados para iniciar mais um ciclo de desafios, projetos e aprendizados. Contamos com vocês!

Agradecemos a todos os novos membros e desejamos sucesso em suas jornadas acadêmicas e profissionais. O futuro da eficiência energética passa por vocês!`,
    link: "https://www.instagram.com/p/DLNzcT7RbUm/?utm_source=ig_web_copy_link&igsh=bTU0d2RpbTIwZWho",
    images: [processoSeletivoImg],
    date: "Janeiro 2025"
  },
  {
    id: 3,
    title: "Participação na Shell Eco-marathon",
    summary: "GCEE confirma participação na competição internacional de eficiência energética.",
    content: "Nossa equipe está se preparando intensivamente para a próxima edição da Shell Eco-marathon. Este ano, focamos em inovações sustentáveis e tecnologias limpas que podem revolucionar o transporte do futuro.",
    link: "#",
    images: [teamTechnicalInspection],
    date: "Dezembro 2024"
  },
  {
    id: 4,
    title: "Novo Laboratório de Pesquisa",
    summary: "Inauguração do laboratório dedicado a pesquisas em eficiência energética.",
    content: "Com equipamentos de última geração, o novo laboratório permitirá pesquisas mais avançadas em tecnologias sustentáveis e desenvolvimento de soluções inovadoras para o setor energético.",
    link: "#",
    images: ["/api/placeholder/400/300"],
    date: "Novembro 2024"
  }
];

export default function News() {
  const { t } = useLanguage();
  const [currentNews, setCurrentNews] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % newsItems.length);
    setCurrentImageIndex(0);
  };

  const prevNews = () => {
    setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentItem.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentItem.images.length) % currentItem.images.length);
  };

  const currentItem = newsItems[currentNews];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('news.hero.title')}
                <span className="bg-gradient-energy bg-clip-text text-transparent"> {t('news.hero.gcee')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('news.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <Card className="bg-gradient-card border-0 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative">
                      <div className="aspect-[4/3] bg-muted overflow-hidden">
                        <img 
                          src={currentItem.images[currentImageIndex]} 
                          alt={`${currentItem.title} - Image ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Image navigation arrows (only show if multiple images) */}
                      {currentItem.images.length > 1 && (
                        <>
                          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={prevImage}
                              className="ml-4 bg-background/80 hover:bg-background text-foreground shadow-md"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={nextImage}
                              className="mr-4 bg-background/80 hover:bg-background text-foreground shadow-md"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          {/* Image indicators */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {currentItem.images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 rounded-full transition-smooth ${
                                  index === currentImageIndex 
                                    ? 'bg-accent shadow-glow w-6' 
                                    : 'bg-white/50 hover:bg-white/70'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                      
                      {/* News navigation arrows */}
                      <div className="absolute bottom-4 left-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={prevNews}
                          className="bg-background/80 hover:bg-background text-foreground shadow-md"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span className="ml-2">{t('news.prev')}</span>
                        </Button>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={nextNews}
                          className="bg-background/80 hover:bg-background text-foreground shadow-md"
                        >
                          <span className="mr-2">{t('news.next')}</span>
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="space-y-6">
                        <div>
                          <div className="text-sm text-accent font-semibold mb-2">{currentItem.date}</div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                            {currentItem.title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed">
                            {currentItem.summary}
                          </p>
                        </div>

                        <div className="prose prose-sm text-muted-foreground">
                          <p className="whitespace-pre-line leading-relaxed">
                            {currentItem.content.split('\n\n')[0]}
                          </p>
                        </div>

                        <Button
                          className="bg-accent hover:bg-accent-light text-accent-foreground group w-fit"
                          asChild
                        >
                          <a
                            href={currentItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <span>{t('news.readMore')}</span>
                            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* News indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {newsItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentNews(index);
                      setCurrentImageIndex(0);
                    }}
                    className={`w-3 h-3 rounded-full transition-smooth ${
                      index === currentNews 
                        ? 'bg-accent shadow-glow' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
