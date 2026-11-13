import { render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import App from '../App'
import { siteConfig } from '../content/siteConfig'

it('embeds Pomagam and routes support calls to the fundraiser when URLs are configured', () => {
  render(
    <App
      config={{
        ...siteConfig,
        campaign: {
          ...siteConfig.campaign,
          campaignUrl: 'https://pomagam.pl/las44',
          widgetUrl: 'https://pomagam.pl/las44/widget/stream-progress',
        },
      }}
    />,
  )

  expect(screen.getByTitle('Postęp zbiórki LAS 44 na Pomagam.pl')).toHaveAttribute(
    'src',
    'https://pomagam.pl/las44/widget/stream-progress',
  )

  const campaign = within(screen.getByRole('region', { name: 'Pomóż nam opowiedzieć tę historię' }))
  expect(campaign.getByText('Etap 1 zbiórki — development · Docelowo zbieramy 400 000 zł')).toBeInTheDocument()
  expect(campaign.queryByRole('img', { name: 'Pomagam.pl' })).not.toBeInTheDocument()
  expect(campaign.getByRole('link', { name: 'Wesprzyj film' })).toHaveAttribute('href', 'https://pomagam.pl/las44')

  for (const link of screen.getAllByRole('link', { name: 'Wesprzyj film' })) {
    expect(link).toHaveAttribute('href', 'https://pomagam.pl/las44')
  }
})
