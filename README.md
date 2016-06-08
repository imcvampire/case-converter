# case-converter [![Build Status](https://travis-ci.org/Moezalez/case-converter.svg?branch=master)](https://travis-ci.org/Moezalez/case-converter)

A library that converts objects to different case conventions. Useful when consuming APIs of services with different
conventions, e.g. Python.

## Features

camelCase to snake_case
snake_case to camelCase

## Example:

```JavaScript

  const caseConverter = require('case-converter')

  const snakeCase = {
    an_object: {
      nested_string: 'nested content',
      nested_array: [{ an_object: 'something' }]
    },
    an_array: [
      { zero_index: 0 },
      { one_index: 1 }
    ]
  }

  const camelCase = caseConverter.toCamelCase(snakeCase);

  console.log(camelCase)
  /*
    {
      anObject: {
        nestedString: 'nested content',
        nestedArray: [{ anObject: 'something' }]
      },
      anArray: [
        { zeroIndex: 0 },
        { oneIndex: 1 }
      ]
    }
  */
```
