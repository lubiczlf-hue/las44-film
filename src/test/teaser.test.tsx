import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { Teaser } from '../components/Teaser'

it('embeds a configured YouTube or Vimeo teaser URL', () => {
  render(
    <Teaser
      supportHref="#wsparcie"
      teaser={{
        provider: 'youtube',
        source: 'https://www.youtube-nocookie.com/embed/example',
        poster: '/media/teaser-poster.jpg',
      }}
    />,
  )

  expect(screen.getByTitle('Zapowiedź filmu LAS 44')).toHaveAttribute(
    'src',
    'https://www.youtube-nocookie.com/embed/example',
  )
})

it('renders a local video file when configured', () => {
  render(
    <Teaser
      supportHref="#wsparcie"
      teaser={{
        provider: 'local',
        source: '/media/teaser.mp4',
        poster: '/media/teaser-poster.jpg',
      }}
    />,
  )

  expect(screen.getByLabelText('Zapowiedź filmu LAS 44')).toHaveAttribute('src', '/media/teaser.mp4')
})
