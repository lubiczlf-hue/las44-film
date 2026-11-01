import type { SiteConfig } from '../content/siteConfig'

export function Budget({ content }: { content: SiteConfig['budget'] }) {
  return (
    <section className="budget section" aria-labelledby="budget-title">
      <div className="budget__heading">
        <p className="section-kicker">Budżet filmu</p>
        <h2 id="budget-title">{content.heading}</h2>
      </div>
      <div className="budget__copy">
        <p className="budget__intro"><strong>{content.intro}</strong> Zebrane środki pozwolą nam sfinansować:</p>
        <ul className="budget__list">
          {content.items.map((item) => (
            <li key={item.title}><strong>{item.title}</strong>{item.detail && <> — {item.detail}</>}</li>
          ))}
        </ul>
        <p className="budget__closing">{content.closing}</p>
      </div>
    </section>
  )
}
