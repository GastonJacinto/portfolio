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
            From an early age, I demonstrated an incredible ability to learn. I
            am excellent in mathematics and anything that requires analysis and
            comprehension. My greatest asset is my mind and my strong ability to
            communicate, as well as my knack for recognizing when I am wrong. I
            have completed internships where I was appointed as a team leader
            for developers, and together, we managed to achieve the expected
            results, even surpassing expectations.
            <br />
            In the midst of my{' '}
            <span className="font-medium">accountant career</span>, I made the
            decision to pursue my passion for programming. I enrolled in Henry's
            bootcamp and learned{' '}
            <span className="font-medium">full-stack web development</span>.{' '}
            <span className="italic">My favorite part of programming</span> is
            the problem-solving aspect. I{' '}
            <span className="underline">love</span> the feeling of finally
            figuring out a solution to a problem. <br />I am always eager to
            learn new technologies and am currently diving into PHP and Laravel.
            I am actively seeking a{' '}
            <span className="font-medium">full-time or part time position</span>{' '}
            as a Fullstack developer.
          </p>
        </>
      ) : (
        <>
          <p className="mb-3">
            Desde temprana edad, he demostrado una notable capacidad para
            aprender. Destaco en matemáticas y en todo lo que requiere análisis
            y comprensión. Mi mayor fortaleza es mi mente y mi alta habilidad
            para comunicarme, así como mi capacidad para reconocer cuando me
            equivoco. He realizado pasantías donde fui designado líder de equipo
            de desarrolladores y logramos alcanzar los resultados esperados,
            incluso superando las expectativas.
            <br />
            En el medio de la carrera de{' '}
            <span className="font-medium">contador público</span>, tomé la
            decisión de perseguir mi pasión por la programación. Me inscribí en
            el Bootcamp de Henry y aprendí{' '}
            <span className="font-medium">desarrollo web Fullstack</span>.{' '}
            <span className="italic">
              Lo que más me gusta de la programación
            </span>{' '}
            es la parte de resolver problemas. Me{' '}
            <span className="underline">encanta</span> como se siente cuando
            finalmente encuentro la solución a un problema. <br /> Siempre estoy
            ansioso por aprender nuevas tecnologías y actualmente estoy
            estudiando PHP y Laravel. Estoy buscando un{' '}
            <span className="font-medium">puesto full time o part time</span>{' '}
            como desarrollador Fullstack.
          </p>
        </>
      )}
    </motion.section>
  );
}
