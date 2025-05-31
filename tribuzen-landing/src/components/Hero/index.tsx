'use client';

import './style.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftEl = leftRef.current;
    const rightEl = rightRef.current;

    if (!leftEl || !rightEl) return;

    gsap.to(leftEl, {
      y: -100,
      scale: 1.05,
      opacity: 0.9,
      ease: 'none',
      scrollTrigger: {
        trigger: leftEl,
        start: 'top bottom',
        scrub: true,
      },
    });

    gsap.to(rightEl, {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: rightEl,
        start: 'top bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero__split hero__split--left" ref={leftRef}>
        <motion.img
          src="/images/chaos.jpg"
          alt="Parent débordé"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="hero__split hero__split--right" ref={rightRef}>
        <motion.img
          src="/images/zen-family.jpg"
          alt="Famille alignée"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="hero__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h1>
            Et si organiser votre tribu devenait<br />
            un moment de lien, pas de stress&nbsp;?
          </h1>
          <button className="hero__cta">
            Voir comment TribuZen réinvente l’organisation familiale
          </button>
        </motion.div>
      </div>
    </section>
  );
}
