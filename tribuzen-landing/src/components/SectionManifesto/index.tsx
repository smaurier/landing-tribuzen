import './style.scss';

export default function SectionManifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto__container">
        <h2>Notre manifeste</h2>
        <p>
          TribuZen est né d’une fatigue partagée.
          Celle d’organiser les plannings, les routines, les listes...
        </p>
        <p>
          Nous pensons qu’il est temps de remettre du **lien** dans l’organisation.
          De transformer le quotidien en rituel, la charge mentale en attention, la famille en **tribu**.
        </p>
        <p>
          Pas de notifications inutiles. Pas de dark patterns.
          Juste une interface douce, pensée pour créer des moments qui comptent.
        </p>
        <p className="manifesto__signature">— L’équipe TribuZen</p>
      </div>
    </section>
  );
}
