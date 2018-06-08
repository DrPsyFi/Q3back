// const db = require('../../db')
// const bcrypt = require('bcrypt-as-promised')
//
// //////////////////////////////////////////////////////////////////////////////
// // Basic CRUD Methods
// //////////////////////////////////////////////////////////////////////////////
//
// function getOneByUserName(username){
//   return (
//     db('users')
//     .where({ username })
//     .first()
//   )
// }
//
// function getAllRecipe(userid){
//   console.log('model', userid)
//   return (
//     db('recipes')
//     .where({ users_id: userid })
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
//
// function create(username, password){
//
//   // check to see of user already exists
//   return getOneByUserName(username)
//   .then(function(data){
//     // if user already exists, return 400
//     if(data) throw { status: 400, message:'User already exists'}
//
//     // hash password
//     return bcrypt.hash(password, 10)
//   })
//   .then(function(hashedPassword){
//
//     // 3. Insert record into database
//     return (
//       db('user')
//       .insert({ username, password: hashedPassword })
//       .returning('*')
//     )
//   })
//   .then(function([data]){
//     // 4. strip hashed password away from object
//     delete data.password
//     // 5. "return/continue" promise
//     return data
//   })
// }
//

// function createNotes(users_id, recipes_id, notes, rating) {
//   return (
//     db('notes')
//     .insert({users_id, recipes_id, notes, rating})
//     .returning('*')
//   )
//   .then(function([data]){
//     console.log(data)
//     return data
//   })
//   }
//

// module.exports = {

//   create,

// }
