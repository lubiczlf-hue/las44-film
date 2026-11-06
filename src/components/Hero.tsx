import { useCopy } from '../content/locale'

type HeroProps = {
  logo: string
  patrons: Array<{ src: string; alt: string }>
  content: {
    eyebrow: string
    headline: string
    description: string
    image: string
  }
  supportHref: string
  facebookUrl: string
}

export function Hero({ content, logo, patrons, supportHref, facebookUrl }: HeroProps) {
  const t = useCopy()
  return (
    <section
      className="hero"
      id="top"
      style={{ '--hero-image': `url(${content.image})` } as React.CSSProperties}
    >
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="hero__eyebrow">{content.eyebrow}</p>
        <p className="hero__patrons-label">{t.honoraryPatronage}</p>
        <div className="hero__patrons" aria-label={t.supportingInstitutions}>
          {patrons.map((patron, index) => (
            <span className={`hero__patron hero__patron--${index + 1}`} key={patron.src}>
              <img src={patron.src} alt={patron.alt} />
            </span>
          ))}
        </div>
        <h1><img src={logo} alt={`LAS 44 — ${t.officialLogo}`} /></h1>
        <p className="hero__headline">{content.headline}</p>
        <p className="hero__description">{content.description}</p>
        <div className="hero__actions">
          <a className="button button--outline" href="#teaser">
            <span className="play-mark" aria-hidden="true" />
            {t.seeTrailer}
          </a>
          <a className="button button--outline" href="#o-filmie">
            <span className="play-mark" aria-hidden="true" />
            {t.creatorsOnFilm}
          </a>
          <a className="button button--gold" href={supportHref}>{t.support}</a>
        </div>
        <a className="hero__facebook" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook LAS 44">
          <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M13.9 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8v3.2h2.5V21h3.4Z" /></svg>
          <span>Facebook LAS 44</span>
        </a>
      </div>
      <a className="hero__scroll" href="#wsparcie" aria-label={t.continue}>
        <span />
      </a>
    </section>
  )
}
