'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.scss';

export default function SectionCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <section className="cta" id="cta">
      <div className="cta__container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Rejoignez les premiers explorateurs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Recevez une douce lettre au lancement. Jamais de spam, promis.
        </motion.p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="cta__success"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Merci 💌 Vous êtes bien notifié·e.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              className="cta__form"
              method="POST"
              action="https://submit-form.com/nuAPunaAw"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex={-1}
                aria-hidden="true"
              />

              <input
                type="text"
                name="firstName"
                placeholder="Votre prénom"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
              />
              <button type="submit">Je m’inscris</button>

              {/* Iframe cachée pour éviter le redirect */}
              <iframe
                name="hidden_iframe"
                style={{ display: 'none' }}
                aria-hidden="true"
              ></iframe>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
