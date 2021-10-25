/* 
TODO
[ ]
[ ]
[ ]
*/

// Initializing hoisted variables
const DATASET = require('./tech-track-dataset.json')

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

const toLowerCase = data => {
  return data.toLowerCase()
}

const getAllValues = (question) => {
  // return DATASET[question]
  // const map = new Map(Object.entries(DATASET));
  // console.log(map)
  // return DATASET.entries(question)
  return Object.entries(DATASET).forEach(([key, value]) => console.log(`${key}, ${toLowerCase(value[question])}`))
}

// getSpecificDataValue(31, "Kies zelf of je deze vraag beantwoord.")
countAllEntries()
console.log(getAllValues('Wat is je favoriete soort huisdier?'))