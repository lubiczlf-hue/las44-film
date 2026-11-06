import { useCopy } from '../content/locale'

export function FinalCta({ supportHref }: { supportHref: string }) {
  const t = useCopy()
  return (
    <section className="final-cta" aria-labelledby="final-cta-title">
      <p className="section-kicker">{t.joinProject}</p>
      <h2 id="final-cta-title">{t.saveStory}</h2>
      <a className="button button--gold" href={supportHref}>{t.support}</a>
    </section>
  )
}
