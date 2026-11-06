import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import App from '../App'

it('renders a fully English page with a direct link back to Polish', () => {
  render(<App locale="en" />)

  expect(screen.getByRole('link', { name: 'Switch to Polish' })).toHaveAttribute('href', '/')
  expect(screen.getByRole('heading', { name: 'The true story' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Frequently asked questions' })).toBeInTheDocument()
  for (const link of screen.getAllByRole('link', { name: 'Support the film' })) {
    expect(link).toHaveAttribute('href', 'https://pomagam.pl/9crd9m')
  }
  expect(screen.getByRole('button', { name: 'Share' })).toBeInTheDocument()
  expect(screen.queryByText('Prawdziwa historia')).not.toBeInTheDocument()
})

it('links from the Polish page to the English version', () => {
  render(<App />)
  expect(screen.getByRole('link', { name: 'Switch to English' })).toHaveAttribute('href', '/en/')
})

it('shares the direct English URL from the English page', async () => {
  render(<App locale="en" />)
  await userEvent.setup().click(screen.getByRole('button', { name: 'Share' }))
  expect(screen.getByRole('dialog', { name: 'Share the LAS 44 website' }).querySelector('input')).toHaveValue('https://las44.pl/en/')
})
