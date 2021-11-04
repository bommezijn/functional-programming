/*
  DeepDL translate color names to english names and convert to hex
  formulate an answer e.g. person has COLOR eyes and wants to become a FUTUREJOB
  COLOR eyes likes to eat / drink Dairy in the DIRECTION WIND.
*/
const utilities = require('./modules/util')
// Initializing hoisted variables
const DATASET = require('./tech-track-dataset.json')
const SAMPLE = require('./sample.json')

/*
  Get all entries with specific question
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
const getSpecificDataValue = (key, value) => {
  return SAMPLE[key][value]
}

/*
  Function that works with promises to clean the data. It retrieves the data and unleashes a scrubbing chain.
  Promise chain is based on the chain @roberrrt-s wrote.
  Promise eventually returns a new person object with the properties eyeColour, diary and wind direction.
*/
const sanitizeData = () => {
  return new Promise((resolve, reject) => {
    const dataset = DATASET
    resolve(dataset)
  })
}

sanitizeData()
  .then((data) => {
    return data.map(object => {
      Object.keys(object).forEach(key => {
        object[key] = utilities.toLowerCase(object[key])
        object[key] = utilities.removeSymbols(object[key])
        object[key] = utilities.replaceEmptyValue(object[key])
      })
      return object
    })
  })
  .then((data) => {
    return data.map(object => {
      const person = {
        oogkleur: object['Wat is je oogkleur?'],
        zuivel: object['Wat is je favoriete zuivelproduct?'],
        wind: object['Wat is je favoriete windrichting?']
      }
      return person
    })
  })
  .then(sanitizedData => {
    console.log(sanitizedData)
    /*
    // Object in story format
    return sanitizedData.map(obj => {
      console.log(`persoon met oogkleur ${obj.oogkleur} vind zuivel product ${obj.zuivel} lekker in ${obj.wind} wind`)
    })
    */
  })
  .catch(error => {
    console.error(error)
  })
  .finally(() => {
    console.log('%c sanitization is finished.', 'color:yellow; font-weight:bold;')
  })
// console.log(utilities.replaceEmptyValue(getAllValuesFromQuestion('Wat is je oogkleur?')))

console.log(`American date "2021-02-09" to universal date: ${utilities.toLocalDateFormat(getSpecificDataValue(1, 'Wat is je favoriete datum?'))}`)
