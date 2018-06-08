const db = require('../../db')

// //////////////////////////////////////////////////////////////////////////////
// // Basic CRUD Methods
// //////////////////////////////////////////////////////////////////////////////

function getLyrics(userId) {
  return (
    db('lyrics')
      .where( {user_id: userId})
  )
}
module.exports = {
  getLyrics
}
