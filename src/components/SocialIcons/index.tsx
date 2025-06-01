import { FC } from 'react';
import './style.scss';

interface SocialIconsProps {
  variant?: 'default' | 'compact';
  centered?: boolean;
}

export const SocialIcons: FC<SocialIconsProps> = ({
  variant = 'default',
  centered = false
}) => {
  const icons = [
    {
      name: 'Mastodon',
      href: 'https://mastodon.social/@tribuzen',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#6364FF"
          role="img"
          aria-label="Mastodon"
          className="w-6 h-6"
        >
          <title>Mastodon</title>
          <path d="M18.34 11.6c-.28 1.4-2.5 1.47-2.5 1.47h-1v-3.5h-1.42v3.5h-.96v-3.5h-1.44v3.5H9v-3.5H7.58v4.45s-.07 1.32.77 2.1c.83.77 2.38.78 2.38.78v2.46c-4.09-.13-5.4-2.58-5.4-2.58-1.18-2-1.14-4.36-1.14-4.36V7.57c0-2.05 1.34-2.66 1.34-2.66C6.37 3.84 8.63 3.75 8.63 3.75h2.6v1.96s-1.42-.04-2.9.07c-1.52.12-1.58 1.1-1.58 1.1v1.23h7.5V6.88s.05-.98-1.5-1.1c-1.47-.1-2.88-.07-2.88-.07V3.75h2.6s2.26.1 3.49 1.16c0 0 1.34.61 1.34 2.66v3.78c0 .01.04 1.48-.36 2.25Z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/tribuzen',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#E1306C"
          role="img"
          aria-label="Instagram"
          className="w-6 h-6"
        >
          <title>Instagram</title>
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.5.2.9.5 1.3 1 .4.4.7.8 1 1.3.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.5-.5.9-1 1.3-.4.4-.8.7-1.3 1-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.5-.2-.9-.5-1.3-1-.4-.4-.7-.8-1-1.3-.2-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.5.5-.9 1-1.3.4-.4.8-.7 1.3-1 .4-.2 1.2-.4 2.4-.5 1.3-.1 1.7-.1 4.9-.1m0-2.2C8.7 0 8.3 0 7 .1 5.5.1 4.5.3 3.6.7c-1 .4-1.9 1-2.7 1.8C.3 3.3-.2 4.2.1 6.2.1 7.3 0 7.7 0 12c0 4.3.1 4.7.1 5.8.3 2 .8 2.9 1.8 3.7.8.8 1.7 1.4 2.7 1.8.9.4 1.9.6 3.4.6 1.3 0 1.7.1 5.1.1 3.4 0 3.8 0 5.1-.1 1.5 0 2.5-.2 3.4-.6 1-.4 1.9-1 2.7-1.8.9-.8 1.5-1.7 1.8-3.7.1-1.1.1-1.5.1-5.8s0-4.7-.1-5.8c-.3-2-.8-2.9-1.8-3.7-.8-.8-1.7-1.4-2.7-1.8-1-.4-1.9-.6-3.4-.6-1.3 0-1.7-.1-5.1-.1z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/tribuzen',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#1877F2"
          role="img"
          aria-label="Facebook"
          className="w-6 h-6"
        >
          <title>Facebook</title>
          <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.342v21.317C0 23.4.6 24 1.342 24H12.82v-9.294H9.692v-3.622h3.127V8.41c0-3.1 1.893-4.788 4.66-4.788 1.325 0 2.464.099 2.796.143v3.24h-1.918c-1.505 0-1.796.715-1.796 1.764v2.314h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.658V1.342C24 .6 23.4 0 22.675 0z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/tribuzen',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#0A66C2"
          role="img"
          aria-label="LinkedIn"
          className="w-6 h-6"
        >
          <title>LinkedIn</title>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.024-3.037-1.851-3.037-1.853 0-2.137 1.445-2.137 2.937v5.669h-3.554V9h3.413v1.561h.049c.476-.9 1.636-1.848 3.367-1.848 3.598 0 4.264 2.368 4.264 5.455v6.284zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.072 0-1.143.926-2.07 2.07-2.07s2.07.927 2.07 2.07c0 1.144-.926 2.072-2.07 2.072zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.546C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.273V1.727C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
  ];
  return (
    <div className={`social-icons ${variant === 'compact' ? 'social-icons--compact' : ''} ${centered ? 'social-icons--centered' : ''}`}>
      {icons.map((icon) => (
        <a
          key={icon.name}
          href={icon.href}
          target="_blank"
          rel="noopener"
          aria-label={icon.name}
          className="social-icons__link"
        >
          {icon.svg}
        </a>
      ))}
    </div>
  );
};
