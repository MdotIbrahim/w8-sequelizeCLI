const { DataTypes } = require("sequelize") // contains data types SQL will accept
const { sequelize } = require("../db/connection");

const Movie = sequelize.define("Movie", { // schema...
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    actor: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    },
    rating: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 10 }, // can still be null as not specified
    }
})

module.exports = Movie;
