'use client';

import './style.scss';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Lisa',
    role: 'Maman solo de 3 enfants',
    quote: 'TribuZen m’a redonné de l’air. Enfin un outil qui comprend notre quotidien.',
  },
  {
    name: 'Aline & Sam',
    role: 'Parents en garde alternée',
    quote: 'On se sent à nouveau alignés, même à distance.',
  },
  {
    name: 'Malik',
    role: 'Papa en télétravail',
    quote: 'J’utilise TribuZen le matin avec les enfants, ça change tout.',
  },
  // {
  //   name: 'Élodie',
  //   role: 'Mamie aidante',
  //   quote: 'J’ai compris la routine de mes petits-enfants sans appeler 3 fois.',
  // },
];

export default function FamilyWall() {
  return (
    <section className="wall">
      <h2>Ils ont rejoint la tribu 💛</h2>

      <div className="wall__grid">
        {testimonials.map((item, index) => (
          <motion.div
            className="wall__card"
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="wall__avatar" />
            <h3>{item.name}</h3>
            <p className="wall__role">{item.role}</p>
            <blockquote>{item.quote}</blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
