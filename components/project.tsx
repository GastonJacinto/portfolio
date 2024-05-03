'use client';
import React from 'react';
import { projectsData } from '@/lib/data';
import { useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import SwiperProjects from './swiper-projects';
import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { LuLink } from 'react-icons/lu';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  images,
  linkTo,
}: ProjectProps) {
  const { language, toggleLanguage } = useLanguage();
  const sectionName = language === 'ENG' ? 'Projects' : 'Proyectos';
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const [showMore, setShowMore] = React.useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  return (
    <motion.div ref={ref} className="group mb-3 sm:mb-8 last:mb-0 ">
      {showMore ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="hidden z-[1001] overflow-hidden absolute md:flex flex-col left-0 w-[100%] h-[100vh] items-center justify-center  bg-black/70 backdrop-blur-[0.5rem] transition-all dark:text-gray-950"
        >
          <span id="swiper" className="text-white text-2xl font-semibold">
            {language === 'ENG'
              ? 'Slide to see more images 👋'
              : 'Desliza para ver más imagenes 👋'}
          </span>

          <SwiperProjects images={images} />
          <button
            className="fixed right-100 font-semibold top-10 hover:scale-110 active:scale-105 transition-all bg-white w-[5rem] border border-black rounded-full text-xl bg-opacity-80"
            onClick={toggleShowMore}
          >
            {language === 'ENG' ? 'Close' : 'Cerrar'}
          </button>
        </motion.div>
      ) : null}

      <section className="relative rounded-lg bg-gray-100 max-w-[42rem] borderBlack overflow-hidden sm:pr-8 sm:h-[25rem] hover:bg-gray-200 sm:group-even:pl-8 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-5 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-sm text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full  dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          className="absolute hidden sm:block  top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 
          group-hover:scale-[1.04]
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          transition"
        />
        {linkTo && (
          <Link href={linkTo} target="_blank">
            <button
              onClick={() => {}}
              className="absolute left-0 group-even:left-[initial] group-even:right-0 text-sm p-1  bg-zinc-700 text-white sm:p-2 sm:text-lg rounded-full border border-black bottom-0 md:flex flex items-center justify-center gap-2 dark:bg-zinc-200 dark:text-black transition-all dark:border-white"
            >
              <FaExternalLinkAlt />
            </button>
          </Link>
        )}
        {images.length ? (
          <button
            className="absolute right-5 group-even:right-[initial] group-even:left-5 bottom-2 md:block  hidden items-center justify-center bg-white/70 rounded-full w-[6rem] hover:scale-110 active:scale-105 transition-all font-semibold dark:bg-black/[0.3] dark:text-white/8 dark:border-white border border-black"
            onClick={toggleShowMore}
          >
            <Link href={`#swiper`}>
              {language === 'ENG' ? 'See more' : 'Ver más'}
            </Link>
          </button>
        ) : null}
      </section>
    </motion.div>
  );
}
