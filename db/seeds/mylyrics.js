const TABLE_NAME = 'mylyrics'
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {user_id: 1, lyrics_id: 1 },
        {user_id: 2, lyrics_id: 1 },
        {user_id: 3, lyrics_id: 1 },
        {user_id: 4, lyrics_id: 2 },
        {user_id: 2, lyrics_id: 2 },
        {user_id: 5, lyrics_id: 2 },
        {user_id: 1, lyrics_id: 3 },
        {user_id: 5, lyrics_id: 3 },
        {user_id: 2, lyrics_id: 3 },
        {user_id: 3, lyrics_id: 4 },
        {user_id: 2, lyrics_id: 4 },
        {user_id: 5, lyrics_id: 4 },
        {user_id: 2, lyrics_id: 5 },
        {user_id: 5, lyrics_id: 5 },
        {user_id: 1, lyrics_id: 5 },
        {user_id: 2, lyrics_id: 6 },
        {user_id: 3, lyrics_id: 6 },
        {user_id: 5, lyrics_id: 6 },
        {user_id: 1, lyrics_id: 7 },
        {user_id: 2, lyrics_id: 7 },
      ]);
    });
};
