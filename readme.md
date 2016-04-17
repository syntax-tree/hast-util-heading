# hast-util-heading [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check if a [node][] is a [**heading**][spec] [element][].

## Installation

[npm][]:

```bash
npm install hast-util-heading
```

**hast-util-heading** is also available as an AMD, CommonJS, and
globals module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var heading = require('hast-util-heading');
```

Given a non-heading value:

```javascript
var result = heading({
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
});
```

Yields:

```js
false
```

Given a heading element:

```javascript
result = heading({
    'type': 'element',
    'tagName': 'h1',
    'children': [{
        'type': 'text',
        'value': 'Delta'
    }]
});
```

Yields:

```js
true
```

## API

### `heading(node)`

Check if the given value is a [**heading**][spec] [element][].

**Parameters**: `node` (`*`) — Value to check.

**Returns**: `boolean`, whether `node` passes the test.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/hast-util-heading.svg

[build-page]: https://travis-ci.org/wooorm/hast-util-heading

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/hast-util-heading.svg

[coverage-page]: https://codecov.io/github/wooorm/hast-util-heading?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/hast-util-heading/releases

[license]: LICENSE

[author]: http://wooorm.com

[node]: https://github.com/wooorm/hast#node

[element]: https://github.com/wooorm/hast#element

[spec]: https://html.spec.whatwg.org/#heading-content
