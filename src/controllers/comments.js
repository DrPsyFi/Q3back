// get all comments associated with this lyrics


// delete this comment

// update this comments


//create this comments
const commentsModel = require('../models/comments')
//
// //////////////////////////////////////////////////////////////////////////////
// // Basic CRUD Methods
// //////////////////////////////////////////////////////////////////////////////

function getCommentsByLyricsId(req, res, next){

  console.log('params', req.params, req.params.lyricsId);
 if(!req.params.lyricsId){
   return next({ status: 400, message: 'Bad Lyric Id'})
 }

 const lyricsId = parseInt(req.params.lyricsId);

 commentsModel.getCommentsByLyricsId(lyricsId)
 .then(function(data){
   return res.status(201).send({ data })
 })
 .catch(next)
}

// //////////////////////////////////////////////////////////////////////////////
// // Quality of Life functions
// //////////////////////////////////////////////////////////////////////////////

module.exports = {
 getCommentsByLyricsId


}
