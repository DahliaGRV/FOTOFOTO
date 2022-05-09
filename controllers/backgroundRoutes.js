const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Background extends Model{}

module.exports=Background