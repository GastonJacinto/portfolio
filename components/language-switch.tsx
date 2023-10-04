'use client';
import { useLanguage } from '@/context/language-context';
import Image from 'next/image';
import React from 'react';
import ESP from '@/public/ESP.png';
import ENG from '@/public/ENG.png';
export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div
      onClick={toggleLanguage}
      className="fixed bottom-20 md:top-5 right-5 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black/70 border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white cursor-pointer"
    >
      <Image src={language === 'ESP' ? ESP : ENG} width={60} alt="Lang" />
    </div>
  );
}
