import { Campaign } from './components/Campaign'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Teaser } from './components/Teaser'
import { Story } from './components/Story'
import { TrueStory } from './components/TrueStory'
import { OneTake } from './components/OneTake'
import { ProductionGallery } from './components/ProductionGallery'
import { Budget } from './components/Budget'
import { Creator } from './components/Creator'
import { Partners } from './components/Partners'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { MobileSupportCta } from './components/MobileSupportCta'
import { Footer } from './components/Footer'
import { siteConfig } from './content/siteConfig'
import { englishSiteConfig } from './content/siteConfig.en'
import { LocaleContext, type Locale } from './content/locale'
import type { SiteConfig } from './content/siteConfig'
import { deriveCampaignView } from './lib/campaign'

export default function App({ config, locale = 'pl' }: { config?: SiteConfig; locale?: Locale }) {
  const activeConfig = config ?? (locale === 'en' ? englishSiteConfig : siteConfig)
  const campaign = deriveCampaignView(activeConfig.campaign)
  const supportHref = campaign.mode === 'live' ? campaign.campaignUrl : '#wsparcie'

  return (
    <LocaleContext.Provider value={locale}>
    <div className="site-shell">
      <Header
        title={activeConfig.title}
        logo={activeConfig.logo}
        navigation={activeConfig.navigation}
        supportHref={supportHref}
        shareUrl={activeConfig.social.siteUrl}
        locale={locale}
      />
      <main>
        <Hero content={activeConfig.hero} logo={activeConfig.logo} patrons={activeConfig.partners.logos.filter((logo) => logo.showInHero !== false)} supportHref={supportHref} facebookUrl={activeConfig.social.facebookUrl} />
        <Campaign campaign={campaign} />
        <Teaser teaser={activeConfig.teaser} supportHref={supportHref} />
        <TrueStory content={activeConfig.trueStory} />
        <Story content={activeConfig.story} />
        <ProductionGallery content={activeConfig.production} />
        <OneTake content={activeConfig.oneTake} />
        <Budget content={activeConfig.budget} />
        <Creator creators={activeConfig.creators} />
        <Partners content={activeConfig.partners} />
        <Faq items={activeConfig.faq} contact={activeConfig.contact} />
        <FinalCta supportHref={supportHref} />
      </main>
      <MobileSupportCta href={supportHref} />
      <Footer contact={activeConfig.contact} producer={activeConfig.producer} logo={activeConfig.logo} facebookUrl={activeConfig.social.facebookUrl} youtubeUrl={activeConfig.social.youtubeUrl} />
    </div>
    </LocaleContext.Provider>
  )
}
