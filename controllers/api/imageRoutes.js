const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Image extends Model{}

module.exports=Image