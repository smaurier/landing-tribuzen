'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';
import ScrollIndicator from '../ScrollIndicator';
import Logo from '../Logo';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const contentRef = useRef(null);
  const introTextRef = useRef(null);

  // ➤ ANIMATION INITIALE (phrase d’accroche)
  useEffect(() => {
    const introTL = gsap.timeline();

    introTL.fromTo(
      introTextRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  // ➤ ANIMATION SCROLL HORIZONTALE
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%',
        scrub: true,
        pin: true,
      },
    });

    tl.to(leftRef.current, { xPercent: -100, ease: 'none' })
      .fromTo(rightRef.current, { xPercent: 100 }, { xPercent: 0, ease: 'none' }, '<')
      .fromTo(contentRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 })
      .fromTo('.hero__cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 })
      .to({}, { duration: 2 });
  }, []);

  return (
    <section className="hero" ref={containerRef}>
      <Logo />
      <ScrollIndicator />

      <div className="hero__split hero__split--left" ref={leftRef}>
        <Image src="/images/chaos.jpg" alt="Parent débordé" width={800} height={600} />
        <div className="hero__intro" ref={introTextRef}>
          Bienvenue dans votre havre familial
        </div>
      </div>

      <div className="hero__split hero__split--right" ref={rightRef}>
        <Image src="/images/zen-family.jpg" alt="Famille zen" width={800} height={600} />
        <motion.div className="hero__content hero__content--overlay" ref={contentRef}>
          <h1>
            Et si organiser votre tribu devenait<br />
            un moment de lien, pas de stress ?
          </h1>
          <button className="hero__cta">
            Voir comment TribuZen réinvente l’organisation familiale
          </button>
        </motion.div>
      </div>
    </section>
  );
}
