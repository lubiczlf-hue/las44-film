import type { SiteConfig } from '../content/siteConfig'

type FaqProps = {
  items: SiteConfig['faq']
  contact: SiteConfig['contact']
}

export function Faq({ items, contact }: FaqProps) {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="faq__heading">
        <p className="section-kicker">Pytania i kontakt</p>
        <h2 id="faq-title">Najczęstsze pytania</h2>
        <p>Masz inne pytanie? Napisz na <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
      </div>
      <div className="faq__list">
        {items.map((item) => (
          <details key={item.title}>
            <summary>{item.title}<span aria-hidden="true">+</span></summary>
            <p>{item.answer || 'Szczegóły podamy wkrótce'}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
