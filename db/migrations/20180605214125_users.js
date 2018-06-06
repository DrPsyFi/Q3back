const TABLE_NAME = 'users'

exports.up = function(knex, Promise) {

  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('fName').notNullable()
    table.string('lName').notNullable()
    table.string('userName').notNullable()
    table.string('password').notNullable()
    table.text('bio').defaultTo('I am kinda shy.')
    table.string('image').defaultTo('Coming Soon!')
  })

};



exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
