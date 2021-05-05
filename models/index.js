//imports models
const User = require('./User');
const Preference = require('./Preference');
const Match = require('./Match');
const Movies = require('./Movies');

User.hasOne(Preference, {
    foreignKey: user_id,
});
Preference.belongsTo(User, {
    foreignKey: user_id,
});

User.hasMany(Match, {
    foreignKey: user_id,
});
Match.belongsTo(User, {
    foreignKey: user_id,
});

// Need to add hasMany function for Movies

Match.belongs

module.exports = {
    User,
    Preference,
    Match,
    Movies,
  };