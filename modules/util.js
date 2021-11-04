/*
  Utilities that can be used to clean data
  Written by @bommezijn
*/
const fetch = require('cross-fetch')

/**
 * @title Retrieve data asynchronously from an online source with fetch
 * @param {String} string URL to the API
 * @returns {Object} Data object in JSON format
 */
const getData = async (URL) => {
  try {
    const response = await fetch(URL)
    return response.json()
  } catch (error) {
    console.error(error)
  }
}

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
  // return typeof string === 'string' ? string.replaceAll(REGEX,'') : string
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

const isDate = (date) => {
  return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}

/**
 * @title Convert date format to local date format.
 * @param {Date} date Date written in any manner, returns date in local date format. 
 * @returns {String} local date format in the datatype string
 */
const americanToUniversalDateFormat = (date) => {
  // const dateIsTrue = isDate(date)
  // console.log(dateIsTrue)
  // console.log(date)
  let checkDate = new Date(date)
  console.log(`test ${checkDate}`)
  // console.log(Date.toString())
  // return !isNaN(Date.parse(test)) ? test.toLocaleDateString() : date
  // console.log(test)
  // console.log(test.toLocaleDateString())
  // console.log(test.toString(test.getDate(), test.getMonth(), test.getFullYear()))
  // test.value.split("-").reverse().join("-"); 
  // console.log(test)
  // return test.toLocaleDateString()
  // return isDate(date) ? date.toLocaleDateString() : date
  return isDate(checkDate) ? checkDate.toLocaleDateString() : checkDate
}

exports.getData = getData
exports.readOneFullObject = readOneFullObject
exports.countAmountEntries = countAmountEntries
exports.replaceEmptyValue = replaceEmptyValue
exports.removeSymbols = removeSymbols
exports.toLowerCase = toLowerCase
exports.americanToUniversalDateFormat = americanToUniversalDateFormat