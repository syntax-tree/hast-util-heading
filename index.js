/**
 * @typedef {import('hast').Element & {tagName: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'hgroup'}} Heading
 * @typedef {import('hast-util-is-element').AssertPredicate<Heading>} AssertHeading
 */

import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is a heading element (includes `hgroup`!).
 * @type {AssertHeading}
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
