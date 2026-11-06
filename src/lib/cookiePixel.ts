const PIXEL_ID = '1599722991956351'
const SCRIPT_URL = 'https://connect.facebook.net/en_US/fbevents.js'

type Fbq = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  push?: Fbq
  loaded?: boolean
  version?: string
}
type PixelWindow = Window & { fbq?: Fbq; _fbq?: Fbq }

export function activatePixel() {
  if (document.documentElement.dataset.metaPixelConsent === 'active') return
  const pixelWindow = window as PixelWindow
  if (!pixelWindow.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args)
      else fbq.queue.push(args)
    } as Fbq
    fbq.queue = []
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    pixelWindow.fbq = fbq
    pixelWindow._fbq = fbq
  }
  if (document.querySelector('script[data-las44-meta-pixel]')) {
    pixelWindow.fbq('consent', 'grant')
  } else {
    const script = document.createElement('script')
    script.src = SCRIPT_URL
    script.async = true
    script.dataset.las44MetaPixel = ''
    document.head.appendChild(script)
    pixelWindow.fbq('init', PIXEL_ID)
  }
  document.documentElement.dataset.metaPixelConsent = 'active'
  pixelWindow.fbq('track', 'PageView')
}

export function trackSupportClick() {
  if (document.documentElement.dataset.metaPixelConsent !== 'active') return
  ;(window as PixelWindow).fbq?.('trackCustom', 'SupportFundraiserClick')
}

export function revokePixel() {
  if (document.documentElement.dataset.metaPixelConsent !== 'active') return
  ;(window as PixelWindow).fbq?.('consent', 'revoke')
  document.documentElement.dataset.metaPixelConsent = 'inactive'
  for (const name of ['_fbp', '_fbc']) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`
  }
}
