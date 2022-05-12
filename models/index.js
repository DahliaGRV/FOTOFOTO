const User = require("./User");
const Image = require("./Image");
// const Background = require("./Background");


// Image.belongsTo(User, {foreignKey: 'id'});
User.hasMany(Image, {foreignKey: 'user_id'})
Image.belongsTo(User, {foreignKey: 'user_id'})

module.exports = {
  User,
  Image,
  // Background,
};
