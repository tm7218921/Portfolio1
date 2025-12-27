import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSend(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uxs94mt",
        "template_iyrz6yc",
        e.target,
        "q8g8PdvOU7S1U-cB8"
      )
      .then(
        () => {
          setSent(true);
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  }

  return (
    <section id="contact" className="contact fade-in">
      <h2>Contact</h2>

      {sent ? (
        <div className="contact__success">
          Thanks! Your message has been sent. I’ll get back to you soon.
        </div>
      ) : (
        <form className="contact__form" onSubmit={handleSend}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          />
          <button type="submit" className="contact__btn">
            Send →
          </button>
        </form>
      )}
    </section>
  );
}
