import { render, screen } from '@testing-library/react'
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
          widgetUrl: 'https://pomagam.pl/las44/widget/large/',
        },
      }}
    />,
  )

  expect(screen.getByTitle('Postęp zbiórki LAS 44 na Pomagam.pl')).toHaveAttribute(
    'src',
    'https://pomagam.pl/las44/widget/large/',
  )

  for (const link of screen.getAllByRole('link', { name: 'Wesprzyj film' })) {
    expect(link).toHaveAttribute('href', 'https://pomagam.pl/las44')
  }
})
