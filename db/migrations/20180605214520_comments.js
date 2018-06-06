const TABLE_NAME = 'comments'

exports.up = function(knex, Promise) {

  return knex.schema.createTable(TABLE_NAME, function(table){
    table.increments()
    table.integer('lyric_id').references('lyrics.id')
    table.integer('user_id').references('users.id')
    table.text('comment').notNullable()
    table.integer('likes').defaultTo(0)
    table.timestamps(true, true)
  })

};



exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
