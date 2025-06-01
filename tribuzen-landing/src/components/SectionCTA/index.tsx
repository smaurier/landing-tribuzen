'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './style.scss';

export default function SectionCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Si le champ honeypot est rempli, on annule
    if (data.get('website')) {
      setLoading(false);
      return;
    }

    const res = await fetch('https://submit-form.com/nuAPunaAw', {
      method: 'POST',
      body: data,
    });

    if (res.ok) setSubmitted(true);
    setLoading(false);
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
              onSubmit={handleSubmit}
              className="cta__form"
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
              <button type="submit" disabled={loading}>
                {loading ? '...' : 'Je m’inscris'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
