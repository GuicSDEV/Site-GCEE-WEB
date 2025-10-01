import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import teamImage from "@/assets/team-technical-inspection.png";

const Purpose = () => {
  const { t } = useLanguage();
  
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
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-primary-foreground/90">
                {t('about.hero.description')}
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
                      {t('about.main.title')}
                    </h2>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p>
                        {t('about.main.description')}
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
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('about.mission.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.mission.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('about.innovation.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.innovation.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌍</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('about.sustainability.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('about.sustainability.description')}
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
