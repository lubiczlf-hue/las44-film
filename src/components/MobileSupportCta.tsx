import { useEffect, useState } from 'react'
import { useCopy } from '../content/locale'

export function MobileSupportCta({ href }: { href: string }) {
  const t = useCopy()
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
      {t.support}
    </a>
  )
}
