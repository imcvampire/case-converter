/**
 * deeply converts key of an object from one case to another
 * @param {object} object to convert
 * @param {regex} Regex to identify location of the key that needs to be changed
 * @param {function} function to change relevant characters of key.
 * @return converted object
 */

const convertCase = (oldObject, regex, converterFunction) => {
  let newObject

  if (!oldObject || typeof oldObject !== 'object') {
    return oldObject
  }

  if (Array.isArray(oldObject)) {
    newObject = oldObject.map(element => convertCase(element, regex, converterFunction))
  } else {
    newObject = {}
    Object.keys(oldObject).forEach(oldKey => {
      const newKey = oldKey.replace(regex, converterFunction)
      newObject[newKey] = convertCase(oldObject[oldKey], regex, converterFunction)
    })
  }

  return newObject
}

export const toCamelCase = obj => convertCase(obj, /(\_[a-z])/g, chars => chars.toUpperCase().replace('_', ''))
export const toSnakeCase = obj => convertCase(obj, /([A-Z])/g, chars => `_${chars.toLowerCase()}`)
