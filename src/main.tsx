import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
import type { Locale } from './content/locale'
import './styles/tokens.css'
import './styles/global.css'
import './styles/primary.css'
import './styles/sections.css'

const root = document.getElementById('root')!
const locale: Locale = window.location.pathname.startsWith('/en/') ? 'en' : 'pl'
const app = (
  <StrictMode>
    <App locale={locale} />
  </StrictMode>
)

if (root.hasChildNodes()) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
