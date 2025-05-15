"use server";

import { Resend } from "resend";

const resend = new Resend("re_Xf5Kxt5W_JUkMJkujRDSvXKd8Hs6uxSkH");

type EmailData = {
  name: string;
  email: string;
  message: string;
};

export async function sendEmail({ name, email, message }: EmailData) {
  try {
    await resend.emails.send({
      to: "karolina.jedrajczyk@gmail.com",
      from: "onboarding@resend.dev", 
      subject: `Wiadomość od ${name}`,
      html: `
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong><br />${message}</p>
      `,
    });
  } catch (error) {
    console.error("Błąd podczas wysyłania e-maila:", error);
    throw error;
  }
}
