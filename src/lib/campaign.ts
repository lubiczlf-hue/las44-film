export type CampaignConfig = {
  provider: 'pomagam'
  goalAmount: number
  campaignUrl: string
  widgetUrl: string
}

export type CampaignView =
  | { mode: 'pending'; goalLabel: string }
  | {
      mode: 'live'
      goalLabel: string
      campaignUrl: string
      widgetUrl: string
    }

const formatPln = (amount: number) =>
  `${new Intl.NumberFormat('pl-PL').format(amount).replace(/\u00a0/g, ' ')} zł`

export function deriveCampaignView(config: CampaignConfig): CampaignView {
  const goalLabel = formatPln(config.goalAmount)

  if (!config.campaignUrl.trim() || !config.widgetUrl.trim()) {
    return { mode: 'pending', goalLabel }
  }

  return {
    mode: 'live',
    goalLabel,
    campaignUrl: config.campaignUrl,
    widgetUrl: config.widgetUrl,
  }
}
