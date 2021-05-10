const sequelize = require('../config/connection');
const seedUser = require('./users');
const seedMovies = require('./movies');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedMovies();

    process.exit(0);
};

seedAll();