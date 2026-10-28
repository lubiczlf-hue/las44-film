import type { SiteConfig } from '../content/siteConfig'

export function TrueStory({ content }: { content: SiteConfig['trueStory'] }) {
  return (
    <section className="true-story" id="prawdziwa-historia" aria-labelledby="true-story-title">
      <div className="true-story__visual">
        <img className="true-story__image" src="/media/jerzy-archive.jpg" alt="Archiwalny portret Jerzego Godwoda" width="2000" height="900" loading="lazy" />
        <div className="true-story__title">
          <p className="section-kicker">Rys historyczny</p>
          <h2 id="true-story-title">{content.heading}</h2>
        </div>
      </div>
      <div className="true-story__body">
        {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <blockquote>{content.quote}</blockquote>
      </div>
    </section>
  )
}
