const sequelize = require("../config/connection");
const { User, Image } = require("../models");

const users = [
  {
    username: "Lucasss",
    password: "password",
    email: "test.test@test",
  },
];
const addUser = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(users, {
      individualHooks: true,
    });
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

addUser();
