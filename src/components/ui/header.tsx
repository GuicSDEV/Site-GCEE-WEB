import { useState } from "react";
import { Menu, X, Search, Facebook, Instagram, Youtube, Music } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import gceeLogotype from "@/assets/gcee-logo.jpeg";
import gceeBird from "@/assets/gcee-bird.jpeg";
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
    <div className="relative">
      {/* Top accent line */}
      <div className="h-1.5 bg-gradient-primary w-full fixed top-0 z-50" />
      
      
      <header className="sticky top-1.5 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-fast">
            <img 
              src={gceeBird} 
              alt="GCEE" 
              className="w-12 h-12 object-contain"
            />
            <div className="hidden sm:block">
              <img 
                src={gceeLogotype} 
                alt="GCEE - Unioeste" 
                className="h-8 object-contain"
              />
              <p className="text-xs text-muted-foreground mt-1">Grupo Cataratas de Eficiência Energética</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              item.external ? (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-primary transition-fast"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-fast"
                >
                  {item.name}
                </Link>
              )
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
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Menu panel */}
            <div className="relative ml-auto w-full max-w-sm h-full bg-background shadow-xl">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={gceeBird} 
                      alt="GCEE" 
                      className="w-8 h-8 object-contain"
                    />
                    <span className="font-semibold text-lg">Menu</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2"
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-6 py-6 space-y-1">
                  {navigation.map((item) => (
                    item.external ? (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-fast"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-fast"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-border space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Pesquisar..." className="pl-10" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="sm"
                        asChild
                        className="justify-center"
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
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
          </div>
        )}
      </header>
    </div>
  );
}