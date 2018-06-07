const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
          {
            "id": 1,
            "fName": "Sunil",
            "lName": "Kakar",
            "userName": "Sunshine",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "image": 'https://www.fillmurray.com/284/196'
          }, {
            "id": 2,
            "fName": "Scott",
            "lName": "Hurlow",
            "userName": "ScottyBoy",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "image": 'https://www.fillmurray.com/284/196'
          }, {
            "id": 3,
            "fName": "Roger",
            "lName": "Schmidt",
            "userName": "RogerDoger",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "image": 'https://www.fillmurray.com/284/196'
          }, {
            "id": 4,
            "fName": "Carrie",
            "lName": "Havranek",
            "userName": "CarrieBerry",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "image": 'https://www.fillmurray.com/284/196'
          }, {
            "id": 5,
            "fName": "Meera",
            "lName": "Kakar",
            "userName": "MeerKat",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "image": 'https://www.fillmurray.com/284/196'
          }
        ])
        .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
  })
};
