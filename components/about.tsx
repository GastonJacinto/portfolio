"use client";
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const {ref} = useSectionInView("About",1)

  return (
    <motion.section
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{opacity:0, y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id='about'
    >
<SectionHeading>About me</SectionHeading>
    
      <p className='mb-3'>
      In the middle of the  {" "}
        <span className="font-medium">Accountant career</span>, I decided to pursue my
        passion for programming. I enrolled in Henry bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem, and even more if that problem demands to me a lot of time. I am always looking to
        learn new technologies, and currently learning Next.js13 and TypeScript. I am looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
      <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and cooking. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}
