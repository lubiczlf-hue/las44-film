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

  it('shows the live Pomagam widget and sends every support button to the fundraiser', async () => {
    render(<App />)

    expect(screen.getByTitle('Postęp zbiórki LAS 44 na Pomagam.pl')).toHaveAttribute(
      'src',
      'https://pomagam.pl/9crd9m/widget/stream-progress',
    )
    expect(screen.queryByText(/^Cel: /)).not.toBeInTheDocument()
    expect(document.querySelector('.hero__patrons-label')).toHaveTextContent('Patroni honorowi')
    for (const link of screen.getAllByRole('link', { name: 'Wesprzyj film' })) {
      expect(link).toHaveAttribute('href', 'https://pomagam.pl/9crd9m')
    }
    expect(screen.getByRole('link', { name: /Pomóż nam zrealizować cały film/ })).toHaveAttribute(
      'href',
      'https://pomagam.pl/9crd9m',
    )

    await userEvent.setup().click(screen.getByRole('button', { name: 'Otwórz menu' }))
    expect(screen.getByRole('dialog', { name: 'Menu' }).querySelector('a.button--gold')).toHaveAttribute(
      'href',
      'https://pomagam.pl/9crd9m',
    )
  })

  it('links the creators button to the second film section', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'Od twórców' })
    const target = document.getElementById('making-of') as HTMLElement

    expect(link).toHaveAttribute('href', '#making-of')
    expect(target).toHaveTextContent('Od twórców')
  })

  it('shows the mobile support button only after scrolling', () => {
    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    render(<App />)

  const button = document.querySelector('.mobile-support-cta') as HTMLElement

    expect(button).toHaveAttribute('aria-hidden', 'true')
    expect(button).not.toHaveClass('mobile-support-cta--visible')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 80 })
    fireEvent.scroll(window)
    expect(button).toHaveAttribute('aria-hidden', 'false')
    expect(button).toHaveClass('mobile-support-cta--visible')

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    fireEvent.scroll(window)
    expect(button).toHaveAttribute('aria-hidden', 'true')
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
    expect(screen.getByRole('link', { name: 'LAS 44 na Facebooku' })).toHaveAttribute('href', 'https://www.facebook.com/profile.php?id=61588352177926')
  })

  it('shows all six FAQ answers and a usable email link for sponsors', () => {
    render(<App />)
    const faq = document.getElementById('faq') as HTMLElement
    expect(faq.querySelectorAll('details')).toHaveLength(6)
    expect(faq).toHaveTextContent('Chcę przenieść na ekran wspomnienia mojego dziadka')
    expect(faq).toHaveTextContent('Postprodukcja nie jest objęta podstawowym celem zbiórki')
    expect(faq).toHaveTextContent('Termin premiery zależy od zebrania środków')
    expect(faq).toHaveTextContent('żeby „LAS 44” trafił do kin')
    expect(faq).toHaveTextContent('podniesiemy cel zbiórki')
    expect(faq.querySelector('details:nth-child(5) a')).toHaveAttribute('href', 'mailto:franek@spacefilms.pl')
  })

  it('offers a share link and a direct Facebook share option', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Udostępnij' }))
    const dialog = screen.getByRole('dialog', { name: 'Udostępnij stronę LAS 44' })
    expect(dialog.querySelector('input')).toHaveValue('https://las44-film-preview.lubiczlf.chatgpt.site/')
    expect(screen.getByRole('link', { name: 'Udostępnij na Facebooku' })).toHaveAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Flas44-film-preview.lubiczlf.chatgpt.site%2F')
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('dialog', { name: 'Udostępnij stronę LAS 44' })).not.toBeInTheDocument()
  })
})
