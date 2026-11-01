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
        <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="LAS 44 na Facebooku">Facebook LAS 44 ↗</a>
      </div>
    </footer>
  )
}
