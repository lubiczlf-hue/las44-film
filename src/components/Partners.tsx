import type { SiteConfig } from '../content/siteConfig'
import { useCopy } from '../content/locale'

export function Partners({ content }: { content: SiteConfig['partners'] }) {
  const t = useCopy()
  return (
    <section className="partners" id="patroni" aria-labelledby="partners-title">
      <div className="partners__inner">
        <p className="section-kicker">{t.supportingInstitutions}</p>
        <h2 id="partners-title">{content.heading}</h2>
        <p className="partners__group-label">{t.honoraryPatronage}</p>
        <div className="partners__logos">
          {content.logos.slice(0, 3).map((logo, index) => (
            <div className={`partners__logo partners__logo--${index + 1}`} key={logo.src}>
              <div className="partners__mark">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
        <div className="partners__distribution">
          <p className="partners__group-label">{content.distribution.heading}</p>
          <img src={content.distribution.logo} alt="Rafael Film" loading="lazy" />
          <p>{content.distribution.description}</p>
        </div>
        {content.logos.length > 3 && (
          <div className="partners__supporting">
            <p className="partners__group-label">{t.projectPartners}</p>
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
