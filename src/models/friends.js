const db = require('../../db')
const bcrypt = require('bcrypt-as-promised')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
//
// function getOneByUserName(username){
//   return (
//     db('users')
//     .where({ username })
//     .first()
//   )
// }
//

// //////////////////////////////////////////////////////////////////////////////
// // Create a user
// //
// // 1. Check to see if user already exists
// //   a. if so, return a 400 with appropriate error message
// // 2. Hash password
// // 3. Insert record into database
// // 4. strip hashed password away from object
// // 5. "return/continue" promise
// //////////////////////////////////////////////////////////////////////////////

// function deleteRecipe(id) {
//
//   return (
//     db('notes')
//     .delete()
//     .where({recipes_id: id})
//   ).then(function(){
//     return db("recipes")
//     .delete()
//     .where({id})
//     .returning('*')
//   })
//   .then(function([data]){
//     console.log(data)
//     return data
//   })
//   }
//
// module.exports = {
//   getOneByUserName,

// }
