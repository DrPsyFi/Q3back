const TABLE_NAME = 'mylyrics'

exports.up = function(knex, Promise) {
  return knex.schema.createTable(TABLE_NAME, function(table){
    table.integer('user_id').references('users.id')
    table.integer('lyrics_id').references('lyrics.id')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)

};
