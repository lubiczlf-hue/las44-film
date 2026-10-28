import type { SiteConfig } from '../content/siteConfig'

type TeaserProps = {
  teaser: SiteConfig['teaser']
  supportHref: string
}

export function Teaser({ teaser, supportHref }: TeaserProps) {
  const hasVideo = teaser.provider !== 'none' && teaser.source.trim() !== ''

  return (
    <section className="teaser section" id="teaser" aria-labelledby="teaser-title">
      <div className="section-heading">
        <p className="section-kicker">Zobacz pierwszy materiał</p>
        <h2 id="teaser-title">Teaser filmu</h2>
      </div>
      <div
        className={`teaser__frame${hasVideo ? ' teaser__frame--active' : ''}`}
        style={{ backgroundImage: `url(${teaser.poster})` }}
      >
        {!hasVideo ? (
          <div className="teaser__placeholder">
            <span className="teaser__play" aria-hidden="true"><i /></span>
            <p>Teaser pojawi się tutaj wkrótce</p>
          </div>
        ) : teaser.provider === 'local' ? (
          <video
            className="teaser__media"
            src={teaser.source}
            poster={teaser.poster}
            controls
            preload="metadata"
            aria-label="Teaser filmu LAS 44"
          />
        ) : (
          <iframe
            className="teaser__media"
            src={teaser.source}
            title="Teaser filmu LAS 44"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <a className="text-link" href={supportHref}>Pomóż nam zrealizować cały film <span>↗</span></a>
    </section>
  )
}
