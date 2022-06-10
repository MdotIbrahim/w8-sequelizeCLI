const { DataTypes } = require("sequelize")
const { sequelize } = require("../db/connection");

const Tv = sequelize.define("Tv", {
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
        validate: { min: 1, max: 10 },
    }
})

module.exports = Tv;