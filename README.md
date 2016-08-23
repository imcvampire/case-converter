# case-converter [![npm version](https://badge.fury.io/js/case-converter.svg)](https://badge.fury.io/js/case-converter) [![Build Status](https://travis-ci.org/travelperk/case-converter.svg?branch=master)](https://travis-ci.org/travelperk/case-converter) [![codecov](https://codecov.io/gh/travelperk/case-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/travelperk/case-converter) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

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
