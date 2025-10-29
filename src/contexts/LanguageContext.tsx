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
    'home.hero.title': 'A SHELL',
    'home.hero.subtitle': 'ECO-MARATHON',
    'home.hero.description': 'A Shell Eco-marathon é um dos principais programas de engenharia em eficiência energética para estudantes no mundo. Seu objetivo é ultrapassar os limites do que é tecnicamente possível e inspirar os jovens a se tornarem cientistas e engenheiros líderes em soluções energéticas do futuro.',
    'home.hero.content': 'O programa oferece uma plataforma para que equipes do ensino médio e universitário explorem todos os aspectos do design e da tecnologia, utilizando seus conhecimentos em Ciência, Tecnologia, Engenharia e Matemática (STEM) para construir seus próprios carros ultraeficientes em energia.',
    'home.hero.button': 'SAIBA MAIS',
    'home.hero.videoTitle': 'What is Shell Eco-marathon?',
    'home.hero.videoDescription': 'Descubra como estudantes transformam energia em inovação',
    'home.about.title': 'Sobre',
    'home.about.team': 'Nossa Equipe',
    'home.about.description': 'O Grupo Cataratas de Eficiência Energética é formado por estudantes comprometidos com a inovação em mobilidade sustentável',
    'home.about.gceeDescription': 'O Grupo Cataratas de Eficiência Energética – GCEE, foi formado em 2009 por alunos dos cursos de Engenharia Elétrica e Engenharia Mecânica, posteriormente integrando estudantes de Ciências da Computação, da Universidade Estadual do Oeste do Paraná – Unioeste, Campus de Foz do Iguaçu e Engenharia de Energia da Universidade Federal da Integração Latino Americana – Unila, contando com apoio dos professores, registro de Projeto de Extensão na instituição, e gerenciado pela Fundação de Apoio ao Ensino, Extensão, Pesquisa e Pós-graduação – FUNDEP. O principal objetivo do Grupo é desenvolver veículos ultra eficientes movidos a combustíveis sustentáveis com foco em competições de eficiência energética, exposições e apresentações e eventos para a divulgação dos veículos desenvolvidos. Ressalta-se o histórico de participação em competições como a Maratona Universitária de Eficiência Energética – MUEE e a Shell-Eco Marathon.',
    'home.about.teamwork.title': 'Trabalho em Equipe',
    'home.about.teamwork.description': 'Estudantes de diversas áreas trabalhando juntos em soluções inovadoras',
    'home.about.efficiency.title': 'Eficiência Energética',
    'home.about.efficiency.description': 'Desenvolvemos tecnologias que maximizam o uso de energia renovável',
    'home.about.innovation.title': 'Inovação',
    'home.about.innovation.description': 'Criamos protótipos que ultrapassam os limites da mobilidade sustentável',
    'home.news.title': 'Notícias em',
    'home.news.highlight': 'Destaque',
    'home.news.description': 'Acompanhe as últimas novidades e conquistas do GCEE',
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
    'sponsors.cta.downloadLetter': 'Baixar Carta de Patrocínio',
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
    'home.hero.title': 'THE SHELL',
    'home.hero.subtitle': 'ECO-MARATHON',
    'home.hero.description': 'Shell Eco-marathon is one of the world\'s leading engineering programs in energy efficiency for students. Its goal is to push the boundaries of what is technically possible and inspire young people to become leading scientists and engineers in future energy solutions.',
    'home.hero.content': 'The program offers a platform for high school and university teams to explore all aspects of design and technology, using their knowledge in Science, Technology, Engineering and Mathematics (STEM) to build their own ultra-energy-efficient cars.',
    'home.hero.button': 'LEARN MORE',
    'home.hero.videoTitle': 'What is Shell Eco-marathon?',
    'home.hero.videoDescription': 'Discover how students transform energy into innovation',
    'home.about.title': 'About',
    'home.about.team': 'Our Team',
    'home.about.description': 'The Cataratas Energy Efficiency Group is formed by students committed to innovation in sustainable mobility',
    'home.about.gceeDescription': 'The Cataratas Energy Efficiency Group – GCEE, was formed in 2009 by students from Electrical Engineering and Mechanical Engineering courses, later integrating Computer Science students from the State University of Western Paraná – Unioeste, Foz do Iguaçu Campus, and Energy Engineering students from the Federal University of Latin American Integration – Unila, with the support of professors, registered as an Extension Project at the institution, and managed by the Foundation for Support of Teaching, Extension, Research and Post-graduation – FUNDEP. The main objective of the Group is to develop ultra-efficient vehicles powered by sustainable fuels with a focus on energy efficiency competitions, exhibitions, presentations and events to promote the developed vehicles. We highlight our history of participation in competitions such as the University Marathon of Energy Efficiency – MUEE and the Shell-Eco Marathon.',
    'home.about.teamwork.title': 'Teamwork',
    'home.about.teamwork.description': 'Students from various areas working together on innovative solutions',
    'home.about.efficiency.title': 'Energy Efficiency',
    'home.about.efficiency.description': 'We develop technologies that maximize the use of renewable energy',
    'home.about.innovation.title': 'Innovation',
    'home.about.innovation.description': 'We create prototypes that push the boundaries of sustainable mobility',
    'home.news.title': 'Featured',
    'home.news.highlight': 'News',
    'home.news.description': 'Follow the latest news and achievements from GCEE',
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
    'sponsors.cta.downloadLetter': 'Download Sponsorship Letter',
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
    'home.hero.title': 'EL SHELL',
    'home.hero.subtitle': 'ECO-MARATHON',
    'home.hero.description': 'Shell Eco-marathon es uno de los principales programas de ingeniería en eficiencia energética para estudiantes en el mundo. Su objetivo es superar los límites de lo técnicamente posible e inspirar a los jóvenes a convertirse en científicos e ingenieros líderes en soluciones energéticas del futuro.',
    'home.hero.content': 'El programa ofrece una plataforma para que equipos de secundaria y universitarios exploren todos los aspectos del diseño y la tecnología, utilizando sus conocimientos en Ciencia, Tecnología, Ingeniería y Matemáticas (STEM) para construir sus propios automóviles ultra eficientes en energía.',
    'home.hero.button': 'SABER MÁS',
    'home.hero.videoTitle': 'What is Shell Eco-marathon?',
    'home.hero.videoDescription': 'Descubre cómo los estudiantes transforman la energía en innovación',
    'home.about.title': 'Sobre',
    'home.about.team': 'Nuestro Equipo',
    'home.about.description': 'El Grupo Cataratas de Eficiencia Energética está formado por estudiantes comprometidos con la innovación en movilidad sostenible',
    'home.about.gceeDescription': 'El Grupo Cataratas de Eficiencia Energética – GCEE, fue formado en 2009 por alumnos de los cursos de Ingeniería Eléctrica e Ingeniería Mecánica, posteriormente integrando estudiantes de Ciencias de la Computación de la Universidad Estadual del Oeste de Paraná – Unioeste, Campus de Foz do Iguaçu, y de Ingeniería de Energía de la Universidad Federal de la Integración Latino Americana – Unila, contando con el apoyo de los profesores, registrado como Proyecto de Extensión en la institución, y gestionado por la Fundación de Apoyo a la Enseñanza, Extensión, Investigación y Posgrado – FUNDEP. El objetivo principal del Grupo es desarrollar vehículos ultra eficientes movidos por combustibles sostenibles con enfoque en competiciones de eficiencia energética, exposiciones, presentaciones y eventos para la divulgación de los vehículos desarrollados. Se destaca el historial de participación en competiciones como la Maratona Universitária de Eficiencia Energética – MUEE y la Shell-Eco Marathon.',
    'home.about.teamwork.title': 'Trabajo en Equipo',
    'home.about.teamwork.description': 'Estudiantes de diversas áreas trabajando juntos en soluciones innovadoras',
    'home.about.efficiency.title': 'Eficiencia Energética',
    'home.about.efficiency.description': 'Desarrollamos tecnologías que maximizan el uso de energía renovable',
    'home.about.innovation.title': 'Innovación',
    'home.about.innovation.description': 'Creamos prototipos que superan los límites de la movilidad sostenible',
    'home.news.title': 'Noticias',
    'home.news.highlight': 'Destacadas',
    'home.news.description': 'Siga las últimas noticias y logros de GCEE',
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
    'sponsors.cta.downloadLetter': 'Descargar Carta de Patrocinio',
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
