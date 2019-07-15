# hast-util-heading

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to check if an [*element*][element] is a
[*heading*][spec].

## Install

[npm][]:

```sh
npm install hast-util-heading
```

## Usage

```js
var heading = require('hast-util-heading')

// Given a non-heading value:
heading({
  type: 'element',
  tagName: 'a',
  properties: {href: '#alpha', title: 'Bravo'},
  children: [{type: 'text', value: 'Charlie'}]
}) // => false

// Given a heading element:
heading({
  type: 'element',
  tagName: 'h1',
  children: [{type: 'text', value: 'Delta'}]
}) // => true
```

## API

### `heading(node)`

Check if the given value is a [*heading*][spec] [*element*][element].

## Security

`hast-util-heading` does not change the syntax tree so there are no openings for
[cross-site scripting (XSS)][xss] attacks.

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-heading.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-heading

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-heading.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-heading

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-heading.svg

[downloads]: https://www.npmjs.com/package/hast-util-heading

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-heading.svg

[size]: https://bundlephobia.com/result?p=hast-util-heading

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[spec]: https://html.spec.whatwg.org/#heading-content

[hast]: https://github.com/syntax-tree/hast

[element]: https://github.com/syntax-tree/hast#element

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
