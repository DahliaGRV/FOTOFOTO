const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Image extends Model {}

Image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      refrerences: {
        model:'user',
        key:'id',
      } 
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "image",
  }
);
module.exports = Image;
