'use server';
import React from 'react';
import { Resend } from 'resend';
import { validateString } from '@/lib/utils';
import { getErrorMessage } from '@/lib/utils';

import ContactFormEmail from '@/email/contact-form-email';
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message');
  const senderEmail = formData.get('senderEmail');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email.',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message.',
    };
  }
  let data;

  try {
   data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'gastonjacintocontacto@gmail.com',
      subject: 'Message from contact form (porfolio)',
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data
  }
};