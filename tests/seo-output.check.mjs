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
