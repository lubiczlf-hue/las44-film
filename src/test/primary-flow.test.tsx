import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from '../App'

describe('primary visitor flow', () => {
  it('uses the official film logo in the header, hero and footer', () => {
    render(<App />)

    const logos = screen.getAllByRole('img', { name: 'LAS 44 — oficjalny logotyp filmu' })
    expect(logos).toHaveLength(3)
    logos.forEach((logo) => {
      expect(logo).toHaveAttribute('src', '/media/las44-official-logo.png')
    })
    expect(screen.getByRole('heading', { level: 1, name: 'LAS 44 — oficjalny logotyp filmu' })).toBeInTheDocument()
  })

  it('explains that support is not open instead of showing fake totals', () => {
    render(<App />)

    expect(screen.getByText('Zbiórka wkrótce')).toBeInTheDocument()
    expect(screen.getByText('Cel: 500 000 zł')).toBeInTheDocument()
    expect(screen.queryByText(/zebrano/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wspierających/i)).not.toBeInTheDocument()
  })

  it('links the making of button to the second film section', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'Obejrzyj making of' })
    const target = document.getElementById('making-of') as HTMLElement

    expect(link).toHaveAttribute('href', '#making-of')
    expect(target).toHaveTextContent('Making of i wypowiedzi twórców')
  })

  it('opens and closes the mobile navigation accessibly', async () => {
    const user = userEvent.setup()
    render(<App />)

    const openButton = screen.getByRole('button', { name: 'Otwórz menu' })
    await user.click(openButton)

    expect(openButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('dialog', { name: 'Menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Zamknij menu' }))
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
  })

  it('locks background scrolling and closes the menu with Escape', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Otwórz menu' }))
    expect(document.body.style.overflow).toBe('hidden')

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Menu' })).not.toBeInTheDocument()
    expect(document.body.style.overflow).toBe('')
  })

  it('keeps a solid header background from the first screen through scrolling', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toHaveClass('site-header--solid')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 120 })

    fireEvent.scroll(window)

    expect(screen.getByRole('banner')).toHaveClass('site-header--solid')
  })

  it('shows Space Films producer details and the current contact address', () => {
    render(<App />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('Producent filmu')
    expect(footer).toHaveTextContent('Space Films Sp. z o.o.')
    expect(footer).toHaveTextContent('NIP 5213913394')
    expect(footer).toHaveTextContent('KRS 0000869613')
    expect(footer).toHaveTextContent('franek@spacefilms.pl')
    expect(footer).not.toHaveTextContent('Regulamin')
    expect(footer).not.toHaveTextContent('Polityka prywatności')
  })
})
