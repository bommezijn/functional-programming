/* 
TO DO
[] Lowercase all textual answers
[] replace undefined with 'nvt'
[] format dates to american date
[] Fix the code to be up to code standards (never change initial datasets)

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

const getAllValues = (question) => {
  let permutableData = Object.assign({}, DATASET);
  // console.log(permutableData)
  return Object.entries(permutableData).forEach(([key, value]) => console.log(`${key}, ${toLowerCase(value[question])}`))
}

const toLowerCase = data => {
  return data.toLowerCase()
}

const fixEmptyEntry = data => {
  
}

// getSpecificDataValue(31, "Kies zelf of je deze vraag beantwoord.")
countAllEntries()
console.log(getAllValues('Als je later een auto zou kopen, van welk merk zou deze dan zijn?'))