import type { SiteConfig } from '../content/siteConfig'

export function OneTake({ content }: { content: SiteConfig['oneTake'] }) {
  const renderInline = (paragraph: string) => paragraph.split(/(\*[^*]+\*)/g).map((part, index) => (
    part.startsWith('*') && part.endsWith('*')
      ? <em key={index}>{part.slice(1, -1)}</em>
      : part
  ))

  return (
    <section className="one-take" aria-labelledby="one-take-title">
      <img
        className="one-take__backdrop"
        src="/media/one-take-forest-extended.jpg"
        alt="Partyzant w lesie — ilustracja filmu LAS 44"
        width="1254"
        height="1254"
        loading="lazy"
      />
      <div className="one-take__content">
        <p className="section-kicker">Forma realizacji</p>
        <h2 id="one-take-title">{content.heading}</h2>
        <p className="one-take__subheading">{content.subheading}</p>
        <div className="one-take__copy">
          <p><strong>{content.lead}</strong>{renderInline(content.paragraphs[0])}</p>
          {content.paragraphs.slice(1).map((paragraph) => <p key={paragraph}>{renderInline(paragraph)}</p>)}
          <p className="one-take__closing"><strong>{content.closing}</strong></p>
        </div>
      </div>
    </section>
  )
}
