import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ADIP from "@/public/ADIP-home-light.png";
import PI from "@/public/landing.pi.png";
import PROG from "@/public/aprender-programar-gratis.png";
import { StaticImageData } from "next/image";

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  linkTo?: string;
  images: string[]
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp (HENRY)",
    description:
      "I graduated after 4 months of studying. In the final project, I worked for Club ADIP.",
    icon: React.createElement(LuGraduationCap),
    date: "JUN. 2023 | SEPT. 2023",
  },
  {
    title: "Full Stack Developer",
    description:
      "I worked as a full stack developer for 1 month to develop a SPA for Club ADIP, which is located in Buenos Aires.",
    icon: React.createElement(CgWorkAlt),
    date: "AUG. 2023 | SEPT. 2023",
  },
  {
    title: "Coming soon...",
    description:
      "I'll keep getting experience by working as a freelancer and making personal projects.",
    icon: React.createElement(FaReact),
    date: "SEPT. 2023 | Forever",
  },
] as const;

export const projectsData: Project[] = [
  {
    title: "Club ADIP",
    description:
      "I worked as a full-stack developer on this project. Admins can post notices, and control: users, sponsors, debts, and a lot more features.",
    tags: ["React", "Nest.js", "PostgreSQL", "Email.js", "TypeScript", "Material UI"],
    imageUrl: ADIP,
    linkTo:"",
    images: ["https://res.cloudinary.com/db7wpgkge/image/upload/v1696264987/portfolio-swiper/ADIP-project/home/ioo5ny2bm3eih0ixe7tk.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696264798/portfolio-swiper/ADIP-project/home/ohtvbopxi9q29onswe61.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696264798/portfolio-swiper/ADIP-project/home/kv7s6f5whfcmlvpmpl4i.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265107/portfolio-swiper/ADIP-project/login/lk0gjbf6jifoiur0pola.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265863/portfolio-swiper/ADIP-project/profile/jpasyzm72iulux5zz9dw.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265863/portfolio-swiper/ADIP-project/profile/ez9ee1qiinfnqrhdzmnb.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265153/portfolio-swiper/ADIP-project/dashboard/tnp1txr43w2mgexdktfx.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265154/portfolio-swiper/ADIP-project/dashboard/uqbubpsppoyfg2uztbyf.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265154/portfolio-swiper/ADIP-project/dashboard/titrzctk94id2jupa9ff.png"]
  },
  {
    title: "Videogames - HENRY",
    description:
      "Individual project developed by me. Includes fetching data from RAWG(API), combined filters and sorts, background music, and a form to create your own game.",
    tags: ["React", "PostgreSQL", "Express", "Node.js", "Redux"],
    imageUrl: PI,
    images: ["https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/cvvrsamdp8s24qodmvwr.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/ubby4smyiepkfha6krgl.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/khjlyhxeuowirv53x8hc.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696274239/portfolio-swiper/PI-project/yj3zbaobygnxzzfloqlh.png"]
  },
  {
    title: "Coming soon...",
    description:
      "I'm so excited to have an opportunity to show my talent, and I'll keep working to get it, so you'll be seeing new projects here soon :).",
    tags: ["I","will", "never", "stop", "learning", "and","coding"],
    imageUrl: PROG,
    images: []
  }
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Redux",
  "Express",
  "Sequelize",
  "TypeORM",
  "PostgreSQL",
  "Nest.js",
  "Material UI",
  "Framer Motion",
] as const;