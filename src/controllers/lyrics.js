const lyricsModel = require('../models/lyrics')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
//get all users lyrics

//get this lyric from db

// get this lyric from api

//delete this lyric from my list

function getUsersLyrics(req, res, next) {
  if(!req.params.userId) {
     return next({ status: 400, message: 'Bad userId'})
  }
  lyricsModel.getLyrics(req.params.userId)
  .then(function(data){
    console.log(data)
    return res.status(201).send({ data })
  })
  .catch(next)
}


// //////////////////////////////////////////////////////////////////////////////
// // Quality of Life functions
// //////////////////////////////////////////////////////////////////////////////

module.exports = {
 getUsersLyrics,
}
