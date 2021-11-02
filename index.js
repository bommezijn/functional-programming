/*
  DeepDL translate color names to english names and convert to hex
  formulate an answer e.g. person has COLOR eyes and wants to become a FUTUREJOB
  COLOR eyes likes to eat / drink Dairy in the DIRECTION WIND.
*/
const utilities = require('./modules/util')
// Initializing hoisted variables
const DATASET = require('./tech-track-dataset.json')
const SAMPLE = require('./sample.json')

/* Get all entries with specific question
Currently console logs instead of returning it
*/
const getAllValuesFromQuestion = (question) => {
  const permutableData = Object.assign({}, DATASET)
  return Object.entries(permutableData).forEach(([key, value]) => console.log(`${key}, ${utilities.toLowerCase(value[question])}`))
}

/**
 * @title Get a specific form's question response back.
 * @param {Number} key Which object you specifically want
 * @param {String} value Question which you want the response from
 * @returns
 */
function getSpecificDataValue (key, value) {
  return DATASET[key][value]
}

// console.log(utilities.replaceEmptyValue(getAllValuesFromQuestion('Wat is je oogkleur?')))

