import { useState } from "react";
import { Menu, X, Search, Facebook, Instagram, Youtube, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/grupocataratas/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/gceeunioeste/", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@gcee.unioeste/", label: "YouTube" },
  { icon: Music, href: "https://www.tiktok.com/@gcee.unioeste/", label: "TikTok" },
];

const navigation = [
  { name: "Unioeste", href: "https://www.unioeste.br/portal/campus-foz-do-iguacu/", external: true },
  { name: "Início", href: "/" },
  { name: "Projetos", href: "/projetos" },
  { name: "Notícias", href: "/noticias" },
  { name: "Propósito", href: "/proposito" },
  { name: "Patrocinadores", href: "/patrocinadores" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top accent line */}
      <div className="h-1.5 bg-gradient-primary w-full fixed top-0 z-50" />
      
      <header className="sticky top-1.5 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">G</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-foreground">GCEE - Unioeste</h1>
                <p className="text-xs text-muted-foreground">Grupo Cataratas de Eficiência Energética</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-fast"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Social Links & Search */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-8 h-8 p-0"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Pesquisar..."
                className="pl-10 w-40 focus:w-60 transition-smooth"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-background border-l border-border p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-semibold text-lg">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <nav className="space-y-4 mb-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block text-base font-medium text-foreground hover:text-primary transition-fast"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Pesquisar..." className="pl-10" />
                </div>

                <div className="flex items-center space-x-2">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1"
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <social.icon className="w-4 h-4" />
                        <span className="text-xs">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}