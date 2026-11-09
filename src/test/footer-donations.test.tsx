import { render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import App from '../App'

const accountNumber = '35 1140 2004 0000 3602 8718 7339'

it('shows the exact donation transfer details in the Polish footer', () => {
  render(<App />)
  const footer = within(screen.getByRole('contentinfo'))

  expect(footer.getByText('Darowizny na produkcję filmu LAS44')).toBeInTheDocument()
  expect(footer.getByText('Space Films sp. z o.o.')).toBeInTheDocument()
  expect(footer.getByText(accountNumber)).toBeInTheDocument()
  expect(footer.getByText('Tytuł przelewu: „Darowizna na film LAS44”')).toBeInTheDocument()
  expect(footer.getByText('Wpłata jest dobrowolną darowizną, bez świadczeń wzajemnych.').closest('small')).not.toBeNull()
})

it('places the donation details immediately to the right of the producer details', () => {
  render(<App />)
  const footer = within(screen.getByRole('contentinfo'))
  const producer = footer.getByText('Producent filmu').closest('.footer__producer')
  const donations = footer.getByRole('region', { name: 'Darowizny na produkcję filmu LAS44' })

  expect(producer?.parentElement).toHaveClass('footer__information')
  expect(donations.parentElement).toBe(producer?.parentElement)
  expect(producer?.nextElementSibling).toBe(donations)
})

it('shows the same account and Polish transfer reference in the English footer', () => {
  render(<App locale="en" />)
  const footer = within(screen.getByRole('contentinfo'))

  expect(footer.getByText('Donations towards the production of LAS44')).toBeInTheDocument()
  expect(footer.getByText(accountNumber)).toBeInTheDocument()
  expect(footer.getByText('Transfer reference: “Darowizna na film LAS44”')).toBeInTheDocument()
})
