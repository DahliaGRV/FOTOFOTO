const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Font extends Model{}

module.exports=Font