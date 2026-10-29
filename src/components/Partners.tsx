import type { SiteConfig } from '../content/siteConfig'

export function Partners({ content }: { content: SiteConfig['partners'] }) {
  return (
    <section className="partners" id="patroni" aria-labelledby="partners-title">
      <div className="partners__inner">
        <p className="section-kicker">Instytucje wspierające projekt</p>
        <h2 id="partners-title">{content.heading}</h2>
        <p className="partners__group-label">Patroni honorowi</p>
        <div className="partners__logos">
          {content.logos.slice(0, 3).map((logo, index) => (
            <div className={`partners__logo partners__logo--${index + 1}`} key={logo.src}>
              <div className="partners__mark">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        {content.logos.length > 3 && (
          <div className="partners__supporting">
            <p className="partners__group-label">Grupa rekonstrukcyjna</p>
            <div className="partners__logos partners__logos--supporting">
              {content.logos.slice(3).map((logo) => (
                <div className="partners__logo" key={logo.src}>
                  <div className="partners__mark">
                    <img src={logo.src} alt={logo.alt} loading="lazy" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
