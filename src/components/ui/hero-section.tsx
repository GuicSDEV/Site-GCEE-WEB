import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.2),transparent_50%)]" />
      
      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                {t('home.hero.title')}
                <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  {t('home.hero.subtitle')}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl">
                {t('home.hero.description')}
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-primary-foreground/80 leading-relaxed">
                {t('home.hero.content')}
              </p>
              
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-8 py-6 text-lg group transition-smooth"
                asChild
              >
                <a 
                  href="https://www.shellecomarathon.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>{t('home.hero.button')}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
                </a>
              </Button>
            </div>
          </div>

          {/* Video Card */}
          <div className="flex justify-center lg:justify-end">
            <Card className="bg-background/10 backdrop-blur-sm border-white/20 shadow-2xl max-w-md w-full">
              <CardContent className="p-6">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/aNGKYFHFTYY?si=DZ0vC8CMkf4mHRr-rel=0"
                    title="Shell Eco-Marathon"
                    frameBorder="0"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-smooth">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-16 h-16 rounded-full shadow-glow"
                    >
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-primary-foreground">{t('home.hero.videoTitle')}</h3>
                  <p className="text-sm text-primary-foreground/70 mt-1">
                    {t('home.hero.videoDescription')}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
    </section>
  );
}