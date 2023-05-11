const Sequelize = require('sequelize');
require('dotenv').config();
const mysql2 = require('mysql2');
let sequelize;
// will let it be readable with JAWS in heroku
// if (process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        dialectModule: mysql2,
    }
);
// }
try {
    sequelize.sync();
    sequelize.authenticate();
}
catch (e) {
    console.log("ERROR HERE:", e)
}
module.exports = sequelize;