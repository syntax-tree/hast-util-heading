/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module rehype:lint:util:heading
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var is = require('hast-util-is-element');

/*
 * Tag-names.
 */

var names = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hgroup'
];

/**
 * Check if a node is a heading element
 *
 * @param {*} node - Thing to check.
 * @return {boolean} - Whether a node is heading.
 */
function heading(node) {
    return is(node, names);
}

/*
 * Expose.
 */

module.exports = heading;
