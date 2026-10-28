import type { CampaignView } from '../lib/campaign'

export function Campaign({ campaign }: { campaign: CampaignView }) {
  if (campaign.mode === 'live') {
    return (
      <section className="campaign campaign--live" id="wsparcie" aria-labelledby="campaign-title">
        <div className="campaign__intro">
          <p className="section-kicker">Zbiórka na Pomagam.pl</p>
          <h2 id="campaign-title">Pomóż nam opowiedzieć tę historię</h2>
          <p>Cel: {campaign.goalLabel}</p>
        </div>
        <iframe
          className="campaign__widget"
          src={campaign.widgetUrl}
          title="Postęp zbiórki LAS 44 na Pomagam.pl"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </section>
    )
  }

  return (
    <section className="campaign campaign--pending" id="wsparcie" aria-labelledby="campaign-title">
      <p className="section-kicker">Zbiórka na Pomagam.pl</p>
      <div className="campaign__pending-row">
        <div>
          <h2 id="campaign-title">Zbiórka wkrótce</h2>
          <p>Przygotowujemy stronę zbiórki. Wróć tu niebawem.</p>
        </div>
        <p className="campaign__goal">Cel: {campaign.goalLabel}</p>
      </div>
      <div className="campaign__track" aria-hidden="true"><span /></div>
    </section>
  )
}
