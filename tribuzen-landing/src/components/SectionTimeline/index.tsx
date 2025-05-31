'use client';

import './style.scss';
import { motion } from 'framer-motion';

const steps = [
  {
    title: '🌱 Idée & Vision',
    date: 'Avril 2024',
    desc: 'Naissance du concept TribuZen. Création du manifeste et des valeurs fondatrices.',
  },
  {
    title: '🛠️ Landing page',
    date: 'Juin 2025',
    desc: 'Lancement de la landing, ouverture des préinscriptions.',
  },
  {
    title: '📦 V1 de l’app',
    date: 'Septembre 2025',
    desc: 'Lancement de la première version : routines partagées, calendrier familial, totem de tribu.',
  },
  {
    title: '🌍 V2 + Local',
    date: '2026',
    desc: 'Ajout de la dimension locale : entraide, infos pratiques, liens MJC/assos.',
  },
];

export default function SectionTimeline() {
  return (
    <section className="timeline">
      <h2>Les étapes de TribuZen</h2>
      <ul className="timeline__list">
        {steps.map((step, index) => (
          <motion.li
            key={index}
            className="timeline__item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <span className="timeline__dot" />
            <div className="timeline__content">
              <h3>{step.title}</h3>
              <p className="timeline__date">{step.date}</p>
              <p>{step.desc}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
