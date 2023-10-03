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
      In the midst of my   {" "}
        <span className="font-medium">accountant career</span>,  I made the decision to pursue my passion for programming. I enrolled in Henry's bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem, especially if it takes a lot of time. I am always eager to learn new technologies and am currently diving into Next.js 13 and TypeScript. I am actively seeking a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  )
}
