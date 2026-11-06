import { useEffect, useState } from 'react'

export function MobileSupportCta({ href }: { href: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 48)
    window.addEventListener('scroll', updateVisibility, { passive: true })
    updateVisibility()
    return () => window.removeEventListener('scroll', updateVisibility)
  }, [])

  return (
    <a
      className={`mobile-support-cta${visible ? ' mobile-support-cta--visible' : ''}`}
      href={href}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      Wesprzyj film
    </a>
  )
}
