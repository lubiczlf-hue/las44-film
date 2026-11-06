import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import type { Locale } from './content/locale'
import './styles/tokens.css'
import './styles/global.css'
import './styles/primary.css'
import './styles/sections.css'
import './styles/cookies.css'

const root = document.getElementById('root')!
const locale: Locale = window.location.pathname.startsWith('/en/') ? 'en' : 'pl'
const page = window.location.pathname.includes('cookie-policy') || window.location.pathname.includes('polityka-cookies') ? 'cookies' : 'home'
const app = (
  <StrictMode>
    <App locale={locale} page={page} />
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
