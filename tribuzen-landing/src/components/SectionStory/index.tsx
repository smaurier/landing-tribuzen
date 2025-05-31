'use client';

import './style.scss';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionStory() {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    linesRef.current.forEach((el, i) => {
      if (!el) return;

      gsap.fromTo(
        el,
        { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <section className="story">
      <div className="story__container">
        {['On court après le temps.', 'Les listes s’accumulent.', 'Les routines s’effilochent.'].map((text, i) => (
          <div
            className="story__line"
            key={i}
            ref={(el) => (linesRef.current[i] = el)}
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}
