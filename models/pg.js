const Sequelize = require('sequelize')
const sequelize = new Sequelize('mvc', 'postgres', '2108', {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Movie = sequelize.define('movies', {
    ID: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        primaryKey: true
    },
    Title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    DateTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Genre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    }
}, {timestamps: false})

module.exports.movie = Movie