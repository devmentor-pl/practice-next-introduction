"use client";

import { useState } from "react";
import { sendEmail } from "@/lib/resend";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Wysyłanie...");

    try {
      await sendEmail({ name, email, message });
      setStatus("Wiadomość została wysłana!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus("Wystąpił błąd. Spróbuj ponownie.");
    }
  }

  return (
    <main className={styles.formContainer}>
    <form onSubmit={handleSubmit} className={styles.form}>
  <input
    type="text"
    placeholder="Imię"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className={styles.input}
  />
  <input
    type="email"
    placeholder="Twój e-mail"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className={styles.input}
  />
  <textarea
    placeholder="Wiadomość"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
    className={styles.textarea}
  />
  <button type="submit" className={styles.button}>Wyślij</button>
  <p>{status}</p>
</form>

    </main>
  );
}
