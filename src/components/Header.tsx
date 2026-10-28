import { useEffect, useState } from 'react'

type HeaderProps = {
  title: string
  logo: string
  navigation: Array<{ label: string; href: string }>
  supportHref: string
}

export function Header({ title, logo, navigation, supportHref }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isOpen])

  return (
    <header className="site-header site-header--solid">
      <a className="wordmark" href="#top" aria-label="LAS 44 — początek strony">
        <img src={logo} alt={`${title} — oficjalny logotyp filmu`} />
      </a>

      <nav className="desktop-nav" aria-label="Główna nawigacja">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <a className="button button--outline header-support" href={supportHref}>
        Wesprzyj film
      </a>

      <button
        className="menu-trigger"
        type="button"
        aria-label="Otwórz menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span />
        <span />
      </button>

      {isOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Menu" aria-modal="true">
          <button
            className="menu-close"
            type="button"
            aria-label="Zamknij menu"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <nav aria-label="Nawigacja mobilna">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button--gold" href={supportHref} onClick={() => setIsOpen(false)}>
            Wesprzyj film
          </a>
        </div>
      )}
    </header>
  )
}
