import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { pathToFileURL } from 'node:url'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { build } from 'vite'

const ssrDirectory = await mkdtemp(join(process.cwd(), '.las44-ssr-'))

try {
  await build({
    logLevel: 'error',
    build: { ssr: 'src/App.tsx', outDir: ssrDirectory, emptyOutDir: true, copyPublicDir: false },
  })
  const { default: App } = await import(pathToFileURL(join(ssrDirectory, 'App.js')).href)
  const output = new URL('../dist/index.html', import.meta.url)
  const englishOutput = new URL('../dist/en/index.html', import.meta.url)
  const html = await readFile(output, 'utf8')
  const emptyRoot = '<div id="root"></div>'

  if (!html.includes(emptyRoot)) {
    throw new Error('Cannot find the empty app root in dist/index.html')
  }

  const polishMarkup = renderToString(createElement(App))
  const englishMarkup = renderToString(createElement(App, { locale: 'en' }))

  await writeFile(output, html.replace(emptyRoot, `<div id="root">${polishMarkup}</div>`))

  const substitutions = [
    ['<html lang="pl">', '<html lang="en">'],
    ['<link rel="canonical" href="https://las44.pl/" />', '<link rel="canonical" href="https://las44.pl/en/" />'],
    ['<meta property="og:locale" content="pl_PL" />', '<meta property="og:locale" content="en_GB" />'],
    ['<meta property="og:locale:alternate" content="en_GB" />', '<meta property="og:locale:alternate" content="pl_PL" />'],
    ['<meta name="description" content="LAS 44 — oficjalna strona filmu fabularnego o bitwie pod Pecynką. Poznaj historię walk w Puszczy Białej, twórców filmu i jego zapowiedź." />', '<meta name="description" content="LAS 44 is a feature film inspired by the Battle of Pecynka in 1944. Discover the true story, meet the filmmakers and watch the film preview." />'],
    ['<meta property="og:title" content="LAS 44 — film o bitwie pod Pecynką" />', '<meta property="og:title" content="LAS 44 — a film about the Battle of Pecynka" />'],
    ['<meta property="og:description" content="Film oparty na wspomnieniach uczestnika bitwy pod Pecynką. Opowieść o honorze, braterstwie i wartościach silniejszych niż strach." />', '<meta property="og:description" content="A film shaped by a Home Army veteran’s memories. A story of courage, comradeship and values stronger than fear." />'],
    ['<meta property="og:url" content="https://las44.pl/" />', '<meta property="og:url" content="https://las44.pl/en/" />'],
    ['<meta property="og:image:alt" content="LAS 44 — okładka filmu z logotypami patronów honorowych" />', '<meta property="og:image:alt" content="LAS 44 film cover with honorary patrons’ logos" />'],
    ['<meta name="twitter:title" content="LAS 44 — film o bitwie pod Pecynką" />', '<meta name="twitter:title" content="LAS 44 — a film about the Battle of Pecynka" />'],
    ['<meta name="twitter:description" content="Film oparty na wspomnieniach uczestnika bitwy pod Pecynką." />', '<meta name="twitter:description" content="A feature film about the 1944 Battle of Pecynka, inspired by a veteran’s memories." />'],
    ['<title>LAS 44 — film o bitwie pod Pecynką</title>', '<title>LAS 44 — a film about the Battle of Pecynka</title>'],
  ]

  let englishHtml = html
  for (const [original, translated] of substitutions) {
    if (!englishHtml.includes(original)) throw new Error(`Missing English metadata source: ${original}`)
    englishHtml = englishHtml.replace(original, translated)
  }

  const originalSchema = '<script type="application/ld+json">'
  const englishSchema = {
    '@context': 'https://schema.org', '@type': 'Movie', name: 'LAS 44',
    alternateName: 'Las44', url: 'https://las44.pl/en/',
    image: 'https://las44.pl/media/las44-social-cover.jpg',
    description: 'A feature film about the 1944 Battle of Pecynka in Puszcza Biała, inspired by a Home Army veteran’s memories.',
    inLanguage: 'en',
    productionCompany: { '@type': 'Organization', name: 'Space Films Sp. z o.o.' },
    sameAs: ['https://www.facebook.com/profile.php?id=61588352177926', 'https://www.youtube.com/@FilmLas44'],
  }
  englishHtml = englishHtml.replace(/<script type="application\/ld\+json">.*?<\/script>/, `${originalSchema}${JSON.stringify(englishSchema)}</script>`)
  englishHtml = englishHtml.replace(emptyRoot, `<div id="root">${englishMarkup}</div>`)
  await mkdir(dirname(englishOutput.pathname), { recursive: true })
  await writeFile(englishOutput, englishHtml)
} finally {
  await rm(ssrDirectory, { recursive: true, force: true })
}
