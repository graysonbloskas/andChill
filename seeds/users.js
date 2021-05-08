const { User } = require('../models');

const userdata = [
    {
      email: 'Timmy@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Timmy',
      age: 33,
      gender_id: 2,
      gender_pref: 1,
      bio: 'I like long walks on the beach.',
      genre: "6",
      fav_movie: 'Star Wars, The Dark Knight, 1917',
      movie_quote: 'Do or do not, there is no try'
    },
    {
      email: 'Mike@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Mike',
      age: 22,
      gender_id: 2,
      gender_pref: 1,
      bio: 'Marvel is life.',
      genre: "6",
      fav_movie: 'Black Panther, Avengers, Captain America',
      movie_quote: 'I still believe in heroes.'
    },
    {
      email: 'Adam@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Adam',
      age: 27,
      gender_id: 2,
      gender_pref: 1,
      bio: 'DC for life',
      genre: "0",
      fav_movie: 'The Dark Knight, Suicide Squad, Justice League',
      movie_quote: 'I still believe in heroes.'
    },
    {
      email: 'Steve@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Steve',
      age: 24,
      gender_id: 2,
      gender_pref: 1,
      bio: 'I have a pet gecko.',
      genre: "0",
      fav_movie: 'Secret Life of Walter Mitty, Limitless, Fast and Furious',
      movie_quote: 'If youre not first youre last'
    },
    {
      email: 'pat@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Patrick',
      age: 30,
      gender_id: 2,
      gender_pref: 1,
      bio: 'I fish and enjoy being on the water',
      genre: "0",
      fav_movie: '1917, Forrest Gump, Platoon',
      movie_quote: 'What’s normal anyways?'
    },
    {
      email: 'tina@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Tina',
      age: 33,
      gender_id: 1,
      gender_pref: 2,
      bio: 'I like long walks on the beach.',
      genre: "0",
      fav_movie: '10 Things I Hate About You, The Notebook, Clueless',
      movie_quote: 'If you’re a bird, I’m a bird.'
    },
    {
      email: 'Becky@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Becky',
      age: 31,
      gender_id: 1,
      gender_pref: 2,
      bio: 'Im a registered nurse who has 3 kids',
      genre: "0",
      fav_movie: '101 Dalmatians, Cinderella, Mulan',
      movie_quote: 'No Matter How The Wind Howls, The Mountain Cannot Bow To It.'
    },
    {
      email: 'Kelly@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Kelly',
      age: 28,
      gender_id: 1,
      gender_pref: 2,
      bio: 'Looking for my soulmate, have one son that takes most of my time',
      genre: "0",
      fav_movie: 'A Time to Kill, The Lincoln Lawyer, The Breakfast',
      movie_quote: 'Yes they deserve to die and I hope they burn in hell!'
    },
    {
      email: 'Julia@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Julia',
      age: 25,
      gender_id: 1,
      gender_pref: 2,
      bio: 'Nurse by day, Salsa dancer by night',
      genre: "0",
      fav_movie: 'Star Wars: The Last Jedi, Forrest Gump, Finding Nemo',
      movie_quote: 'Just keep swimming'
    },
    {
      email: 'Shelby@mail.com',
      password: '$2b$10$P6w98ZLmBz/xag/IOmKEo.312kN/QPgo8jd5XcjsKhOwCtuYdaMj2',
      first_name: 'Shelby',
      age: 27,
      gender_id: 1,
      gender_pref: 2,
      bio: 'Teacher and Greys Anatomy superfan',
      genre: "0",
      fav_movie: 'Star Wars, The Dark Knight, 1917',
      movie_quote: 'Frankly, my dear, I dont give a damn.'
    },
  ];
  
  const seedUsers = () => User.bulkCreate(userdata);
  
  module.exports = seedUsers;