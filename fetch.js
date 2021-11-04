/* 
  Retrieve needed variables for fetching data from an API
*/
require('dotenv').config()
const utilities = require('./modules/util')
const BASE_URL = `https://api.themoviedb.org/3`
const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`

/* Execute fetch and log fight club in the console but don't talk about it */
// utilities.getData(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`)
//   .then(
//     data => console.log(data)
//   )

/*  */
// const getCurrentlyPlaying = async () => {
//   const data = await utilities.getData(URL)
//   // console.log(data.results)
//   return await data.results
//     .then(data => {
//       // console.log(Object.keys(data.results).length) //Get amount of movies currently playing
//       // console.log(data.results)
//       return data.results
//     })
// }

/**
 * @title get currently playing movies
 * @returns data object of current listing of movies8
 */
const getCurrentlyPlaying = async () => {
  const data = await utilities.getData(URL)
  return data.results
}

/**
 * @title msg function that 
 * @returns a message in the console with the data
 */
const msg = async () => {
  const msg = await getCurrentlyPlaying()
  console.log(msg)
}

msg()