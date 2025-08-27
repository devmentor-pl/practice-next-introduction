"use client";

import { useState } from "react";
import { sendEmail } from "./lib/resend";

import styles from "./contact.module.css";


export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendEmail({ name, email, message });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Coś poszło nie tak.");
    }
  };

  return (
    <div className={styles.contactDiv}>
      <h1>Kontakt</h1>
      {submitted && <p className={styles.success}>Wiadomość wysłana!</p>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Imię"
          required
        />
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <textarea
          className={styles.textarea}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Wiadomość"
          rows={4}
          required
        />
        <button type="submit" className={styles.button}>
          Wyślij
        </button>
      </form>
    </div>
  );
}
