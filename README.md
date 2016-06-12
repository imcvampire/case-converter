# case-converter [![npm version](https://badge.fury.io/js/case-converter.svg)](https://badge.fury.io/js/case-converter) [![Build Status](https://travis-ci.org/Moezalez/case-converter.svg?branch=master)](https://travis-ci.org/Moezalez/case-converter) [![Coverage Status](https://coveralls.io/repos/github/Moezalez/case-converter/badge.svg?branch=master)](https://coveralls.io/github/Moezalez/case-converter?branch=master)

A library that converts objects to different case conventions. Useful when consuming APIs of services with different
conventions, e.g. Python or Ruby.

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
