'use client';
import React from 'react';
import SectionHeading from './section-heading';
import { projectsData, projectsDataEsp } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import { useLanguage } from '@/context/language-context';

export default function Projects() {
  const { language, toggleLanguage } = useLanguage();
  const sectionName = language === 'ENG' ? 'Projects' : 'Proyectos';
  const { ref } = useSectionInView(sectionName, 0.2);

  const projects = language === 'ENG' ? projectsData : projectsDataEsp;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>
        {language === 'ENG' ? 'My Projects' : 'Mis proyectos'}
      </SectionHeading>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
