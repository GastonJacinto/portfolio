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
            From an early age, I demonstrated a strong ability to learn and
            solve problems. Today, I apply that mindset as a{' '}
            <span className="font-medium">Full-Stack Developer</span>{' '}
            specialized in <span className="underline">React/Next.js</span>, AI
            integrations, and{' '}
            <span className="font-medium">cloud-based solutions</span>.
            <br />I have hands-on experience implementing{' '}
            <span className="font-medium">
              AI-powered chat assistants
            </span>, <span className="font-medium">LLMs</span>,{' '}
            <span className="font-medium">RAG Models</span>, and{' '}
            <span className="font-medium">Vector Databases</span>, enabling
            smarter data-driven applications. I also work with{' '}
            <span className="font-medium">Supabase/Edge Functions</span> and{' '}
            <span className="font-medium">Node.js</span> for backend
            development, and have deployed scalable features in{' '}
            <span className="font-medium">cloud computing environments</span>{' '}
            like Azure.
            <br />I have led developer teams under{' '}
            <span className="italic">Scrum methodology</span> and successfully
            delivered projects that exceeded expectations. Currently, I am
            pursuing a{' '}
            <span className="font-medium">Technical Degree in Programming</span>{' '}
            at UTN while working full-time, and I am interested in positions
            such as{' '}
            <span className="font-medium">Senior Full-Stack Developer</span> or{' '}
            <span className="font-medium">AI Integration Engineer</span>.
          </p>
        </>
      ) : (
        <>
          <p className="mb-3">
            Desde temprana edad, he demostrado una gran capacidad para aprender
            y resolver problemas. Hoy aplico esa mentalidad como{' '}
            <span className="font-medium">Desarrollador Full-Stack</span>{' '}
            especializado en <span className="underline">React/Next.js</span>,
            integraciones con IA y{' '}
            <span className="font-medium">soluciones en la nube</span>.
            <br />
            Tengo experiencia práctica implementando{' '}
            <span className="font-medium">
              asistentes virtuales con IA
            </span>, <span className="font-medium">LLMs</span>,{' '}
            <span className="font-medium">RAG Models</span> y{' '}
            <span className="font-medium">bases de datos vectoriales</span>,
            logrando aplicaciones más inteligentes y basadas en datos. También
            trabajo con{' '}
            <span className="font-medium">Supabase/Edge Functions</span> y{' '}
            <span className="font-medium">Node.js</span> para el backend, y he
            desplegado funcionalidades escalables en entornos de{' '}
            <span className="font-medium">cloud computing</span> como Azure.
            <br />
            He liderado equipos de desarrollo bajo la{' '}
            <span className="italic">metodología Scrum</span>, logrando entregar
            proyectos que superaron las expectativas. Actualmente curso la{' '}
            <span className="font-medium">Tecnicatura en Programación</span> en
            la UTN mientras trabajo full-time, y me interesan posiciones como{' '}
            <span className="font-medium">Senior Full-Stack Developer</span> o{' '}
            <span className="font-medium">AI Integration Engineer</span>.
          </p>
        </>
      )}
    </motion.section>
  );
}
