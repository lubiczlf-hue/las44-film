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
