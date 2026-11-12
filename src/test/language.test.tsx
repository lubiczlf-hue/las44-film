import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, it } from 'vitest'
import App from '../App'

it('renders a fully English page with a direct link back to Polish', () => {
  render(<App locale="en" />)

  expect(screen.getByRole('link', { name: 'Switch to Polish' })).toHaveAttribute('href', '/')
  expect(screen.getByRole('heading', { name: 'The true story' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Frequently asked questions' })).toBeInTheDocument()
  expect(screen.getByText('Stage 1 of fundraising — development')).toBeInTheDocument()
  const answer = screen.getByText('Why are you making this film?').closest('details') as HTMLElement
  expect(answer.querySelectorAll('p')).toHaveLength(3)
  expect(answer).toHaveTextContent('The Battle of Pecynka was one of the bloodiest partisan battles in the region')
  const funding = screen.getByText('What will the money pay for?').closest('details') as HTMLElement
  expect(funding).toHaveTextContent('Our goal is PLN 400,000. We are raising it in stages!')
  expect(funding.querySelectorAll('.faq__funding-stage')).toHaveLength(5)
  const budget = document.querySelector('.budget') as HTMLElement
  expect(budget).toHaveTextContent('PLN 400,000')
  expect(budget).toHaveTextContent('five stages')
  expect(budget.textContent).not.toMatch(/PLN 20,000|PLN 50,000|PLN 150,000|PLN 250,000/)
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
