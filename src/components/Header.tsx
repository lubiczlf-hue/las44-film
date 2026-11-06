import { useEffect, useState } from 'react'
import { useCopy, type Locale } from '../content/locale'

type HeaderProps = {
  title: string
  logo: string
  navigation: Array<{ label: string; href: string }>
  supportHref: string
  shareUrl: string
  locale: Locale
}

export function Header({ title, logo, navigation, supportHref, shareUrl, locale }: HeaderProps) {
  const t = useCopy()
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
      setCopyState(t.linkCopied)
    } catch {
      setCopyState(t.copyFallback)
    }
  }

  return (
    <header className="site-header site-header--solid">
      <a className="wordmark" href="#top" aria-label={`${title} — ${t.start}`}>
        <img src={logo} alt={`${title} — ${t.officialLogo}`} />
      </a>

      <nav className="desktop-nav" aria-label={t.mainNav}>
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <div className="header-actions">
        <a className="language-switch" href={locale === 'pl' ? '/en/' : '/'} aria-label={t.switchLanguage} lang={locale === 'pl' ? 'en' : 'pl'}>
          <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.7 2.4 4.2 5.4 4.2 9s-1.5 6.6-4.2 9c-2.7-2.4-4.2-5.4-4.2-9S9.3 5.4 12 3Z" /></svg>
          <span>{locale === 'pl' ? 'EN' : 'PL'}</span>
        </a>
        <button className="header-share" type="button" aria-label={t.share} onClick={openShare}>
          <span aria-hidden="true">↗</span><span className="header-share__label">{t.share}</span>
        </button>
        <a className="button button--outline header-support" href={supportHref}>{t.support}</a>
      </div>

      <button
        className="menu-trigger"
        type="button"
        aria-label={t.openMenu}
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span />
        <span />
      </button>

      {isOpen && (
        <div className="mobile-menu" role="dialog" aria-label={t.menu} aria-modal="true">
          <button
            className="menu-close"
            type="button"
            aria-label={t.closeMenu}
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
          <nav aria-label={t.mobileNav}>
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="button button--gold" href={supportHref} onClick={() => setIsOpen(false)}>
            {t.support}
          </a>
          <button className="mobile-menu__share" type="button" onClick={openShare}>{t.share} ↗</button>
        </div>
      )}

      {isShareOpen && (
        <div className="share-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setIsShareOpen(false) }}>
          <div className="share-dialog" role="dialog" aria-modal="true" aria-labelledby="share-title">
            <button className="share-dialog__close" type="button" aria-label={t.closeShare} onClick={() => setIsShareOpen(false)}>×</button>
            <p className="share-dialog__eyebrow">LAS 44</p>
            <h2 id="share-title">{t.shareTitle}</h2>
            <p>{t.shareIntro}</p>
            <label htmlFor="share-url">{t.shareLink}</label>
            <input id="share-url" value={shareUrl} readOnly onFocus={(event) => event.target.select()} />
            <div className="share-dialog__actions">
              <button className="button button--gold" type="button" onClick={copyLink}>{t.copyLink}</button>
              <a className="button button--outline" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">{t.shareFacebook}</a>
            </div>
            <p className="share-dialog__status" role="status">{copyState}</p>
          </div>
        </div>
      )}
    </header>
  )
}
