import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import ADIP from '@/public/ADIP-home-light.png';
import PROG from '@/public/aprender-programar-gratis.png';
import { StaticImageData } from 'next/image';
import FISIO from '@/public/fisio home.png';
import RSC from '@/public/RSC.png';
import OLIMPO_LANDING from '@/public/olimpo-landing.png';
import ADF from '@/public/adf2.png';
import PORTAL from '@/public/portal.png';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  linkTo?: string;
  images: string[];
}

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;
export const linksESP = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Sobre mi',
    hash: '#about',
  },
  {
    name: 'Proyectos',
    hash: '#projects',
  },
  {
    name: 'Habilidades',
    hash: '#skills',
  },
  {
    name: 'Experiencia',
    hash: '#experience',
  },
  {
    name: 'Contacto',
    hash: '#contact',
  },
] as const;

export const projectsData: Project[] = [
  {
    title: 'Club ADIP',
    description:
      'One of the first real-life projects I worked on. Designed a fully-functional dashboard for admins to post notices and control various features, including users, sponsors, debts, notices and more. The platform is fully responsive.',
    tags: [
      'React',
      'Nest.js',
      'PostgreSQL',
      'Email.js',
      'TypeScript',
      'Material UI',
    ],
    imageUrl: ADIP,
    linkTo: 'https://front-deploy-adipweb.onrender.com',
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696264987/portfolio-swiper/ADIP-project/home/ioo5ny2bm3eih0ixe7tk.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696264798/portfolio-swiper/ADIP-project/home/ohtvbopxi9q29onswe61.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696264798/portfolio-swiper/ADIP-project/home/kv7s6f5whfcmlvpmpl4i.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265107/portfolio-swiper/ADIP-project/login/lk0gjbf6jifoiur0pola.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265863/portfolio-swiper/ADIP-project/profile/jpasyzm72iulux5zz9dw.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265863/portfolio-swiper/ADIP-project/profile/ez9ee1qiinfnqrhdzmnb.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265153/portfolio-swiper/ADIP-project/dashboard/tnp1txr43w2mgexdktfx.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265154/portfolio-swiper/ADIP-project/dashboard/uqbubpsppoyfg2uztbyf.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265154/portfolio-swiper/ADIP-project/dashboard/titrzctk94id2jupa9ff.png',
    ],
  },
  // {
  //   title: 'Videogames - HENRY',
  //   description:
  //     'It includes fetching data from the RAWG API, combined filters and sorting options, background music, and a form to create your own game. You also can see every games detail in the page. It includes pagination and filter by name.',
  //   tags: ['React', 'PostgreSQL', 'Express', 'Node.js', 'Redux', 'CSS'],
  //   imageUrl: PI,
  //   images: [
  //     'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/cvvrsamdp8s24qodmvwr.png',
  //     'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/ubby4smyiepkfha6krgl.png',
  //     'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/khjlyhxeuowirv53x8hc.png',
  //     'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/yj3zbaobygnxzzfloqlh.png',
  //   ],
  // },
  {
    title: 'Fisiom Fulness | HealthTech and Wellness',
    description:
      'Worked as full-stack tech lead under the Scrum methodology. I was in charge of developing the admin dashboard for the platform.',
    tags: ['Next.js', 'MongoDB', 'Express.js', 'Mongoose', 'TailwindCSS'],
    imageUrl: FISIO,
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755149/portfolio-swiper/fisiomfulness/e9nxm5kkhqwhpogofgop.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755149/portfolio-swiper/fisiomfulness/qobkljrclzfcp49hd2c3.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755148/portfolio-swiper/fisiomfulness/a8ql2mlvvz1jlplyfc7b.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755149/portfolio-swiper/fisiomfulness/udakvudikl7hdsxjwof6.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755148/portfolio-swiper/fisiomfulness/oiglrhalewppspioa8cl.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755149/portfolio-swiper/fisiomfulness/vsbt1eheguqeukcurwrb.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755148/portfolio-swiper/fisiomfulness/shqeawhwbokmjameqvdg.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755148/portfolio-swiper/fisiomfulness/eqoigr9tffqqovaz2zcg.png',
    ],
  },

  {
    title: 'RentScape',
    description:
      'Real estate leasing platform. Implemented AI-powered chat assistant using OpenAI LLMs and Pinecone, property application management, digital lease signing, and scheduling system. Built with Next.js/React and Supabase with Edge Functions.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Edge Functions',
      'OpenAI LLMs',
      'Vector Databases',
      'AI Integrations',
      'Node.js',
    ],
    imageUrl: RSC,
    linkTo: 'http://rentscape.co/',
    images: [],
  },
  {
    title: 'Spark&Co',
    description:
      'Portal to manage client projects. Integrated an AI-powered assistant fed with Jira tickets using OpenAI LLMs and Pinecone. Clients can view and interact with project data without accessing Jira directly.',
    tags: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Jira API',
      'Edge Functions',
      'OpenAI LLMs',
      'Vector Databases',
      'AI Integrations',
    ],
    imageUrl: PORTAL,
    linkTo: 'https://buildwithspark.co/',
    images: [],
  },
  {
    title: 'Azure Data Factory',
    description:
      'Develop and maintain multiple data pipelines in Azure Data Factory to validate, decrypt and transform massive amounts of data from multiple benefit administrators in United States. Implement Service Bus for queueing and processing data, Cosmos DB for storing and querying data, and Data Lake Storage for storing raw data.',
    tags: ['Service Bus', 'Azure Data Factory', 'Node.js', 'Cloud Engineering'],
    imageUrl: ADF,
    linkTo: '',
    images: [],
  },
  {
    title: 'Olimpo - Fitness Management',
    description:
      'A SaaS focused on fitness center management. It allows owners to have complete control over their gyms, classes, schedules, plans, clients, AI-powered training plans, and QR code check-in. Clients also have their own user dashboard with metrics and data on their subscriptions and training plans. It features both mobile and desktop applications.',
    tags: [
      'Next.js',
      'Supabase',
      'TypeScript',
      'Framer Motion',
      'Shadcn',
      'OpenAI',
    ],
    imageUrl: OLIMPO_LANDING,
    linkTo: 'https://olimpo.lat',
    images: [],
  },
  {
    title: 'Coming soon...',
    description:
      "Today, I am better than what I was yesterday. It doesn't matter when you read this! I am always working on new projects to keep improving and learning, so you will see new projects here frequently :).",
    tags: ['I', 'will', 'never', 'stop', 'learning', 'and', 'coding'],
    imageUrl: PROG,
    images: [],
  },
];
export const projectsDataEsp: Project[] = [
  {
    title: 'Club ADIP',
    description:
      'Uno de los primeros proyectos reales en los que trabajé. Diseñé un dashboard completamente funcional para administradores, con control de avisos, usuarios, sponsors, deudas y muchas otras características. La plataforma es completamente responsive.',
    tags: [
      'React',
      'Nest.js',
      'PostgreSQL',
      'Email.js',
      'TypeScript',
      'Material UI',
    ],
    imageUrl: ADIP,
    linkTo: 'https://front-deploy-adipweb.onrender.com',
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696264987/portfolio-swiper/ADIP-project/home/ioo5ny2bm3eih0ixe7tk.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696264798/portfolio-swiper/ADIP-project/home/ohtvbopxi9q29onswe61.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696264798/portfolio-swiper/ADIP-project/home/kv7s6f5whfcmlvpmpl4i.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265107/portfolio-swiper/ADIP-project/login/lk0gjbf6jifoiur0pola.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265863/portfolio-swiper/ADIP-project/profile/jpasyzm72iulux5zz9dw.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265863/portfolio-swiper/ADIP-project/profile/ez9ee1qiinfnqrhdzmnb.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265153/portfolio-swiper/ADIP-project/dashboard/tnp1txr43w2mgexdktfx.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265154/portfolio-swiper/ADIP-project/dashboard/uqbubpsppoyfg2uztbyf.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696265154/portfolio-swiper/ADIP-project/dashboard/titrzctk94id2jupa9ff.png',
    ],
  },
  {
    title: 'Fisiom Fulness | HealthTech y Bienestar',
    description:
      'Trabajé como Tech Lead Full-Stack bajo metodología Scrum. Estuve a cargo del desarrollo del panel de administrador de la plataforma.',
    tags: ['Next.js', 'MongoDB', 'Express.js', 'Mongoose', 'TailwindCSS'],
    imageUrl: FISIO,
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755149/portfolio-swiper/fisiomfulness/e9nxm5kkhqwhpogofgop.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755149/portfolio-swiper/fisiomfulness/qobkljrclzfcp49hd2c3.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755148/portfolio-swiper/fisiomfulness/a8ql2mlvvz1jlplyfc7b.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755149/portfolio-swiper/fisiomfulness/udakvudikl7hdsxjwof6.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755148/portfolio-swiper/fisiomfulness/oiglrhalewppspioa8cl.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755149/portfolio-swiper/fisiomfulness/vsbt1eheguqeukcurwrb.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755148/portfolio-swiper/fisiomfulness/shqeawhwbokmjameqvdg.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714755148/portfolio-swiper/fisiomfulness/eqoigr9tffqqovaz2zcg.png',
    ],
  },
  {
    title: 'RentScape',
    description:
      'Plataforma de alquiler de inmuebles. Implementé un asistente de chat con IA usando OpenAI LLMs y Pinecone, gestión de solicitudes de propiedades, firma digital de contratos y sistema de agendamiento. Desarrollado con Next.js/React y Supabase con Edge Functions.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Edge Functions',
      'OpenAI LLMs',
      'Vector Databases',
      'AI Integrations',
      'Node.js',
    ],
    imageUrl: RSC,
    linkTo: 'http://rentscape.co/',
    images: [],
  },
  {
    title: 'Spark&Co',
    description:
      'Portal para gestionar proyectos de clientes. Integré un asistente de IA alimentado con tickets de Jira usando OpenAI LLMs y Pinecone. Los clientes pueden ver e interactuar con los datos del proyecto sin acceder a Jira directamente.',
    tags: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Jira API',
      'Edge Functions',
      'OpenAI LLMs',
      'Vector Databases',
      'AI Integrations',
    ],
    imageUrl: PORTAL,
    linkTo: 'https://buildwithspark.co/',
    images: [],
  },
  {
    title: 'Azure Data Factory',
    description:
      'Desarrollo y mantenimiento de múltiples pipelines de datos en Azure Data Factory para validar, descifrar y transformar grandes volúmenes de datos de múltiples administradores de beneficios en Estados Unidos. Implementé Service Bus para encolado y procesamiento, Cosmos DB para almacenamiento y consulta, y Data Lake Storage para datos crudos.',
    tags: ['Service Bus', 'Azure Data Factory', 'Node.js', 'Cloud Engineering'],
    imageUrl: ADF,
    linkTo: '',
    images: [],
  },
  {
    title: 'Olimpo - Gestión Fitness',
    description:
      'SaaS enfocado en la gestión de centros de fitness. Permite a los propietarios tener control total sobre sus gimnasios, clases, horarios, planes, clientes, planes de entrenamiento con IA y check-in por QR. Los clientes también cuentan con su propio panel de usuario con métricas y datos de sus suscripciones y planes. Disponible en versión móvil y escritorio.',
    tags: [
      'Next.js',
      'Supabase',
      'TypeScript',
      'Framer Motion',
      'Shadcn',
      'OpenAI',
    ],
    imageUrl: OLIMPO_LANDING,
    linkTo: 'https://olimpo.lat',
    images: [],
  },
  {
    title: 'Muy pronto...',
    description:
      'Hoy soy mejor que ayer. ¡No importa cuándo leas esto! Siempre estoy trabajando en nuevos proyectos para seguir mejorando y aprendiendo, así que verás proyectos nuevos aquí con frecuencia :).',
    tags: ['Jamás', 'dejaré', 'de', 'aprender', 'y', 'programar'],
    imageUrl: PROG,
    images: [],
  },
];
export const skillsData = [
  // Core frontend
  'TypeScript',
  'React',
  'Next.js',
  'TailwindCSS',
  'Framer Motion',
  'Redux/Zustand',
  'HTML',
  'CSS',
  // Backend & APIs
  'Node.js',
  'Express.js',
  'Nest.js',
  'Supabase',
  'Edge Functions',
  // Databases
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'CosmosDB',
  'Vector Databases',
  // AI & Integrations
  'OpenAI LLMs',
  'AI Integrations',
  'RAG Models',
  // Cloud & Infra / DevOps
  'Azure',
  'Azure Data Factory',
  'AWS Lambda',
  'Stripe',
  'Cron Jobs',
  'Git',
] as const;

export const experiencesData = [
  {
    title: 'Graduated Bootcamp (HENRY)',
    description:
      'I graduated after 4 months of studying. In the final project, I worked for Club ADIP.',
    icon: React.createElement(LuGraduationCap),
    date: 'JUN. 2023 | SEPT. 2023',
  },
  {
    title: 'Full Stack Developer (Intern) | Club ADIP',
    description:
      'Worked as a full stack developer for 1 month to develop a SPA for Club ADIP, located in Buenos Aires.',
    icon: React.createElement(CgWorkAlt),
    date: 'AUG. 2023 | SEPT. 2023',
  },
  // {
  //   title: 'Full Stack Developer | Olimpo Training',
  //   description:
  //     'Developed a SPA entirely by myself for Olimpo Training in Mendoza.',
  //   icon: React.createElement(CgWorkAlt),
  //   date: 'DEC. 2023 | FEB. 2024',
  // },
  {
    title: 'AI Trainer | Remotasks (Remote)',
    description:
      'Worked as a Full-Stack Developer in charge of training AI ChatBots using parameterized prompts and evaluating model responses.',
    icon: React.createElement(CgWorkAlt),
    date: 'DEC. 2023 | FEB. 2024',
  },
  {
    title: 'Full Stack Tech Lead | Fisiom Fulness',
    description:
      'Worked as a Tech Lead at Fisiom Fulness, a HealthTech and Wellness Company in Breña, Lima, Peru. Led the team under Scrum methodology, supervising the development of the product.',
    icon: React.createElement(CgWorkAlt),
    date: 'FEB. 2024 | MAY. 2024',
  },
  {
    title: 'Full-Stack & Cloud Engineer | Spark & Co',
    description:
      'Working as a Full-Stack & Cloud Engineer, building and maintaining a real estate leasing platform with Next.js/React, Supabase, and Edge Functions. Developed OpenAI LLM models for an AI-powered chat assistant. Also developing Azure pipelines using Data Factory, Cosmos DB, Data Lake Storage, and Service Bus for multiple US Benefits Administrators.',
    icon: React.createElement(CgWorkAlt),
    date: 'MAY. 2024 | PRESENT',
  },
  {
    title: 'Software Engineer & Founder | Olimpo',
    description:
      'Founded Olimpo, a SaaS focused on fitness center management. It allows owners to have complete control over their gyms, classes, schedules, plans, clients, AI-powered training plans, and QR code check-in. Clients also have their own user dashboard with metrics and data on their subscriptions and training plans. It features both mobile and desktop applications.',
    icon: React.createElement(CgWorkAlt),
    date: 'SEPT. 2025 | PRESENT',
  },
  {
    title: 'Present',
    description: 'Always ready to learn and grow professionally.',
    icon: React.createElement(FaReact),
    date: 'Forever',
  },
] as const;

export const experiencesDataEsp = [
  {
    title: 'Graduado del Bootcamp HENRY',
    description:
      'Me gradué después de 4 meses de estudio. En el proyecto final, trabajé para Club ADIP.',
    icon: React.createElement(LuGraduationCap),
    date: 'JUN. 2023 | SEPT. 2023',
  },
  {
    title: 'Desarrollador Full Stack (Pasante) | Club ADIP',
    description:
      'Trabajé como desarrollador full stack durante 1 mes para desarrollar una SPA para Club ADIP, ubicado en Buenos Aires.',
    icon: React.createElement(CgWorkAlt),
    date: 'AGO. 2023 | SEPT. 2023',
  },
  {
    title: 'AI Trainer | Remotasks (Remoto)',
    description:
      'Trabajé como Desarrollador Full-Stack encargado de entrenar ChatBots de IA utilizando prompts parametrizados y evaluando las respuestas del modelo.',
    icon: React.createElement(CgWorkAlt),
    date: 'DIC. 2023 | FEB. 2024',
  },
  {
    title: 'Full Stack Tech Lead | Fisiom Fulness',
    description:
      'Trabajé como Tech Lead en Fisiom Fulness, una empresa de HealthTech y Wellness en Breña, Lima, Perú. Lideré al equipo bajo metodología Scrum, supervisando el desarrollo del producto.',
    icon: React.createElement(CgWorkAlt),
    date: 'FEB. 2024 | MAY. 2024',
  },
  {
    title: 'Desarrollador Full-Stack & Cloud | Spark & Co',
    description:
      'Trabajo desarrollando y manteniendo una plataforma de alquiler de propiedades con Next.js/React, Supabase y Edge Functions. Desarrollé modelos OpenAI LLM para un asistente de chat con IA. También desarrollo pipelines en Azure usando Data Factory, Cosmos DB, Data Lake Storage y Service Bus para múltiples Benefits Administrators en EE. UU.',
    icon: React.createElement(CgWorkAlt),
    date: 'MAY. 2024 | ACTUALIDAD',
  },
  {
    title: 'Ingeniero de Software & Fundador | Olimpo',
    description:
      'Fundé Olimpo, un SaaS enfocado en la gestión de centros de fitness. Permite a los propietarios tener control total sobre sus gimnasios, clases, horarios, planes, clientes, planes de entrenamiento con IA y check-in por QR. Los clientes también cuentan con su propio panel con métricas y datos de sus suscripciones. Disponible en móvil y escritorio.',
    icon: React.createElement(CgWorkAlt),
    date: 'SEPT. 2025 | ACTUALIDAD',
  },
  {
    title: 'Actualidad',
    description:
      'Siempre dispuesto a seguir aprendiendo y creciendo profesionalmente.',
    icon: React.createElement(FaReact),
    date: 'Por siempre',
  },
] as const;
