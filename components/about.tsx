'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useLanguage } from '@/context/language-context';

export default function About() {
  const { language, toggleLanguage } = useLanguage();
  const sectionName = language === 'ENG' ? 'About' : 'Sobre mi';
  const { ref } = useSectionInView(sectionName, 1);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        {language === 'ENG' ? 'About me' : 'Sobre mi'}
      </SectionHeading>

      {language === 'ENG' ? (
        <>
          <p className="mb-3">
            In the midst of my{' '}
            <span className="font-medium">accountant career</span>, I made the
            decision to pursue my passion for programming. I enrolled in Henry's
            bootcamp and learned{' '}
            <span className="font-medium">full-stack web development</span>.{' '}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{' '}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem, especially if it takes a lot
            of time. I am always eager to learn new technologies and am
            currently diving into Next.js 13 and TypeScript. I am actively
            seeking a <span className="font-medium">full-time or part time position</span> as
            a full stack developer.
          </p>
        </>
      ) : (
        <>
          <p className="mb-3">
            En el medio de la carrera de{' '}
            <span className="font-medium">contador público</span>, tomé la decisión de perseguir mi pasión por la programación. Me inscribí en el Bootcamp de Henry y aprendí{' '}
            <span className="font-medium">desarrollo web full stack</span>.{' '}
            <span className="italic">Lo que más me gusta de la programación</span> es la parte de resolver problemas. Me{' '}
            <span className="underline">encanta</span> como se siente cuando finalmente encuentro la solución a un problema, especialmente si me toma mucho tiempo. Siempre estoy ansioso por aprender nuevas tecnologías y actualmente estoy estudiando Next.js 13 y TypeScript. Estoy buscando un <span className="font-medium">puesto full time o part time</span> como desarrollador full stack.
          </p>
        </>
      )}
    </motion.section>
  );
}
