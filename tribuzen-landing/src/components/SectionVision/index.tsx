'use client';

import './style.scss';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionVision() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    gsap.to(sectionRef.current, {
      scale: 1.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="vision" ref={sectionRef}>
      <div className="vision__overlay">
        <div className="vision__text" ref={textRef}>
          <p>TribuZen n’est pas une app d’organisation.</p>
          <p>C’est un tissage de lien.</p>
        </div>
      </div>
    </section>
  );
}
