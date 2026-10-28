import type { SiteConfig } from '../content/siteConfig'

export function Creator({ creators }: { creators: SiteConfig['creators'] }) {
  return (
    <section className="creator section" id="tworcy" aria-labelledby="creator-title">
      <div className="creator__heading">
        <p className="section-kicker">Ludzie stojący za projektem</p>
        <h2 id="creator-title">Twórcy</h2>
      </div>

      <div className="creator__people">
        {creators.map((person) => (
          <article className="creator__person" key={person.name}>
            <figure className="creator__portrait">
              <img src={person.image} alt={`Portret: ${person.name}`} loading="lazy" style={{ objectPosition: person.imagePosition }} />
              {person.imageCredit && person.imageSourceUrl && (
                <figcaption><a href={person.imageSourceUrl} target="_blank" rel="noreferrer">{person.imageCredit} ↗</a></figcaption>
              )}
            </figure>
            <div className="creator__content">
              <h3>{person.name}</h3>
              <p className="creator__role">{person.role}</p>
              {person.bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {(person.filmpolskiUrl || person.showreelUrl) && (
                <div className="creator__links">
                  {person.filmpolskiUrl && <a href={person.filmpolskiUrl}>FilmPolski.pl ↗</a>}
                  {person.showreelUrl && <a href={person.showreelUrl}>Showreel ↗</a>}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
