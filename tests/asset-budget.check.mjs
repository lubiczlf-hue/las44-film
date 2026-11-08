import assert from 'node:assert/strict'
import { stat } from 'node:fs/promises'
import { test } from 'node:test'

test('the above-fold film logo stays below 750 KB on mobile', async () => {
  const logo = await stat(new URL('../public/media/las44-official-logo.png', import.meta.url))
  assert.ok(logo.size < 750_000, `Film logo is ${logo.size} bytes`)
})
