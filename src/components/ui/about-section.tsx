import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('home.about.title')}
            <span className="bg-gradient-energy bg-clip-text text-transparent"> {t('home.about.team')}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t('home.about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('home.about.teamwork.title')}</h3>
              <p className="text-muted-foreground">
                {t('home.about.teamwork.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('home.about.efficiency.title')}</h3>
              <p className="text-muted-foreground">
                {t('home.about.efficiency.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-0 shadow-lg hover:shadow-xl transition-smooth">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{t('home.about.innovation.title')}</h3>
              <p className="text-muted-foreground">
                {t('home.about.innovation.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
