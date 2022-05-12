const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    // add properites here, ex:
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    background: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    font: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {
      beforeCreate: async (userdata) => {
        userdata.password = await bcrypt.hash(userdata.password, 5);
        return userdata;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
