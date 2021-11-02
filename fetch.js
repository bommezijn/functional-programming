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
const getCurrentlyPlaying = () => {
  utilities.getData(URL)
    .then(data => {
      // console.log(Object.keys(data.results).length) //Get amount of movies currently playing
      console.log(data.results)
    })
}

getCurrentlyPlaying()