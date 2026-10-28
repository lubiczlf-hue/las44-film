import { describe, expect, it } from 'vitest'
import { deriveCampaignView } from './campaign'

describe('deriveCampaignView', () => {
  it('does not expose invented metrics before a fundraiser exists', () => {
    expect(deriveCampaignView({
      provider: 'pomagam',
      goalAmount: 300000,
      campaignUrl: '',
      widgetUrl: '',
    })).toEqual({ mode: 'pending', goalLabel: '300 000 zł' })
  })

  it('activates the official embed only when both fundraiser URLs exist', () => {
    expect(deriveCampaignView({
      provider: 'pomagam',
      goalAmount: 300000,
      campaignUrl: 'https://pomagam.pl/las44',
      widgetUrl: 'https://pomagam.pl/las44/widget/large/',
    })).toEqual({
      mode: 'live',
      goalLabel: '300 000 zł',
      campaignUrl: 'https://pomagam.pl/las44',
      widgetUrl: 'https://pomagam.pl/las44/widget/large/',
    })
  })
})
