import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { useLanguage } from '@/context/language-context';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex justify-center gap-2 items-center focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white "></div>
      ) : (
        <>
          {language==="ENG"?"Submit":"Enviar"}{' '}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 
  "
          />
        </>
      )}
    </button>
  );
}
