//create this users
const userModel = require('../models/users')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

function create(req, res, next){


  if(!req.body.fName || !req.body.lName)
    return next({status: 400, message: 'You need to add a first and last name.' })

  if(!req.body.userName){
   return next({ status: 400, message: 'Bad username'})
  }

  if(!req.body.password){
   return next({ status: 400, message: 'Bad password'})
  }

  userModel.create(req.body.fName, req.body.lName, req.body.userName, req.body.password, req.body.bio, req.body.image)
    .then(function(data){
    return res.status(201).send({ data })
  })
  .catch(next)
  }

//////// Will PROCEED AFTER AUTHENTICATION
function getUserById(req, res, next) {

  console.log(req.body, "GET USER");

  userModel.getOneByUserId(req.params.id)
  .then(function(data){
   return res.status(200).send( { data })
  })
  .catch(next)
  }

function getLyricsByUserId(req, res, next) {

    userModel.getLyricsByUserId(req.params.id)
    .then(function(data){
     return res.status(200).send( { data })
    })
    .catch(next)
  }

function search(req, res, next) {

      userModel.search(req.params.artistName,req.params.songName )
      .then(function(data){

        console.log(data);
       return res.status(200).send( { data })
      })
      .catch(next)
    }





//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

module.exports = {
 create,
 getUserById,
 getLyricsByUserId,
 search,

}
