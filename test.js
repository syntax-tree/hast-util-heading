/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module hast:util:heading
 * @fileoverview Test suite for `heading`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var heading = require('./index.js');

/*
 * Tests.
 */

test('heading', function (t) {
    t.equal(
        heading(),
        false,
        'should return `false` without node'
    );

    t.equal(
        heading(null),
        false,
        'should return `false` with `null`'
    );

    t.equal(
        heading({
            'type': 'text'
        }),
        false,
        'should return `false` when without `element`'
    );

    t.equal(
        heading({
            'type': 'element'
        }),
        false,
        'should return `false` when with invalid `element`'
    );

    t.equal(
        heading({
            'type': 'element',
            'tagName': 'a',
            'properties': {
                'href': '#alpha',
                'title': 'Bravo'
            },
            'children': [{
                'type': 'text',
                'value': 'Charlie'
            }]
        }),
        false,
        'should return `false` when without not heading'
    );

    t.equal(
        heading({
            'type': 'element',
            'tagName': 'h1',
            'children': [{
                'type': 'text',
                'value': 'Delta'
            }]
        }),
        true,
        'should return `true` when with heading'
    );

    t.end();
});
