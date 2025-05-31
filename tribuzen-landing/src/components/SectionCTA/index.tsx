'use client';

import './style.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function SectionCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true); // tu remplaces ici par une vraie requête plus tard
  };

  return (
    <section className="cta">
      <div className="cta__container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Envie de tester TribuZen ?
        </motion.h2>

        <p>Rejoignez la tribu des premiers explorateurs.</p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="cta__form">
            <input type="text" name="firstName" placeholder="Votre prénom" required />
            <input type="email" name="email" placeholder="Votre email" required />
            <button type="submit">Rejoindre la tribu</button>
          </form>
        ) : (
          <p className="cta__success">Merci ! On vous écrira bientôt ✨</p>
        )}

        <small>Jamais de spam. Promis juré 💛</small>
      </div>
    </section>
  );
}
