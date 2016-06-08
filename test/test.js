/* global describe it */

import { toCamelCase, toSnakeCase } from '../src'
import assert from 'assert'

describe('from snake_case to camelCase', () => {
  it('simple objects', () => {
    const before = { field_one: 'content one', field_two: 'content two' }
    const expected = { fieldOne: 'content one', fieldTwo: 'content two' }
    const result = toCamelCase(before)
    assert.deepEqual(expected, result)
  })

  it('nested objects', () => {
    const before = {
      field_one: { nested_field_one: 'content one', nested_field_two: 'content two' },
      field_two: { nested_field_one: 'content one', nested_field_two: 'content two' }
    }
    const expected = {
      fieldOne: { nestedFieldOne: 'content one', nestedFieldTwo: 'content two' },
      fieldTwo: { nestedFieldOne: 'content one', nestedFieldTwo: 'content two' }
    }
    const result = toCamelCase(before)
    assert.deepEqual(expected, result)
  })

  it('objects in arrays', () => {
    const before = [
      { field_one_one: 'content one one', field_one_two: 'content two two' },
      { field_two_one: 'content two one', field_two_two: 'content two two' }
    ]
    const expected = [
      { fieldOneOne: 'content one one', fieldOneTwo: 'content two two' },
      { fieldTwoOne: 'content two one', fieldTwoTwo: 'content two two' }
    ]
    const result = toCamelCase(before)
    assert.deepEqual(expected, result)
  })

  it('objects in arrays in arrays', () => {
    const before = [
      [{ field_one_one: 'content one one', field_one_two: 'content two two' }],
      [{ field_two_one: 'content two one', field_two_two: 'content two two' }]
    ]
    const expected = [
      [{ fieldOneOne: 'content one one', fieldOneTwo: 'content two two' }],
      [{ fieldTwoOne: 'content two one', fieldTwoTwo: 'content two two' }]
    ]
    const result = toCamelCase(before)
    assert.deepEqual(expected, result)
  })

  it('objects in arrays in objects', () => {
    const before = {
      an_array: [
        { field_one_one: 'content one one', field_one_two: 'content two two' },
        { field_two_one: 'content two one', field_two_two: 'content two two' }
      ]
    }
    const expected = {
      anArray: [
        { fieldOneOne: 'content one one', fieldOneTwo: 'content two two' },
        { fieldTwoOne: 'content two one', fieldTwoTwo: 'content two two' }
      ]
    }
    const result = toCamelCase(before)
    assert.deepEqual(expected, result)
  })

  it('undefined and null', () => {
    const before = { field_one: null, field_two: undefined }
    const expected = { fieldOne: null, fieldTwo: undefined }
    const result = toCamelCase(before)
    assert.deepEqual(expected, result)
  })
})

describe('from camelCase to snake_case', () => {
  it('simple objects', () => {
    const before = { fieldOne: 'content one', fieldTwo: 'content two' }
    const expected = { field_one: 'content one', field_two: 'content two' }
    const result = toSnakeCase(before)
    assert.deepEqual(expected, result)
  })

  it('nested objects', () => {
    const before = {
      fieldOne: { nestedFieldOne: 'content one', nestedFieldTwo: 'content two' },
      fieldTwo: { nestedFieldOne: 'content one', nestedFieldTwo: 'content two' }
    }
    const expected = {
      field_one: { nested_field_one: 'content one', nested_field_two: 'content two' },
      field_two: { nested_field_one: 'content one', nested_field_two: 'content two' }
    }
    const result = toSnakeCase(before)
    assert.deepEqual(expected, result)
  })

  it('objects in arrays', () => {
    const before = [
      { fieldOneOne: 'content one one', fieldOneTwo: 'content two two' },
      { fieldTwoOne: 'content two one', fieldTwoTwo: 'content two two' }
    ]
    const expected = [
      { field_one_one: 'content one one', field_one_two: 'content two two' },
      { field_two_one: 'content two one', field_two_two: 'content two two' }
    ]
    const result = toSnakeCase(before)
    assert.deepEqual(expected, result)
  })

  it('objects in arrays in arrays', () => {
    const before = [
      [{ fieldOneOne: 'content one one', fieldOneTwo: 'content two two' }],
      [{ fieldTwoOne: 'content two one', fieldTwoTwo: 'content two two' }]
    ]
    const expected = [
      [{ field_one_one: 'content one one', field_one_two: 'content two two' }],
      [{ field_two_one: 'content two one', field_two_two: 'content two two' }]
    ]
    const result = toSnakeCase(before)
    assert.deepEqual(expected, result)
  })

  it('objects in arrays in objects', () => {
    const before = {
      anArray: [
        { fieldOneOne: 'content one one', fieldOneTwo: 'content two two' },
        { fieldTwoOne: 'content two one', fieldTwoTwo: 'content two two' }
      ]
    }
    const expected = {
      an_array: [
        { field_one_one: 'content one one', field_one_two: 'content two two' },
        { field_two_one: 'content two one', field_two_two: 'content two two' }
      ]
    }
    const result = toSnakeCase(before)
    assert.deepEqual(expected, result)
  })
  it('undefined and null', () => {
    const before = { fieldOne: null, fieldTwo: undefined }
    const expected = { field_one: null, field_two: undefined }
    const result = toSnakeCase(before)
    assert.deepEqual(expected, result)
  })
})
