import type { SiteConfig } from '../content/siteConfig'

export function Footer({ contact, producer, logo, facebookUrl }: {
  contact: SiteConfig['contact']
  producer: SiteConfig['producer']
  logo: string
  facebookUrl: string
}) {
  return (
    <footer className="footer">
      <a className="wordmark" href="#top" aria-label="LAS 44 — początek strony">
        <img src={logo} alt="LAS 44 — oficjalny logotyp filmu" />
      </a>
      <div className="footer__producer">
        <span className="footer__label">Producent filmu</span>
        <strong>{producer.name}</strong>
        <address>{producer.address}</address>
        <span>NIP {producer.nip} · REGON {producer.regon}</span>
        <span>KRS {producer.krs}</span>
      </div>
      <div className="footer__contact">
        <span className="footer__label">Kontakt</span>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
        <a className="footer__social" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="LAS 44 na Facebooku">
          <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
            <path fill="currentColor" d="M13.9 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8v3.2h2.5V21h3.4Z" />
          </svg>
          <span>Facebook LAS 44</span>
        </a>
      </div>
    </footer>
  )
}
