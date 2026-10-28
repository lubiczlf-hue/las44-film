import type { SiteConfig } from '../content/siteConfig'

export function ProductionGallery({ content }: { content: SiteConfig['production'] }) {
  const makingOf = content.makingOf
  const hasVideo = makingOf.provider !== 'none' && makingOf.source.trim() !== ''

  return (
    <section className="production section" id="o-filmie" aria-labelledby="production-title">
      <div className="production__heading">
        <p className="section-kicker">Teaser i przygotowania</p>
        <h2 id="production-title">{content.heading}</h2>
        <p>
          Teaser pozwolił sprawdzić język wizualny filmu, pracę kamery oraz rytm scen rozgrywających się w lesie. Zobacz making of i posłuchaj wypowiedzi twórców.
        </p>
      </div>
      <div className="production__film" id="making-of">
        <div className="production__film-heading">
          <h3>{makingOf.title}</h3>
        </div>
        <div className="production__film-frame">
          {!hasVideo ? (
            <p>Film w przygotowaniu</p>
          ) : makingOf.provider === 'local' ? (
            <video src={makingOf.source} controls preload="metadata" aria-label={makingOf.title} />
          ) : (
            <iframe src={makingOf.source} title={makingOf.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
          )}
        </div>
      </div>
    </section>
  )
}
