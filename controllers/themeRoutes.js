const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Theme extends Model{}

module.exports=Theme