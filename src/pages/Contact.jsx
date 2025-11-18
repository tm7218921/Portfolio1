import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [sent, setSent] = useState(false);
  function handleSend(e) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section id="contact" className="contact fade-in">
      <h2>Contact</h2>
      {sent ? (
        <div className="contact__success">Thanks! I'll be in touch soon.</div>
      ) : (
        <form className="contact__form" onSubmit={handleSend}>
          <input type="text" name="name" placeholder="Your Name" required autoComplete="off" />
          <input type="email" name="email" placeholder="Your Email" required autoComplete="off" />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className="contact__btn">Send →</button>
        </form>
      )}
    </section>
  );
}
