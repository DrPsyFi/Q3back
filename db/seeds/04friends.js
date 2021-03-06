const TABLE_NAME = 'friends'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {
          "requestorId" : 1 ,
          "user_id" : 4,
          "accepted" : true,
        } , {
          "requestorId" : 2 ,
          "user_id" : 3,
          "accepted" : true,
        } , {
          "requestorId" : 1 ,
          "user_id" : 5,
          "accepted" : true,
        } , {
          "requestorId" : 5 ,
          "user_id" : 4,
          "accepted" : true,
        }
    ])
  })
};
