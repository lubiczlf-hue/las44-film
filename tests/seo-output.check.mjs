import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { test } from 'node:test'

test('published HTML includes the film and Pecynka history before JavaScript runs', async () => {
  const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
  const root = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/)?.[1] ?? ''

  assert.match(root, /LAS 44/)
  assert.match(root, /Bitwa pod Pecynką/)
  assert.match(root, /Puszczy Białej/)
})

test('English URL serves prerendered English content with language and canonical metadata', async () => {
  const html = await readFile(new URL('../dist/en/index.html', import.meta.url), 'utf8')
  const root = html.match(/<div id="root">([\s\S]*?)<\/div>\s*<\/body>/)?.[1] ?? ''

  assert.match(html, /<html lang="en">/)
  assert.match(html, /rel="canonical" href="https:\/\/las44\.pl\/en\/"/)
  assert.match(html, /hreflang="pl" href="https:\/\/las44\.pl\/"/)
  assert.match(html, /hreflang="en" href="https:\/\/las44\.pl\/en\/"/)
  assert.match(root, /The Battle of Pecynka/)
  assert.match(root, /The true story/)
  assert.doesNotMatch(root, /Najczęstsze pytania/)
})

test('cookie policies are prerendered in both languages and Pixel is not embedded in HTML', async () => {
  const polish = await readFile(new URL('../dist/polityka-cookies/index.html', import.meta.url), 'utf8')
  const english = await readFile(new URL('../dist/en/cookie-policy/index.html', import.meta.url), 'utf8')
  const homepage = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')

  assert.match(polish, /<h1>Polityka cookies<\/h1>/)
  assert.match(english, /<h1>Cookie policy<\/h1>/)
  assert.match(polish, /Space Films Sp. z o.o./)
  assert.match(english, /Analytics cookies/)
  assert.doesNotMatch(homepage, /connect\.facebook\.net|facebook\.com\/tr\?id=/)
  assert.doesNotMatch(english, /connect\.facebook\.net|facebook\.com\/tr\?id=/)
})
