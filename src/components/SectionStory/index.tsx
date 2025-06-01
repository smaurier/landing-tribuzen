'use client';

import './style.scss';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionStory() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const lines = gsap.utils.toArray('.story__line');

    gsap.to(lines, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section className="story" ref={sectionRef}>
      <div className="story__container">
        <p className="story__line story__line--thin">On court après le temps.</p>
        <p className="story__line story__line--normal">Les listes s’accumulent.</p>
        <p className="story__line story__line--bold">Les routines s’effilochent.</p>
      </div>
    </section>
  );
}
