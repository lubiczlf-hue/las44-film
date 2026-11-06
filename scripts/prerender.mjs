import { mkdtemp, readFile, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
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
  const markup = renderToString(createElement(App))
  const output = new URL('../dist/index.html', import.meta.url)
  const html = await readFile(output, 'utf8')
  const emptyRoot = '<div id="root"></div>'

  if (!html.includes(emptyRoot)) {
    throw new Error('Cannot find the empty app root in dist/index.html')
  }

  await writeFile(output, html.replace(emptyRoot, `<div id="root">${markup}</div>`))
} finally {
  await rm(ssrDirectory, { recursive: true, force: true })
}
