const dbCOnfig = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbCOnfig.DB, dbCOnfig.USER, dbCOnfig.PASSWORD, {
    host: dbCOnfig.HOST,
    port: dbCOnfig.PORT,
    dialect: dbCOnfig.dialect,
    operatorsAliases: false,
    pool: {
        max:dbCOnfig.pool.max,
        min:dbCOnfig.pool.min,
        acquire:dbCOnfig.pool.acquire,
        idle:dbCOnfig.pool.idle,
    }
});

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.ref = require("./ref.model.js")(sequelize, Sequelize);

module.exports = db;