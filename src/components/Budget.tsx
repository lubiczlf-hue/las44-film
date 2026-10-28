import type { SiteConfig } from '../content/siteConfig'

export function Budget({ content }: { content: SiteConfig['budget'] }) {
  return (
    <section className="budget section" aria-labelledby="budget-title">
      <div className="budget__heading">
        <p className="section-kicker">Budżet filmu</p>
        <h2 id="budget-title">{content.heading}</h2>
      </div>
      <div className="budget__copy">
        {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </section>
  )
}
