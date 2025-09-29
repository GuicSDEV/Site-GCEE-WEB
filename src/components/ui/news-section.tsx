import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Resultado do Processo Seletivo de 2025",
    summary: "O Grupo Cataratas de Eficiência Energética (GCEE) tem a satisfação de anunciar o resultado oficial do Processo Seletivo 2025!",
    content: `Após um criterioso processo de análise e entrevistas, queremos parabenizar todos os candidatos que demonstraram empenho, criatividade e dedicação durante todas as entrevistas. A seleção deste ano reforça o compromisso do GCEE com a excelência acadêmica, a inovação em engenharia e o desenvolvimento de soluções sustentáveis.

A lista com os aprovados está disponível nas imagens deste post, na aba "Notícias" do nosso site e também será divulgada via nosso Instagram.

Aos novos integrantes, sejam muito bem-vindos! Estamos entusiasmados para iniciar mais um ciclo de desafios, projetos e aprendizados. Contamos com vocês!

Agradecemos a todos os novos membros e desejamos sucesso em suas jornadas acadêmicas e profissionais. O futuro da eficiência energética passa por vocês!`,
    link: "https://www.instagram.com/p/DLNzcT7RbUm/?utm_source=ig_web_copy_link&igsh=bTU0d2RpbTIwZWdo",
    image: "/api/placeholder/400/300",
    date: "Janeiro 2025"
  },
  {
    id: 2,
    title: "Participação na Shell Eco-marathon",
    summary: "GCEE confirma participação na competição internacional de eficiência energética.",
    content: "Nossa equipe está se preparando intensivamente para a próxima edição da Shell Eco-marathon. Este ano, focamos em inovações sustentáveis e tecnologias limpas que podem revolucionar o transporte do futuro.",
    link: "#",
    image: "/api/placeholder/400/300",
    date: "Dezembro 2024"
  },
  {
    id: 3,
    title: "Novo Laboratório de Pesquisa",
    summary: "Inauguração do laboratório dedicado a pesquisas em eficiência energética.",
    content: "Com equipamentos de última geração, o novo laboratório permitirá pesquisas mais avançadas em tecnologias sustentáveis e desenvolvimento de soluções inovadoras para o setor energético.",
    link: "#",
    image: "/api/placeholder/400/300",
    date: "Novembro 2024"
  }
];

export function NewsSection() {
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
            Notícias em 
            <span className="bg-gradient-energy bg-clip-text text-transparent"> Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Acompanhe as últimas novidades e conquistas do GCEE
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-primary flex items-center justify-center">
                    <div className="text-center text-primary-foreground p-8">
                      <div className="w-24 h-24 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                        <span className="text-2xl font-bold">GCEE</span>
                      </div>
                      <p className="text-sm opacity-90">{currentItem.date}</p>
                    </div>
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
                        <span>LEIA MAIS</span>
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