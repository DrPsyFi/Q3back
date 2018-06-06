const TABLE_NAME = 'friends'

exports.up = function(knex, Promise) {

  return knex.schema.createTable(TABLE_NAME, function(table){
    table.integer('requestor_id').references('users.id')
    table.integer('user_id').references('users.id')
    table.boolean('status').defaultTo(false)
    table.timestamps(true, true)
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists(TABLE_NAME)
};
