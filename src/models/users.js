const db = require('../../db')
const axios = require('axios')
const bcrypt = require('bcrypt-as-promised')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function getOneByUserName(userName){
  return (
    db('users')
    .where({userName })
    .first()
  )
}

function getOneByUserId(id){
  return (
    db('users')
    .where({id})
    .first()
  )
}

function getLyricsByUserId(userId) {
  return (
    db('lyrics')
      .join("mylyrics", "mylyrics.lyrics_id", "=", "lyrics.id")
      .select('mylyrics.user_id', "lyrics.id", "songName")
      .where( {'mylyrics.user_id': userId})
  )

}

function search(artistName, songName) {
  return (
    db('lyrics')
      .select('id')
      .where( {'artistName': artistName, 'songName': songName})
      .then(data => {
        if (data.length > 0) {
          return data;
          ///find out if there are any comments
        }
        else {
          return axios({
            url: `https://orion.apiseeds.com/api/music/lyric/${artistName}/${songName}`,
            method: 'GET',
            params: {
              apikey: '6X3VgfeuvCuOVU39vkUVrK9jcwXidMpGzuvVmkCWYeiQntDK3jyeBSHB4mzeNEJx'
            }
          }).then(response => {
            return response.data.result;
          }).catch(err => {
            throw err.response.data.error
          })

        }
      })
  )
}


//////////////////////////////////////////////////////////////////////////////
// Create a user
//
// 1. Check to see if user already exists
//   a. if so, return a 400 with appropriate error message
// 2. Hash password
// 3. Insert record into database
// 4. strip hashed password away from object
// 5. "return/continue" promise
//////////////////////////////////////////////////////////////////////////////

function create(fName,lName, userName, password, bio , image){

  // check to see of user already exists
  return getOneByUserName(userName)
  .then(function(data){
    // if user already exists, return 400
    if(data) throw { status: 400, message:'User already exists'}

    // hash password
    return bcrypt.hash(password, 10)
  })
  .then(function(hashedPassword){

    // 3. Insert record into database
    return (
      db('users')
      .insert({userName,fName, lName, password: hashedPassword, bio , image})
      .returning('*')
    )
  })
  .then(function([data]){
    // 4. strip hashed password away from object
    delete data.password
    // 5. "return/continue" promise
    return data
  })
}

module.exports = {
  create,
  getOneByUserName,
  getOneByUserId,
  getLyricsByUserId,
  search,
}
