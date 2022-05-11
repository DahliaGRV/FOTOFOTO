const sequelize = require("../config/connection");
const { User, Image } = require("../models");

const users = [
  {
    username: "Lucasss",
    password: "password",
    email: "test.test@test",
  },
];
const images = [
  {
    filename:
      "http://drive.google.com/file/d/11YwrUbaDSAtmJ2o5jvVcnqfGtaTZuCSC/view?usp=sharing",
  },
];
const addUser = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(users, {
      individualHooks: true,
    });
    await Image.bulkCreate(images);
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

addUser();
