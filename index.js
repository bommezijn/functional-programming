/* 
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
  let permutableData = Object.assign({}, DATASET);
  // console.log(permutableData)
  return Object.entries(permutableData).forEach(([key, value]) => console.log(`${key}, ${utilities.toLowerCase(value[question])}`))
}


console.log(utilities.replaceEmptyValue(getAllValuesFromQuestion('Wat is je oogkleur?')))

// console.log(fillEmptyResponse(SAMPLE))
// console.log(getSpecificDataValue(0,'Wat is je oogkleur?'))
// getAllValues('Kies zelf of je deze vraag beantwoord.')
// readOneFullObject(SAMPLE)
// console.log(getAllValuesFromQuestion('Wat is je favoriete soort huisdier?'))
// console.log(getAllValuesFromQuestion('Kies zelf of je deze vraag beantwoord.'))
// DeepDL translate color names to english names and convert to hex