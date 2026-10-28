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
import { Footer } from './components/Footer'
import { siteConfig } from './content/siteConfig'
import type { SiteConfig } from './content/siteConfig'
import { deriveCampaignView } from './lib/campaign'

export default function App({ config = siteConfig }: { config?: SiteConfig }) {
  const campaign = deriveCampaignView(config.campaign)
  const supportHref = campaign.mode === 'live' ? campaign.campaignUrl : '#wsparcie'

  return (
    <div className="site-shell">
      <Header
        title={config.title}
        logo={config.logo}
        navigation={config.navigation}
        supportHref={supportHref}
      />
      <main>
        <Hero content={config.hero} logo={config.logo} patrons={config.partners.logos} supportHref={supportHref} />
        <Campaign campaign={campaign} />
        <Teaser teaser={config.teaser} supportHref={supportHref} />
        <TrueStory content={config.trueStory} />
        <Story content={config.story} />
        <ProductionGallery content={config.production} />
        <OneTake content={config.oneTake} />
        <Budget content={config.budget} />
        <Creator creators={config.creators} />
        <Partners content={config.partners} />
        <Faq items={config.faq} contact={config.contact} />
        <FinalCta supportHref={supportHref} />
      </main>
      <a className="mobile-support-cta" href={supportHref}>Wesprzyj film</a>
      <Footer contact={config.contact} producer={config.producer} logo={config.logo} />
    </div>
  )
}
