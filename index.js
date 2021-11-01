/* 
  formulate an answer e.g. person has COLOR eyes and wants to become a FUTUREJOB
  COLOR eyes likes to eat / drink Dairy in the DIRECTION WIND.
*/

// Initializing hoisted variables
const DATASET = require('./tech-track-dataset.json')
const SAMPLE = require('./sample.json')

/**
 * @title Replace uppercase with lowercase
 * @param {String} string value in string format
 * @returns string in all lowercase
 */
 const toLowerCase = (string) => {
  return string.toLowerCase()
}

/**
 * @title Remove symbols from string
 * @param {String} string value in string format
 * @returns string without symbols
 */
const removeSymbols = (string) => {
  const REGEX = /[^A-Za-z0-9\s]/g;
  return string.replaceAll(REGEX, ''); //replace not working cuz of Node versioning, attempt after an update to v15
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
function readOneFullObject(data) {
  console.log(data[0])
  return data[0]
}

/**
 * @title Get a specific form's question response back.
 * @param {Number} key Which object you specifically want
 * @param {String} value Question which you want the response from 
 * @returns 
 */
function getSpecificDataValue(key, value) {
  return DATASET[key][value]
}



/* Get all entries with specific question
Currently console logs instead of returning it
*/
const getAllValuesFromQuestion = (question) => {
  let permutableData = Object.assign({}, DATASET);
  // console.log(permutableData)
  return Object.entries(permutableData).forEach(([key, value]) => console.log(`${key}, ${toLowerCase(value[question])}`))
}

//replace empty answers || Not just empty answers anymore
const fillEmptyResponse = (dataset) => {
  return dataset.map(
    objectWithFormData => {
      for (const key in objectWithFormData) {
        if (Object.hasOwnProperty.call(objectWithFormData, key)) {
          const element = objectWithFormData[key];
          if (typeof(element) === 'string') {
            console.log( objectWithFormData[key].toLowerCase() )//when returning I will only get kat and hond...
          }
        }
      }
    }
  )
}

/**
 * @title Remove empty values within or leave it alone
 * @param {String} string value that is of type string but empty 
 * @returns A filled response
 */
const replaceEmptyValue = (string) => {
  return string == '' ? string = "nvt" : string = string
}

console.log(replaceEmptyValue(getAllValuesFromQuestion('Wat is je oogkleur?')))

// console.log(fillEmptyResponse(SAMPLE))
// console.log(getSpecificDataValue(0,'Wat is je oogkleur?'))
// getAllValues('Kies zelf of je deze vraag beantwoord.')
// readOneFullObject(SAMPLE)
// console.log(getAllValuesFromQuestion('Wat is je favoriete soort huisdier?'))
// console.log(getAllValuesFromQuestion('Kies zelf of je deze vraag beantwoord.'))
// DeepDL translate color names to english names and convert to hex