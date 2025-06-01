'use client';

import './style.scss';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    front: '🌪️ Charge mentale constante',
    back: '🧘‍♂️ Paix mentale retrouvée',
  },
  {
    front: '🔁 Routines qui s’effondrent',
    back: '🔔 Rituels simples et stables',
  },
  {
    front: '🤯 Plus de place pour soi',
    back: '💞 Lien familial retrouvé',
  },
];

export default function SectionBenefits() {
  useEffect(() => {
    (gsap.utils.toArray('.benefit__card') as HTMLElement[]).forEach((card: HTMLElement) => {
      ScrollTrigger.create({
        trigger: card,
        start: 'top 80%',
        onEnter: () => card.classList.add('is-visible'),
        onLeaveBack: () => card.classList.remove('is-visible'),
      });
    });
  }, []);

  return (
    <section className="benefit">
      <div className="benefit__wrapper">
        {benefits.map(({ front, back }, idx) => (
          <div className="benefit__card" key={idx}>
            <div className="benefit__card-inner">
              <div className="benefit__card-front">{front}</div>
              <div className="benefit__card-back">{back}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
