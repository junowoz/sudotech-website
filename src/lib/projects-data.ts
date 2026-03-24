export interface Project {
  id: 1 | 2 | 3 | 4 | 5 | 6;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string | null;
  featured: boolean;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "MEPO",
    category: "Foodservice Tech",
    description: "Sistema Operacional para cozinhas industriais.",
    image: "/portfolio/mepo.png",
    link: "https://mepo.so",
    featured: true,
    color: "from-amber-500 to-primary",
  },
  {
    id: 2,
    title: "Consultoria em Gestão de Plataforma Digital (FUnATI)",
    category: "Consultoria",
    description:
      "Consultoria para evolução do PEP da FUNATI.",
    image: "/portfolio/funati-pep.jpg",
    link: null,
    featured: true,
    color: "from-amber-500 to-primary",
  },
  // {
  //   id: 3,
  //   title: "GerontoCare",
  //   category: "Health Tech",
  //   description:
  //     "Coleta e visualização segura de dados clínicos para monitoramento de idosos em ambiente de nuvem.",
  //   image: "/portfolio/funati.png",
  //   link: null,
  //   featured: true,
  //   color: "from-amber-500 to-primary",
  // },
  {
    id: 3,
    title: "Plataforma de Gerenciamento Veicular (PGV)",
    category: "ERP",
    description:
      "ERP de gestão veicular com controle de acesso, auditoria e operação institucional para a Polícia Civil.",
    image: "/portfolio/pgv.png",
    link: "https://pgv.sudotech.com.br",
    featured: true,
    color: "from-amber-500 to-primary",
  },
  {
    id: 4,
    title: "Stratus Drones",
    category: "Web",
    description:
      "Presença digital e estrutura comercial para uma marca conectada ao setor de drones.",
    image: "/portfolio/stratus-drones.png",
    link: "https://stratusdrones.com",
    featured: true,
    color: "from-amber-500 to-primary",
  },
  {
    id: 5,
    title: "Velooh",
    category: "AdTech",
    description: "Plataforma de mídia para tablets em viagens de Uber.",
    image: "/portfolio/velooh.png",
    link: "https://velooh.com",
    featured: true,
    color: "from-amber-500 to-primary",
  },
  // {
  //   id: 5,
  //   title: "AMZ Geradores",
  //   category: "Energia",
  //   description: "Site CMS da AMZ Geradores.",
  //   image: "/portfolio/amz-geradores.png",
  //   link: "https://amzgeradores.com.br",
  //   featured: false,
  //   color: "from-amber-500 to-primary",
  // },
  // {
  //   id: 4,
  //   title: "SIMOF - Sistema de Monitoramento de Frotas",
  //   category: "Governo",
  //   description:
  //     "Plataforma para rastrear o desempenho dos motoristas da Transpetro.",
  //   image: "/portfolio/simof.png",
  //   link: "https://simof.sudotech.com.br",
  //   featured: false,
  //color: "from-amber-500 to-primary",  // },
  // {
  //   id: 5,
  //   title: "GerontoChat",
  //   category: "Saúde",
  //   description: "Chatbot assistente para profissionais de saúde da FUNATI.",
  //   image: "/portfolio/gerontochat.png",
  //   link: "https://gerontochat.com",
  //   featured: false,
  //color: "from-amber-500 to-primary",  // },
  // {
  //   id: 6,
  //   title: "NexGás",
  //   category: "Energia",
  //   description:
  //     "Plataforma para a NexGás, uma distribuidora de Gás Amazonense.",
  //   image: "/portfolio/nexgas.png",
  //   link: "https://nexgas.com",
  //   featured: false,
  //color: "from-amber-500 to-primary",  // },
];
