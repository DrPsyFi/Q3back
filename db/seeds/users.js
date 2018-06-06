const TABLE_NAME = 'users'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
          {
            "id": 1,
            "first_name": "Sunil",
            "last_name": "Kakar",
            "userName": "Sunshine",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "img_url": 'https://www.fillmurray.com/284/196'
          }, {
            "id": 2,
            "first_name": "Scott",
            "last_name": "Hurlow",
            "userName": "ScottyBoy",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "img_url": 'https://www.fillmurray.com/284/196'
          }, {
            "id": 3,
            "first_name": "Roger",
            "last_name": "Schmidt",
            "userName": "RogerDoger",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "img_url": 'https://www.fillmurray.com/284/196'
          }, {
            "id": 4,
            "first_name": "Carrie",
            "last_name": "Havranek",
            "userName": "CarrieBerry",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "img_url": 'https://www.fillmurray.com/284/196'
          } {
            "id": 5,
            "first_name": "Meera",
            "last_name": "Kakar",
            "userName": "MeerKat",
            password: "something",
            "bio": "Sweet little baby, I don't know where you been. Soul of a woman was created below, yeah. Sing along, girl.. Wanted a woman, never bargained for you. You don't know what you're missing now.. Every day I work so hard, bringin' home my hard-earned pay. Been dazed and confused . Gonna love you, baby, here I come again. I had a dream.. Lotsa people talkin', . Trad the planet when heaven sent me. Down in the valley blow,. If we could just join hands. Oh throw down your plow and hoe. Every day I work so hard, bringin' home my hard-earned pay",
            "img_url": 'https://www.fillmurray.com/284/196'
          }
        ]);
    });
};
