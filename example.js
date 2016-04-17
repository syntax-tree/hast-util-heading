// Dependencies:
var heading = require('./index.js');

// Given a non-heading value:
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

// Yields:
console.log('js', String(result));

// Given a heading element:
result = heading({
    'type': 'element',
    'tagName': 'h1',
    'children': [{
        'type': 'text',
        'value': 'Delta'
    }]
});

// Yields:
console.log('js', String(result));
