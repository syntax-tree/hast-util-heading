'use strict';

/* Dependencies. */
var is = require('hast-util-is-element');

/* Expose. */
module.exports = heading;

/* Tag-names. */
var names = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hgroup'
];

/* Check if a node is a heading element. */
function heading(node) {
  return is(node, names);
}
