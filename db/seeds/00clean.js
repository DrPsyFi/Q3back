exports.seed = function(knex, Promise) {

  const tablesToClean = ['friends', 'comments', 'lyrics', 'users']

  return tablesToClean.reduce((acc, ele) => acc.then(() => knex(ele).del()), Promise.resolve())

};
