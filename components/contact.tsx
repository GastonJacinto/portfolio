'use client';
import { useSectionInView } from '@/lib/hooks';
import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './submit-btn';
import toast from 'react-hot-toast';
export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5);
  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center "
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{' '}
        <a className="underline" href="mailto:gastonjacintocontacto@gmail.com">
          {' '}
          gastonjacintocontacto@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        action={async (formData) => {
        const {data,error} =  await sendEmail(formData);
        if(error){
          toast.error(error)
          return;
        }
        toast.success('Email sent successfully!')
        }}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          type="email"
        />
        <textarea
          name="message"
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all"
          required
          maxLength={5000}
        />
        <SubmitButton/>
      </form>
    </motion.section>
  );
}
