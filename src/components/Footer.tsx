import type { SiteConfig } from '../content/siteConfig'
import { useCopy } from '../content/locale'

export function Footer({ contact, producer, logo, facebookUrl, youtubeUrl }: {
  contact: SiteConfig['contact']
  producer: SiteConfig['producer']
  logo: string
  facebookUrl: string
  youtubeUrl: string
}) {
  const t = useCopy()
  return (
    <footer className="footer">
      <a className="wordmark" href="#top" aria-label={`LAS 44 — ${t.start}`}>
        <img src={logo} alt={`LAS 44 — ${t.officialLogo}`} />
      </a>
      <div className="footer__producer">
        <span className="footer__label">{t.filmProducer}</span>
        <strong>{producer.name}</strong>
        <address>{producer.address}</address>
        <span>NIP {producer.nip} · REGON {producer.regon}</span>
        <span>KRS {producer.krs}</span>
      </div>
      <div className="footer__contact">
        <span className="footer__label">{t.contact}</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
        <a className="footer__social" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label={t.facebookAria}>
          <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
            <path fill="currentColor" d="M13.9 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8v3.2h2.5V21h3.4Z" />
          </svg>
          <span>Facebook LAS 44</span>
        </a>
        <a className="footer__social" href={youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label={t.youtubeAria}>
          <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
            <path fill="currentColor" d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.3V8.7l5.7 3.3-5.7 3.3Z" />
          </svg>
          <span>YouTube LAS 44</span>
        </a>
      </div>
    </footer>
  )
}
