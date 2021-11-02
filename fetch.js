require('dotenv').config()
const utilities = require('./modules/util')

utilities.getData(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.API_KEY}`)
  .then(
    data => console.log(data)
  )
