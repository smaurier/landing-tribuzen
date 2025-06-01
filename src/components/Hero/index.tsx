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

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=300%', // +++ pour avoir une vraie phase d'inertie
        scrub: true,
        pin: true,
      },
    });

    // 1. Scroll horizontal
    tl.to(leftRef.current, { xPercent: -100, ease: 'none' })
      .fromTo(rightRef.current, { xPercent: 100 }, { xPercent: 0, ease: 'none' }, '<')

      // 2. Apparition du contenu (relativement tôt dans le scroll)
      .fromTo(contentRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.5 })
      .fromTo('.hero__cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 })

      // 3. Phase vide, le scroll continue mais rien ne bouge
      .to({}, { duration: 2 }); // ← cette phase absorbe un bout du scroll sans effet
  }, []);



  return (
    <section className="hero" ref={containerRef}>
      <Logo />
      <ScrollIndicator />
      <div className="hero__split hero__split--left" ref={leftRef}>
        <Image src="/images/chaos.jpg" alt="Parent débordé" width={800} height={600} />
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
