import type { SiteConfig } from '../content/siteConfig'
import { useCopy } from '../content/locale'

export function Story({ content }: { content: SiteConfig['story'] }) {
  const t = useCopy()
  return (
    <section className="story" id="temat-filmu" aria-labelledby="story-title">
      <div className="story__visual">
        <img className="story__image" src="/media/romek-archive.jpg" alt={t.romekPortrait} width="2048" height="869" loading="lazy" />
        <div className="story__title">
          <p className="section-kicker">{content.kicker}</p>
          <h2 id="story-title">{content.heading}</h2>
        </div>
      </div>
      <div className="story__content">
        <div className="story__body">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  )
}
