/* global describe it */
import assert from "assert";
import { toCamelCase, toSnakeCase, toKebabCase, toPascalCase } from "./index";

describe("to camelCase", () => {
  it("simple objects", () => {
    const before = { field_one: "content one", "field-two": "content two" };
    const expected = { fieldOne: "content one", fieldTwo: "content two" };
    const result = toCamelCase(before);
    assert.deepEqual(expected, result);
  });

  it("nested objects", () => {
    const before = {
      field_one: {
        nested_field_one: "content one",
        nested_field_two: "content two"
      },
      field_two: {
        "nested-field-one": "content one",
        "nested-field-two": "content two"
      }
    };
    const expected = {
      fieldOne: {
        nestedFieldOne: "content one",
        nestedFieldTwo: "content two"
      },
      fieldTwo: { nestedFieldOne: "content one", nestedFieldTwo: "content two" }
    };
    const result = toCamelCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays", () => {
    const before = [
      { field_one_one: "content one one", field_one_two: "content two two" },
      { "field-two-one": "content two one", "field-two-two": "content two two" }
    ];
    const expected = [
      { fieldOneOne: "content one one", fieldOneTwo: "content two two" },
      { fieldTwoOne: "content two one", fieldTwoTwo: "content two two" }
    ];
    const result = toCamelCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays in arrays", () => {
    const before = [
      [{ field_one_one: "content one one", field_one_two: "content two two" }],
      [
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    ];
    const expected = [
      [{ fieldOneOne: "content one one", fieldOneTwo: "content two two" }],
      [{ fieldTwoOne: "content two one", fieldTwoTwo: "content two two" }]
    ];
    const result = toCamelCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays in objects", () => {
    const before = {
      an_array: [
        { field_one_one: "content one one", field_one_two: "content two two" },
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    };
    const expected = {
      anArray: [
        { fieldOneOne: "content one one", fieldOneTwo: "content two two" },
        { fieldTwoOne: "content two one", fieldTwoTwo: "content two two" }
      ]
    };
    const result = toCamelCase(before);
    assert.deepEqual(expected, result);
  });

  it("undefined and null object", () => {
    const before = {
      an_array: [
        { field_one_one: "content one one", field_one_two: "content two two" },
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    };
    const expected = {
      anArray: [
        { fieldOneOne: "content one one", fieldOneTwo: "content two two" },
        { fieldTwoOne: "content two one", fieldTwoTwo: "content two two" }
      ]
    };
    const result = toCamelCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects containging dates", () => {
    const date = new Date();
    const before = { a_date: date };
    const expected = { aDate: date };
    const result = toCamelCase(before);
    assert(result.aDate instanceof Date, true);
    assert.deepEqual(expected, result);
  });
});

describe("to snake_case", () => {
  it("simple objects", () => {
    const before = { fieldOne: "content one", "field-two": "content two" };
    const expected = { field_one: "content one", field_two: "content two" };
    const result = toSnakeCase(before);
    assert.deepEqual(expected, result);
  });

  it("nested objects", () => {
    const before = {
      fieldOne: {
        nestedFieldOne: "content one",
        nestedFieldTwo: "content two"
      },
      fieldTwo: {
        "nested-field-one": "content one",
        "nested-field-two": "content two"
      }
    };
    const expected = {
      field_one: {
        nested_field_one: "content one",
        nested_field_two: "content two"
      },
      field_two: {
        nested_field_one: "content one",
        nested_field_two: "content two"
      }
    };
    const result = toSnakeCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays", () => {
    const before = [
      { fieldOneOne: "content one one", fieldOneTwo: "content two two" },
      { "field-two-one": "content two one", "field-two-two": "content two two" }
    ];
    const expected = [
      { field_one_one: "content one one", field_one_two: "content two two" },
      { field_two_one: "content two one", field_two_two: "content two two" }
    ];
    const result = toSnakeCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays in arrays", () => {
    const before = [
      [{ fieldOneOne: "content one one", fieldOneTwo: "content two two" }],
      [
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    ];
    const expected = [
      [{ field_one_one: "content one one", field_one_two: "content two two" }],
      [{ field_two_one: "content two one", field_two_two: "content two two" }]
    ];
    const result = toSnakeCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays in objects", () => {
    const before = {
      anArray: [
        { fieldOneOne: "content one one", fieldOneTwo: "content two two" },
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    };
    const expected = {
      an_array: [
        { field_one_one: "content one one", field_one_two: "content two two" },
        { field_two_one: "content two one", field_two_two: "content two two" }
      ]
    };
    const result = toSnakeCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects containging dates", () => {
    const date = new Date();
    const before = { aDate: date };
    const expected = { a_date: date };
    const result = toSnakeCase(before);
    assert(result.a_date instanceof Date, true);
    assert.deepEqual(expected, result);
  });
});

describe("to kebab-case", () => {
  it("simple objects", () => {
    const before = { fieldOne: "content one", field_two: "content two" };
    const expected = { "field-one": "content one", "field-two": "content two" };
    const result = toKebabCase(before);
    assert.deepEqual(expected, result);
  });

  it("nested objects", () => {
    const before = {
      fieldOne: {
        nestedFieldOne: "content one",
        nestedFieldTwo: "content two"
      },
      fieldTwo: {
        nested_field_one: "content one",
        nested_field_two: "content two"
      }
    };
    const expected = {
      "field-one": {
        "nested-field-one": "content one",
        "nested-field-two": "content two"
      },
      "field-two": {
        "nested-field-one": "content one",
        "nested-field-two": "content two"
      }
    };
    const result = toKebabCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays", () => {
    const before = [
      { fieldOneOne: "content one one", fieldOneTwo: "content two two" },
      { field_two_one: "content two one", field_two_two: "content two two" }
    ];
    const expected = [
      {
        "field-one-one": "content one one",
        "field-one-two": "content two two"
      },
      { "field-two-one": "content two one", "field-two-two": "content two two" }
    ];
    const result = toKebabCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays in arrays", () => {
    const before = [
      [{ fieldOneOne: "content one one", fieldOneTwo: "content two two" }],
      [{ field_two_one: "content two one", field_two_two: "content two two" }]
    ];
    const expected = [
      [
        {
          "field-one-one": "content one one",
          "field-one-two": "content two two"
        }
      ],
      [
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    ];
    const result = toKebabCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays in objects", () => {
    const before = {
      anArray: [
        { fieldOneOne: "content one one", fieldOneTwo: "content two two" },
        { field_two_one: "content two one", field_two_two: "content two two" }
      ]
    };
    const expected = {
      "an-array": [
        {
          "field-one-one": "content one one",
          "field-one-two": "content two two"
        },
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    };
    const result = toKebabCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects containging dates", () => {
    const date = new Date();
    const before = { aDate: date };
    const expected = { "a-date": date };
    const result = toKebabCase(before);
    assert(result["a-date"] instanceof Date, true);
    assert.deepEqual(expected, result);
  });
});

describe("to PascalCase", () => {
  it("simple objects", () => {
    const before = { field_one: "content one", "field-two": "content two" };
    const expected = { FieldOne: "content one", FieldTwo: "content two" };
    const result = toPascalCase(before);
    assert.deepEqual(expected, result);
  });

  it("nested objects", () => {
    const before = {
      field_one: {
        nested_field_one: "content one",
        nested_field_two: "content two"
      },
      field_two: {
        "nested-field-one": "content one",
        "nested-field-two": "content two"
      }
    };
    const expected = {
      FieldOne: {
        NestedFieldOne: "content one",
        NestedFieldTwo: "content two"
      },
      FieldTwo: { NestedFieldOne: "content one", NestedFieldTwo: "content two" }
    };
    const result = toPascalCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays", () => {
    const before = [
      { field_one_one: "content one one", field_one_two: "content two two" },
      { "field-two-one": "content two one", "field-two-two": "content two two" }
    ];
    const expected = [
      { FieldOneOne: "content one one", FieldOneTwo: "content two two" },
      { FieldTwoOne: "content two one", FieldTwoTwo: "content two two" }
    ];
    const result = toPascalCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays in arrays", () => {
    const before = [
      [{ field_one_one: "content one one", field_one_two: "content two two" }],
      [
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    ];
    const expected = [
      [{ FieldOneOne: "content one one", FieldOneTwo: "content two two" }],
      [{ FieldTwoOne: "content two one", FieldTwoTwo: "content two two" }]
    ];
    const result = toPascalCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects in arrays in objects", () => {
    const before = {
      an_array: [
        { field_one_one: "content one one", field_one_two: "content two two" },
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    };
    const expected = {
      AnArray: [
        { FieldOneOne: "content one one", FieldOneTwo: "content two two" },
        { FieldTwoOne: "content two one", FieldTwoTwo: "content two two" }
      ]
    };
    const result = toPascalCase(before);
    assert.deepEqual(expected, result);
  });

  it("undefined and null object", () => {
    const before = {
      an_array: [
        { field_one_one: "content one one", field_one_two: "content two two" },
        {
          "field-two-one": "content two one",
          "field-two-two": "content two two"
        }
      ]
    };
    const expected = {
      AnArray: [
        { FieldOneOne: "content one one", FieldOneTwo: "content two two" },
        { FieldTwoOne: "content two one", FieldTwoTwo: "content two two" }
      ]
    };
    const result = toPascalCase(before);
    assert.deepEqual(expected, result);
  });

  it("objects containging dates", () => {
    const date = new Date();
    const before = { a_date: date };
    const expected = { ADate: date };
    const result = toPascalCase(before);
    assert(result.ADate instanceof Date, true);
    assert.deepEqual(expected, result);
  });
});
