"use server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
type EmailData = { name: string; email: string; message: string };
export async function sendEmail({ name, email, message }: EmailData) {
  await resend.emails.send({
    to: "karolina.jedrajczyk@gmail.com",
    from: "onboarding@resend.dev",
    subject: `Wiadomość od ${name}`,
    html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
  });
}
