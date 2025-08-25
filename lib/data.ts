import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import ADIP from '@/public/ADIP-home-light.png';
import PI from '@/public/landing.pi.png';
import PROG from '@/public/aprender-programar-gratis.png';
import ABM from '@/public/home abm.png';
import { StaticImageData } from 'next/image';
import OLIMPO from '@/public/foto olimpo.png';
import FISIO from '@/public/fisio home.png';
import RSC from '@/public/RSC.png';
import PLACEHOLDER from '@/public/placeholder-1.jpeg';
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
    title: 'Olimpo Training',
    description:
      'Designed an all-encompassing gym application enabling users to manage credits via MercadoPago, book/cancel classes, edit their profiles and see their past classes. Admins oversee classes, plans, instructors, and they also can manage users and their credits. The platform is completely responsive and fully functional.',
    tags: [
      'Next.js',
      'Nest.js',
      'PostgreSQL',
      'TypeScript',
      'FramerMotion',
      'React-hot-toast',
      'Next.UI',
    ],
    imageUrl: OLIMPO,
    linkTo: 'https://evolution-client.vercel.app',
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572387/portfolio-swiper/olimpo-training/ly0vfefjykaf1mlxzrlz.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572692/portfolio-swiper/olimpo-training/qxwbdrxbiwb0x1387lli.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572693/portfolio-swiper/olimpo-training/kd0tjiqjhzygtof7uhwp.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/fcxpehx1291id9nbsgfe.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/kpygbprqektm5s4nllip.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/yxrokwrp0cv1veo10gq9.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/bmnotht4sqdup4mqkrum.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572284/portfolio-swiper/olimpo-training/nh5uhwzy6wk3sxzkffuv.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572284/portfolio-swiper/olimpo-training/pd4acvhisilbptblcqbb.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/wjtx16oty9lqegkuci55.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/bmnotht4sqdup4mqkrum.png',
    ],
  },
  {
    title: 'Club ADIP',
    description:
      'I worked as a full-stack developer on this project. Admins can post notices and control various features, including users, sponsors, debts, notices, and more. The platform is fully responsive. We delivered an excellent app.',
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
    title: 'Videogames - HENRY',
    description:
      'Individual project developed by me. It includes fetching data from the RAWG API, combined filters and sorting options, background music, and a form to create your own game. You also can see every games detail in the page. It includes pagination and filter by name.',
    tags: ['React', 'PostgreSQL', 'Express', 'Node.js', 'Redux', 'CSS'],
    imageUrl: PI,
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/cvvrsamdp8s24qodmvwr.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/ubby4smyiepkfha6krgl.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/khjlyhxeuowirv53x8hc.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/yj3zbaobygnxzzfloqlh.png',
    ],
  },
  {
    title: 'CRUD - Discounts Manager',
    description:
      'I carried out a technical test with PHP and Laravel for Ssr. The results were so good that I exceeded the interviewers expectations. Without knowing PHP, I demonstrated my innate capacity for self-taught learning in the development world.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Livewire', 'TailwindCSS'],
    imageUrl: ABM,
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750955/portfolio-swiper/ABM/o1qs5klrh19e1xtgwike.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750955/portfolio-swiper/ABM/grapek2rueu0yww17erp.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750956/portfolio-swiper/ABM/nwjahfnffy5chgvyupyb.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750955/portfolio-swiper/ABM/lcqcnzjui1vr96rllei3.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750955/portfolio-swiper/ABM/lyb5fpm8tterqjkyay2h.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714751178/portfolio-swiper/ABM/szgaffr2gsem1vfjelio.png',
    ],
  },
  {
    title: 'Fisiom Fulness | HealthTech and Wellness',
    description:
      'I collaborated on this project as a Fullstack Dev. I was appointed as a leader and we managed to make impressive progress on it under the Scrum methodology. My main task was to develop the admin dashboard for the platform.',
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
    title: 'Spark&Co',
    description:
      'Developed an application to manage client projects. Built an AI assistant integrated with Jira tickets using OpenAI LLMs and Pinecone. Clients can view and interact with project data without accessing Jira directly.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Edge Functions',
      'OpenAI LLMs',
      'Vector Databases',
      'AI Integrations',
    ],
    imageUrl: PLACEHOLDER,
    linkTo: '',
    images: [],
  },
  {
    title: 'RentScape',
    description:
      'Develop and maintain RentScape, a real estate leasing platform. Implemented AI-powered chat assistant using OpenAI LLMs and Pinecone, property application management, digital lease signing, and scheduling system. Built with Next.js/React frontend and Supabase with Edge Functions backend.',
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
    title: 'Barrel Replacement (Azure)',
    description:
      'Develop and maintain multiple data pipelines to validate, decrypt, and transform various files (.csv, .json, .pgp) from multiple clients using Azure and cloud storage. Integrated RESTful endpoints for frontend access to processed data.',
    tags: ['Azure', 'Azure Data Factory', 'Node.js', 'Data Pipelines'],
    imageUrl: PLACEHOLDER,
    linkTo: '',
    images: [],
  },
  {
    title: 'Coming soon...',
    description:
      'I am very excited to have the opportunity to showcase my talent, and I will keep working to achieve it, so you will see new projects here frequently :).',
    tags: ['I', 'will', 'never', 'stop', 'learning', 'and', 'coding'],
    imageUrl: PROG,
    images: [],
  },
];
export const projectsDataEsp: Project[] = [
  {
    title: 'Olimpo Training',
    description:
      'Desarrollé una aplicación integral para un gimnasio, permitiendo a usuarios recargar créditos con MercadoPago, reservar/quitar clases, editar perfiles y a administradores gestionar clases, planes, instructores también pueden administrar usuarios y sus créditos. La aplicación es completamente responsive y funcional.',
    tags: [
      'Next.js',
      'Nest.js',
      'PostgreSQL',
      'TypeScript',
      'FramerMotion',
      'Next.UI',
      'React-hot-toast',
    ],
    imageUrl: OLIMPO,
    linkTo: 'https://evolution-client.vercel.app',
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572387/portfolio-swiper/olimpo-training/ly0vfefjykaf1mlxzrlz.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572692/portfolio-swiper/olimpo-training/qxwbdrxbiwb0x1387lli.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572693/portfolio-swiper/olimpo-training/kd0tjiqjhzygtof7uhwp.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/fcxpehx1291id9nbsgfe.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/kpygbprqektm5s4nllip.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/yxrokwrp0cv1veo10gq9.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/bmnotht4sqdup4mqkrum.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572284/portfolio-swiper/olimpo-training/nh5uhwzy6wk3sxzkffuv.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572284/portfolio-swiper/olimpo-training/pd4acvhisilbptblcqbb.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/wjtx16oty9lqegkuci55.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1700572283/portfolio-swiper/olimpo-training/bmnotht4sqdup4mqkrum.png',
    ],
  },
  {
    title: 'Club ADIP',
    description:
      'Trabajé como desarrollador full stack en este proyecto. Los admins puedes controlar: noticias, usuarios, sponsors, deudas y muchisimas otras características. La plataforma es completamente responsive. Entregamos una excelente app.',
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
    title: 'Videogames - HENRY',
    description:
      'Proyecto individual desarrollado por mi. Incluye petición de datos hacia RAWG(API), filtros y ordenamientos combinados, musica de fondo, y un formulario para crear tu propio juego. También puedes ver el detalle de cada juego en la página. Incluye paginado y busqueda por nombre.',
    tags: ['React', 'PostgreSQL', 'Express', 'Node.js', 'Redux', 'CSS'],
    imageUrl: PI,
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/cvvrsamdp8s24qodmvwr.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/ubby4smyiepkfha6krgl.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/khjlyhxeuowirv53x8hc.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/yj3zbaobygnxzzfloqlh.png',
    ],
  },
  {
    title: 'ABM - Gestor de descuentos',
    description:
      'Realicé una prueba técnica con PHP y Laravel para Ssr. Los resultados fueron tan buenos que superé las expectativas de los entrevistadores. Sin conocer PHP, demostré mi capacidad innata de aprendizaje autodidacta en el mundo del desarrollo.',
    tags: ['PHP', 'Laravel', 'MySQL', 'Livewire', 'TailwindCSS'],
    imageUrl: ABM,
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750955/portfolio-swiper/ABM/o1qs5klrh19e1xtgwike.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750955/portfolio-swiper/ABM/grapek2rueu0yww17erp.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750956/portfolio-swiper/ABM/nwjahfnffy5chgvyupyb.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750955/portfolio-swiper/ABM/lcqcnzjui1vr96rllei3.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714750955/portfolio-swiper/ABM/lyb5fpm8tterqjkyay2h.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1714751178/portfolio-swiper/ABM/szgaffr2gsem1vfjelio.png',
    ],
  },
  {
    title: 'Fisiom Fulness | Salud y Bienestar',
    description:
      'Colaboré en este proyecto como Fullstack Dev. Fui designado como lider y logramos realizar avances impresionantes en el mismo bajo metodología Scrum. Mi tarea principal fue desarrollar el panel de administrador para la plataforma.',
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
      'Desarrollo y mantenimiento de RentScape, una plataforma de alquiler de inmuebles. Incluye asistente de chat con IA usando OpenAI LLMs y Pinecone, gestión de aplicaciones de propiedades, firma digital de contratos y sistema de agendamiento. Frontend en Next.js/React y backend en Supabase con Edge Functions.',
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
    title: 'Barrel Replacement (Azure)',
    description:
      'Desarrollo y mantenimiento de pipelines de datos para validar, descifrar y transformar archivos (.csv, .json, .pgp) de múltiples clientes usando Azure. Se integraron endpoints REST para que el frontend acceda a los datos procesados.',
    tags: ['Azure', 'Azure Data Factory', 'Node.js', 'Data Pipelines'],
    imageUrl: PLACEHOLDER,
    linkTo: '',
    images: [],
  },
  {
    title: 'Spark&Co',
    description:
      'Aplicación para gestión de proyectos de clientes. Implementé un asistente de IA integrado con tickets de Jira usando OpenAI LLMs y Pinecone. Los clientes pueden consultar y manipular datos sin acceder directamente a Jira.',
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'Supabase',
      'Edge Functions',
      'OpenAI LLMs',
      'Vector Databases',
      'AI Integrations',
    ],
    imageUrl: PLACEHOLDER,
    linkTo: '',
    images: [],
  },
  {
    title: 'Muy pronto...',
    description:
      'Estoy muy ansioso por tener la oportunidad de demostrar mi talento y seguiré trabajando para conseguirla, por lo tanto, verás nuevos proyectos aquí con frecuencia :).',
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
  {
    title: 'Full Stack Developer | Olimpo Training',
    description:
      'Developed a SPA entirely by myself for Olimpo Training in Mendoza.',
    icon: React.createElement(CgWorkAlt),
    date: 'DEC. 2023 | FEB. 2024',
  },
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
      'Worked as a Tech Lead at Fisiom Fulness, a HealthTech and Wellness Company in Breña, Lima, Peru. Led the team under Scrum methodology, supervising the development of the product until completion.',
    icon: React.createElement(CgWorkAlt),
    date: 'FEB. 2024 | MAY. 2024',
  },
  {
    title: 'Full-Stack & Cloud Developer | Spark & Co',
    description:
      'Working as a Full-Stack Developer, building and maintaining a real estate leasing platform with Next.js/React, Supabase, and Edge Functions. Developed OpenAI LLM models for an AI-powered chat assistant. Also developing Azure pipelines using Data Factory, Cosmos DB, Data Lake Storage, and Service Bus for multiple US Benefits Administrators.',
    icon: React.createElement(CgWorkAlt),
    date: 'MAY. 2024 | PRESENT',
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
    title: 'Desarrollador Full Stack | Olimpo Training',
    description:
      'Desarrollé una SPA completamente por mi cuenta para Olimpo Training en Mendoza.',
    icon: React.createElement(CgWorkAlt),
    date: 'DIC. 2023 | FEB. 2024',
  },
  {
    title: 'AI Trainer | Remotasks (Remoto)',
    description:
      'Trabajé como desarrollador Full-Stack encargado de entrenar ChatBots de IA utilizando prompts parametrizados y evaluando las respuestas del modelo.',
    icon: React.createElement(CgWorkAlt),
    date: 'DIC. 2023 | FEB. 2024',
  },
  {
    title: 'Full Stack Tech Lead | Fisiom Fulness',
    description:
      'Trabajé como Tech Lead en Fisiom Fulness, una empresa de HealthTech y Wellness ubicada en Breña, Lima, Perú. Lideré al equipo bajo metodología Scrum, supervisando el desarrollo del producto hasta su finalización.',
    icon: React.createElement(CgWorkAlt),
    date: 'FEB. 2024 | MAY. 2024',
  },
  {
    title: 'Desarrollador Full-Stack & Cloud | Spark & Co',
    description:
      'Trabajo desarrollando y manteniendo una plataforma de alquiler de propiedades con Next.js/React, Supabase y Edge Functions. Desarrollé modelos OpenAI LLM para un asistente de chat impulsado por IA. También desarrollo pipelines en Azure usando Data Factory, Cosmos DB, Data Lake Storage y Service Bus para múltiples Benefits Administrators en EE. UU.',
    icon: React.createElement(CgWorkAlt),
    date: 'MAY. 2024 | ACTUALIDAD',
  },
  {
    title: 'Presente',
    description:
      'Siempre dispuesto a seguir aprendiendo y creciendo profesionalmente.',
    icon: React.createElement(FaReact),
    date: 'Indefinido',
  },
] as const;
