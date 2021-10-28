/* 
  formulate an answer e.g. person has COLOR eyes and wants to become a FUTUREJOB
  COLOR eyes likes to eat / drink Dairy in the DIRECTION WIND.

  TO DO
  [] Lowercase all textual answers
  [] replace undefined with 'nvt'
  [] format dates to american date
  [] Fix the code to be up to code standards (never change initial datasets)
*/

// Initializing hoisted variables
const DATASET = require('./tech-track-dataset.json')
const SAMPLE = require('./sample.json')

/**
 * @title Count the amount of entries
 * @param {JSON} dataset JSON format file
 * @returns {string} string amount of entries
 */
function countAmountEntries(dataset) {
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

// function printAll(data) {
//   return Object.entries(data).forEach(([key, value]) => console.log(``))
// }

// Get specific object's question
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


//replace empty answers
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

// // Transform data to lowercase
// const toLowerCase = data => {
//   return data.toLowerCase()
// }

const removeSymbols = (string) => {
  const REGEX = /.?!:/;
  return string.replaceAll(regex, '')
}

console.log(fillEmptyResponse(SAMPLE))
// console.log(getSpecificDataValue(0,'Wat is je oogkleur?'))
// getAllValues('Kies zelf of je deze vraag beantwoord.')
// readOneFullObject(DATASET)

