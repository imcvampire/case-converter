# case-converter [![npm version](https://badge.fury.io/js/case-converter.svg)](https://badge.fury.io/js/case-converter) 

A lightweight library that converts objects to different case conventions. Great for consuming APIs of services with different conventions, e.g. Python or Ruby.

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
