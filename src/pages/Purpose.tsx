import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import teamImage from "@/assets/team-technical-inspection.png";

const Purpose = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-primary overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="container px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Propósito & Projetos
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Inovação, sustentabilidade e tecnologia para o futuro energético
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container px-4">
            <Card className="max-w-6xl mx-auto bg-gradient-card border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      src={teamImage}
                      alt="Equipe GCEE - Inspeção Técnica Shell Eco-marathon"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                      O que é o GCEE?
                    </h2>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p>
                        O Grupo Cataratas de Eficiência Energética (GCEE) é formado por estudantes, professores e colaboradores da Universidade Estadual do Oeste do Paraná (Unioeste) com o claro objetivo de promover soluções inovadoras e sustentáveis para os desafios energéticos do presente e do futuro.
                      </p>
                      
                      <p>
                        Nosso propósito é unir conhecimento acadêmico, pesquisa aplicada e criatividade para desenvolver tecnologias de alto desempenho em eficiência energética. Acreditamos que o avanço científico deve caminhar lado a lado com a responsabilidade ambiental e o social.
                      </p>
                      
                      <p>
                        Atuamos em projetos que envolvem a construção de protótipos veiculares ultraeficientes, como os apresentados na Shell Eco-marathon, projetados através de estudos e aplicações voltadas à redução de consumo, otimização de recursos e difusão da cultura da sustentabilidade.
                      </p>
                      
                      <p className="font-medium text-foreground">
                        Nosso compromisso é contribuir para uma sociedade mais consciente, preparada e capaz de enfrentar as transformações energéticas globais. O GCEE é, acima de tudo, um espaço para formar engenheiros, cientistas e cidadãos engajados com a inovação e o futuro do planeta.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
              <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Missão</h3>
                  <p className="text-muted-foreground">
                    Desenvolver tecnologias sustentáveis e formar profissionais comprometidos com a eficiência energética
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Inovação</h3>
                  <p className="text-muted-foreground">
                    Pesquisa aplicada e desenvolvimento de protótipos ultraeficientes para competições internacionais
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Sustentabilidade</h3>
                  <p className="text-muted-foreground">
                    Compromisso com soluções ambientalmente responsáveis e difusão da cultura sustentável
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Purpose;
