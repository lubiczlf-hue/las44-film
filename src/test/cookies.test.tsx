import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, it } from 'vitest'
import App from '../App'

const script = () => document.querySelector('script[data-las44-meta-pixel]')

afterEach(() => {
  localStorage.clear()
  script()?.remove()
  delete (window as Window & { fbq?: unknown; _fbq?: unknown }).fbq
  delete (window as Window & { fbq?: unknown; _fbq?: unknown })._fbq
  delete document.documentElement.dataset.metaPixelConsent
})

it('does not load Meta Pixel before a decision and remembers rejection', async () => {
  const user = userEvent.setup()
  const { unmount } = render(<App />)
  expect(script()).toBeNull()
  await user.click(await screen.findByRole('button', { name: 'Odrzuć' }))
  expect(localStorage.getItem('las44-cookie-choice')).toBe('rejected')
  expect(script()).toBeNull()
  unmount()

  render(<App />)
  expect(screen.queryByRole('button', { name: 'Odrzuć' })).not.toBeInTheDocument()
  expect(script()).toBeNull()
  expect(screen.getByRole('link', { name: 'Polityka cookies' })).toHaveAttribute('href', '/polityka-cookies/')
})

it('activates the supplied Pixel after consent and lets visitors withdraw it', async () => {
  const user = userEvent.setup()
  render(<App locale="en" />)
  await user.click(await screen.findByRole('button', { name: 'Accept' }))
  await waitFor(() => expect(script()).toHaveAttribute('src', 'https://connect.facebook.net/en_US/fbevents.js'))
  const fbq = (window as Window & { fbq?: { queue: unknown[][] } }).fbq
  expect(fbq?.queue).toContainEqual(['init', '1599722991956351'])
  expect(fbq?.queue).toContainEqual(['track', 'PageView'])
  expect(screen.getByRole('link', { name: 'Cookie policy' })).toHaveAttribute('href', '/en/cookie-policy/')

  await user.click(screen.getByRole('button', { name: 'Cookie settings' }))
  await user.click(screen.getByRole('button', { name: 'Reject' }))
  expect(localStorage.getItem('las44-cookie-choice')).toBe('rejected')
  expect(fbq?.queue).toContainEqual(['consent', 'revoke'])
})

it('tracks the fundraiser link click as a conversion event only while Pixel consent is active', async () => {
  const user = userEvent.setup()
  render(<App />)
  const support = screen.getAllByRole('link', { name: 'Wesprzyj film' })[0]
  support.addEventListener('click', (event) => event.preventDefault())

  fireEvent.click(support)
  expect((window as Window & { fbq?: unknown }).fbq).toBeUndefined()

  await user.click(await screen.findByRole('button', { name: 'Akceptuj' }))
  const fbq = (window as Window & { fbq?: { queue: unknown[][] } }).fbq
  fireEvent.click(support)
  expect(fbq?.queue).toContainEqual(['trackCustom', 'SupportFundraiserClick'])

  await user.click(screen.getByRole('button', { name: 'Zarządzaj zgodami cookie' }))
  await user.click(screen.getByRole('button', { name: 'Odrzuć' }))
  fireEvent.click(support)
  expect(fbq?.queue.filter(([method, event]) => method === 'trackCustom' && event === 'SupportFundraiserClick')).toHaveLength(1)
})

it('shows a bilingual cookie policy naming Space Films and only Meta as analytics provider', () => {
  const { unmount } = render(<App page="cookies" />)
  expect(screen.getByRole('heading', { name: 'Polityka cookies' })).toBeInTheDocument()
  expect(screen.getAllByText(/Space Films Sp. z o.o./).length).toBeGreaterThan(0)
  expect(screen.getByRole('heading', { name: 'Analityczne pliki cookie' })).toBeInTheDocument()
  unmount()

  render(<App locale="en" page="cookies" />)
  expect(screen.getByRole('heading', { name: 'Cookie policy' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Analytics cookies' })).toBeInTheDocument()
})
