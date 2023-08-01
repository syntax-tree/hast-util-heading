import assert from 'node:assert/strict'
import test from 'node:test'
import {heading} from 'hast-util-heading'

test('heading', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('hast-util-heading')).sort(), [
      'heading'
    ])
  })

  await t.test('should return `false` without node', async function () {
    // @ts-expect-error: check how a missing `node` is handled.
    assert.equal(heading(), false)
  })

  await t.test('should return `false` with `null`', async function () {
    assert.equal(heading(null), false)
  })

  await t.test(
    'should return `false` when without `element`',
    async function () {
      assert.equal(heading({type: 'text'}), false)
    }
  )

  await t.test(
    'should return `false` when with invalid `element`',
    async function () {
      assert.equal(heading({type: 'element'}), false)
    }
  )

  await t.test(
    'should return `false` when without not heading',
    async function () {
      assert.equal(
        heading({
          type: 'element',
          tagName: 'a',
          properties: {href: '#alpha', title: 'Bravo'},
          children: [{type: 'text', value: 'Charlie'}]
        }),
        false
      )
    }
  )

  await t.test('should return `true` when with heading', async function () {
    assert.equal(
      heading({
        type: 'element',
        tagName: 'h1',
        children: [{type: 'text', value: 'Delta'}]
      }),
      true
    )
  })
})
