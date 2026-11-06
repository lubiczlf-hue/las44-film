import { useEffect, useState } from 'react'
import { cookieCopy, cookiePolicyUrl } from '../content/cookies'
import type { Locale } from '../content/locale'
import { activatePixel, revokePixel } from '../lib/cookiePixel'

const STORAGE_KEY = 'las44-cookie-choice'
type Choice = 'accepted' | 'rejected' | null

export function CookieConsent({ locale, open, onClose }: { locale: Locale; open: boolean; onClose: () => void }) {
  const t = cookieCopy[locale]
  const [ready, setReady] = useState(false)
  const [choice, setChoice] = useState<Choice>(null)
  const [detailed, setDetailed] = useState(false)
  const [analytics, setAnalytics] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === 'accepted' || saved === 'rejected') {
        setChoice(saved)
        setAnalytics(saved === 'accepted')
      }
    } catch {
      // A browser can disable storage; the visitor can still decide for this visit.
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (open) setDetailed(true)
  }, [open])

  useEffect(() => {
    if (choice === 'accepted') activatePixel()
  }, [choice])

  function decide(next: Exclude<Choice, null>) {
    if (next === 'rejected') revokePixel()
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Keep the current-page decision even if persistence is unavailable.
    }
    setChoice(next)
    setAnalytics(next === 'accepted')
    onClose()
  }

  if (!ready || (choice !== null && !open)) return null

  return (
    <section className="cookie-consent" role="dialog" aria-label={t.bannerTitle} aria-modal="false">
      <div className="cookie-consent__top">
        <div>
          <p className="cookie-consent__eyebrow">LAS 44</p>
          <h2>{t.bannerTitle}</h2>
        </div>
        {choice !== null && <button className="cookie-consent__close" type="button" onClick={onClose} aria-label={t.close}>×</button>}
      </div>
      <p className="cookie-consent__intro">{t.bannerBody}</p>
      {detailed && <div className="cookie-consent__categories">
        <div className="cookie-consent__category">
          <div><strong>{t.necessary}</strong><p>{t.necessaryShort}</p></div>
          <span>{t.alwaysActive}</span>
        </div>
        <div className="cookie-consent__category">
          <div><strong>{t.analytics}</strong><p>{t.analyticsShort}</p></div>
          <label className="cookie-consent__toggle">
            <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} aria-label={t.analytics} />
            <span aria-hidden="true" />
          </label>
        </div>
      </div>}
      <div className="cookie-consent__bottom">
        <a href={cookiePolicyUrl(locale)}>{t.policy}</a>
        <div className="cookie-consent__actions">
          {!detailed && <button type="button" className="cookie-consent__text-button" onClick={() => setDetailed(true)}>{t.customize}</button>}
          {detailed && <button type="button" className="cookie-consent__text-button" onClick={() => decide(analytics ? 'accepted' : 'rejected')}>{t.save}</button>}
          <button type="button" className="cookie-consent__outline" onClick={() => decide('rejected')}>{t.reject}</button>
          <button type="button" className="cookie-consent__primary" onClick={() => decide('accepted')}>{t.accept}</button>
        </div>
      </div>
    </section>
  )
}
