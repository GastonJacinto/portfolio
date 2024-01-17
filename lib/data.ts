import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import ADIP from '@/public/ADIP-home-light.png';
import PI from '@/public/landing.pi.png';
import PROG from '@/public/aprender-programar-gratis.png';
import { StaticImageData } from 'next/image';
import OLIMPO from '@/public/foto olimpo.png';
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
      'Designed an all-encompassing gym application enabling users to manage credits via MercadoPago, book/cancel classes, edit profiles; admins oversee classes, plans, instructors, and user credits.',
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
      'I worked as a full-stack developer on this project. Admins can post notices and control various features, including users, sponsors, debts, and many more.',
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
      'Individual project developed by me. It includes fetching data from the RAWG API, combined filters and sorting options, background music, and a form to create your own game.',
    tags: ['React', 'PostgreSQL', 'Express', 'Node.js', 'Redux'],
    imageUrl: PI,
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/cvvrsamdp8s24qodmvwr.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/ubby4smyiepkfha6krgl.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/khjlyhxeuowirv53x8hc.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/yj3zbaobygnxzzfloqlh.png',
    ],
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
      'Desarrollé una aplicación integral para un gimnasio, permitiendo a usuarios recargar créditos con MercadoPago, reservar/quitar clases, editar perfiles y a administradores gestionar clases, planes, instructores y créditos de usuarios.',
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
      'Trabajé como desarrollador full stack en este proyecto. Los admins puedes controlar: noticias, usuarios, sponsors, deudas y muchisimas otras características.',
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
      'Proyecto individual desarrollado por mi. Incluye petición de datos hacia RAWG(API), filtros y ordenamientos combinados, musica de fondo, y un formulario para crear tu propio juego.',
    tags: ['React', 'PostgreSQL', 'Express', 'Node.js', 'Redux'],
    imageUrl: PI,
    images: [
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/cvvrsamdp8s24qodmvwr.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/ubby4smyiepkfha6krgl.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/khjlyhxeuowirv53x8hc.png',
      'https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/yj3zbaobygnxzzfloqlh.png',
    ],
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
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Redux',
  'Express',
  'Sequelize',
  'TypeORM',
  'PostgreSQL',
  'Nest.js',
  'Material UI',
  'Framer Motion',
  'React-Hot-Toast',
  'Next.UI',
  'Resend/Email.js',
] as const;
export const experiencesData = [
  {
    title: 'Graduated bootcamp (HENRY)',
    description:
      'I graduated after 4 months of studying. In the final project, I worked for Club ADIP.',
    icon: React.createElement(LuGraduationCap),
    date: 'JUN. 2023 | SEPT. 2023',
  },
  {
    title: 'Full Stack Developer (intern)',
    description:
      'I am working as a full stack developer for 1 month to develop a SPA for Club ADIP, which is located in Buenos Aires.',
    icon: React.createElement(CgWorkAlt),
    date: 'AUG. 2023 | SEPT. 2023',
  },
  {
    title: 'Full Stack Developer',
    description:
      'I am working as a Fullstack developer to develop a SPA for Olimpo Training, in Mendoza.',
    icon: React.createElement(CgWorkAlt),
    date: 'DEC. 2023 | NOW',
  },
  {
    title: 'Coming soon...',
    description:
      "I'll keep getting experience by working as a freelancer and making personal projects.",
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
    title: 'Desarrollador Full Stack (pasante)',
    description:
      'Trabajé como desarrollador full stack durante 1 mes para desarrollar una Aplicación de Página Única (SPA) para el Club ADIP, ubicado en Buenos Aires.',
    icon: React.createElement(CgWorkAlt),
    date: 'AGO. 2023 | SEPT. 2023',
  },
  {
    title: 'Desarrollador Full Stack',
    description:
      'Estoy trabajando como desarrollador Fullstack para desarrollar una SPA para Olimpo Training, en Mendoza.',
    icon: React.createElement(CgWorkAlt),
    date: 'DIC. 2023 | ACTUALIDAD',
  },
  {
    title: 'Muy pronto...',
    description:
      'Seguiré obteniendo experiencia trabajando como freelancer y en proyectos personales.',
    icon: React.createElement(FaReact),
    date: 'Indefinido',
  },
] as const;
