'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollIndicator() {
  const indicatorRef = useRef(null);

  useEffect(() => {
    const el = indicatorRef.current;

    // Animation de pulsation
    gsap.fromTo(
      el,
      { y: 0, opacity: 0.8 },
      {
        y: 10,
        opacity: 1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }
    );

    // Disparition à l’approche de la section suivante
    ScrollTrigger.create({
      trigger: '.story',
      start: 'top 90%',
      end: 'top 80%',
      onEnter: () => gsap.to(el, { opacity: 0, duration: 0.4 }),
      onLeaveBack: () => gsap.to(el, { opacity: 1, duration: 0.4 }),
    });
  }, []);

  return (
    <div ref={indicatorRef} className="scroll-indicator">
      <span className="scroll-indicator__text">Scrollez</span>
      <svg
        className="scroll-indicator__arrow"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 5v14m0 0l-6-6m6 6l6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
