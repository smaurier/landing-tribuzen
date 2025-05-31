import { SocialIcons } from '../SocialIcons';
import './style.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__branding">
          <img src="/logo.svg" alt="TribuZen Logo" className="footer__logo" />
          <p>Pour les familles, par une famille.</p>
        </div>

        <div className="footer__links">
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Politique de confidentialité</a>
          <a href="/credits">Crédits</a>
        </div>

        <div className="footer__social">
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
