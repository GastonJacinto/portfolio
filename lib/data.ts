import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ADIP from "@/public/ADIP-home-light.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
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
      "I worked as a full-stack developer on this project. Admins in the platform have full control about all the features of the page.",
    tags: ["React", "Nest.js", "PostgreSQL", "Email.js", "TypeScript", "Material UI"],
    imageUrl: ADIP,
    linkTo:"",
    images: ["https://res.cloudinary.com/db7wpgkge/image/upload/v1696264987/portfolio-swiper/ADIP-project/home/ioo5ny2bm3eih0ixe7tk.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696264798/portfolio-swiper/ADIP-project/home/ohtvbopxi9q29onswe61.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696264798/portfolio-swiper/ADIP-project/home/kv7s6f5whfcmlvpmpl4i.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265107/portfolio-swiper/ADIP-project/login/lk0gjbf6jifoiur0pola.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265863/portfolio-swiper/ADIP-project/profile/jpasyzm72iulux5zz9dw.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265863/portfolio-swiper/ADIP-project/profile/ez9ee1qiinfnqrhdzmnb.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265153/portfolio-swiper/ADIP-project/dashboard/tnp1txr43w2mgexdktfx.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265154/portfolio-swiper/ADIP-project/dashboard/uqbubpsppoyfg2uztbyf.png","https://res.cloudinary.com/db7wpgkge/image/upload/v1696265154/portfolio-swiper/ADIP-project/dashboard/titrzctk94id2jupa9ff.png"]
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
    images: ["asd"]
  },
  {
    title: "Coming soon...",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    images: ["asd"]
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