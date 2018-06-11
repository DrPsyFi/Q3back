const db = require('../../db')

// //////////////////////////////////////////////////////////////////////////////
// // Basic CRUD Methods
// //////////////////////////////////////////////////////////////////////////////

//select mylyrics.user_id, lyrics.id, "songName" from mylyrics inner join lyrics on mylyrics.lyrics_id = lyrics.id where mylyrics.user_id = 2;;
//
// function getLyricsByUserId(userId) {
//   return (
//     db('lyrics')
//       .join("mylyrics", "mylyrics.lyrics_id", "=", "lyrics.id")
//       .select('mylyrics.user_id', "lyrics.id", "songName")
//       .where( {'mylyrics.user_id': userId})
//   )
//
// }
// module.exports = {
//   getLyricsByUserId
// }
