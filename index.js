'use strict'

var is = require('hast-util-is-element')

module.exports = heading

var names = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'hgroup']

function heading(node) {
  return is(node, names)
}
