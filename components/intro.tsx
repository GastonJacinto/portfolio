'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useLanguage } from '@/context/language-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { language, toggleLanguage } = useLanguage();
  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              alt="Gaston portrait"
              src="https://res.cloudinary.com/db7wpgkge/image/upload/v1695955791/fobnzvmdwsvfxdbq8roj.jpg"
              width="250"
              height="250"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute text-4xl bottom-0 rigth-0
      "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {language === 'ENG' ? (
          <>
            <span className="font-bold">Hey! I'm Gastón.</span> I'm a{' '}
            <span className="font-bold"> full-stack developer</span> and I'm
            looking for an <span className="font-bold">opportunity</span> to
            show my talent. I enjoy programming{' '}
            <span className="italic">and love</span> new challenges. My focus is{' '}
            <span className="underline">React (Next.js)</span>.
          </>
        ) : (
          <>
            <span className="font-bold">Hola! Soy Gastón.</span> Soy {' '}
            <span className="font-bold">desarrollador full stack</span> y estoy buscando una <span className="font-bold">oportunidad</span> para demostrar mi talento. Disfruto estar programando{' '}
            <span className="italic"> y me encantan </span>los nuevos desafíos. Actualmente me enfoco en{' '}
            <span className="underline">React (Next.js)</span>.
          </>
        )}
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          href={'#contact'}
        >
         {language==="ENG"?<> Contact me here{' '}
          <BsArrowRight className="contactMe" /></>:<> Contáctame{' '}
          <BsArrowRight className="contactMe" /></>}
        </Link>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2  rounded-full borderBlack focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 hover:text-gray-950  transition dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/gastonjacinto/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] borderBlack rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition dark:bg-white/10  dark:text-white/60"
          href="https://github.com/GastonJacinto"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
