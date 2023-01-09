/**
 * @typedef {import('hast').Element} Element
 */

import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is a heading element (includes `hgroup`!).
 *
 * @type {import('hast-util-is-element').AssertPredicate<Element & {tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hgroup'}>}
 * @param node
 *   Node to check.
 * @returns
 *   Whether node is a heading (`h1` through `h6`, and `hgroup`).
 */
// @ts-expect-error Sure, the assertion matches.
export const heading = convertElement([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hgroup'
])
