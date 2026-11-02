import type { SiteConfig } from '../content/siteConfig'

export function ProductionGallery({ content }: { content: SiteConfig['production'] }) {
  const makingOf = content.makingOf
  const hasVideo = makingOf.provider !== 'none' && makingOf.source.trim() !== ''

  return (
    <section className="production section" id="o-filmie" aria-labelledby="production-title">
      <div className="production__heading">
        <p className="section-kicker">Zapowiedź filmu i przygotowania</p>
        <h2 id="production-title">{content.heading}</h2>
        <p>
          Padał deszcz, a na plan przyjechało 40 osób. Pracowali bez wynagrodzenia, bo uwierzyli, że tę historię trzeba opowiedzieć. Z ich czasu, energii i uporu powstała zapowiedź filmu. To dopiero początek — zobacz materiał od twórców i posłuchaj, dlaczego tak bardzo zależy nam na tym filmie.
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
