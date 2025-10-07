import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import processoSeletivoImg from "@/assets/processo-seletivo.jpg";
import shellVictoryPodium from "@/assets/shell-victory-podium.png";
import shellVictoryTeam from "@/assets/shell-victory-team.png";
import teamTechnicalInspection from "@/assets/team-technical-inspection.png";
import paranaFazCiencia1 from "@/assets/parana-faz-ciencia-1.webp";
import paranaFazCiencia2 from "@/assets/parana-faz-ciencia-2.webp";
const newsItems = [
  {
    id: 4,
    title: "Veículo movido a hidrogênio desenvolvido na Unioeste está no Paraná Faz Ciência 2025",
    summary: "O Grupo Cataratas de Eficiência Energética (GCEE) apresenta seu protótipo de veículo elétrico movido a hidrogênio no evento Paraná Faz Ciência 2025.",
    content: `O GCEE, vinculado à Unioeste, desenvolve um projeto de extensão focado na pesquisa e construção de protótipos de veículos elétricos, categoria conceito urbano movidos a hidrogênio, utilizando células de combustível tipo PEM.

O objetivo é promover a mobilidade urbana sustentável por meio de soluções limpas e eficientes, incentivando o uso do hidrogênio verde como alternativa aos combustíveis fósseis. O impacto do projeto extrapola o âmbito acadêmico, com participação em competições nacionais e internacionais.

"A gente usa o hidrogênio como gás e passando pela célula combustível, faz a união junto com hidrogênio e oxigênio, tendo como resíduo água e energia. É um veículo 100% sustentável", explica o acadêmico de Engenharia Mecânica, Vinícius Oliveira Sofia.`,
    link: "https://www.unioeste.br/portal/central-de-noticias/81641-veiculo-movido-a-nitrogenio-desenvolvido-na-unioeste-esta-no-parana-faz-ciencia-2025",
    image: paranaFazCiencia1,
    date: "Outubro 2025"
  },
  {id: 3,
    title: "GCEE Vencedor da Shell Eco-marathon 2025",
    summary: "O Grupo Cataratas de Eficiência Energética conquistou o 1º lugar na categoria Conceito Urbano (URBAN) com célula de hidrogênio na Shell Eco-marathon Brasil 2025!",
    content: `Uma conquista histórica para o GCEE! Nossa equipe alcançou o primeiro lugar na categoria Conceito Urbano (URBAN) com célula de hidrogênio na Shell Eco-marathon Brasil 2025, realizada no Rio de Janeiro.

A Shell Eco-marathon é uma das competições mais prestigiadas do mundo em eficiência energética e mobilidade sustentável. Nosso protótipo demonstrou excelência técnica, inovação e comprometimento com um futuro mais limpo e eficiente.

Esta vitória é resultado de meses de dedicação, pesquisa e trabalho em equipe. Parabéns a todos os membros que tornaram este sonho realidade!`,
    link: "https://www.instagram.com/gcee_unila/",
    image: shellVictoryTeam,
    date: "Agosto 2025"
    
  },
  {
    id: 2,
    title: "Participação na Shell Eco-marathon",
    summary: "GCEE confirma participação na competição internacional de eficiência energética.",
    content: "Nossa equipe está se preparando intensivamente para a próxima edição da Shell Eco-marathon. Este ano, focamos em inovações sustentáveis e tecnologias limpas que podem revolucionar o transporte do futuro.",
    link: "#",
    image: teamTechnicalInspection,
    date: "Dezembro 2024"
  },
  {
    id: 1,
    title: "Resultado do Processo Seletivo de 2025",
    summary: "O Grupo Cataratas de Eficiência Energética (GCEE) tem a satisfação de anunciar o resultado oficial do Processo Seletivo 2025!",
    content: `Após um criterioso processo de análise e entrevistas, queremos parabenizar todos os candidatos que demonstraram empenho, criatividade e dedicação durante todas as entrevistas. A seleção deste ano reforça o compromisso do GCEE com a excelência acadêmica, a inovação em engenharia e o desenvolvimento de soluções sustentáveis.

A lista com os aprovados está disponível nas imagens deste post, na aba "Notícias" do nosso site e também será divulgada via nosso Instagram.

Aos novos integrantes, sejam muito bem-vindos! Estamos entusiasmados para iniciar mais um ciclo de desafios, projetos e aprendizados. Contamos com vocês!

Agradecemos a todos os novos membros e desejamos sucesso em suas jornadas acadêmicas e profissionais. O futuro da eficiência energética passa por vocês!`,
    link: "https://www.instagram.com/p/DLNzcT7RbUm/?utm_source=ig_web_copy_link&igsh=bTU0d2RpbTIwZWho",
    image: processoSeletivoImg,
    date: "Janeiro 2025"
  }
];

export function NewsSection() {
  const { t } = useLanguage();
  const [currentNews, setCurrentNews] = useState(0);

  const nextNews = () => {
    setCurrentNews((prev) => (prev + 1) % newsItems.length);
  };

  const prevNews = () => {
    setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  const currentItem = newsItems[currentNews];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('home.news.title')} 
            <span className="bg-gradient-energy bg-clip-text text-transparent"> {t('home.news.highlight')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('home.news.description')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-muted overflow-hidden">
                    <img 
                      src={currentItem.image} 
                      alt={currentItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Navigation arrows */}
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={prevNews}
                      className="ml-4 bg-background/80 hover:bg-background text-foreground shadow-md"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={nextNews}
                      className="mr-4 bg-background/80 hover:bg-background text-foreground shadow-md"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
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
                        <span>{t('home.news.readMore')}</span>
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
                onClick={() => setCurrentNews(index)}
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
  );
}
