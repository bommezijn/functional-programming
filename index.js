/* 
TO DO
[] Lowercase all textual answers
[] replace undefined with 'nvt'
[] format dates to american date
[] Fix the code to be up to code standards (never change initial datasets)

[] Create website to show progress
formulate an answer e.g. person has COLOR eyes and wants to become a FUTUREJOB
COLOR eyes likes to eat / drink Dairy in the DIRECTION WIND.

*/
// Initializing hoisted variables
const DATASET = require('./tech-track-dataset.json')
const PROCESS = require('./process.json')

// Count amount entries
function countAllEntries() {
  return console.log(`Er zijn ${DATASET.length} entries`)
}

// Read whole object
function readOneFullObject(data) {
  console.log(data[0])
  return data[0]
}

// Get specific object's question
function getSpecificDataValue(key, value) {
  console.log(DATASET[key][value])
  return DATASET[key][value]
}

/* Get all entries with specific question
Currently console logs instead of returning it
*/
const getAllValues = (question) => {
  let permutableData = Object.assign({}, DATASET);
  // console.log(permutableData)
  return Object.entries(permutableData).forEach(([key, value]) => console.log(`${key}, ${toLowerCase(value[question])}`))
}

// Transform data to lowercase
const toLowerCase = data => {
  return data.toLowerCase()
}

const fixEmptyEntry = data => {
  // receive value, if value is empty replace it with nvt, otherwise keep it to its value
  return (data == null ? data = 'nvt' : data)
  // let permutableData = Object.assign({}, DATASET);
  // return Object.entries(permutableData).forEach(([key, value]) => value == null ? value = 'nvt' : value )
}


// getSpecificDataValue(31, "Kies zelf of je deze vraag beantwoord.")
// countAllEntries()
console.log(fixEmptyEntry(getAllValues('Kies zelf of je deze vraag beantwoord.')))
// getAllValues('Kies zelf of je deze vraag beantwoord.')