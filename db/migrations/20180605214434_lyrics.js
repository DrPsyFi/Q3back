const TABLE_NAME = 'lyrics'

exports.up = function(knex, Promise) {

  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.string('songName').notNullable()
    table.string('artistName').notNullable()
    table.text('lyrics').notNullable()
    table.integer('user_id').references('users.id')
    table.string('artistImg').defaultTo('Coming Soon!')
  })

};



exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
