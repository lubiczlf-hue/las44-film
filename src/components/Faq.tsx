import { useContext } from 'react'
import type { SiteConfig } from '../content/siteConfig'
import { LocaleContext, useCopy } from '../content/locale'

type FaqProps = {
  items: SiteConfig['faq']
  contact: SiteConfig['contact']
  donations: SiteConfig['donations']
}

export function Faq({ items, contact, donations }: FaqProps) {
  const t = useCopy()
  const locale = useContext(LocaleContext)
  const quotedReference = locale === 'en' ? `“${donations.reference}”` : `„${donations.reference}”`
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
            {item.bankTransfer ? (
              <section className="faq__donations" aria-label={t.donationsHeading}>
                <h3>{t.donationsHeading}</h3>
                <p>{donations.recipient}</p>
                <p className="faq__account"><strong>{donations.accountNumber}</strong></p>
                <p>{`${t.transferReference}: ${quotedReference}`}</p>
                <small>{t.donationsNote}</small>
              </section>
            ) : item.fundingPlan ? (
              <div className="faq__funding">
                <h3>{item.fundingPlan.heading}</h3>
                {item.fundingPlan.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {item.fundingPlan.stages.map((stage) => (
                  <section className="faq__funding-stage" key={stage.threshold}>
                    <h4>{stage.threshold}</h4>
                    <p className="faq__funding-name">{stage.name}</p>
                    <p>{stage.description}</p>
                  </section>
                ))}
                {item.fundingPlan.conclusion.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            ) : (
              (item.answer || t.detailsSoon).split(/\n\s*\n/).map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph.split(contact.email).map((part, index) => (
                  <span key={index}>{index > 0 && <a href={`mailto:${contact.email}`}>{contact.email}</a>}{part}</span>
                ))}</p>
              ))
            )}
          </details>
        ))}
      </div>
    </section>
  )
}
