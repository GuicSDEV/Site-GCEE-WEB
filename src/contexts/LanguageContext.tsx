import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.projects': 'Projetos',
    'nav.news': 'Notícias',
    'nav.about': 'Sobre Nós',
    'nav.sponsors': 'Patrocinadores',
    
    // Home Page
    'home.hero.title': 'Inovação em',
    'home.hero.energy': 'Eficiência Energética',
    'home.hero.description': 'Desenvolvendo soluções sustentáveis e tecnológicas para o futuro da mobilidade',
    'home.hero.cta': 'CONHEÇA NOSSOS PROJETOS',
    'home.news.title': 'Últimas Notícias',
    'home.news.subtitle': 'Fique por dentro das novidades do GCEE',
    'home.news.readMore': 'LEIA MAIS',
    
    // News Page
    'news.hero.title': 'Notícias do',
    'news.hero.gcee': 'GCEE',
    'news.hero.description': 'Acompanhe as últimas novidades, conquistas e eventos do Grupo Cataratas de Eficiência Energética',
    'news.prev': 'Anterior',
    'news.next': 'Próxima',
    'news.readMore': 'LEIA MAIS',
    
    // About Page
    'about.hero.title': 'Sobre Nós',
    'about.hero.description': 'Inovação, sustentabilidade e eficiência energética',
    'about.main.title': 'O que é o GCEE?',
    'about.main.description': 'O Grupo Cataratas de Eficiência Energética (GCEE) é uma equipe de competição formada por estudantes da Unioeste que desenvolve projetos inovadores focados em eficiência energética e sustentabilidade.',
    'about.mission.title': 'Missão',
    'about.mission.description': 'Promover a inovação e a sustentabilidade através do desenvolvimento de tecnologias de eficiência energética.',
    'about.innovation.title': 'Inovação',
    'about.innovation.description': 'Desenvolvemos protótipos de veículos ultra eficientes que representam o futuro da mobilidade sustentável.',
    'about.sustainability.title': 'Sustentabilidade',
    'about.sustainability.description': 'Nosso compromisso é com um futuro mais limpo e eficiente para todos.',
    
    // Sponsors Page
    'sponsors.hero.title': 'Nossos',
    'sponsors.hero.partners': 'Parceiros',
    'sponsors.hero.description': 'Conheça as empresas e instituições que apoiam o GCEE',
    'sponsors.visit': 'VISITAR SITE',
    'sponsors.cta.title': 'Quer Ser Nosso Parceiro?',
    'sponsors.cta.description': 'Junte-se ao GCEE e faça parte da revolução em eficiência energética!',
    'sponsors.cta.button': 'ENTRE EM CONTATO',
    
    // Projects Page
    'projects.hero.title': 'Nossos',
    'projects.hero.projects': 'Projetos',
    'projects.hero.description': 'Inovação e tecnologia para o futuro da mobilidade sustentável',
    'projects.coming.title': 'Em Breve',
    'projects.coming.description': 'Estamos trabalhando em nossos projetos inovadores. Em breve, você poderá conhecer nossos protótipos, tecnologias e conquistas na área de eficiência energética.',
    'projects.coming.subtitle': 'Novidades em desenvolvimento',
    'projects.coming.features': 'Protótipos de veículos ultra eficientes|Tecnologias de célula de hidrogênio|Sistemas de eficiência energética|Resultados das competições',
    
    // Footer
    'footer.contact': 'Contato',
    'footer.email': 'Email',
    'footer.follow': 'Siga-nos',
    'footer.rights': 'Todos os direitos reservados.',
    'footer.unioeste': 'Universidade Estadual do Oeste do Paraná - Campus Foz do Iguaçu',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.news': 'News',
    'nav.about': 'About Us',
    'nav.sponsors': 'Sponsors',
    
    // Home Page
    'home.hero.title': 'Innovation in',
    'home.hero.energy': 'Energy Efficiency',
    'home.hero.description': 'Developing sustainable and technological solutions for the future of mobility',
    'home.hero.cta': 'EXPLORE OUR PROJECTS',
    'home.news.title': 'Latest News',
    'home.news.subtitle': 'Stay updated with GCEE news',
    'home.news.readMore': 'READ MORE',
    
    // News Page
    'news.hero.title': 'News from',
    'news.hero.gcee': 'GCEE',
    'news.hero.description': 'Follow the latest news, achievements and events from Cataratas Energy Efficiency Group',
    'news.prev': 'Previous',
    'news.next': 'Next',
    'news.readMore': 'READ MORE',
    
    // About Page
    'about.hero.title': 'About Us',
    'about.hero.description': 'Innovation, sustainability and energy efficiency',
    'about.main.title': 'What is GCEE?',
    'about.main.description': 'The Cataratas Energy Efficiency Group (GCEE) is a competition team formed by Unioeste students who develop innovative projects focused on energy efficiency and sustainability.',
    'about.mission.title': 'Mission',
    'about.mission.description': 'Promote innovation and sustainability through the development of energy efficiency technologies.',
    'about.innovation.title': 'Innovation',
    'about.innovation.description': 'We develop ultra-efficient vehicle prototypes that represent the future of sustainable mobility.',
    'about.sustainability.title': 'Sustainability',
    'about.sustainability.description': 'Our commitment is to a cleaner and more efficient future for everyone.',
    
    // Sponsors Page
    'sponsors.hero.title': 'Our',
    'sponsors.hero.partners': 'Partners',
    'sponsors.hero.description': 'Meet the companies and institutions that support GCEE',
    'sponsors.visit': 'VISIT WEBSITE',
    'sponsors.cta.title': 'Want to Be Our Partner?',
    'sponsors.cta.description': 'Join GCEE and be part of the energy efficiency revolution!',
    'sponsors.cta.button': 'GET IN TOUCH',
    
    // Projects Page
    'projects.hero.title': 'Our',
    'projects.hero.projects': 'Projects',
    'projects.hero.description': 'Innovation and technology for the future of sustainable mobility',
    'projects.coming.title': 'Coming Soon',
    'projects.coming.description': 'We are working on our innovative projects. Soon, you will be able to learn about our prototypes, technologies and achievements in energy efficiency.',
    'projects.coming.subtitle': 'New developments underway',
    'projects.coming.features': 'Ultra-efficient vehicle prototypes|Hydrogen fuel cell technologies|Energy efficiency systems|Competition results',
    
    // Footer
    'footer.contact': 'Contact',
    'footer.email': 'Email',
    'footer.follow': 'Follow us',
    'footer.rights': 'All rights reserved.',
    'footer.unioeste': 'State University of Western Paraná - Foz do Iguaçu Campus',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.news': 'Noticias',
    'nav.about': 'Sobre Nosotros',
    'nav.sponsors': 'Patrocinadores',
    
    // Home Page
    'home.hero.title': 'Innovación en',
    'home.hero.energy': 'Eficiencia Energética',
    'home.hero.description': 'Desarrollando soluciones sostenibles y tecnológicas para el futuro de la movilidad',
    'home.hero.cta': 'CONOZCA NUESTROS PROYECTOS',
    'home.news.title': 'Últimas Noticias',
    'home.news.subtitle': 'Mantente al día con las noticias de GCEE',
    'home.news.readMore': 'LEER MÁS',
    
    // News Page
    'news.hero.title': 'Noticias de',
    'news.hero.gcee': 'GCEE',
    'news.hero.description': 'Siga las últimas noticias, logros y eventos del Grupo Cataratas de Eficiencia Energética',
    'news.prev': 'Anterior',
    'news.next': 'Siguiente',
    'news.readMore': 'LEER MÁS',
    
    // About Page
    'about.hero.title': 'Sobre Nosotros',
    'about.hero.description': 'Innovación, sostenibilidad y eficiencia energética',
    'about.main.title': '¿Qué es GCEE?',
    'about.main.description': 'El Grupo Cataratas de Eficiencia Energética (GCEE) es un equipo de competición formado por estudiantes de Unioeste que desarrollan proyectos innovadores enfocados en eficiencia energética y sostenibilidad.',
    'about.mission.title': 'Misión',
    'about.mission.description': 'Promover la innovación y la sostenibilidad a través del desarrollo de tecnologías de eficiencia energética.',
    'about.innovation.title': 'Innovación',
    'about.innovation.description': 'Desarrollamos prototipos de vehículos ultra eficientes que representan el futuro de la movilidad sostenible.',
    'about.sustainability.title': 'Sostenibilidad',
    'about.sustainability.description': 'Nuestro compromiso es con un futuro más limpio y eficiente para todos.',
    
    // Sponsors Page
    'sponsors.hero.title': 'Nuestros',
    'sponsors.hero.partners': 'Socios',
    'sponsors.hero.description': 'Conozca las empresas e instituciones que apoyan a GCEE',
    'sponsors.visit': 'VISITAR SITIO',
    'sponsors.cta.title': '¿Quiere Ser Nuestro Socio?',
    'sponsors.cta.description': '¡Únase a GCEE y sea parte de la revolución en eficiencia energética!',
    'sponsors.cta.button': 'PÓNGASE EN CONTACTO',
    
    // Projects Page
    'projects.hero.title': 'Nuestros',
    'projects.hero.projects': 'Proyectos',
    'projects.hero.description': 'Innovación y tecnología para el futuro de la movilidad sostenible',
    'projects.coming.title': 'Próximamente',
    'projects.coming.description': 'Estamos trabajando en nuestros proyectos innovadores. Pronto, podrá conocer nuestros prototipos, tecnologías y logros en eficiencia energética.',
    'projects.coming.subtitle': 'Novedades en desarrollo',
    'projects.coming.features': 'Prototipos de vehículos ultra eficientes|Tecnologías de células de hidrógeno|Sistemas de eficiencia energética|Resultados de competiciones',
    
    // Footer
    'footer.contact': 'Contacto',
    'footer.email': 'Correo',
    'footer.follow': 'Síguenos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.unioeste': 'Universidad Estatal del Oeste de Paraná - Campus Foz do Iguaçu',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
