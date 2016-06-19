# case-converter [![npm version](https://badge.fury.io/js/case-converter.svg)](https://badge.fury.io/js/case-converter) [![Build Status](https://travis-ci.org/Moezalez/case-converter.svg?branch=master)](https://travis-ci.org/Moezalez/case-converter) [![codecov](https://codecov.io/gh/Moezalez/case-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/Moezalez/case-converter)

A library that converts objects to different case conventions. Useful when consuming APIs of services with different
conventions, e.g. Python or Ruby.
Key conversion is done by lodash, so every edge case should be handled.

[Demo](https://tonicdev.com/npm/case-converter)

## Features
- `toCamelCase`
- `toSnakeCase`
- `toKebabCase`

## Install
`npm install case-converter`

## Example:

```JavaScript
  import { toCamelCase } from 'case-converter'

  const snakeCase = {
    an_object: {
      'kebab-case': 'nested content',
      nested_array: [{ an_object: 'something' }]
    },
    an_array: [
      { zero_index: 0 },
      { one_index: 1 }
    ]
  }

  const camelCase = toCamelCase(snakeCase);

  console.log(camelCase)
  /*
    {
      anObject: {
        kebabCase: 'nested content',
        nestedArray: [{ anObject: 'something' }]
      },
      anArray: [
        { zeroIndex: 0 },
        { oneIndex: 1 }
      ]
    }
  */
```
