/*
  Utilities that can be used to clean data
  Written by @bommezijn
*/

/**
 * @title Replace uppercase with lowercase
 * @param {String} string value in string format
 * @returns string in all lowercase
 */
const toLowerCase = (string) => {
  // return string.toLowerCase()
  if (typeof string === 'string') {
    return string.toLowerCase()
  } else {
    return string
  }
}

/**
 * @title Remove symbols from string
 * @param {String} string value in string format
 * @returns string without symbols
 */
const removeSymbols = (string) => {
  const REGEX = /[^A-Za-z0-9\s]/g
  // return string.replaceAll(REGEX, '') // replace not working cuz of Node versioning, attempt after an update to v15
  if (typeof string === 'string') {
    return string.replaceAll(REGEX, '')
  } else {
    return string
  }
}

/**
 * @title Remove empty values within or leave it alone
 * @param {String} string value that is of type string but empty
 * @returns A filled response
 */
const replaceEmptyValue = (string) => {
  return string === '' ? string = 'nvt' : string = string
}

/**
 * @title Count the amount of entries
 * @param {JSON} dataset JSON format file
 * @returns {string} string amount of entries
 */
const countAmountEntries = (dataset) => {
  return console.log(`Er zijn ${dataset.length} entries`)
}

/**
 * @title Read a single object from file
 * @param {JSON} dataset JSON format file
 * @returns {Object} a single item from the file
 */
const readOneFullObject = (data) => {
  console.log(data[0])
  return data[0]
}

exports.readOneFullObject = readOneFullObject
exports.countAmountEntries = countAmountEntries
exports.replaceEmptyValue = replaceEmptyValue
exports.removeSymbols = removeSymbols
exports.toLowerCase = toLowerCase
