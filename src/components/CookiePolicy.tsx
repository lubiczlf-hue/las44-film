import { cookieCopy } from '../content/cookies'
import type { Locale } from '../content/locale'
import type { SiteConfig } from '../content/siteConfig'

export function CookiePolicy({ locale, producer, email, logo }: {
  locale: Locale
  producer: SiteConfig['producer']
  email: string
  logo: string
}) {
  const t = cookieCopy[locale]
  const home = locale === 'en' ? '/en/' : '/'
  const otherLanguage = locale === 'en' ? '/polityka-cookies/' : '/en/cookie-policy/'
  return (
    <main className="cookie-policy">
      <a className="cookie-policy__logo" href={home}><img src={logo} alt="LAS 44" /></a>
      <div className="cookie-policy__nav"><a className="cookie-policy__back" href={home}>← {t.back}</a><a href={otherLanguage} lang={locale === 'en' ? 'pl' : 'en'}>{locale === 'en' ? 'Polski' : 'English'}</a></div>
      <h1>{t.policy}</h1>
      <p className="cookie-policy__lead">{t.intro}</p>

      <section><h2>{t.controller}</h2>
        <p>{t.controllerBody} <strong>{producer.name}</strong>, {producer.address}, NIP {producer.nip}, KRS {producer.krs}. {t.controllerContact} <a href={`mailto:${email}`}>{email}</a>.</p>
      </section>
      <section><h2>{t.essentialHeading}</h2><p>{t.essentialBody}</p></section>
      <section><h2>{t.analytics}</h2><p>{t.analyticsBody}</p><p>{t.legalBasis}</p>
        <p><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer">{t.metaPolicy} ↗</a></p>
      </section>
      <section><h2>{t.externalHeading}</h2><p>{t.externalBody}</p></section>
      <section><h2>{t.manageHeading}</h2><p>{t.manageBody}</p></section>
    </main>
  )
}
