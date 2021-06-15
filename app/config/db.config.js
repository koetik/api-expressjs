module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "5ur4b4y4",
    DB: "db_jadwal",
    PORT: "8889",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}