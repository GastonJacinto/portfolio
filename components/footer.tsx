'use client';
import { useLanguage } from '@/context/language-context';
import React from 'react';

export default function Footer() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      {language === 'ENG' ? (
        <>
          <small className="mb-2 block text-xs">
            &copy; 2023 Gastón Jacinto. All rigths reserved.
          </small>
        </>
      ) : (
        <>
          <small className="mb-2 block text-xs">
            &copy; 2023 Gastón Jacinto. Todos los derechos reservados.
          </small>
        </>
      )}
      {language === 'ENG' ? (
        <>
          <p className="text-xs">
            <span className="font-semibold">About this website:</span> build
            with React & Next.js (App Router & Server Actions), TypeScript,
            Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
          </p>
        </>
      ) : (
        <>
          <p className="text-xs">
            <span className="font-semibold">Acerca de este sitio:</span>{' '}
            desarrollado con React & Next.js (App Router & Server Actions),
            TypeScript, Tailwind CSS, Framer Motion, React Email & Resend,
            deploy en Vercel.
          </p>
        </>
      )}
    </footer>
  );
}
