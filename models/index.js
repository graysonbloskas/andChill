//imports models
const User = require('./User');
const Preference = require('./Preference');
const UserPreference = require('./UserPreference');

User.hasOne(Preference, {
    foreignKey: user_id,
});

Preference.belongsToMany(User, {
    through: UserPreference,
    foreignKey: user_id,
});

module.exports = {
    User,
    Preference,
    UserPreference,
  };