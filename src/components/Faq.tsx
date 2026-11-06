import type { SiteConfig } from '../content/siteConfig'
import { useCopy } from '../content/locale'

type FaqProps = {
  items: SiteConfig['faq']
  contact: SiteConfig['contact']
}

export function Faq({ items, contact }: FaqProps) {
  const t = useCopy()
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <div className="faq__heading">
        <p className="section-kicker">{t.questionsAndContact}</p>
        <h2 id="faq-title">{t.faqHeading}</h2>
        <p>{t.otherQuestion} <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
      </div>
      <div className="faq__list">
        {items.map((item) => (
          <details key={item.title}>
            <summary>{item.title}<span aria-hidden="true">+</span></summary>
            {(item.answer || t.detailsSoon).split(/\n\s*\n/).map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>{paragraph.split(contact.email).map((part, index) => (
                <span key={index}>{index > 0 && <a href={`mailto:${contact.email}`}>{contact.email}</a>}{part}</span>
              ))}</p>
            ))}
          </details>
        ))}
      </div>
    </section>
  )
}
