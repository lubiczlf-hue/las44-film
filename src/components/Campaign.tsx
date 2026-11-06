import type { CampaignView } from '../lib/campaign'
import { useCopy } from '../content/locale'

export function Campaign({ campaign }: { campaign: CampaignView }) {
  const t = useCopy()
  if (campaign.mode === 'live') {
    return (
      <section className="campaign campaign--live" id="wsparcie" aria-labelledby="campaign-title">
        <div className="campaign__intro">
          <p className="section-kicker">{t.fundraiser}</p>
          <h2 id="campaign-title">{t.campaignHeading}</h2>
        </div>
        <div className="campaign__widget-wrap">
          <div className="campaign__widget-crop">
            <iframe
              className="campaign__widget"
              src={campaign.widgetUrl}
              title={t.campaignProgress}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
          <img className="campaign__provider-logo" src="/media/pomagam-logo.svg" alt="Pomagam.pl" />
          <a className="button button--gold" href={campaign.campaignUrl}>{t.support}</a>
        </div>
      </section>
    )
  }

  return (
    <section className="campaign campaign--pending" id="wsparcie" aria-labelledby="campaign-title">
      <p className="section-kicker">{t.fundraiser}</p>
      <div className="campaign__pending-row">
        <div>
          <h2 id="campaign-title">{t.campaignSoon}</h2>
          <p>{t.campaignSoonText}</p>
        </div>
        <p className="campaign__goal">{t.goal}: {campaign.goalLabel}</p>
      </div>
      <div className="campaign__track" aria-hidden="true"><span /></div>
    </section>
  )
}
