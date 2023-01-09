/**
 * @typedef {import('hast').Element} Element
 */

import {convertElement} from 'hast-util-is-element'

/**
 * Check if the given value is a *heading content* element.
 *
 * @type {import('hast-util-is-element').AssertPredicate<Element & {tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hgroup'}>}
 * @param node
 *   Thing to check (typically `Node`).
 * @returns
 *   Whether value is a heading content element.
 *
 *   The elements `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, and `hgroup` are
 *   heading content.
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
