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
    user_id: 1,
    filename:
      "http://drive.google.com/file/d/11YwrUbaDSAtmJ2o5jvVcnqfGtaTZuCSC/view?usp=sharing",
  },
  {
    user_id: 1,
    filename:
      "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg",
  },
  {
    user_id: 1,
    filename:
      "https://daily.jstor.org/wp-content/uploads/2020/06/why_you_should_learn_the_names_of_trees_1050x700.jpg",
  },
  {
    user_id: 1,
    filename:
      "https://cloud.mysteryscience.com/image/fetch/f_auto,q_auto/https://www.dropbox.com/s/6mlhvbi7hba40it/Thumbnail-Mini-Lesson-Wow_Deep-Ocean_shutterstock_1044142510.jpg%3Fdl%3D1",
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
