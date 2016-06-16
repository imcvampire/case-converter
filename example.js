const caseConverter = require('case-converter');

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

const camelCase = caseConverter.toCamelCase(snakeCase);

console.log(camelCase);
