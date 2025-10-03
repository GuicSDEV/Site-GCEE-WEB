import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { AboutSection } from "@/components/ui/about-section";
import { NewsSection } from "@/components/ui/news-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
