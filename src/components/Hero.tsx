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
  return (
    <section
      className="hero"
      id="top"
      style={{ '--hero-image': `url(${content.image})` } as React.CSSProperties}
    >
      <div className="hero__veil" />
      <div className="hero__content">
        <p className="hero__eyebrow">{content.eyebrow}</p>
        <p className="hero__patrons-label">Patronat honorowy</p>
        <div className="hero__patrons" aria-label="Instytucje wspierające projekt">
          {patrons.map((patron, index) => (
            <span className={`hero__patron hero__patron--${index + 1}`} key={patron.src}>
              <img src={patron.src} alt={patron.alt} />
            </span>
          ))}
        </div>
        <h1><img src={logo} alt="LAS 44 — oficjalny logotyp filmu" /></h1>
        <p className="hero__headline">{content.headline}</p>
        <p className="hero__description">{content.description}</p>
        <div className="hero__actions">
          <a className="button button--outline" href="#teaser">
            <span className="play-mark" aria-hidden="true" />
            Zobacz zapowiedź filmu
          </a>
          <a className="button button--outline" href="#o-filmie">
            <span className="play-mark" aria-hidden="true" />
            Twórcy o filmie
          </a>
          <a className="button button--gold" href={supportHref}>Wesprzyj film</a>
        </div>
        <a className="hero__facebook" href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Polub nas na Facebooku — LAS 44">
          <span className="hero__facebook-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false"><path fill="currentColor" d="M13.9 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H8v3.2h2.5V21h3.4Z" /></svg>
          </span>
          <span>Polub nas na Facebooku</span>
          <span className="hero__facebook-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
      <a className="hero__scroll" href="#wsparcie" aria-label="Przejdź dalej">
        <span />
      </a>
    </section>
  )
}
