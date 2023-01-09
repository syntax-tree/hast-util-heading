import assert from 'node:assert/strict'
import test from 'node:test'
import {heading} from './index.js'
import * as mod from './index.js'

test('heading', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['heading'],
    'should expose the public api'
  )

  assert.equal(heading(), false, 'should return `false` without node')

  assert.equal(heading(null), false, 'should return `false` with `null`')

  assert.equal(
    heading({type: 'text'}),
    false,
    'should return `false` when without `element`'
  )

  assert.equal(
    heading({type: 'element'}),
    false,
    'should return `false` when with invalid `element`'
  )

  assert.equal(
    heading({
      type: 'element',
      tagName: 'a',
      properties: {href: '#alpha', title: 'Bravo'},
      children: [{type: 'text', value: 'Charlie'}]
    }),
    false,
    'should return `false` when without not heading'
  )

  assert.equal(
    heading({
      type: 'element',
      tagName: 'h1',
      children: [{type: 'text', value: 'Delta'}]
    }),
    true,
    'should return `true` when with heading'
  )
})
