/* 
  TO DO
  [] Lowercase all textual answers
  [] replace undefined with 'nvt'
  [] format dates to american date
  [] Fix the code to be up to code standards (never change initial datasets)

/*
  [] Create website to show progress
  formulate an answer e.g. person has COLOR eyes and wants to become a FUTUREJOB
  COLOR eyes likes to eat / drink Dairy in the DIRECTION WIND.
*/
// Initializing hoisted variables
const DATASET = require('./tech-track-dataset.json')
const PROCESS = require('./process.json')

// Count amount entries
function countAmountEntries() {
  return console.log(`Er zijn ${DATASET.length} entries`)
}

// Read whole object
function readOneFullObject(data) {
  console.log(data[0])
  return data[0]
}

// function printAll(data) {
//   return Object.entries(data).forEach(([key, value]) => console.log(``))
// }

// Get specific object's question
function getSpecificDataValue(key, value) {
  console.log(DATASET[key][value])
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
    test => {return Object.values(test)}
  )
}

// Transform data to lowercase
const toLowerCase = data => {
  return data.toLowerCase()
}

console.log(fillEmptyResponse(DATASET))
// getAllValues('Kies zelf of je deze vraag beantwoord.')
// readOneFullObject(DATASET)
