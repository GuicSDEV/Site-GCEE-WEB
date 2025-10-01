import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Zap, Trophy, Wrench } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const features = t('projects.coming.features').split('|');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                {t('projects.hero.title')}
                <span className="bg-gradient-energy bg-clip-text text-transparent"> {t('projects.hero.projects')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {t('projects.hero.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-20 bg-muted/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-0 shadow-xl">
                <CardContent className="p-12 text-center">
                  <div className="mb-8">
                    <Rocket className="w-16 h-16 mx-auto text-accent mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {t('projects.coming.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      {t('projects.coming.description')}
                    </p>
                  </div>

                  <div className="my-12 h-px bg-gradient-primary" />

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-foreground">
                      {t('projects.coming.subtitle')}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 text-left">
                      {[
                        { icon: Zap, text: features[0] },
                        { icon: Trophy, text: features[1] },
                        { icon: Wrench, text: features[2] },
                        { icon: Rocket, text: features[3] },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
