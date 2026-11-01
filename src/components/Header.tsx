import { useEffect, useState } from 'react'

type HeaderProps = {
  title: string
  logo: string
  navigation: Array<{ label: string; href: string }>
  supportHref: string
  shareUrl: string
}

export function Header({ title, logo, navigation, supportHref, shareUrl }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [copyState, setCopyState] = useState('')

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

  useEffect(() => {
    if (!isShareOpen) return
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsShareOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [isShareOpen])

  const openShare = () => {
    setIsOpen(false)
    setCopyState('')
    setIsShareOpen(true)
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopyState('Link skopiowany')
    } catch {
      setCopyState('Zaznacz i skopiuj link z pola powyżej')
    }
  }

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

      <div className="header-actions">
        <button className="header-share" type="button" aria-label="Udostępnij" onClick={openShare}>
          <span aria-hidden="true">↗</span><span className="header-share__label">Udostępnij</span>
        </button>
        <a className="button button--outline header-support" href={supportHref}>Wesprzyj film</a>
      </div>

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
          <button className="mobile-menu__share" type="button" onClick={openShare}>Udostępnij ↗</button>
        </div>
      )}

      {isShareOpen && (
        <div className="share-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsShareOpen(false) }}>
          <div className="share-dialog" role="dialog" aria-modal="true" aria-labelledby="share-title">
            <button className="share-dialog__close" type="button" aria-label="Zamknij udostępnianie" onClick={() => setIsShareOpen(false)}>×</button>
            <p className="share-dialog__eyebrow">LAS 44</p>
            <h2 id="share-title">Udostępnij film LAS 44</h2>
            <p>Wyślij link do strony lub udostępnij ją na Facebooku.</p>
            <label htmlFor="share-url">Link do strony</label>
            <input id="share-url" value={shareUrl} readOnly onFocus={(event) => event.target.select()} />
            <div className="share-dialog__actions">
              <button className="button button--gold" type="button" onClick={copyLink}>Kopiuj link</button>
              <a className="button button--outline" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">Udostępnij na Facebooku</a>
            </div>
            <p className="share-dialog__status" role="status">{copyState}</p>
          </div>
        </div>
      )}
    </header>
  )
}
