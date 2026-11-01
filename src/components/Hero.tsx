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
}

export function Hero({ content, logo, patrons, supportHref }: HeroProps) {
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
            Obejrzyj zapowiedź filmu
          </a>
          <a className="button button--outline" href="#making-of">
            <span className="play-mark" aria-hidden="true" />
            Od twórców
          </a>
          <a className="button button--gold" href={supportHref}>Wesprzyj film</a>
        </div>
      </div>
      <a className="hero__scroll" href="#wsparcie" aria-label="Przejdź dalej">
        <span />
      </a>
    </section>
  )
}
